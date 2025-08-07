import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Car, 
  Clock, 
  Users, 
  AlertTriangle,
  Plus,
  Eye,
  LogOut as LogOutIcon,
  UserCheck,
  Shield,
  Activity
} from 'lucide-react';

const SecurityStaffDashboard = () => {
  // Mock data - will be replaced with real API calls and real-time updates
  const stats = {
    activeVisitors: 8,
    totalVisitorsToday: 25,
    averageVisitDuration: "2.5 hrs",
    emergencyAlerts: 0
  };

  const activeVisitors = [
    { 
      id: 1, 
      name: "John Smith", 
      flat: "A-101", 
      purpose: "Delivery", 
      entryTime: "14:30",
      vehicleNo: "MH 01 AB 1234",
      type: "delivery"
    },
    { 
      id: 2, 
      name: "Sarah Wilson", 
      flat: "B-205", 
      purpose: "Guest", 
      entryTime: "15:45",
      vehicleNo: "MH 02 CD 5678",
      type: "guest"
    },
    { 
      id: 3, 
      name: "Mike Johnson", 
      flat: "C-304", 
      purpose: "Maintenance", 
      entryTime: "16:15",
      vehicleNo: "MH 03 EF 9012",
      type: "service"
    },
  ];

  const recentEntries = [
    { 
      id: 1, 
      name: "David Brown", 
      flat: "A-102", 
      entryTime: "13:20",
      exitTime: "14:10",
      purpose: "Guest",
      duration: "50 min"
    },
    { 
      id: 2, 
      name: "Emma Davis", 
      flat: "B-201", 
      entryTime: "12:30",
      exitTime: "13:45",
      purpose: "Delivery",
      duration: "1 hr 15 min"
    },
  ];

  const getVisitorTypeColor = (type: string) => {
    switch (type) {
      case 'guest': return 'default';
      case 'delivery': return 'secondary';
      case 'service': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Security Dashboard</h1>
          <p className="text-muted-foreground">Real-time visitor management and security monitoring</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Activity className="h-4 w-4 mr-2" />
            Real-time Status
          </Button>
          <Button variant="gradient">
            <Plus className="h-4 w-4 mr-2" />
            Log New Visitor
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Visitors</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.activeVisitors}</div>
            <p className="text-xs text-muted-foreground">Currently inside</p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Visitors</CardTitle>
            <Car className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">{stats.totalVisitorsToday}</div>
            <p className="text-xs text-muted-foreground">Total entries today</p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Visit Duration</CardTitle>
            <Clock className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{stats.averageVisitDuration}</div>
            <p className="text-xs text-muted-foreground">Today's average</p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Emergency Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-danger" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{stats.emergencyAlerts}</div>
            <p className="text-xs text-muted-foreground">All clear</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Visitors */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Active Visitors
              <Badge variant="secondary" className="ml-auto">Live</Badge>
            </CardTitle>
            <CardDescription>Visitors currently inside the society</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeVisitors.map((visitor) => (
                <div key={visitor.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{visitor.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Flat: {visitor.flat} • Entry: {visitor.entryTime}
                      </p>
                    </div>
                    <Badge variant={getVisitorTypeColor(visitor.type)}>
                      {visitor.type}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <p><span className="font-medium">Purpose:</span> {visitor.purpose}</p>
                      <p><span className="font-medium">Vehicle:</span> {visitor.vehicleNo}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <LogOutIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Entries/Exits */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Entries/Exits</CardTitle>
            <CardDescription>Completed visits today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentEntries.map((entry) => (
                <div key={entry.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold">{entry.name}</h4>
                      <p className="text-sm text-muted-foreground">Flat: {entry.flat}</p>
                    </div>
                    <Badge variant="outline">Completed</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><span className="font-medium">Entry:</span> {entry.entryTime}</p>
                      <p><span className="font-medium">Exit:</span> {entry.exitTime}</p>
                    </div>
                    <div>
                      <p><span className="font-medium">Purpose:</span> {entry.purpose}</p>
                      <p><span className="font-medium">Duration:</span> {entry.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Frequently used security functions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col">
              <UserCheck className="h-6 w-6 mb-2" />
              Bulk Check-Out
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Car className="h-6 w-6 mb-2" />
              Vehicle Register
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <AlertTriangle className="h-6 w-6 mb-2" />
              Emergency Alert
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecurityStaffDashboard;