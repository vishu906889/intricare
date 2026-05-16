import React from 'react'
import { Users, UserCheck, Settings, BarChart3, ChevronRight } from 'lucide-react'
import './Stepper.scss'
import { AudienceIcon } from './BrandIcons'

const Stepper = ({ currentStep }) => {
  const steps = [
    { id: 1, label: 'Define Target Audience', icon: <AudienceIcon /> },
    { id: 2, label: 'Sender Profiles', icon: <UserCheck size={18} /> },
    { id: 3, label: 'Settings', icon: <Settings size={18} /> },
    { id: 4, label: 'Stats', icon: <BarChart3 size={18} /> },
  ]

  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className={`step ${step.id === currentStep ? 'active' : ''} ${step.id < currentStep ? 'completed' : ''}`}>
            <div className="step-icon">
              {step.icon}
            </div>
            <span className="step-label">{step.label}</span>
          </div>
          {index < steps.length - 1 && <ChevronRight size={16} className="step-separator" />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Stepper
