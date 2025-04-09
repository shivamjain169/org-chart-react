import React, { useEffect, useRef, useState, useCallback } from "react";
import Draggable from "react-draggable";
import ChildrenConnectorGroup from "./ChildrenConnectorGroup";
import OrgNode from "./OrgNode";
import {
    expandUntilUser,
    centerNodeInView,
    getTotalEmployees,
    getCurrentUserName
} from "../utils/treeUtils";
import styles from "../styles/OrganizationChart.module.css";

// Main OrganizationChart component
const OrganizationChart = ({
    data,
    currentUserId = null,
    onNodeClick,
    renderNode,
    draggable = true,
    title = "Organization Chart",
    showHeader = false,
    className = "",
    styleOverrides = {},
    showRootDots = true
}) => {
    const [tree, setTree] = useState([]);
    const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
    const dragStartRef = useRef(null);
    const treeRef = useRef();

    // Expand nodes up to the current user initially
    useEffect(() => {
        if (!data?.rootUsers) return;
        setTree(expandUntilUser(data.rootUsers, currentUserId));
    }, [data, currentUserId]);

    // Auto-center the highlighted (current) user
    useEffect(() => {
        const highlighted = document.querySelector(`.${styles.highlightUser}`);
        if (highlighted) {
            setTimeout(() => centerNodeInView(highlighted, setDragPosition, treeRef), 50);
        }
    }, [tree]);

    // Toggle expand/collapse state of a node
    const toggleExpand = useCallback((userId) => {
        const toggleNode = (nodes) =>
            nodes.map((node) => ({
                ...node,
                expanded: node.id === userId ? !node.expanded : node.expanded,
                children: node.children ? toggleNode(node.children) : []
            }));
        setTree(toggleNode(tree));
    }, [tree]);

    // Used to track drag start position
    const handleMouseDown = (e) => {
        dragStartRef.current = { x: e.clientX, y: e.clientY };
    };

    // Toggle expand and recenters the clicked node
    const handleMouseUp = (e, user) => {
        const dx = Math.abs(e.clientX - dragStartRef.current.x);
        const dy = Math.abs(e.clientY - dragStartRef.current.y);
        if (dx < 5 && dy < 5) {
            onNodeClick?.(user);
            toggleExpand(user.id);
            setTimeout(() => centerNodeInView(e.currentTarget, setDragPosition, treeRef), 100);
        }
    };

    // Recursive function to render all levels of the org chart
    const renderChart = (users, depth = 0) => (
        <div className={styles.orgLevel}>
            {users.map((user) => {
                const hasChildren = user.expanded && user.children?.length > 0;

                const node = (
                    <OrgNode
                        key={user.id}
                        user={user}
                        isHighlighted={user.id === currentUserId}
                        renderNode={renderNode}
                        onMouseDown={handleMouseDown}
                        onMouseUp={(e) => handleMouseUp(e, user)}
                    />
                );

                const wrapped = (
                    <div key={user.id} className={styles.orgNode}>
                        {node}
                        {hasChildren && (
                            <>
                                <div className={styles.connectorDown} />
                                <ChildrenConnectorGroup
                                    childrenData={user.children}
                                    renderChart={(children) => renderChart(children, depth + 1)}
                                />
                            </>
                        )}
                    </div>
                );

                return depth === 0 ? (
                    <div key={user.id} className={styles.rootWrapper}>
                        {showRootDots && (
                            <>
                                <div className={styles.rootLogoCircle}>
                                    <div className={styles.dot} />
                                    <div className={styles.dot} />
                                    <div className={styles.dot} />
                                </div>
                                <div className={styles.connectorDownFromCircle} />
                            </>
                        )}
                        {wrapped}
                    </div>
                ) : wrapped;
            })}
        </div>
    );

    const orgChart = <div ref={treeRef}>{renderChart(tree)}</div>;
    const employeeCount = getTotalEmployees(data?.rootUsers || []);
    const currentUserName = getCurrentUserName(currentUserId, data?.rootUsers || []);

    return (
        <div
            className={`${styles.scrollContainer} ${className}`}
            style={styleOverrides.wrapper}
        >
            {/* Optional chart header */}
            {showHeader && (
                <header className={styles.headerContainer} style={styleOverrides.header}>
                    <div className={styles.headerTitle}>👥 {title}</div>
                    <div className={styles.headerInfo}>
                        Total Employees: {employeeCount} | Logged in as: <strong>{currentUserName}</strong>
                    </div>
                </header>
            )}

            {/* Render the org chart inside a draggable container if enabled */}
            <div className={styles.orgTree}>
                {draggable ? (
                    <Draggable
                        position={dragPosition}
                        onStop={(e, data) => setDragPosition({ x: data.x, y: data.y })}
                    >
                        <div>{orgChart}</div>
                    </Draggable>
                ) : (
                    orgChart
                )}
            </div>
        </div>
    );
};

export default OrganizationChart;
