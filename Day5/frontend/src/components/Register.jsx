import React from 'react'
import axios from 'axios'
const Register = () => {
    const handleregister = async(e) =>{
        e.preventDefault();
        const name=e.target.name.value;
        const age=e.target.age.value;
        const user={name,age}
        await axios.post('http://localhost:9000/users',user)
        alert('User Registered')
    }
  return (
    <div>
        <h1>Register User</h1>
      <form onSubmit={handleregister}>
        <label>
            Name:
            <input type="text" name="name" required />
        </label>
        <label>
            Age:
            <input type="text" name="age" required />
        </label>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
