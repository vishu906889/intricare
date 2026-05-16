import React from 'react'
import {
  ChevronDown,
  Download,
  MoreVertical,
  Sun,
  MoreHorizontal
} from 'lucide-react'
import './CampaignList.scss'
import { ExportbuttonIcon } from './BrandIcons';

const CampaignList = () => {
  const campaigns = [
    {
      id: 1,
      name: 'Tech Founder',
      platforms: ['LinkedIn', 'Email'],
      created: '21 Jan, 2026',
      crm: 'Synced',
      crmTime: '2h ago',
      invites: 265,
      invitesRate: '15% Accepted',
      reply: 125,
      replyRate: '10% Received',
      email: 400,
      emailRate: '10% Mail Opened',
      status: 'Running',
      limit: '40 invites/day',
      senders: [1, 2]
    },
    {
      id: 2,
      name: 'Growth Ca...',
      platforms: ['LinkedIn', 'Email'],
      created: '21 Jan, 2026',
      crm: 'Sync to CRM',
      invites: 265,
      invitesRate: '15% Accepted',
      reply: 125,
      replyRate: '10% Received',
      email: 400,
      emailRate: '10% Mail Opened',
      status: 'Running',
      limit: '40 invites/day',
      senders: [1, 2, 3]
    },
    {
      id: 3,
      name: 'Campaign P...',
      platforms: ['LinkedIn', 'Email'],
      created: '21 Jan, 2026',
      crm: 'Sync to CRM',
      invites: 265,
      invitesRate: '15% Accepted',
      reply: 125,
      replyRate: '10% Received',
      email: 400,
      emailRate: '10% Mail Opened',
      status: 'Running',
      limit: '40 invites/day',
      senders: [1, 2]
    },
    {
      id: 4,
      name: 'Lead Engine',
      platforms: ['LinkedIn', 'Email'],
      created: '21 Jan, 2026',
      crm: 'Synced',
      crmTime: '1d ago',
      invites: 265,
      invitesRate: '15% Accepted',
      reply: 125,
      replyRate: '10% Received',
      email: 400,
      emailRate: '10% Mail Opened',
      status: 'Running',
      limit: '40 invites/day',
      senders: [1, 2, 3]
    },
    {
      id: 5,
      name: 'Campaign Hub',
      platforms: ['LinkedIn', 'Email'],
      created: '21 Jan, 2026',
      crm: 'Synced',
      crmTime: '5h ago',
      invites: 265,
      invitesRate: '15% Accepted',
      reply: 125,
      replyRate: '10% Received',
      email: 400,
      emailRate: '10% Mail Opened',
      status: 'Running',
      limit: '40 invites/day',
      senders: [1, 2]
    }
  ];

  return (
    <div className="campaign-list-container">
      <div className='compaing-wrapper'>
        <div className='campaign_header'>
          <div>
            <h1>All Campaigns List</h1>
            <p className="subtitle">A quick look at all of your outreach initiatives.</p>
          </div>
          <button className='btn-new-campaign'>New Campaign</button>
        </div>

        <div className="filter-bar">
          <div className="filter-left">
            <div className="filter-select">
              <span>Channel</span>
              <ChevronDown size={14} />
            </div>
            <div className="filter-select">
              <span>Status</span>
              <ChevronDown size={14} />
            </div>
            <button className="btn-clear">Clear All</button>
          </div>
          <button className="btn-export">
            <ExportbuttonIcon />
            <span>Export List</span>
          </button>
        </div>

        <div className="campaign-table-container">
          <table className="campaign-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>ALL CAMPAIGNS</th>
                <th>CRM</th>
                <th>INVITES SENT</th>
                <th>REPLY RATE</th>
                <th>EMAIL SENT</th>
                <th>SENDER</th>
                <th>STATUS</th>
                <th>DAILY LIMIT</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((camp) => (
                <tr key={camp.id}>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="camp-info">
                      <div className="camp-name-row">
                        <span className="camp-name">{camp.name}</span>
                        <div className="platform-tags">
                          {camp.platforms.map(p => (
                            <span key={p} className={`tag tag-${p.toLowerCase()}`}>{p}</span>
                          ))}
                        </div>
                      </div>
                      <span className="camp-date">Created On: {camp.created}</span>
                    </div>
                  </td>
                  <td>
                    {camp.crm === 'Synced' ? (
                      <div className="crm-status synced">
                        <Sun size={12} className="sun-icon" />
                        <div className="crm-text">
                          <span className="synced-label">Synced</span>
                          <span className="sync-time">{camp.crmTime}</span>
                        </div>
                      </div>
                    ) : (
                      <button className="btn-sync">Sync to CRM</button>
                    )}
                  </td>
                  <td>
                    <div className="metric-cell">
                      <span className="metric-val">{camp.invites}</span>
                      <span className="metric-rate">{camp.invitesRate}</span>
                    </div>
                  </td>
                  <td>
                    <div className="metric-cell">
                      <span className="metric-val">{camp.reply}</span>
                      <span className="metric-rate">{camp.replyRate}</span>
                    </div>
                  </td>
                  <td>
                    <div className="metric-cell">
                      <span className="metric-val">{camp.email}</span>
                      <span className="metric-rate">{camp.emailRate}</span>
                    </div>
                  </td>
                  <td>
                    <div className="sender-avatars">
                      {camp.senders.map((s, idx) => (
                        <div key={idx} className="avatar-mini" style={{ zIndex: 10 - idx }}>
                          <img src={`https://i.pravatar.cc/150?u=${s}`} alt="sender" />
                        </div>
                      ))}
                    </div>
                  </td>
                  <td>
                    <span className="status-badge running">
                      <div className="dot"></div>
                      Running
                    </span>
                  </td>
                  <td>
                    <span className="limit-badge">{camp.limit}</span>
                  </td>
                  <td>
                    <button className="btn-more">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CampaignList
