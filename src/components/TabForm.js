import Settings from "./Settings";
import Profile from "./Profile";
import Interests from "./Interests";
import { Component } from "react";
import { useState } from "react";

export default TabForm = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = [
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveComponent = tabs[tabIndex].component;

  const handleTabClick = (index) => {
    setTabIndex(index);
  };

  return (
    <div>
      <div className="heading-container">
        {tabs.map((t, index) => (
          <div onClick={() => handleTabClick(index)} className="heading">
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveComponent />
      </div>
    </div>
  );
};
