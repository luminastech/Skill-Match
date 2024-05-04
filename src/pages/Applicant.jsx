import React, { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  StickyNote,
  Search,
  Gauge,
  LifeBuoy,
  Settings,
} from "lucide-react";

import Dashboard from "../components/Dashboard";
import Sidebar, { SidebarItem } from "../components/Sidebar";

const Applicant = () => {

  
  return (
    <>
      <div className="flex w-full">
        <div className="flex">
          <Sidebar>
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              active
            />
            <SidebarItem icon={<StickyNote size={20} />} text="Projects" />
            <SidebarItem icon={<Search size={20} />} text="Browse" alert />
            <SidebarItem icon={<Gauge size={20} />} text="ATS Score" />
            <SidebarItem icon={<FileText size={20} />} text="Build Resume" />
            <SidebarItem
              icon={<FileText size={20} />}
              text="Build Cover Letter"
            />
            <div className="p-8" />
            <SidebarItem icon={<Settings size={20} />} text="Settings" />
            <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
          </Sidebar>
        </div>
        <Dashboard/>
      </div>
    </>
  );
};

export default Applicant;
