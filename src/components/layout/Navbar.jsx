import ziptoLogo from "../../assets/zipto.jpeg";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [downloadPopup, setDownloadPopup] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when modals are open
  useEffect(() => {
    if (open || downloadPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open, downloadPopup]);

  const links = [
    { name: "Home", id: "home" },
    { name: "About Us", path: "/about" },
    { name: "Vehicles", id: "Our Delivery Vehicles" },
    { name: "For Business", id: "for-business" },
    { name: "Become a Rider", id: "rider" },
    { name: "Contact", id: "contact" },  // ✅ scrolls to <section id="contact">
  ];

  const handleNavigation = (link) => {
    setOpen(false);
    setActiveLink(link.id || link.name);

    // Smooth-scroll to the section with matching id
    const section = document.getElementById(link.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        :root {
          --nav-height: 72px;
          --accent: #f97316;
          --accent-blue: #3b82f6;
          --bg-nav: #080c14;
          --bg-nav-scrolled: rgba(8,12,20,0.97);
          --text-primary: #f1f5f9;
          --text-muted: #94a3b8;
          --border: rgba(255,255,255,0.08);
        }

        .nav-root {
          font-family: 'DM Sans', sans-serif;
          position: sticky;
          top: 0;
          z-index: 100;
          height: var(--nav-height);
          background: var(--bg-nav);
          border-bottom: 1px solid var(--border);
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        .nav-root.scrolled {
          background: var(--bg-nav-scrolled);
          box-shadow: 0 4px 32px rgba(0,0,0,0.5);
        }

        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          gap: 24px;
        }

        /* Logo */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .nav-logo-img {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          object-fit: cover;
          border: 2px solid rgba(249,115,22,0.4);
        }

        .nav-logo-text {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .nav-logo-text span {
          color: var(--accent);
        }

        /* Desktop links */
        .nav-links {
          display: none;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 4px;
          align-items: center;
        }

        @media (min-width: 900px) {
          .nav-links { display: flex; }
        }

        .nav-link-item {
          position: relative;
        }

        .nav-link-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-muted);
          padding: 7px 14px;
          border-radius: 8px;
          transition: color 0.2s ease, background 0.2s ease;
          white-space: nowrap;
          text-decoration: none;
          display: block;
        }

        .nav-link-btn:hover,
        .nav-link-btn.active {
          color: var(--text-primary);
          background: rgba(255,255,255,0.06);
        }

        .nav-link-btn.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 14px;
          right: 14px;
          height: 2px;
          background: var(--accent);
          border-radius: 2px;
        }

        /* Right actions */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .btn-download {
          display: none;
          align-items: center;
          gap: 8px;
          background: var(--accent);
          color: #fff;
          border: none;
          padding: 9px 20px;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
          white-space: nowrap;
        }

        @media (min-width: 640px) {
          .btn-download { display: flex; }
        }

        .btn-download:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(249,115,22,0.35);
          opacity: 0.92;
        }

        /* Hamburger */
        .btn-hamburger {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border);
          border-radius: 8px;
          width: 40px;
          height: 40px;
          color: var(--text-primary);
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .btn-hamburger:hover {
          background: rgba(255,255,255,0.1);
        }

        @media (min-width: 900px) {
          .btn-hamburger { display: none; }
        }

        /* ---- MOBILE DRAWER ---- */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          z-index: 99;
          opacity: 0;
          animation: fadeIn 0.2s ease forwards;
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(320px, 85vw);
          background: #0d1423;
          border-left: 1px solid var(--border);
          z-index: 100;
          display: flex;
          flex-direction: column;
          padding: 24px 0;
          transform: translateX(100%);
          animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px 24px;
          border-bottom: 1px solid var(--border);
        }

        .drawer-logo {
          font-family: 'Syne', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: #fff;
        }

        .drawer-logo span { color: var(--accent); }

        .btn-close-drawer {
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border);
          border-radius: 8px;
          width: 36px;
          height: 36px;
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }

        .btn-close-drawer:hover { background: rgba(255,255,255,0.1); }

        .drawer-nav {
          flex: 1;
          padding: 16px 16px;
          overflow-y: auto;
        }

        .drawer-link {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 13px 16px;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--text-muted);
          background: none;
          border: none;
          cursor: pointer;
          text-decoration: none;
          text-align: left;
          transition: color 0.2s ease, background 0.2s ease;
          gap: 12px;
        }

        .drawer-link:hover {
          color: var(--text-primary);
          background: rgba(255,255,255,0.05);
        }

        .drawer-link-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0;
          flex-shrink: 0;
          transition: opacity 0.2s;
        }

        .drawer-link:hover .drawer-link-dot { opacity: 1; }

        .drawer-footer {
          padding: 16px 24px 8px;
          border-top: 1px solid var(--border);
        }

        .btn-download-drawer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          background: var(--accent);
          color: #fff;
          border: none;
          padding: 13px 20px;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9375rem;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .btn-download-drawer:hover { opacity: 0.88; }

        /* ---- MODAL BASE ---- */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
          padding: 20px;
          animation: fadeIn 0.2s ease forwards;
        }

        .modal-card {
          background: #0d1423;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 40px;
          width: 100%;
          max-width: 480px;
          position: relative;
          animation: popUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          box-shadow: 0 24px 80px rgba(0,0,0,0.6);
        }

        .modal-card-sm {
          max-width: 360px;
          text-align: center;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border);
          border-radius: 8px;
          width: 34px;
          height: 34px;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s, background 0.2s;
        }

        .modal-close:hover { color: #fff; background: rgba(255,255,255,0.1); }

        .modal-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.75rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }

        .modal-title span { color: var(--accent); }

        .modal-subtitle {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 28px;
          line-height: 1.5;
        }

        /* Coming soon badge */
        .coming-soon-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(249,115,22,0.12);
          border: 1px solid rgba(249,115,22,0.3);
          border-radius: 100px;
          color: var(--accent);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .modal-icon {
          font-size: 3rem;
          margin-bottom: 12px;
        }

        .btn-got-it {
          width: 100%;
          padding: 13px;
          border-radius: 10px;
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border);
          color: var(--text-primary);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9375rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
          margin-top: 8px;
        }

        .btn-got-it:hover { background: rgba(255,255,255,0.1); }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes popUp {
          from { transform: scale(0.92) translateY(12px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }

        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>

      {/* ───────── NAVBAR ───────── */}
      <nav className={`nav-root${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">

          {/* Logo */}
          <Link to="/" className="nav-logo" onClick={() => setActiveLink("home")}>
            <img src={ziptoLogo} alt="Zipto" className="nav-logo-img" />
            <span className="nav-logo-text">Zip<span>to</span></span>
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links">
            {links.map((link) =>
              link.path ? (
                <li key={link.name} className="nav-link-item">
                  <Link
                    to={link.path}
                    className={`nav-link-btn${location.pathname === link.path ? " active" : ""}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li key={link.name} className="nav-link-item">
                  <button
                    onClick={() => handleNavigation(link)}
                    className={`nav-link-btn${activeLink === link.id ? " active" : ""}`}
                  >
                    {link.name}
                  </button>
                </li>
              )
            )}
          </ul>

          {/* Right actions */}
          <div className="nav-actions">
            <button className="btn-download" onClick={() => setDownloadPopup(true)}>
              <FaDownload size={13} />
              Download App
            </button>
            <button className="btn-hamburger" onClick={() => setOpen(true)} aria-label="Open menu">
              <FaBars size={16} />
            </button>
          </div>

        </div>
      </nav>

      {/* ───────── MOBILE DRAWER ───────── */}
      {open && (
        <>
          <div className="mobile-overlay" onClick={() => setOpen(false)} />
          <div className="mobile-drawer">
            <div className="drawer-header">
              <span className="drawer-logo">Zip<span>to</span></span>
              <button className="btn-close-drawer" onClick={() => setOpen(false)}>
                <FaTimes size={15} />
              </button>
            </div>

            <nav className="drawer-nav">
              {links.map((link) =>
                link.path ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="drawer-link"
                    onClick={() => setOpen(false)}
                  >
                    <span className="drawer-link-dot" />
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    className="drawer-link"
                    onClick={() => handleNavigation(link)}
                  >
                    <span className="drawer-link-dot" />
                    {link.name}
                  </button>
                )
              )}
            </nav>

            <div className="drawer-footer">
              <button className="btn-download-drawer" onClick={() => { setOpen(false); setDownloadPopup(true); }}>
                <FaDownload size={14} />
                Download App
              </button>
            </div>
          </div>
        </>
      )}

      {/* ───────── DOWNLOAD POPUP ───────── */}
      {downloadPopup && (
        <div className="modal-overlay" onClick={() => setDownloadPopup(false)}>
          <div className="modal-card modal-card-sm" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setDownloadPopup(false)}>
              <FaTimes size={14} />
            </button>
            <div className="modal-icon">🚀</div>
            <div className="coming-soon-badge">Coming Soon</div>
            <p className="modal-title" style={{ fontSize: "1.4rem" }}>App in the works</p>
            <p className="modal-subtitle">We're building something great. Stay tuned for the official launch!</p>
            <button className="btn-got-it" onClick={() => setDownloadPopup(false)}>Got it, thanks!</button>
          </div>
        </div>
      )}

      <ToastContainer />
    </>
  );
}