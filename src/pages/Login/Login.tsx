import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for error message

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (u: { username: string; password: string; }) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      window.location.href = '/';
    } else {
      setError('Неверный пароль или имя пользователя'); // Set error message
    }
  };

  return (
    <div className='w-full max-w-[600px] mx-auto my-[200px] flex flex-col border-2 border-white rounded-2xl items-center justify-center gap-4 p-14 bg-opacity-50 backdrop-filter backdrop-blur-sm'>
      <p className='text-2xl font-bold mb-8'>Вход</p>
      <div className='flex flex-col gap-8 w-full max-w-[700px]'>
        <input
            type="text"
            placeholder="Имя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='p-2 border border-white rounded-md'
        />
        <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='p-2 border border-white rounded-md'
        />
        {error && <p className='text-red-500 mt-[-20px]'>{error}</p>} {/* Render error message */}
        <p className='text-center'>Забыли пароль? <br /> <a href='mailto: rudiko.annaa@mail.com'>Напишите нам и мы поможем!</a></p>
        <button onClick={handleLogin} className='p-2 mb-2 max-w-[200px] border border-white rounded-xl mx-auto w-full text-white hover:border-gray-300'>Вход</button>
      </div>
    </div>
  );
};

export default Login;
