import React from "react";

export default function Coinslot({ className = "" }) {
  return (
    <div
      style={{
        position: "relative",
        width: "24px",
        height: "24px",
        display: "inline-block",
        overflow: "visible",
      }}
    >
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="700 200 120 400"
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <g id="layer1">
          <path
            d="M708,549.5v-320h100v320z"
            strokeWidth="25"
            fill="none"
            stroke="currentColor"
          />
          <path
            d="M758,269.5v240"
            strokeWidth="30"
            fill="none"
            stroke="currentColor"
          />
        </g>
      </svg>
    </div>
  );
}
