import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, UserCheck, AlertCircle, Plus, Eye, Trash2, Edit } from 'lucide-react';

const SuperAdminDashboard = () => {
  // Mock data - will be replaced with real API calls
  const stats = {
    totalSocieties: 45,
    verifiedSocieties: 38,
    pendingVerification: 7,
    totalAdmins: 38
  };

  const recentSocieties = [
    { id: 1, name: "Green Valley Apartments", city: "Mumbai", status: "pending", admin: "John Doe" },
    { id: 2, name: "Sunrise Heights", city: "Delhi", status: "verified", admin: "Jane Smith" },
    { id: 3, name: "Ocean View Residency", city: "Bangalore", status: "pending", admin: "Mike Johnson" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Super Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage societies and administrators</p>
        </div>
        <Button variant="gradient" size="lg">
          <Plus className="h-4 w-4 mr-2" />
          Add New Society
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Societies</CardTitle>
            <Building className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.totalSocieties}</div>
            <p className="text-xs text-muted-foreground">Across all cities</p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Verified Societies</CardTitle>
            <UserCheck className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{stats.verifiedSocieties}</div>
            <p className="text-xs text-muted-foreground">Active and running</p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Verification</CardTitle>
            <AlertCircle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{stats.pendingVerification}</div>
            <p className="text-xs text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Admins</CardTitle>
            <UserCheck className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">{stats.totalAdmins}</div>
            <p className="text-xs text-muted-foreground">Society administrators</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Societies */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recent Society Registrations</CardTitle>
          <CardDescription>Latest societies registered on the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentSocieties.map((society) => (
              <div key={society.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h4 className="font-semibold">{society.name}</h4>
                    <Badge variant={society.status === 'verified' ? 'default' : 'secondary'}>
                      {society.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {society.city} • Admin: {society.admin}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuperAdminDashboard;