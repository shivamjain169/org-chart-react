import React from "react";
import styles from "../styles/OrganizationChart.module.css";

// Component to render a single organization node
const OrgNode = ({ user, isHighlighted, renderNode, onMouseDown, onMouseUp }) => {
    // Allow custom rendering if a renderNode function is provided
    if (renderNode) return renderNode(user);

    return (
        <div
            className={`${styles.organizationChartNode} ${isHighlighted ? styles.highlightUser : ""}`}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
        >
            <div className={styles.nodeAvatar}>{user.person.avatar}</div>
            <div className={styles.nodeName}>{user.person.name}</div>
            <div className={styles.nodeTitle} title={user.person.title}>
                {user.person.title}
            </div>
            <div className={styles.nodeReports}>
                {user.person.totalReports} Reports
            </div>
        </div>
    );
};

export default OrgNode;
