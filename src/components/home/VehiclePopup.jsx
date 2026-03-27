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

  const accent = getAccentColor(vehicle.color);

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
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "380px",
          maxHeight: "85vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
          transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
          transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.28s ease",
          opacity: visible ? 1 : 0,
          scrollbarWidth: "none",
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            width: "30px",
            height: "30px",
            border: "1.5px solid #e5e5e0",
            borderRadius: "8px",
            background: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#666",
            zIndex: 10,
            transition: "all 0.18s",
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
          <X size={13} strokeWidth={2.2} />
        </button>

        {/* Hero image banner */}
        <div
          style={{
            background: `${accent}12`,
            borderRadius: "20px 20px 0 0",
            padding: "28px 20px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderBottom: `1px solid ${accent}22`,
          }}
        >
          <img
            src={vehicle.icon}
            alt={vehicle.title}
            style={{
              width: "90px",
              height: "90px",
              objectFit: "contain",
              marginBottom: "12px",
              filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.1))",
            }}
          />

          <h2
            style={{
              margin: 0,
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#111",
              letterSpacing: "-0.02em",
              textAlign: "center",
              fontFamily: "'Georgia', serif",
            }}
          >
            {vehicle.title}
          </h2>

          {vehicle.subtitle && (
            <p
              style={{
                margin: "4px 0 0",
                fontSize: "0.72rem",
                color: "#888",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 500,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              {vehicle.subtitle}
            </p>
          )}

          {/* Capacity badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              marginTop: "12px",
              padding: "5px 12px",
              borderRadius: "100px",
              background: "white",
              border: `1px solid ${accent}33`,
              fontSize: "0.75rem",
              color: "#444",
              fontWeight: 600,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <Zap size={11} style={{ color: accent }} />
            Capacity: {vehicle.capacity}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>

          {/* Ideal Uses */}
          <div>
            <SectionLabel>Ideal Uses</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "8px" }}>
              {vehicle.details.uses.map((use, i) => (
                <ListItem key={i} accentColor={accent} icon="dot">
                  {use}
                </ListItem>
              ))}
            </div>
          </div>

          {/* Why Choose */}
          <div>
            <SectionLabel>Why Choose</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "8px" }}>
              {vehicle.details.benefits.map((b, i) => (
                <ListItem key={i} accentColor={accent} icon="check">
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
        fontSize: "0.62rem",
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
        gap: "8px",
        padding: "8px 12px",
        borderRadius: "8px",
        background: "#f9f9f7",
        border: "1px solid #eeeee9",
        fontSize: "0.82rem",
        color: "#333",
        fontFamily: "system-ui, sans-serif",
        lineHeight: 1.5,
      }}
    >
      <span style={{ marginTop: "2px", flexShrink: 0, color: accentColor }}>
        {icon === "check"
          ? <CheckCircle2 size={13} />
          : <span style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: accentColor, marginTop: "4px" }} />
        }
      </span>
      {children}
    </div>
  );
}

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
  return "#3b82f6";
}