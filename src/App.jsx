import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Stepper from './components/Stepper'
import SenderProfiles from './components/SenderProfiles'
import Settings from './components/Settings'
import CampaignList from './components/CampaignList'
import ImportMethod from './components/ImportMethod'
import './App.scss'
import { ArrowIcon } from './components/BrandIcons'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })
  const [currentStep, setCurrentStep] = useState(1) // Set to 1 for implementation
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev)
  const closeSidebar = () => setIsSidebarOpen(false)

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, 4))
  const handlePrevious = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  return (
    <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar
        theme={theme}
        toggleTheme={toggleTheme}
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />
      <main className="main-content">
        <Topbar onMenuClick={toggleSidebar} />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Navigate to="/campaign" replace />} />
            <Route path="/campaign" element={
              <>
                <div className="mobile-breadcrumbs">
                  <span>Campaign</span>
                  <span className="separator">{'>'}</span>
                  <span className="active">Advance Campaign</span>
                </div>
                <div className="separated_sections">
                  <Stepper currentStep={currentStep} />

                  {currentStep === 1 && <ImportMethod />}
                  {currentStep === 2 && <SenderProfiles />}
                  {currentStep === 3 && (
                    <Settings
                      onPrevious={handlePrevious}
                      onNext={handleNext}
                    />
                  )}
                  {currentStep === 4 && <div className="placeholder-step">Stats Step Content</div>}

                  {currentStep !== 3 && (
                    <div className="footer-actions">
                      <button 
                        className="btn-secondary firstarrowbtn" 
                        onClick={handlePrevious}
                        disabled={currentStep === 1}
                        style={{ opacity: currentStep === 1 ? 0 : 1, pointerEvents: currentStep === 1 ? 'none' : 'auto' }}
                      > 
                        <ArrowIcon /> Previous
                      </button>
                      <button className="btn-primary" onClick={handleNext}>Next</button>
                    </div>
                  )}
                </div>
              </>
            } />
            <Route path="/campaign-list" element={<CampaignList />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
