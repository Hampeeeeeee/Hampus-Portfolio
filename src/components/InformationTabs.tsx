import { useState } from "react";
import AboutTab from "./tabs/AboutTab";
import ContactTab from "./tabs/ContactTab";
import ProjectsTab from "./tabs/ProjectsTab"

const tabs = ["about", "projects", "contact"];

export function InfoTabs() {
  const [activeTab, setActiveTab] = useState<string>("about");

  const toggleTab = (tab: string) => {
    setActiveTab((prev) => (prev === tab ? "" : tab)); // Allow deselect if needed
  };

  return (
    <div className="w-[400px]">
      <div
        role="tablist"
        aria-label="Info tabs"
        className="flex space-x-2 border-b border-primary"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            id={`tab-${tab}`}
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls={`panel-${tab}`}
            onClick={() => toggleTab(tab)}
            className={`p-4 rounded-t cursor-pointer hover:bg-primary/20 text-primary transition px-6
              ${activeTab === tab ? "bg-primary/20" : ""}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id="panel-about"
        aria-labelledby="tab-about"
        hidden={activeTab !== "about"}
      >
        {activeTab === "about" && <AboutTab />}
      </div>
      <div
        role="tabpanel"
        id="panel-projects"
        aria-labelledby="tab-projects"
        hidden={activeTab !== "projects"} 
      >
        {activeTab === "projects" && <ProjectsTab />}
      </div>
      <div
        role="tabpanel"
        id="panel-contact"
        aria-labelledby="tab-contact"
        hidden={activeTab !== "contact"}
      >
        {activeTab === "contact" && <ContactTab />}
      </div>
    </div>
  );
}