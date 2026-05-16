import React from 'react'
import { LayoutDashboard, Sun, Moon, LogOut, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import statusIcon from '../images/Status.png'
import './Sidebar.scss'
import { CompaignIcon } from './BrandIcons'

const Sidebar = ({ theme, toggleTheme, isOpen, onClose }) => {
  const handleNavClick = () => {
    if (window.innerWidth <= 768) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <Logo size={32} />
            <span className="logo-text">Intricare</span>
          </div>
          <button className="close-sidebar" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li className="nav-item">
              <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={handleNavClick}>
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/campaign" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={handleNavClick}>
                <CompaignIcon />
                <span>Campaign</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/campaign-list" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={handleNavClick}>
                <CompaignIcon />
                <span>Campaign List</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="user-info-main-container">
            <div className="user-profile">
              <div className="avatar-container">
                <img src={statusIcon} alt="User" className="user-avatar" />
              </div>
              <div className="user-info">
                <p className="user-name">John Doe</p>
                <p className="user-role">Admin</p>
              </div>
              <button className="logout-btn">
                <LogOut size={16} />
              </button>
            </div>

            <div className="user-email-card">
              <p className="email-label">Email</p>
              <p className="user-email">johndoe@gmail.com</p>
            </div>
          </div>

          <div className="theme-toggle">
            <button
              className={`toggle-btn ${theme === 'light' ? 'active' : ''}`}
              onClick={() => theme !== 'light' && toggleTheme()}
            >
              <Sun size={16} />
              <span>Light</span>
            </button>
            <button
              className={`toggle-btn ${theme === 'dark' ? 'active' : ''}`}
              onClick={() => theme !== 'dark' && toggleTheme()}
            >
              <Moon size={16} />
              <span>Dark</span>
            </button>
          </div>
        </div>

      </aside>
    </>
  )
}

export default Sidebar
