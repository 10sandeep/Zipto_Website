import { X, Zap, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function VehiclePopup({ vehicle, close }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const handleKey = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(close, 280);
  }

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && handleClose()}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(10,10,18,0.72)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "16px",
        transition: "opacity 0.28s ease",
        opacity: visible ? 1 : 0,
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      <div
        style={{
          background: "#fafaf8",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "520px",
          maxHeight: "92vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 32px 80px rgba(0,0,0,0.38), 0 0 0 1px rgba(0,0,0,0.06)",
          transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
          transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.28s ease",
          opacity: visible ? 1 : 0,
          scrollbarWidth: "none",
        }}
      >
        {/* Accent bar derived from vehicle color */}
        <div
          style={{
            height: "4px",
            borderRadius: "20px 20px 0 0",
            background: getAccentGradient(vehicle.color),
          }}
        />

        {/* Header section */}
        <div style={{ padding: "28px 28px 0" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>

            {/* Icon + title */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1, minWidth: 0 }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  minWidth: "60px",
                  borderRadius: "16px",
                  background: getAccentGradient(vehicle.color),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 8px 24px ${getAccentShadow(vehicle.color)}`,
                }}
              >
                <img
                  src={vehicle.icon}
                  alt={vehicle.title}
                  style={{ width: "30px", height: "30px", objectFit: "contain", filter: "brightness(0) invert(1)" }}
                />
              </div>

              <div style={{ minWidth: 0 }}>
                <h2
                  style={{
                    margin: 0,
                    fontSize: "clamp(1.2rem, 4vw, 1.55rem)",
                    fontWeight: 700,
                    color: "#111",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  {vehicle.title}
                </h2>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: "0.82rem",
                    color: "#888",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: "system-ui, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {vehicle.subtitle}
                </p>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              aria-label="Close"
              style={{
                minWidth: "36px",
                width: "36px",
                height: "36px",
                border: "1.5px solid #e5e5e0",
                borderRadius: "10px",
                background: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#666",
                transition: "all 0.18s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#111";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.borderColor = "#111";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "#666";
                e.currentTarget.style.borderColor = "#e5e5e0";
              }}
            >
              <X size={16} strokeWidth={2.2} />
            </button>
          </div>

          {/* Capacity badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginTop: "20px",
              padding: "7px 14px",
              borderRadius: "100px",
              background: "#f0f0eb",
              fontSize: "0.82rem",
              color: "#444",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 600,
              letterSpacing: "0.01em",
            }}
          >
            <Zap size={13} style={{ color: getAccentColor(vehicle.color) }} />
            Capacity: {vehicle.capacity}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "#eeeee9", margin: "24px 28px 0" }} />

        {/* Body */}
        <div style={{ padding: "24px 28px 28px", display: "flex", flexDirection: "column", gap: "24px" }}>

          {/* Ideal Uses */}
          <div>
            <SectionLabel>Ideal Uses</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
              {vehicle.details.uses.map((use, i) => (
                <ListItem key={i} accentColor={getAccentColor(vehicle.color)} icon="use">
                  {use}
                </ListItem>
              ))}
            </div>
          </div>

          {/* Why Choose */}
          <div>
            <SectionLabel>Why Choose</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
              {vehicle.details.benefits.map((b, i) => (
                <ListItem key={i} accentColor={getAccentColor(vehicle.color)} icon="check">
                  {b}
                </ListItem>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <p
      style={{
        margin: 0,
        fontSize: "0.7rem",
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#aaa",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {children}
    </p>
  );
}

function ListItem({ children, accentColor, icon }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        padding: "10px 14px",
        borderRadius: "10px",
        background: "white",
        border: "1px solid #eeeee9",
        fontSize: "0.88rem",
        color: "#333",
        fontFamily: "system-ui, sans-serif",
        lineHeight: 1.5,
      }}
    >
      <span style={{ marginTop: "1px", flexShrink: 0, color: accentColor }}>
        {icon === "check"
          ? <CheckCircle2 size={15} />
          : <span style={{ display: "block", width: "7px", height: "7px", borderRadius: "50%", background: accentColor, marginTop: "5px" }} />
        }
      </span>
      {children}
    </div>
  );
}

// Utility: extract a usable accent color from Tailwind class string
function getAccentColor(colorClass = "") {
  const map = {
    blue: "#3b82f6", red: "#ef4444", green: "#22c55e",
    yellow: "#eab308", orange: "#f97316", purple: "#a855f7",
    pink: "#ec4899", teal: "#14b8a6", indigo: "#6366f1",
    cyan: "#06b6d4", sky: "#0ea5e9", emerald: "#10b981",
    violet: "#8b5cf6", rose: "#f43f5e", amber: "#f59e0b",
    lime: "#84cc16", slate: "#64748b", gray: "#6b7280",
  };
  for (const [key, val] of Object.entries(map)) {
    if (colorClass.includes(key)) return val;
  }
  return "#111";
}

function getAccentGradient(colorClass = "") {
  const c = getAccentColor(colorClass);
  return `linear-gradient(135deg, ${c}dd, ${c}99)`;
}

function getAccentShadow(colorClass = "") {
  const c = getAccentColor(colorClass);
  return `${c}44`;
}