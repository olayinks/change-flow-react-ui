import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any stored user data
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    
    // Redirect to home page
    navigate('/', { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Logging out...</h2>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto"></div>
      </div>
    </div>
  );
};

export default Logout;