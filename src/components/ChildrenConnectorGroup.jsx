import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/OrganizationChart.module.css";

// Renders the horizontal line + children nodes below a parent node
const ChildrenConnectorGroup = ({ childrenData, renderChart }) => {
    const rowRef = useRef(null);
    const [style, setStyle] = useState({ left: "0px", width: "0px" });
    const [hasMultipleChildren, setHasMultipleChildren] = useState(false);

    useEffect(() => {
        const row = rowRef.current;
        if (!row) return;

        // Calculates and updates the position and width of horizontal connector
        const calculate = () => {
            const children = row.querySelectorAll(`:scope > .${styles.childWithConnector}`);
            if (children.length <= 1) {
                setHasMultipleChildren(false);
                return;
            }

            const first = children[0].getBoundingClientRect();
            const last = children[children.length - 1].getBoundingClientRect();
            const container = row.getBoundingClientRect();

            const leftCenter = first.left + first.width / 2;
            const rightCenter = last.left + last.width / 2;
            const width = rightCenter - leftCenter;
            const left = leftCenter - container.left;

            setStyle({ left: `${left}px`, width: `${width}px` });
            setHasMultipleChildren(true);
        };

        // Watch for resize to recalculate connectors
        const observer = new ResizeObserver(() => requestAnimationFrame(calculate));
        observer.observe(row);
        return () => observer.disconnect();
    }, [childrenData]);

    return (
        <div className={styles.childrenWrapper}>
            <div className={styles.connectorContainer}>
                {hasMultipleChildren && (
                    <div className={styles.connectorHorizontal} style={style} />
                )}
            </div>
            <div className={styles.childrenRow} ref={rowRef}>
                {childrenData.map((child) => (
                    <div key={child.id} className={styles.childWithConnector}>
                        <div className={styles.connectorUp} />
                        {renderChart([child])}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChildrenConnectorGroup;
