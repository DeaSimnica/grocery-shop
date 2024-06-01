// import React, { useState } from 'react';
// import '../styles/Login.css';

// function Login() {
//   // State variables for username and password
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   // State variable for error message
//   const [errorMessage, setErrorMessage] = useState('');

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Check if username and password are correct
//     if (username === 'admin' && password === 'password') {
//       // If correct, reset error message and do something (e.g., redirect to dashboard)
//       setErrorMessage('');
//       console.log('Login successful');
//       // Replace the console.log with the logic you want to execute after successful login
//     } else {
//       // If incorrect, display error message
//       setErrorMessage('Invalid username or password');
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         {errorMessage && <div className="error-message">{errorMessage}</div>}
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
