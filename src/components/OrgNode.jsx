import React, { useState } from "react";
import styles from "../styles/OrganizationChart.module.css";

// Utility to check if string is image URL or base64
const isImageSource = (src = "") => {
    return (
        typeof src === "string" &&
        (src.startsWith("http") ||
            src.startsWith("/") ||
            src.startsWith("data:image") ||
            /^iVBORw0KG/.test(src)) // base64 pngs often start with this
    );
};

// Fallback avatar component
const FallbackAvatar = ({ name }) => {
    const initials = name
        ?.split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    return <div className={styles.nodeAvatar}>{initials || "👤"}</div>;
};

// Component to render a single organization node
const OrgNode = ({ user, isHighlighted, renderNode, onMouseDown, onMouseUp }) => {
    const [imageError, setImageError] = useState(false);
    const avatar = user?.person?.avatar;
    const name = user?.person?.name;
    const title = user?.person?.title;
    const totalReports = user?.person?.totalReports;

    // Allow custom rendering if provided
    if (renderNode) return renderNode(user);

    const showImage = isImageSource(avatar) && !imageError;

    return (
        <div
            className={`${styles.organizationChartNode} ${isHighlighted ? styles.highlightUser : ""
                }`}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
        >
            {showImage ? (
                <img
                    src={
                        avatar.startsWith("data:image") || avatar.startsWith("http") || avatar.startsWith("/")
                            ? avatar
                            : `data:image/png;base64,${avatar}`
                    }
                    alt={name}
                    className={styles.nodeAvatar}
                    onError={() => setImageError(true)}
                />
            ) : (
                <FallbackAvatar name={name} />
            )}

            <div className={styles.nodeName}>{name}</div>
            <div className={styles.nodeTitle} title={title}>
                {title}
            </div>
            <div className={styles.nodeReports}>{totalReports} Reports</div>
        </div>
    );
};

export default OrgNode;
