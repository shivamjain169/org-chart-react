# org-chart-react

A smooth, interactive, and highly customizable React component library to visualize hierarchical organizational structures. Ideal for building team org charts, company hierarchies, or reporting trees. Includes features like draggable canvas, expandable nodes, connector lines, and auto-centering of selected nodes.

---

## ✨ Features

- 🎯 Auto-centers the current (highlighted) user on load
- 🔽 Expand/collapse nodes with smooth transitions
- 🔁 Recursive rendering of nested org trees
- 🧲 Draggable canvas for easy navigation
- 🧠 Smart dynamic connectors (vertical & horizontal lines)
- 🎨 Fully customizable via CSS variables and `renderNode`
- 🖼️ Supports avatars via URL, base64, or fallback initials
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
import "org-chart-react/dist/org-chart-react.css";
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
export const dummyOrgData = {
  currentUser: 2,
  rootUsers: [
    {
      id: 1,
      person: {
        avatar: "JS",
        name: "John Smith",
        title: "Chief Executive Officer (CEO)",
        totalReports: 2,
      },
      expanded: false,
      children: [
        {
          id: 2,
          person: {
            avatar:
              "https://randomuser.me/api/portraits/men/65.jpg",
            name: "Shivam Jain",
            title: "Chief Technology Officer (CTO)",
            totalReports: 2,
          },
          expanded: false,
          children: [
            {
              id: 5,
              person: {
                avatar: "RK",
                name: "Raj Kapoor",
                title: "Frontend Lead",
                totalReports: 2,
              },
              expanded: false,
              children: [
                {
                  id: 8,
                  person: {
                    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                    name: "Aarti Sharma",
                    title: "Frontend Engineer",
                    totalReports: 0,
                  },
                  children: [],
                },
                {
                  id: 9,
                  person: {
                    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
                    name: "Ravi Verma",
                    title: "UI Developer",
                    totalReports: 0,
                  },
                  children: [],
                },
              ],
            },
            {
              id: 6,
              person: {
                avatar: "SK",
                name: "Sandeep Kumar",
                title: "Backend Lead",
                totalReports: 1,
              },
              expanded: false,
              children: [
                {
                  id: 10,
                  person: {
                    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
                    name: "Rohan Mehta",
                    title: "Backend Engineer",
                    totalReports: 0,
                  },
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 3,
          person: {
            avatar: "AM",
            name: "Anjali Mehta",
            title: "Chief Marketing Officer (CMO)",
            totalReports: 1,
          },
          expanded: false,
          children: [
            {
              id: 7,
              person: {
                avatar: "https://randomuser.me/api/portraits/women/65.jpg",
                name: "Ritika Patel",
                title: "Marketing Specialist",
                totalReports: 0,
              },
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

```

### 🖼️ Avatar Support

The `avatar` field supports the following formats:

| **Type**           | **Example**                                                                 |
|--------------------|------------------------------------------------------------------------------|
| **Image URL**       | `"https://example.com/avatar.jpg"`                                          |
| **Public path**     | `"/avatars/john.jpg"` (image must be placed under your `/public` folder)    |
| **Base64 string**   | `"data:image/png;base64,iVBORw0KG..."`                                      |
| **Fallback initials** | `"SJ"` → Will auto-render a styled circle with the initials `SJ`           |

📌 **Avoid using local system paths** like `C:\\Users\\...` as they will **not work in the browser**.


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
  --org-primary: #3a8fd3;
  --org-bg: #ffffff;
  --org-highlight: #eaf4fc;
  --org-font-color: #333333;
  --org-muted: #6b7280;
  --org-hover: #f0f7ff;
  --org-shadow: 0 2px 8px rgba(58, 143, 211, 0.15);
  --org-hover-shadow: 0 0 10px rgba(0, 102, 204, 0.25);
  --org-node-padding: 16px;
  --org-avatar-text: #ffffff;
  --org-avatar-bg: #ddd;
  --org-connector-muted: #ccc;
  --org-header-color: #ffffff;
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
