import React from "react";
import OrganizationChart from "./components/OrganizationChart";
import { dummyOrgData } from "./data/dummyData";
import "./styles/OrganizationChart.css";

const getEmployeeCount = (nodes) => {
  let count = 0;
  const traverse = (users) => {
    users.forEach((user) => {
      count++;
      if (user.children?.length > 0) {
        traverse(user.children);
      }
    });
  };
  traverse(dummyOrgData.rootUsers);
  return count;
};

const getCurrentUser = (id, users) => {
  const search = (nodes) => {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children?.length) {
        const res = search(node.children);
        if (res) return res;
      }
    }
    return null;
  };
  const found = search(users);
  return found?.person?.name || "Unknown";
};

const App = () => {
  const employeeCount = getEmployeeCount(dummyOrgData.rootUsers);
  const currentUser = getCurrentUser(dummyOrgData.currentUser, dummyOrgData.rootUsers);

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#ffffff" }}>
      <header
        style={{
          padding: "10px 20px",
          backgroundColor: "#008AED",
          color: "white",
          fontSize: "16px",
          fontWeight: "500",
          display: "flex",
          justifyContent: "flex-end", // use "flex-start" for left
          alignItems: "center"
        }}
      >
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "18px", fontWeight: 600 }}>👥 Organization Chart</div>
          <div style={{ fontSize: "14px", marginTop: "2px", fontWeight: 400 }}>
            Total Employees: {employeeCount} | Logged in as: <strong>{currentUser}</strong>
          </div>
        </div>
      </header>
      <OrganizationChart data={dummyOrgData} />
    </div>
  );
};

export default App;
