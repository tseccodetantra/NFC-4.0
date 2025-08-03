import { useState } from 'react'

const MainSection = ({ onLogout, onOpenScanner }) => {
  const [selectedRole, setSelectedRole] = useState('')

  const handleRoleChange = (role) => {
    setSelectedRole(role)
  }

  const handleOpenScanner = () => {
    onOpenScanner(selectedRole)
  }

  const roles = [
    { id: 'attendance', value: 'attendence', label: 'Attendance' },
    { id: 'lunch', value: 'lunch', label: 'Lunch' },
    { id: 'dinner', value: 'dinner', label: 'Dinner' },
    { id: 'breakfast', value: 'breakfast', label: 'Breakfast' }
  ]

  return (
    <div className="container">
      <div className="logo">📱 NFC Scanner</div>
      <h2>Select Role & Scan</h2>

      <div className="input-group">
        <label>Select Role:</label>
        <div className="role-options">
          {roles.map((role) => (
            <div key={role.id} className="role-option">
              <input
                type="radio"
                id={role.id}
                name="role"
                value={role.value}
                checked={selectedRole === role.value}
                onChange={() => handleRoleChange(role.value)}
              />
              <label htmlFor={role.id}>{role.label}</label>
            </div>
          ))}
        </div>
      </div>

      <button className="btn" onClick={handleOpenScanner}>
        Open QR Scanner
      </button>
      <button className="btn btn-secondary" onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}

export default MainSection 