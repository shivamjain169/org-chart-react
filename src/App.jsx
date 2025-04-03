import React from "react";
import OrganizationChart from "./components/OrganizationChart";
import { dummyOrgData } from "./data/dummyData";
import "./styles/OrganizationChart.css";

const App = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#ffffff' }}>
      <OrganizationChart data={dummyOrgData} />
    </div>
  );
};

export default App;
