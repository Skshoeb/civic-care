import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/layouts/DashboardLayout";
import LoginPage from "@/pages/LoginPage";
import RegisterResidentPage from "@/pages/RegisterResidentPage";
import RegisterSocietyPage from "@/pages/RegisterSocietyPage";
import Dashboard from "@/pages/Dashboard";
import UnauthorizedPage from "@/pages/UnauthorizedPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register/resident" element={<RegisterResidentPage />} />
            <Route path="/register/society" element={<RegisterSocietyPage />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            
            {/* Protected Dashboard Routes */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <Dashboard />
                  </DashboardLayout>
                </ProtectedRoute>
              } 
            />
            
            {/* Additional protected routes will be added here */}
            <Route 
              path="/societies" 
              element={
                <ProtectedRoute allowedRoles={['super_admin']}>
                  <DashboardLayout>
                    <div>Societies Management - Coming Soon</div>
                  </DashboardLayout>
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/flats" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <DashboardLayout>
                    <div>Flats Management - Coming Soon</div>
                  </DashboardLayout>
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/visitor-logging" 
              element={
                <ProtectedRoute allowedRoles={['security_staff']}>
                  <DashboardLayout>
                    <div>Visitor Logging - Coming Soon</div>
                  </DashboardLayout>
                </ProtectedRoute>
              } 
            />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
