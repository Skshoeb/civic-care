import { useAuth } from '@/contexts/AuthContext';
import SuperAdminDashboard from '@/components/dashboards/SuperAdminDashboard';
import AdminDashboard from '@/components/dashboards/AdminDashboard';
import ResidentDashboard from '@/components/dashboards/ResidentDashboard';
import SecurityStaffDashboard from '@/components/dashboards/SecurityStaffDashboard';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) return null;

  const renderDashboard = () => {
    switch (user.role) {
      case 'super_admin':
        return <SuperAdminDashboard />;
      case 'admin':
        return <AdminDashboard />;
      case 'resident':
        return <ResidentDashboard />;
      case 'security_staff':
        return <SecurityStaffDashboard />;
      default:
        return <div>Invalid user role</div>;
    }
  };

  return renderDashboard();
};

export default Dashboard;