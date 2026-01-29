"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

interface USMapProps {
  stateCounts: Record<string, number>;
  selectedState: string | null;
  onStateClick?: (state: string) => void;
}

// US States GeoJSON URL (TopoJSON format)
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// State name to abbreviation mapping
const STATE_ABBREVIATIONS: Record<string, string> = {
  Alabama: "AL",
  Alaska: "AK",
  Arizona: "AZ",
  Arkansas: "AR",
  California: "CA",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  Florida: "FL",
  Georgia: "GA",
  Hawaii: "HI",
  Idaho: "ID",
  Illinois: "IL",
  Indiana: "IN",
  Iowa: "IA",
  Kansas: "KS",
  Kentucky: "KY",
  Louisiana: "LA",
  Maine: "ME",
  Maryland: "MD",
  Massachusetts: "MA",
  Michigan: "MI",
  Minnesota: "MN",
  Mississippi: "MS",
  Missouri: "MO",
  Montana: "MT",
  Nebraska: "NE",
  Nevada: "NV",
  "New Hampshire": "NH",
  "New Jersey": "NJ",
  "New Mexico": "NM",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Pennsylvania: "PA",
  "Rhode Island": "RI",
  "South Carolina": "SC",
  "South Dakota": "SD",
  Tennessee: "TN",
  Texas: "TX",
  Utah: "UT",
  Vermont: "VT",
  Virginia: "VA",
  Washington: "WA",
  "West Virginia": "WV",
  Wisconsin: "WI",
  Wyoming: "WY",
};

export default function USMap({
  stateCounts,
  onStateClick,
  selectedState,
}: USMapProps) {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleStateHover = (stateName: string, event: React.MouseEvent) => {
    const stateAbbr = STATE_ABBREVIATIONS[stateName];
    if (stateAbbr) {
      setHoveredState(stateAbbr);
      setTooltipPos({ x: event.clientX, y: event.clientY });
    }
  };

  const handleStateLeave = () => {
    setHoveredState(null);
  };

  const handleStateClickInternal = (stateName: string) => {
    const stateAbbr = STATE_ABBREVIATIONS[stateName];
    if (stateAbbr && onStateClick) {
      onStateClick(stateAbbr);
    }
  };

  const getStateFill = (stateName: string) => {
    const stateAbbr = STATE_ABBREVIATIONS[stateName];
    if (!stateAbbr) return "#E7E5E4";

    const count = stateCounts[stateAbbr] || 0;

    if (selectedState === stateAbbr) {
      return "#1C1917"; // stone-900 for selected
    }

    if (count > 0) {
      return "#78716C"; // stone-500 for states with properties
    }

    return "#E7E5E4"; // stone-200 for states without properties
  };

  const getStateOpacity = (stateName: string) => {
    const stateAbbr = STATE_ABBREVIATIONS[stateName];
    if (!stateAbbr) return 0.6;

    if (hoveredState === stateAbbr) return 1;
    if (hoveredState && hoveredState !== stateAbbr) return 0.5;
    return 0.8;
  };

  return (
    <div className="relative w-full">
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{
          scale: 1000,
        }}
        className="w-full h-auto"
      >
        <ZoomableGroup center={[-96, 38]} zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const stateName = geo.properties.name;
                const stateAbbr = STATE_ABBREVIATIONS[stateName];

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={(event) => handleStateHover(stateName, event)}
                    onMouseLeave={handleStateLeave}
                    onClick={() => handleStateClickInternal(stateName)}
                    style={{
                      default: {
                        fill: getStateFill(stateName),
                        stroke: "#FFFFFF",
                        strokeWidth: 0.75,
                        outline: "none",
                        opacity: getStateOpacity(stateName),
                        transition: "all 0.3s ease",
                      },
                      hover: {
                        fill: getStateFill(stateName),
                        stroke: "#FFFFFF",
                        strokeWidth: 1,
                        outline: "none",
                        opacity: 1,
                        cursor: "pointer",
                      },
                      pressed: {
                        fill: getStateFill(stateName),
                        stroke: "#FFFFFF",
                        strokeWidth: 1,
                        outline: "none",
                        opacity: 1,
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {/* Tooltip */}
      {hoveredState && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed z-50 pointer-events-none bg-stone-900 text-white px-4 py-3 rounded shadow-xl"
          style={{
            left: tooltipPos.x + 15,
            top: tooltipPos.y + 15,
          }}
        >
          <div className="text-sm font-bold">
            {Object.keys(STATE_ABBREVIATIONS).find(
              (key) => STATE_ABBREVIATIONS[key] === hoveredState,
            )}
          </div>
          <div className="text-xs text-stone-300 mt-1">
            {stateCounts[hoveredState] || 0}{" "}
            {stateCounts[hoveredState] === 1 ? "property" : "properties"}
          </div>
        </motion.div>
      )}
    </div>
  );
}
