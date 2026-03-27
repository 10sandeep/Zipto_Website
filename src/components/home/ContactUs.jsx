import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = "service_didbg8c";
const TEMPLATE_ID = "template_uw0tabo";
const PUBLIC_KEY  = "IutDM_RnN9JTdAQ_o";

export default function ContactUs() {
  const formRef    = useRef();
  const sectionRef = useRef();
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [status, setStatus]   = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [focused, setFocused] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("empty"); return;
    }
    setLoading(true);
    setStatus("");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <section id="contact" ref={sectionRef} className={`cz-root${visible ? " cz-visible" : ""}`}>

      {/* Subtle grid */}
      <div className="cz-grid" aria-hidden="true" />
      <div className="cz-orb cz-orb1" aria-hidden="true" />
      <div className="cz-orb cz-orb2" aria-hidden="true" />

      <div className="cz-wrap">

        {/* ════ LEFT ════ */}
        <div className="cz-left">
          <div className="cz-eyebrow">
            <span className="cz-pulse-dot" />
            SUPPORT &amp; CONTACT
          </div>

          <h2 className="cz-heading">
            Let's<br />
            <span className="cz-accent">talk<span className="cz-blink">_</span></span>
          </h2>

          <p className="cz-sub">
            Fast delivery needs fast support. Drop us a message and we'll get back to you — not in days, in minutes.
          </p>

          <div className="cz-cards">
            {[
              { icon: "✉", label: "Email",         value: "supportzipto@gmail.com" },
              { icon: "⏱", label: "Email Response", value: "24 × 7 Support" },
              { icon: "📞", label: "Phone Hours",   value: "10 AM – 7 PM" },
            ].map((item) => (
              <div className="cz-card" key={item.label}>
                <span className="cz-card-icon">{item.icon}</span>
                <div>
                  <div className="cz-card-label">{item.label}</div>
                  <div className="cz-card-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="cz-tag">
            <span className="cz-tag-dot" /> ZIPTO — ALWAYS MOVING
          </div>
        </div>

        {/* ════ RIGHT ════ */}
        <div className="cz-right">
          <div className="cz-form-header">
            <span className="cz-form-num">01</span>
            <span className="cz-form-title">Send a Message</span>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="cz-form" noValidate>

            {[
              { id: "name",    type: "text",  label: "Full Name",     comp: "input"    },
              { id: "email",   type: "email", label: "Email Address", comp: "input"    },
              { id: "message", type: null,    label: "Your Message",  comp: "textarea" },
            ].map(({ id, type, label, comp }) => (
              <div
                key={id}
                className={[
                  "cz-field",
                  comp === "textarea" ? "cz-field-ta" : "",
                  focused === id ? "cz-focused" : "",
                  form[id]         ? "cz-filled"  : "",
                ].filter(Boolean).join(" ")}
              >
                <label className="cz-label" htmlFor={`cz-${id}`}>{label}</label>
                {comp === "textarea" ? (
                  <textarea
                    id={`cz-${id}`}
                    name={id}
                    rows={4}
                    value={form[id]}
                    onChange={handleChange}
                    onFocus={() => setFocused(id)}
                    onBlur={() => setFocused("")}
                  />
                ) : (
                  <input
                    id={`cz-${id}`}
                    type={type}
                    name={id}
                    value={form[id]}
                    onChange={handleChange}
                    onFocus={() => setFocused(id)}
                    onBlur={() => setFocused("")}
                    autoComplete="off"
                  />
                )}
                <span className="cz-line" />
              </div>
            ))}

            <button type="submit" className={`cz-btn${loading ? " cz-loading" : ""}`} disabled={loading}>
              {loading
                ? <><span className="cz-spinner" />Sending…</>
                : <><span>Send Message</span><span className="cz-arrow">→</span></>
              }
            </button>

            {status === "success" && (
              <div className="cz-status cz-ok">✓ &nbsp;Message delivered! We'll be in touch soon.</div>
            )}
            {status === "error" && (
              <div className="cz-status cz-err">✗ &nbsp;Something went wrong. Please try again.</div>
            )}
            {status === "empty" && (
              <div className="cz-status cz-err">! &nbsp;Please fill in all fields.</div>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;900&display=swap');

        .cz-root {
          --or:      #f97316;
          --or-dim:  rgba(249,115,22,0.09);
          --or-glow: rgba(249,115,22,0.25);
          --bg:      #ffffff;
          --bg2:     #fafafa;
          --left-bg: #111827;
          --border:  rgba(0,0,0,0.09);
          --text:    #111827;
          --muted:   #6b7280;
          --f:       'Roboto', sans-serif;

          position: relative;
          background: var(--bg);
          padding: 96px 24px;
          overflow: hidden;
          font-family: var(--f);
          color: var(--text);
        }

        /* subtle dot grid */
        .cz-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(249,115,22,0.12) 1px, transparent 1px);
          background-size: 32px 32px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%);
          opacity: 0.5;
        }

        .cz-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .cz-orb1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%);
          top: -100px; left: -100px;
        }
        .cz-orb2 {
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%);
          bottom: -60px; right: -60px;
        }

        /* layout */
        .cz-wrap {
          position: relative;
          z-index: 1;
          max-width: 1080px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-radius: 16px;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(0,0,0,0.06),
            0 24px 80px rgba(0,0,0,0.10);
        }

        /* entrance */
        .cz-left, .cz-right {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .cz-right { transition-delay: 0.13s; }
        .cz-visible .cz-left,
        .cz-visible .cz-right { opacity: 1; transform: translateY(0); }

        /* ── LEFT (dark panel) ── */
        .cz-left {
          background: var(--left-bg);
          color: #fff;
          padding: 56px 44px;
          display: flex;
          flex-direction: column;
          gap: 28px;
          position: relative;
          overflow: hidden;
        }
        /* orange top-bar */
        .cz-left::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 64px; height: 3px;
          background: var(--or);
        }
        /* decorative circle */
        .cz-left::after {
          content: '';
          position: absolute;
          bottom: -80px; right: -80px;
          width: 260px; height: 260px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .cz-eyebrow {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: var(--or);
          text-transform: uppercase;
        }
        .cz-pulse-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--or);
          box-shadow: 0 0 8px var(--or);
          flex-shrink: 0;
          animation: czPulse 2s ease-in-out infinite;
        }
        @keyframes czPulse {
          0%,100%{ transform:scale(1); opacity:1; }
          50%{ transform:scale(0.55); opacity:0.4; }
        }

        .cz-heading {
          font-family: var(--f);
          font-size: clamp(3rem, 5.5vw, 5.5rem);
          font-weight: 900;
          line-height: 0.92;
          margin: 0;
          letter-spacing: -0.02em;
          color: #fff;
        }
        .cz-accent {
          color: var(--or);
          text-shadow: 0 0 40px rgba(249,115,22,0.5);
        }
        .cz-blink {
          color: #fff;
          opacity: 0.6;
          animation: czBlink 1.1s step-end infinite;
        }
        @keyframes czBlink { 0%,100%{opacity:0.6} 50%{opacity:0} }

        .cz-sub {
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(255,255,255,0.5);
          max-width: 300px;
        }

        /* info cards */
        .cz-cards { display: flex; flex-direction: column; gap: 10px; }
        .cz-card {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          padding: 13px 15px;
          transition: border-color 0.25s, background 0.25s, transform 0.2s;
          cursor: default;
        }
        .cz-card:hover {
          border-color: rgba(249,115,22,0.35);
          background: rgba(249,115,22,0.07);
          transform: translateX(5px);
        }
        .cz-card-icon {
          font-size: 17px;
          width: 36px; height: 36px;
          display: grid; place-items: center;
          background: rgba(249,115,22,0.12);
          border-radius: 8px;
          flex-shrink: 0;
        }
        .cz-card-label {
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 3px;
        }
        .cz-card-value {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
        }

        .cz-tag {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.1);
        }
        .cz-tag-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
        }

        /* ── RIGHT (white panel) ── */
        .cz-right {
          background: var(--bg2);
          padding: 56px 48px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .cz-form-header {
          display: flex;
          align-items: baseline;
          gap: 14px;
        }
        .cz-form-num {
          font-family: var(--f);
          font-size: 2.2rem;
          font-weight: 900;
          color: rgba(249,115,22,0.15);
          line-height: 1;
        }
        .cz-form-title {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* form */
        .cz-form { display: flex; flex-direction: column; gap: 26px; }

        .cz-field {
          position: relative;
          padding-top: 20px;
        }

        .cz-label {
          position: absolute;
          top: 24px; left: 0;
          font-family: var(--f);
          font-size: 13.5px;
          font-weight: 400;
          color: var(--muted);
          pointer-events: none;
          transition: top 0.2s, font-size 0.2s, color 0.2s, font-weight 0.2s, letter-spacing 0.2s;
        }
        .cz-field.cz-focused .cz-label,
        .cz-field.cz-filled  .cz-label {
          top: 2px;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--or);
        }

        .cz-field input,
        .cz-field textarea {
          width: 100%;
          background: transparent;
          border: none;
          outline: none;
          font-family: var(--f);
          font-size: 14px;
          font-weight: 400;
          color: var(--text);
          padding: 6px 0;
          resize: none;
        }
        .cz-field textarea { padding-top: 10px; }

        /* animated underline */
        .cz-line {
          display: block;
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 1px;
          background: rgba(0,0,0,0.12);
        }
        .cz-line::after {
          content: '';
          display: block;
          height: 2px;
          width: 0;
          margin-top: -1px;
          background: var(--or);
          box-shadow: 0 0 8px var(--or-glow);
          transition: width 0.35s ease;
        }
        .cz-field.cz-focused .cz-line::after { width: 100%; }

        /* button */
        .cz-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 28px;
          background: var(--or);
          color: #fff;
          border: none;
          border-radius: 8px;
          font-family: var(--f);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          margin-top: 6px;
        }
        .cz-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0);
          transition: background 0.2s;
        }
        .cz-btn:hover:not(:disabled)::after { background: rgba(255,255,255,0.12); }
        .cz-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(249,115,22,0.38);
        }
        .cz-btn:active:not(:disabled) { transform: translateY(0); }
        .cz-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .cz-arrow {
          font-size: 17px;
          transition: transform 0.2s;
        }
        .cz-btn:hover .cz-arrow { transform: translateX(5px); }

        .cz-spinner {
          display: inline-block;
          width: 13px; height: 13px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: czSpin 0.65s linear infinite;
        }
        @keyframes czSpin { to { transform: rotate(360deg); } }

        /* status */
        .cz-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          padding: 12px 16px;
          border-radius: 8px;
          border-left: 3px solid;
        }
        .cz-ok  { color: #16a34a; background: rgba(22,163,74,0.07);  border-color: #16a34a; }
        .cz-err { color: #dc2626; background: rgba(220,38,38,0.07); border-color: #dc2626; }

        /* responsive */
        @media (max-width: 760px) {
          .cz-wrap { grid-template-columns: 1fr; border-radius: 12px; }
          .cz-left  { padding: 40px 28px; }
          .cz-right { padding: 40px 28px; }
          .cz-heading { font-size: 3.4rem; }
          .cz-sub { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}