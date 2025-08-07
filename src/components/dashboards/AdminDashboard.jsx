import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Users, 
  AlertCircle, 
  MessageSquare, 
  Wrench, 
  Calendar,
  DollarSign,
  TrendingUp,
  Plus
} from 'lucide-react';

const AdminDashboard = () => {
  // Mock data - will be replaced with real API calls
  const stats = {
    totalFlats: 120,
    occupiedFlats: 95,
    totalResidents: 285,
    activeComplaints: 12,
    maintenanceDue: 45000,
    amenityBookings: 28
  };

  const recentComplaints = [
    { id: 1, title: "Water leakage in bathroom", flat: "A-101", status: "pending", priority: "high" },
    { id: 2, title: "Elevator not working", flat: "B-205", status: "in-progress", priority: "high" },
    { id: 3, title: "Parking space issue", flat: "C-304", status: "resolved", priority: "medium" },
  ];

  const upcomingBookings = [
    { id: 1, amenity: "Swimming Pool", date: "2024-01-15", time: "10:00 AM", resident: "John Doe" },
    { id: 2, amenity: "Community Hall", date: "2024-01-16", time: "6:00 PM", resident: "Jane Smith" },
    { id: 3, amenity: "Gym", date: "2024-01-17", time: "7:00 AM", resident: "Mike Johnson" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your society operations</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Flat
          </Button>
          <Button variant="gradient">
            <MessageSquare className="h-4 w-4 mr-2" />
            New Announcement
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Flats</CardTitle>
            <Building2 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.totalFlats}</div>
            <p className="text-xs text-muted-foreground">
              {stats.occupiedFlats} occupied • {stats.totalFlats - stats.occupiedFlats} vacant
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Residents</CardTitle>
            <Users className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">{stats.totalResidents}</div>
            <p className="text-xs text-muted-foreground">Active residents</p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Complaints</CardTitle>
            <AlertCircle className="h-4 w-4 text-danger" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-danger">{stats.activeComplaints}</div>
            <p className="text-xs text-muted-foreground">Needs attention</p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Maintenance Due</CardTitle>
            <DollarSign className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">₹{stats.maintenanceDue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Amenity Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{stats.amenityBookings}</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {Math.round((stats.occupiedFlats / stats.totalFlats) * 100)}%
            </div>
            <p className="text-xs text-muted-foreground">+2% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Complaints */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Complaints</CardTitle>
            <CardDescription>Latest complaints from residents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentComplaints.map((complaint) => (
                <div key={complaint.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{complaint.title}</h4>
                    <p className="text-sm text-muted-foreground">Flat: {complaint.flat}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={
                        complaint.priority === 'high' ? 'destructive' : 
                        complaint.priority === 'medium' ? 'secondary' : 'default'
                      }
                    >
                      {complaint.priority}
                    </Badge>
                    <Badge variant="outline">{complaint.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Bookings */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Upcoming Amenity Bookings</CardTitle>
            <CardDescription>Scheduled amenity bookings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{booking.amenity}</h4>
                    <p className="text-sm text-muted-foreground">
                      {booking.date} at {booking.time}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{booking.resident}</p>
                    <Badge variant="outline">Confirmed</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;