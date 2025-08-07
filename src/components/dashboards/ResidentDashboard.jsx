import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  AlertCircle, 
  Calendar, 
  CreditCard,
  Bell,
  Car,
  Plus,
  Clock,
  CheckCircle
} from 'lucide-react';

const ResidentDashboard = () => {
  // Mock data - will be replaced with real API calls
  const stats = {
    activeComplaints: 2,
    upcomingBookings: 1,
    pendingBills: 3,
    totalVisitors: 8
  };

  const recentAnnouncements = [
    { 
      id: 1, 
      title: "Water Supply Maintenance", 
      content: "Water supply will be interrupted on Jan 15th from 10 AM to 2 PM for maintenance work.",
      date: "2024-01-12",
      urgent: true
    },
    { 
      id: 2, 
      title: "New Year Celebration", 
      content: "Join us for the New Year celebration in the community hall on Dec 31st at 8 PM.",
      date: "2024-01-10",
      urgent: false
    },
    { 
      id: 3, 
      title: "Parking Rules Update", 
      content: "New parking rules are now in effect. Please check the notice board for details.",
      date: "2024-01-08",
      urgent: false
    },
  ];

  const myComplaints = [
    { id: 1, title: "AC not working", status: "in-progress", date: "2024-01-10" },
    { id: 2, title: "Window latch broken", status: "pending", date: "2024-01-12" },
  ];

  const upcomingBookings = [
    { id: 1, amenity: "Swimming Pool", date: "2024-01-15", time: "10:00 AM", status: "confirmed" },
  ];

  const pendingBills = [
    { id: 1, type: "Maintenance", amount: 5500, dueDate: "2024-01-20" },
    { id: 2, type: "Amenity (Swimming Pool)", amount: 200, dueDate: "2024-01-18" },
    { id: 3, type: "Maintenance", amount: 5500, dueDate: "2024-02-20" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <p className="text-muted-foreground">Here's what's happening in your society</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            New Complaint
          </Button>
          <Button variant="gradient">
            <Calendar className="h-4 w-4 mr-2" />
            Book Amenity
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Complaints</CardTitle>
            <AlertCircle className="h-4 w-4 text-danger" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-danger">{stats.activeComplaints}</div>
            <p className="text-xs text-muted-foreground">Active complaints</p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{stats.upcomingBookings}</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Bills</CardTitle>
            <CreditCard className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{stats.pendingBills}</div>
            <p className="text-xs text-muted-foreground">Pay now</p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
            <Car className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">{stats.totalVisitors}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Announcements */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Recent Announcements
            </CardTitle>
            <CardDescription>Latest updates from management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAnnouncements.map((announcement) => (
                <div key={announcement.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium">{announcement.title}</h4>
                    {announcement.urgent && (
                      <Badge variant="destructive">Urgent</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {announcement.content}
                  </p>
                  <p className="text-xs text-muted-foreground">{announcement.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* My Complaints & Bills */}
        <div className="space-y-6">
          {/* My Complaints */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>My Complaints</CardTitle>
              <CardDescription>Track your complaint status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {myComplaints.map((complaint) => (
                  <div key={complaint.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div>
                      <h4 className="font-medium">{complaint.title}</h4>
                      <p className="text-sm text-muted-foreground">{complaint.date}</p>
                    </div>
                    <Badge variant={complaint.status === 'in-progress' ? 'default' : 'secondary'}>
                      {complaint.status === 'in-progress' ? (
                        <Clock className="h-3 w-3 mr-1" />
                      ) : (
                        <CheckCircle className="h-3 w-3 mr-1" />
                      )}
                      {complaint.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pending Bills */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Pending Bills</CardTitle>
              <CardDescription>Bills awaiting payment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pendingBills.map((bill) => (
                  <div key={bill.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div>
                      <h4 className="font-medium">{bill.type}</h4>
                      <p className="text-sm text-muted-foreground">Due: {bill.dueDate}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{bill.amount}</p>
                      <Button size="sm" variant="outline">Pay Now</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResidentDashboard;