import React, { useState } from "react";
import PartAApp from "./partA/PartAApp";
import PartBApp from "./partB/PartBApp";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("A");

  return (
    <div>
      <div className="mode-switcher">
        <span>Chọn phiên bản bài thực hành:</span>
        <button
          className={activeTab === "A" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveTab("A")}
        >
          Phần A: Class Component
        </button>
        <button
          className={activeTab === "B" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveTab("B")}
        >
          Phần B: Function Component + Hooks
        </button>
      </div>

      {activeTab === "A" ? <PartAApp /> : <PartBApp />}
    </div>
  );
}
