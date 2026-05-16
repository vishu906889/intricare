import React, { useState } from 'react'
import { ChevronUp, ChevronDown, CheckCircle2 } from 'lucide-react'
import { Steps } from 'antd'
import 'antd/dist/antd.css'
import { LinkedinIcon, CsvIcon, AudienceIcon, LinkedinnewIcon, CalenderIcon, WebhookIcon, AudianceIcon } from './BrandIcons'
import './ImportMethod.scss'

const { Step } = Steps;

const ImportMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState('lookalike')
  const [isExpanded, setIsExpanded] = useState(true)

  const methods = [
    {
      id: 'linkedin',
      icon: <LinkedinnewIcon />,
      title: 'LinkedIn Search',
      desc: '(Basic, Sales Nav, Post, Group or Event URL)'
    },
    {
      id: 'csv',
      icon: <CalenderIcon />,
      title: 'Upload CSV File',
      desc: 'Upload LinkedIn profiles via CSV. Download Sample'
    },
    {
      id: 'lookalike',
      icon: <AudianceIcon />,
      title: 'Lookalike Audience',
      desc: 'Use Lead Finder to find audience.'
    },
    {
      id: 'webhook',
      icon: <LinkedinnewIcon />,
      title: 'Inbound Webhook',
      desc: 'Sync leads from zapier, n8n make in real time'
    }
  ]

  return (
    <div className="import-method-stepper">
      <Steps direction="vertical" current={1} className="custom-steps">
        <Step
          title={
            <div className="import-method-card">
              <div className="card-header" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="header-left">
                  <span className="header-title">Choose Import Method</span>
                </div>
                <button className="expand-toggle">
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>

              {isExpanded && (
                <div className="methods-grid">
                  {methods.map((method) => (
                    <div
                      key={method.id}
                      className={`method-card ${selectedMethod === method.id ? 'selected' : ''}`}
                      onClick={() => setSelectedMethod(method.id)}
                    >
                      <div className="method-icon-wrapper">
                        {method.icon}
                      </div>
                      <div className="method-info">
                        <h4 className="method-title">{method.title}</h4>
                        <p className="method-desc">{method.desc}</p>
                      </div>
                      {selectedMethod === method.id && (
                        <div className="selection-badge">
                          <CheckCircle2 size={14} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          }
        />
        <Step disabled />
      </Steps>
    </div>
  )
}

export default ImportMethod

