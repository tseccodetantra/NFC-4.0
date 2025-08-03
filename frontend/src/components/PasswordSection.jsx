import { useState } from 'react'

const PasswordSection = ({ onAuthenticate }) => {
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password.trim() === '') {
      alert('Please enter a password')
      return
    }
    onAuthenticate(password)
  }

  return (
    <div className="container">
      <div className="logo">🔐 NFC System</div>
      <h2>Enter Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="btn">
          Continue
        </button>
      </form>
    </div>
  )
}

export default PasswordSection 