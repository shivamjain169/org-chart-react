import React from "react";

import "./App.css";
import OrganizationChart from "./components/OrganizationChart";
import { dummyOrgData } from "./data/dummyData";

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <OrganizationChart
        data={dummyOrgData}
        currentUserId={dummyOrgData.currentUser}
        title="Awesome Team"
        showHeader
        draggable
        showRootDots
        styleOverrides={{
          wrapper: { backgroundColor: "#f8faff" },
          header: { backgroundColor: "#0066cc", color: "white" }
        }}
        onNodeClick={(u) => console.log("Clicked:", u)}
      />
    </div>
  );
};

export default App;
