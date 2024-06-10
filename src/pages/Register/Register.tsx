import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find((u: { username: string; }) => u.username === username);

    if (existingUser) {
      alert('Username already exists');
    } else {
      users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(users));
      navigate('/');
    }
  };

  return (
    <div className='w-full max-w-[600px] mx-auto my-[200px] flex flex-col border-2 border-white rounded-2xl items-center justify-center gap-4 p-14 bg-opacity-50 backdrop-filter backdrop-blur-sm'>
        <p className='text-2xl font-bold mb-8'>Registration</p>
        <div className='flex flex-col gap-8 w-full max-w-[700px]'>
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='p-2 border border-white rounded-md'
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='p-2 border border-white rounded-md'
            />
            <button
            onClick={handleRegister}
            className='p-2 mb-2 max-w-[200px] border border-white rounded-xl mx-auto w-full text-white hover:border-gray-300'
            >
            Register
            </button>
            <Link to="/login" className='text-sm mx-auto'>Already have an account? Login</Link>
        </div>
    </div>

  );
};

export default Register;