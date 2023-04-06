import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getUserIdFromToken } from '../utils/auth';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const id = getUserIdFromToken(token);
      setUserId(id);
    }
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/users/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setUser(data);
          setLoading(false);
        } else {
          setError('Failed to fetch user data');
        }
      } catch (error) {
        console.error(error);
        setError('Something went wrong. Please try again later.');
      }
    };

    if (userId) {
      fetchUser();

    }
  }, [userId]);

  const login = async (username, password) => {
    try {
      // Send a POST request to the API endpoint
      const response = await fetch('http://localhost:3000/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',},
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        // If the login is successful, save the JWT token to local storage and redirect to the home page
        const { token } = await response.json();
        localStorage.setItem('token', token);
        const id = getUserIdFromToken(token);
        setUserId(id);
        router.push('/');
      } else {
        // If the login fails, show an error message
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error(error);
      setError('Something went wrong. Please try again later.');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setUserId(null);
    router.push('/login');
  };

  return { user, loading, error, login, logout };
};

export default useAuth;
