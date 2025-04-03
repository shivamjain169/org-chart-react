import React, { useEffect, useRef, useState } from "react";

const ChildrenConnectorGroup = ({ childrenData, renderChart }) => {
    const rowRef = useRef(null);
    const [style, setStyle] = useState({ left: "0px", width: "0px" });
    const [hasMultipleChildren, setHasMultipleChildren] = useState(false);

    useEffect(() => {
        const row = rowRef.current;
        if (!row) return;

        const calculate = () => {
            const children = row.querySelectorAll(":scope > .child-with-connector");
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

        const observer = new ResizeObserver(() => requestAnimationFrame(calculate));
        observer.observe(row);
        return () => observer.disconnect();
    }, [childrenData]);

    return (
        <div className="children-wrapper">
            <div className="connector-container">
                {hasMultipleChildren && <div className="connector-horizontal" style={style} />}
            </div>
            <div className="children-row" ref={rowRef}>
                {childrenData.map((child) => (
                    <div key={child.id} className="child-with-connector">
                        <div className="connector-up" />
                        {renderChart([child])}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChildrenConnectorGroup;
