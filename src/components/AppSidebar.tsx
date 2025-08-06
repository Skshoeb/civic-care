import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Home,
  Users,
  Shield,
  MessageSquare,
  FileText,
  Settings,
  LogOut,
  User,
  CreditCard,
  Calendar,
  AlertCircle,
  Car,
  Building,
  UserCheck,
  Wrench,
  DollarSign,
  Crown,
  UserCog,
} from "lucide-react";

const getMenuItems = (role: string) => {
  switch (role) {
    case 'super_admin':
      return [
        { title: "Dashboard", url: "/dashboard", icon: Home },
        { title: "Societies", url: "/societies", icon: Building },
        { title: "Verify Societies", url: "/verify-societies", icon: UserCheck },
        { title: "Admins", url: "/admins", icon: Crown },
        { title: "Settings", url: "/settings", icon: Settings },
      ];
    
    case 'admin':
      return [
        { title: "Dashboard", url: "/dashboard", icon: Home },
        { title: "Flats", url: "/flats", icon: Building2 },
        { title: "Wings", url: "/wings", icon: Building },
        { title: "Users", url: "/users", icon: Users },
        { title: "Staff", url: "/staff", icon: UserCog },
        { title: "Complaints", url: "/complaints", icon: AlertCircle },
        { title: "Announcements", url: "/announcements", icon: MessageSquare },
        { title: "Maintenance", url: "/maintenance", icon: Wrench },
        { title: "Amenities", url: "/amenities", icon: Calendar },
        { title: "Bills", url: "/bills", icon: DollarSign },
        { title: "Settings", url: "/settings", icon: Settings },
      ];
    
    case 'resident':
      return [
        { title: "Dashboard", url: "/dashboard", icon: Home },
        { title: "Announcements", url: "/announcements", icon: MessageSquare },
        { title: "Complaints", url: "/complaints", icon: AlertCircle },
        { title: "Amenities", url: "/amenities", icon: Calendar },
        { title: "Bills", url: "/bills", icon: CreditCard },
        { title: "Visitors", url: "/visitors", icon: Car },
        { title: "Profile", url: "/profile", icon: User },
      ];
    
    case 'security_staff':
      return [
        { title: "Dashboard", url: "/dashboard", icon: Home },
        { title: "Visitor Logging", url: "/visitor-logging", icon: Car },
        { title: "Active Visitors", url: "/active-visitors", icon: Users },
        { title: "Reports", url: "/reports", icon: FileText },
        { title: "Profile", url: "/profile", icon: User },
      ];
    
    default:
      return [];
  }
};

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const { user, logout } = useAuth();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  if (!user) return null;

  const menuItems = getMenuItems(user.role);
  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : "hover:bg-sidebar-accent/50";

  const getRoleDisplayName = (role: string) => {
    switch (role) {
      case 'super_admin': return 'Super Admin';
      case 'admin': return 'Admin';
      case 'resident': return 'Resident';
      case 'security_staff': return 'Security Staff';
      default: return role;
    }
  };

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-3 p-4">
          <Building2 className="h-8 w-8 text-sidebar-primary" />
          {!collapsed && (
            <div>
              <h2 className="font-bold text-lg text-sidebar-foreground">HousingHub</h2>
              <p className="text-xs text-sidebar-foreground/60">{getRoleDisplayName(user.role)}</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <div className="p-4">
          {!collapsed && (
            <div className="mb-3">
              <p className="text-sm font-medium text-sidebar-foreground">{user.name}</p>
              <p className="text-xs text-sidebar-foreground/60">{user.email}</p>
            </div>
          )}
          <Button
            variant="ghost"
            size={collapsed ? "icon" : "sm"}
            onClick={logout}
            className="w-full text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <LogOut className="h-4 w-4" />
            {!collapsed && <span className="ml-2">Logout</span>}
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}