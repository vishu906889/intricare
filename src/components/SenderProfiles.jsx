import React, { useState } from 'react'
import { Search, Plus, MoreVertical, ExternalLink } from 'lucide-react'
import { LinkedinIcon } from './BrandIcons'
import linkedinLogo from '../images/Linkedin.png'
import './SenderProfiles.scss'

const SenderProfiles = () => {
  const [activeTab, setActiveTab] = useState('linkedin')

  const accounts = [
    {
      id: 1,
      name: 'Edgar Jones',
      connections: '1,250 connections',
      health: 72,
      limits: 'Invites: 40 / day',
      type: 'Premium',
      status: 'Connected',
      avatar: 'https://i.pravatar.cc/150?u=edgar'
    },
    // Add more mock data if needed
  ]

  return (
    <>
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'linkedin' ? 'active' : ''}`}
          onClick={() => setActiveTab('linkedin')}
        >
          LinkedIn Profile
        </button>
        <button
          className={`tab ${activeTab === 'email' ? 'active' : ''}`}
          onClick={() => setActiveTab('email')}
        >
          Email Accounts
        </button>
      </div>
      <div className="sender-profiles-card">


        <div className="card-content">
          <div className="card-header">
            <div className="title-section">
              <div className="icon-wrapper">
                <img src={linkedinLogo} alt="linkedin" />
              </div>
              <div className="text-wrapper">
                <h3>LinkedIn Profile</h3>
                <p>Pick which LinkedIn profiles you want to use for this campaign.</p>
              </div>
            </div>
            <button className="add-btn">
              <Plus size={18} />
              <span>Add Account</span>
            </button>
          </div>

          <div className="table-controls">
            <div className="show-entries">
              <span>Show</span>
              <select className="entries-select">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
            </div>
            <div className="search-wrapper">
              <Search size={16} className="search-icon" />
              <input type="text" placeholder="Search" className="search-input" />
            </div>
          </div>

          <div className="table-container">
            <table className="accounts-table">
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>NAME</th>
                  <th>HEALTH</th>
                  <th>DAILY LIMITS</th>
                  <th>ACCOUNT TYPE</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map(account => (
                  <tr key={account.id}>
                    <td><input type="checkbox" /></td>
                    <td>
                      <div className="user-cell">
                        <img src={account.avatar} alt={account.name} className="account-avatar" />
                        <div className="user-details">
                          <span className="user-name">{account.name}</span>
                          <span className="user-meta">{account.connections}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="health-cell">
                        <div className="health-circle" style={{ '--progress': `${account.health}%` }}>
                          <span>{account.health}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="limits-pill">{account.limits}</div>
                    </td>
                    <td>
                      <div className="type-cell">
                        <img alt="linkedin" src={linkedinLogo} />
                        <span>{account.type}</span>
                      </div>
                    </td>
                    <td>
                      <span className="badge-success">Connected</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default SenderProfiles
