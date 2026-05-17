import React, { useState } from 'react'
import { ChevronUp, ChevronDown, CheckCircle2, X, List } from 'lucide-react'
import { Steps, Modal, Checkbox } from 'antd'
import 'antd/dist/antd.css'
import { LinkedinIcon, CsvIcon, AudienceIcon, LinkedinnewIcon, CalenderIcon, WebhookIcon, AudianceIcon } from './BrandIcons'
import './ImportMethod.scss'

const { Step } = Steps;

const ImportMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState('lookalike')
  const [isExpanded, setIsExpanded] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedList, setSelectedList] = useState('founder')

  const lookalikeLists = [
    { id: 'founder', name: 'Founder', count: '1000+ Users in the List' },
    { id: 'tech', name: 'Tech Profiles', count: '1000+ Users in the List' }
  ]

  const handleCardClick = (id) => {
    setSelectedMethod(id);
    if (id === 'lookalike') {
      setIsModalOpen(true);
    }
  }

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
                      onClick={() => handleCardClick(method.id)}
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

      <Modal
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        closeIcon={<X size={20} />}
        className="lookalike-modal"
        centered
        width={600}
      >
        <div className="lookalike-modal-content">
          <div className="modal-header">
            <h2>Lookalikes</h2>
            <p>Select a lookalike list for this campaign</p>
          </div>
          
          <div className="lists-container">
            {lookalikeLists.map(list => (
              <div 
                key={list.id} 
                className={`list-item ${selectedList === list.id ? 'selected' : ''}`}
                onClick={() => setSelectedList(list.id)}
              >
                <div className="list-item-left">
                  <List size={18} className="list-icon" />
                  <span className="list-name">{list.name}</span>
                  <span className="list-count">({list.count})</span>
                </div>
                <Checkbox checked={selectedList === list.id} />
              </div>
            ))}
          </div>

          <div className="add-new-container">
            <button className="btn-add-new">Add New</button>
          </div>

          <div className="modal-footer">
            <button className="btn-cancel" onClick={() => setIsModalOpen(false)}>Cancel</button>
            <button className="btn-select" onClick={() => setIsModalOpen(false)}>Select List</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ImportMethod

