import react from 'react'
import Login from '../components/Login' 
import SignUp from '../components/SignUp'

function RegistrationPage() {
  return (
    <div className = "flex my-auto"> 
      
      <SignUp/>
      <Login/>
    </div>
    
  )
}

export default RegistrationPage