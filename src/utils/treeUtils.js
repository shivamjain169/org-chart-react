/**
 * Recursively expands all parent nodes until it reaches the current user.
 * It ensures the chart is opened up to display the selected (logged-in) user.
 */
export const expandUntilUser = (users, currentUserId) => {
    return users.map((user) => {
        const cloned = { ...user, expanded: false };

        // If current node is the user, mark as expanded
        if (user.id === currentUserId) {
            cloned.expanded = true;
        }

        // If node has children, check recursively
        if (user.children?.length) {
            cloned.children = expandUntilUser(user.children, currentUserId);

            // If any child is expanded, expand this parent as well
            if (cloned.children.some((child) => child.expanded)) {
                cloned.expanded = true;
            }
        }

        return cloned;
    });
};

/**
 * Centers the given node element in the scrollable view.
 * Calculates relative position between node, draggable area, and scroll container.
 */
export const centerNodeInView = (nodeElement, setPosition) => {
    const scrollContainer = document.querySelector(".scrollContainer");
    const draggable = document.querySelector(".orgTree");

    if (!nodeElement || !scrollContainer || !draggable) return;

    // Get bounding rectangles for positioning
    const nodeRect = nodeElement.getBoundingClientRect();
    const containerRect = scrollContainer.getBoundingClientRect();
    const draggableRect = draggable.getBoundingClientRect();

    // Calculate the node's center relative to the draggable area
    const relativeX = nodeRect.left - draggableRect.left + nodeRect.width / 2;
    const relativeY = nodeRect.top - draggableRect.top + nodeRect.height / 2;

    // Determine center of scrollable container
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;

    // Compute final position to move draggable such that node is centered
    const targetX = centerX - relativeX;
    const targetY = centerY - relativeY;

    // Set the new drag position
    setPosition({ x: targetX, y: targetY });
};

/**
 * Recursively counts all employees in the hierarchy.
 * Used to display total employee count.
 */
export const getTotalEmployees = (nodes) => {
    let count = 0;

    const traverse = (list) => {
        list.forEach((u) => {
            count++;
            if (u.children?.length) traverse(u.children);
        });
    };

    traverse(nodes);
    return count;
};

/**
 * Finds and returns the name of the current user based on their ID.
 * Searches through all nodes recursively.
 */
export const getCurrentUserName = (id, users) => {
    let name = "N/A";

    const find = (nodes) => {
        for (const u of nodes) {
            if (u.id === id) {
                name = u.person?.name || "N/A";
                return;
            }
            if (u.children?.length) find(u.children);
        }
    };

    find(users);
    return name;
};
