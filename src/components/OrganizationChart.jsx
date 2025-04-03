import React, { useState, useEffect, useRef, useCallback } from "react";
import Draggable from "react-draggable";
import ChildrenConnectorGroup from "./ChildrenConnectorGroup";
import { expandUntilUser, centerNodeInView } from "./utils";
import "../styles/OrganizationChart.css";

const OrganizationChart = ({ data }) => {
    const [tree, setTree] = useState([]);
    const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
    const currentUserId = data.currentUser;

    const dragStartRef = useRef(null);
    const lastSelectedRef = useRef(null);

    // Step 1: Expand only necessary nodes
    useEffect(() => {
        const expandedTree = expandUntilUser(data.rootUsers, currentUserId);
        setTree(expandedTree);
    }, [data, currentUserId]);

    // Step 2: After expansion, center on current user
    useEffect(() => {
        const highlighted = document.querySelector(".highlight-user");
        if (highlighted) centerNodeInView(highlighted, setDragPosition);
    }, [tree]);

    const toggleExpand = useCallback((userId) => {
        const toggleNode = (nodes) =>
            nodes.map((node) => ({
                ...node,
                expanded: node.id === userId ? !node.expanded : node.expanded,
                children: node.children ? toggleNode(node.children) : [],
            }));

        setTree(toggleNode(tree));
    }, [tree]);

    const handleMouseDown = (e) => {
        dragStartRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = (e, user) => {
        const dx = Math.abs(e.clientX - dragStartRef.current.x);
        const dy = Math.abs(e.clientY - dragStartRef.current.y);

        if (dx < 5 && dy < 5) {
            toggleExpand(user.id);
            lastSelectedRef.current = e.currentTarget;
            // Center the node right after toggle
            setTimeout(() => {
                centerNodeInView(e.currentTarget, setDragPosition);
            }, 100); // slight delay for DOM reflow
        }
    };

    const renderChart = (users) => (
        <div className="org-level">
            {users.map((user) => {
                const hasChildren = user.expanded && user.children?.length > 0;
                return (
                    <div key={user.id} className="org-node">
                        <div
                            className={`organization_chart_node ${user.id === currentUserId ? "highlight-user" : ""}`}
                            onMouseDown={handleMouseDown}
                            onMouseUp={(e) => handleMouseUp(e, user)}
                        >
                            <div className="node_avatar">{user.person.avatar}</div>
                            <div className="node_name">{user.person.name}</div>
                            <div className="node_title" title={user.person.title}>
                                {user.person.title}
                            </div>
                            <div className="node_reports">{user.person.totalReports} Reports</div>
                        </div>

                        {hasChildren && (
                            <>
                                <div className="connector-down" />
                                <ChildrenConnectorGroup childrenData={user.children} renderChart={renderChart} />
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );

    return (
        <div className="scroll-container">
            <Draggable position={dragPosition} onStop={(e, data) => setDragPosition({ x: data.x, y: data.y })}>
                <div className="org-tree">{renderChart(tree)}</div>
            </Draggable>
        </div>
    );
};

export default OrganizationChart;

