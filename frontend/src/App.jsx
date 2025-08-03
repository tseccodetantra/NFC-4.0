import { useState, useEffect } from 'react'
import './App.css'
import PasswordSection from './components/PasswordSection'
import MainSection from './components/MainSection'
import QRScanner from './components/QRScanner'

function App() {
  const [storedPassword, setStoredPassword] = useState('')
  const [selectedRole, setSelectedRole] = useState('')
  const [currentSection, setCurrentSection] = useState('password')
  const [isScannerOpen, setIsScannerOpen] = useState(false)

  // Check if password is already stored on component mount
  useEffect(() => {
    const savedPassword = sessionStorage.getItem('nfcPassword')
    if (savedPassword) {
      setStoredPassword(savedPassword)
      setCurrentSection('main')
    }
  }, [])

  const handleAuthenticate = (password) => {
    setStoredPassword(password)
    sessionStorage.setItem('nfcPassword', password)
    setCurrentSection('main')
  }

  const handleLogout = () => {
    sessionStorage.removeItem('nfcPassword')
    setStoredPassword('')
    setSelectedRole('')
    setCurrentSection('password')
    setIsScannerOpen(false)
  }

  const handleOpenScanner = (role) => {
    if (!role) {
      alert('Please select a role first')
      return
    }
    setSelectedRole(role)
    setIsScannerOpen(true)
  }

  const handleCloseScanner = () => {
    setIsScannerOpen(false)
  }

  const handleAttendanceSubmit = async (id) => {
    try {
      const response = await fetch(
        `https://nfc4-0-attendence.onrender.com/api/${selectedRole}?id=${id}&password=${storedPassword}`
      )
      const data = await response.json()
      
      // Show success message and close scanner
      alert(data.message || 'Attendance marked successfully!')
      handleCloseScanner()
    } catch (error) {
      console.error('API error:', error)
      alert('Error marking attendance. Please try again.')
    }
  }

  return (
    <div className="app">
      {currentSection === 'password' && (
        <PasswordSection onAuthenticate={handleAuthenticate} />
      )}
      
      {currentSection === 'main' && (
        <MainSection 
          onLogout={handleLogout}
          onOpenScanner={handleOpenScanner}
        />
      )}

      {isScannerOpen && (
        <QRScanner 
          onClose={handleCloseScanner}
          onSubmit={handleAttendanceSubmit}
        />
      )}
    </div>
  )
}

export default App
