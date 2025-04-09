# org-chart-react

A smooth, interactive, and highly customizable React component library to visualize hierarchical organizational structures. Ideal for building team org charts, company hierarchies, or reporting trees. Includes features like draggable canvas, expandable nodes, connector lines, and auto-centering of selected nodes.

---

## ✨ Features

- 🎯 Auto-centers the current (highlighted) user on load
- 🔽 Expand/collapse nodes with smooth transitions
- 🔁 Recursive rendering of nested org trees
- 🧲 Draggable canvas for easy navigation
- 🧠 Smart dynamic connectors (vertical & horizontal lines)
- 🎨 Fully customizable via CSS and renderNode
- 🧱 Flexible layout for wide and deep trees
- 📱 Responsive and mobile-friendly

---

## 📦 Installation

```bash
npm install org-chart-react
# or
yarn add org-chart-react
```
---


🚀 Usage
```jsx
import React from "react";
import OrganizationChart from "org-chart-react";
import "org-chart-react/dist/styles.css"; // Import default styles
import { dummyOrgData } from "./data";

const App = () => {
  return (
    <OrganizationChart
      data={dummyOrgData}
      currentUserId={3} // Optional: ID to highlight and center
      title="Our Awesome Team"
      showHeader
      draggable
      showRootDots
      onNodeClick={(node) => console.log("Clicked:", node)}
      styleOverrides={{
        wrapper: { backgroundColor: "var(--org-bg)" },
        header: {
          backgroundColor: "var(--org-primary)",
          color: "#fff",
          justifyContent: "space-between"
        }
      }}
    />
  );
};

export default App;
```
---

📁 Dummy Data Structure
```ts
interface Person {
  avatar: string;
  name: string;
  title: string;
  totalReports: number;
}

interface Node {
  id: number;
  person: Person;
  expanded?: boolean;
  children?: Node[];
}

interface OrgData {
  currentUser: number; // Highlighted/centered user ID
  rootUsers: Node[];
}
```

---


## 🧩 Props API

| Prop              | Type               | Default             | Description |
|-------------------|--------------------|---------------------|-------------|
| `data`            | `OrgData`          | **Required**        | Full org structure |
| `currentUserId`   | `number \| null`   | `null`              | Highlight and center this user |
| `onNodeClick`     | `(node) => void`   | `undefined`         | Called when a node is clicked |
| `renderNode`      | `(node) => ReactNode` | `undefined`      | Custom renderer for node card |
| `title`           | `string`           | `"Organization Chart"` | Header title |
| `showHeader`      | `boolean`          | `false`             | Show/hide header |
| `draggable`       | `boolean`          | `true`              | Enable draggable canvas |
| `styleOverrides`  | `object`           | `{}`                | Custom wrapper/header styles |
| `showRootDots`    | `boolean`          | `true`              | Show root user dotted icon |
| `className`       | `string`           | `""`                | Extra CSS classes on wrapper |

---

## 🎨 Theming via CSS Variables

Use these variables in your root CSS or override per component:

```css
:root {
  --org-primary: #0066cc;
  --org-bg: #ffffff;
  --org-highlight: #e0f0ff;
  --org-font-color: #222;
  --org-node-padding: 16px;
  --org-shadow: 0 4px 12px rgba(0, 102, 204, 0.1);
  --org-hover: #f0f8ff;
  --org-muted: #666;
}
```

---

## 🧠 Internals Explained

| Utility             | Purpose |
|----------------------|---------|
| `expandUntilUser`    | Expands all parent branches until currentUserId is visible |
| `centerNodeInView`   | Scrolls and centers the selected user node in view |
| `getTotalEmployees`  | Recursively counts all users in the org tree |
| `getCurrentUserName` | Finds the display name of the selected user |

---

## 🛠️ Development

```bash
git clone https://github.com/your-username/org-chart-react.git
cd org-chart-react
npm install
npm run dev
```

---

## 🧪 Testing & Contributions

Want to improve or extend this library? We welcome contributions!

### Test
```bash
npm test
```

### Contribute
```bash
# Fork and clone this repo
# Create a new branch
$ git checkout -b feat/my-awesome-change

# Commit and push
$ git commit -am "Add my feature"
$ git push origin feat/my-awesome-change

# Then open a Pull Request 🚀
```

---
