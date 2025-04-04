# org-chart-react

A smooth, interactive, and customizable **React component library** to visualize hierarchical organizational structures with **draggable panning**, **expandable nodes**, **smart connector lines**, and **auto-centering** on interaction. Ideal for team structures, project hierarchies, and organizational charts.

---

## ✨ Features

- 🔍 Auto-centers the highlighted (current) user on initial load  
- 🔽 Expandable/collapsible nodes on click  
- 🔁 Recursive rendering of nested org trees  
- 🧲 Draggable canvas for intuitive navigation  
- ➖ Dynamic connectors between parent and children (vertical + horizontal)  
- 🎯 Responsive layout with support for wide trees and deep hierarchies  
- 💡 Easy to style using external CSS  

---

## 📦 Installation

```bash
npm install org-chart-react
# or
yarn add org-chart-react

---


🚀 Usage
import React from "react";
import OrganizationChart from "org-chart-react";
import "./styles/OrganizationChart.css";
import { dummyOrgData } from "./data";

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <OrganizationChart data={dummyOrgData} />
    </div>
  );
};

export default App;

---

📁 Dummy Data Structure
export const dummyOrgData = {
  currentUser: 3, // highlighted user ID
  rootUsers: [
    {
      id: 1,
      person: {
        avatar: "JS",
        name: "John Smith",
        title: "CEO",
        totalReports: 2,
      },
      expanded: false,
      children: [ /* recursive children */ ],
    },
  ],
};

---

Each node supports:

id: Unique identifier

person: Contains avatar, name, title, and totalReports

expanded: Boolean to control visibility of children

children: Array of child nodes


---

🧩 Props
Prop	Type	Description
data	object	The org chart data (see structure above)


---


🖼️ CSS Styling
All styles are modular and customizable. You can freely modify the default OrganizationChart.css as per your design needs.

Key classes:

.organization_chart_node – Node card container

.highlight-user – Current (focused) user node

.connector-down, .connector-up, .connector-horizontal – Connector lines between nodes


---


🧠 How it Works
.expandUntilUser: Expands only relevant branches to make the current user visible

.centerNodeInView: Recenters the canvas to focus on the selected node

.Draggable layout: Allows canvas dragging for exploring the chart

.ResizeObserver: Dynamically adjusts horizontal connector lines


---

🛠️ Development
Clone the repository and run it locally:

git clone https://github.com/your-username/org-chart-react.git
cd org-chart-react
npm install
npm start

---


🧪 Testing and Contribution
Feel free to fork the repo, build new features, or report bugs!

# Run tests (if applicable)
npm test


---


To Contribute:
Fork the repo

Create a branch (git checkout -b feat/awesome-feature)

Commit your changes (git commit -am 'Add feature')

Push to your branch (git push origin feat/awesome-feature)

Open a Pull Request 🚀