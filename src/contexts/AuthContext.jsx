import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data on component mount
    const storedUser = localStorage.getItem('housinghub_user');
    const storedToken = localStorage.getItem('housinghub_token');
    
    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem('housinghub_user');
        localStorage.removeItem('housinghub_token');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      // For now, mock login based on email pattern
      let mockUser;
      
      if (email.includes('superadmin')) {
        mockUser = {
          userId: 1,
          name: 'Super Admin',
          email,
          phone: '+1234567890',
          role: 'super_admin',
          isVerified: true
        };
      } else if (email.includes('admin')) {
        mockUser = {
          userId: 2,
          name: 'Society Admin',
          email,
          phone: '+1234567890',
          role: 'admin',
          societyId: 1,
          isVerified: true
        };
      } else if (email.includes('security')) {
        mockUser = {
          userId: 3,
          name: 'Security Staff',
          email,
          phone: '+1234567890',
          role: 'security_staff',
          societyId: 1,
          isVerified: true
        };
      } else {
        mockUser = {
          userId: 4,
          name: 'John Resident',
          email,
          phone: '+1234567890',
          role: 'resident',
          societyId: 1,
          flatId: 101,
          isVerified: true
        };
      }

      // Store user data and mock token
      localStorage.setItem('housinghub_user', JSON.stringify(mockUser));
      localStorage.setItem('housinghub_token', 'mock_jwt_token');
      
      setUser(mockUser);
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('housinghub_user');
    localStorage.removeItem('housinghub_token');
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};