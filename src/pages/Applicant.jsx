import React, { useState } from "react";
import {LayoutDashboard, FileText, StickyNote, Search, Gauge, LifeBuoy, Settings} from "lucide-react";
import {Browse, Cover, Dashboard, Projects, Resume, ATS } from "../components/dashboard";
import Sidebar, { SidebarItem } from "../components/Sidebar";

const Applicant = () => {

  const [activeComponent, setActiveComponent] = useState("dashboard");

  const renderComponent = () => {
    console.log("Active component:", activeComponent);
    switch (activeComponent) {
      case "dashboard":
        return <Dashboard />;
      case "projects":
        return <Projects />;
      case "browse":
        return <Browse />;
      case "atsScore":
        return <ATS/>;
      case "buildResume":
        return <Resume />;
      case "buildCoverLetter":
        return <Cover/>;
      case "help":
        return <Help />;
      case "settings":
        return <SettingsComponent />;
      default:
        return null;
    }
  };
  
  return (
    <>
      <div className="flex w-full">
        <div className="flex">
          <Sidebar>
            <div className="flex flex-col">
            <button onClick={() => setActiveComponent("dashboard")}>
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              active={activeComponent === "dashboard"}
            />
            </button>
            <button onClick={() => setActiveComponent("projects")}>
            <SidebarItem icon={<StickyNote size={20} />} text="Projects" active={activeComponent === "projects"}/>
            </button>
            <button onClick={() => setActiveComponent("browse")}>
            <SidebarItem icon={<Search size={20} />} text="Browse" alert active={activeComponent === "browse"} />
            </button>
            <button onClick={() => setActiveComponent("atsScore")}>
            <SidebarItem icon={<Gauge size={20} />} text="ATS" active={activeComponent === "atsScore"} />
            </button>
            <button onClick={() => setActiveComponent("buildResume")}>
            <SidebarItem icon={<FileText size={20} />} text="Resume"  active={activeComponent === "buildResume"} />
            </button>
            <button onClick={() => setActiveComponent("buildCoverLetter")}>
            <SidebarItem icon={<FileText size={20} />} text="Cover Letter" active={activeComponent === "buildCoverLetter"}/>
            </button>
            <div className="p-8" />
            <button onClick={() => setActiveComponent("settings")}>
            <SidebarItem icon={<Settings size={20} />} text="Settings" active={activeComponent === "settings"} onClick={() => setActiveComponent("settings")}/>
            </button>
            <button onClick={() => setActiveComponent("help")}>
            <SidebarItem icon={<LifeBuoy size={20} />} text="Help" active={activeComponent === "help"} onClick={() => setActiveComponent("help")}/>
            </button>
            </div>
          </Sidebar>
        </div>
        {renderComponent()}
      </div>
    </>
  );
};

export default Applicant;
