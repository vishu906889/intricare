import { useLocation } from 'react-router-dom'
import { Bell, ChevronDown, Menu } from 'lucide-react'
import Logo from './Logo'
import './Topbar.scss'

const Topbar = ({ onMenuClick }) => {
  const location = useLocation();
  const isCampaignList = location.pathname === '/campaign-list';

  return (
    <div className='topbar_wrapper'>
      <header className="topbar">
        <div className="topbar-left">
          <div className="mobile-logo">
            <Logo size={28} />
          </div>
          <nav className="breadcrumbs">
            <span className="parent-path">Campaign</span>
            <span className="separator">{'>'}</span>
            <span className="active">
              {isCampaignList ? 'Campaign Listing' : 'Advance Campaign'}
            </span>
          </nav>
        </div>

        <div className="topbar-right">
          <button className="menu-toggle" onClick={onMenuClick}>
            <Menu size={24} />
          </button>
          <div className="user-menu">
            <div className="user-text">
              <span className="user-name">John Doe</span>
              <span className="user-role">Admin</span>
            </div>
            <img src="https://ui-avatars.com/api/?name=John+Doe&background=4f46e5&color=fff" alt="User" className="topbar-avatar" />
            <ChevronDown size={16} className="chevron" />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Topbar
