import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirect to dashboard (which will redirect to login if not authenticated)
  return <Navigate to="/dashboard" replace />;
};

export default Index;
