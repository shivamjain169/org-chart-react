export const expandUntilUser = (users, currentUserId) => {
    return users.map((user) => {
        const cloned = { ...user, expanded: false };

        if (user.id === currentUserId) {
            cloned.expanded = true;
        }

        if (user.children?.length) {
            cloned.children = expandUntilUser(user.children, currentUserId);
            if (cloned.children.some((child) => child.expanded)) {
                cloned.expanded = true;
            }
        }

        return cloned;
    });
};

export const centerNodeInView = (nodeElement, setPosition, orgTreeRef) => {
    const container = document.querySelector(".scroll-container");
    if (!nodeElement || !container || !orgTreeRef?.current) return;

    const containerRect = container.getBoundingClientRect();
    const nodeRect = nodeElement.getBoundingClientRect();
    const treeRect = orgTreeRef.current.getBoundingClientRect();

    // Distance from node to tree origin
    const relativeX = nodeRect.left - treeRect.left + nodeRect.width / 2;
    const relativeY = nodeRect.top - treeRect.top + nodeRect.height / 2;

    const centerX = container.clientWidth / 2;
    const centerY = container.clientHeight / 2;

    // Position to move .org-tree such that node comes to center
    const targetX = centerX - relativeX;
    const targetY = centerY - relativeY;

    setPosition({ x: targetX, y: targetY });
};
