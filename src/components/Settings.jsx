import React, { useState } from 'react'
import { Sparkles, ChevronDown, Info, ArrowLeft, Plus, Trash2, Clock, MessageSquare, RotateCcw, BrainCircuit } from 'lucide-react'
import './Settings.scss'

import zapierLogo from '../images/zapier.png'
import n8nLogo from '../images/n8n.png'
import webhooksLogo from '../images/webhooks.png'
import { AiIcon, ArrowIcon, ExportIcon, MassegeIcon } from './BrandIcons'

const Settings = ({ onPrevious, onNext }) => {
  const [campaignName, setCampaignName] = useState('New Outreach Campaign')
  const [outreachTime, setOutreachTime] = useState('USA Outreach Time')
  const [startTime, setStartTime] = useState('11:30 AM')
  const [endTime, setEndTime] = useState('04:00 PM')
  const [timezone, setTimezone] = useState('USA Timezone')
  const [autoMessage, setAutoMessage] = useState(false)
  const [autoHandleLeads, setAutoHandleLeads] = useState(false)
  const [followUps, setFollowUps] = useState(2)
  const [activeDays, setActiveDays] = useState(['MON', 'TUE', 'WED', 'THU', 'SAT'])
  const [triggerEvents, setTriggerEvents] = useState(['Response received'])

  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
  const zapierEvents = [
    'Response received',
    'Invite sent',
    'Invitation accepted',
    'Invitation withdrawn',
    'Followup Sent'
  ]

  const toggleDay = (day) => {
    if (activeDays.includes(day)) {
      setActiveDays(activeDays.filter(d => d !== day))
    } else {
      setActiveDays([...activeDays, day])
    }
  }

  const toggleEvent = (event) => {
    if (triggerEvents.includes(event)) {
      setTriggerEvents(triggerEvents.filter(e => e !== event))
    } else {
      setTriggerEvents([...triggerEvents, event])
    }
  }

  return (
    <div className="settings-container">
      <div className="settings-main-card">
        {/* Campaign Name */}
        <div className="settings-section">
          <label className="settings-label">Campaign name</label>
          <input
            type="text"
            className="settings-input campaign-name-input"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
          />
        </div>

        {/* Settings Grid (Side by Side) */}
        <div className="settings-layout-grid">
          {/* Sending Window Column */}
          <div className="settings-column">
            <div className="column-header">
              <label className="settings-label">Sending Window</label>
              <p className="settings-desc">Define when the campaign runs</p>
            </div>

            <div className="inner-card sending-window-inner">
              <div className="select-wrapper-custom">
                <select
                  className="custom-select"
                  value={outreachTime}
                  onChange={(e) => setOutreachTime(e.target.value)}
                >
                  <option>USA Outreach Time</option>
                  <option>Global Outreach Time</option>
                </select>
                <ChevronDown size={18} className="select-icon" />
              </div>

              <div className="day-selector-row">
                <div className="days-flex">
                  {days.map((day, idx) => (
                    <button
                      key={idx}
                      className={`day-pill ${activeDays.includes(day) ? 'active' : ''}`}
                      onClick={() => toggleDay(day)}
                    >
                      {day}
                    </button>
                  ))}
                </div>
                <button className="trash-btn">
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="time-zone-row">
                <div className="time-box">
                  <Clock size={16} className="time-icon" />
                  <span>{startTime} - {endTime}</span>
                </div>
                <div className="timezone-box">
                  <span>{timezone}</span>
                </div>
              </div>

              <button className="add-window-link">
                <Plus size={16} />
                <span>Add New Window</span>
              </button>
            </div>
          </div>

          {/* AI Assist Column */}
          <div className="settings-column">
            <div className="column-header invisible">
              <label className="settings-label">AI Assist</label>
              <p className="settings-desc">Define when the campaign runs</p>
            </div>

            <div className="inner-card ai-assist-inner">
              <div className='ai_header_wrapper'>
                <div className="ai-header-row">
                  <div className="ai-title-group">
                    <div className="ai-icon-bg">
                      <AiIcon />
                    </div>
                    <span className="ai-label">AI Assist</span>
                    <span className="optional-text">Optional</span>
                  </div>
                  <p className="ai-subtitle">Define when the campaign runs</p>
                </div>
                <button className="train-ai-btn-small">Train AI</button>

              </div>

              <div className="ai-features-list">
                <div className="ai-feature-item">
                  <div className="feature-main">
                    <MassegeIcon />
                    <div className="feature-text">
                      <span className="feature-title">Auto message after reply detected</span>
                      <p className="feature-desc">AI auto-replies to leads who message you back</p>
                    </div>
                    <label className="ios-switch">
                      <input type="checkbox" checked={autoMessage} onChange={(e) => setAutoMessage(e.target.checked)} />
                      <span className="ios-slider"></span>
                    </label>
                  </div>
                </div>

                <div className="ai-feature-item">
                  <div className="feature-main">
                    <ExportIcon />
                    <div className="feature-text">
                      <div className="feature-title-row">
                        <span className="feature-title">Auto handle leads after</span>
                        <span className="number-badge">{followUps}</span>
                        <span className="feature-title">Follow-ups</span>
                      </div>
                      <p className="feature-desc">AI takes over after two follow-ups</p>
                    </div>
                    <label className="ios-switch">
                      <input type="checkbox" checked={autoHandleLeads} onChange={(e) => setAutoHandleLeads(e.target.checked)} />
                      <span className="ios-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Zapier Trigger Events (Full Width) */}

      </div>
      <div>
        <div className="settings-section zapier-section-new">
          <div className="zapier-blue-header">
            <label className="check-label-white">
              <input type="checkbox" defaultChecked />
              <span>Select events to trigger zapier</span>
              <Info size={14} className="info-icon-white" />
            </label>
          </div>
          <div className="zapier-events-flex">
            {zapierEvents.map((event, idx) => (
              <label key={idx} className="zapier-check-item">
                <input
                  type="checkbox"
                  checked={triggerEvents.includes(event)}
                  onChange={() => toggleEvent(event)}
                />
                <span>{event}</span>
              </label>
            ))}
          </div>
          <div className="works-with-footer">
            <span className="works-label">Works With</span>
            <div className="logos-row">
              <div className="logo-item">
                <img src={zapierLogo} alt="Zapier" />
              </div>
              <div className="logo-item">
                <img src={n8nLogo} alt="n8n" />
              </div>
              <div className="logo-item">
                <img src={webhooksLogo} alt="Webhooks" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-disclaimer">
        <p>If a lead answers your invite, message, or InMail, we stop sending further steps automatically. <a href="#">Learn more</a></p>
      </div>

      <div className="bottom-actions">
        <button className="btn-back" onClick={onPrevious}>
          <ArrowIcon />
          <span>Previous</span>
        </button>
        <button className="btn-next-main" onClick={onNext}>Next</button>
      </div>
    </div>
  )
}

export default Settings
