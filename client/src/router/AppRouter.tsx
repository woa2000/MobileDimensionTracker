import { Switch, Route, useLocation } from "wouter";
import { authService } from "@/lib/auth";
import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";
import TasksPage from "@/pages/TasksPage";
import ChatPage from "@/pages/ChatPage";
import ProfilePage from "@/pages/ProfilePage";
import CheckinPage from "@/pages/workflow/CheckinPage";
import FormPage from "@/pages/workflow/FormPage";
import MediaPage from "@/pages/workflow/MediaPage";
import BottomNavBar from "@/components/layout/BottomNavBar";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  
  if (!authService.isAuthenticated()) {
    window.location.href = "/";
    return null;
  }
  
  const isWorkflowPage = location.startsWith("/workflow");
  
  return (
    <div className="h-full flex flex-col">
      <div className={`flex-1 ${isWorkflowPage ? "" : "pb-16"}`}>
        {children}
      </div>
      {!isWorkflowPage && <BottomNavBar />}
    </div>
  );
}

export default function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={LoginPage} />
      <Route path="/home">
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      </Route>
      <Route path="/tasks">
        <ProtectedRoute>
          <TasksPage />
        </ProtectedRoute>
      </Route>
      <Route path="/chat">
        <ProtectedRoute>
          <ChatPage />
        </ProtectedRoute>
      </Route>
      <Route path="/profile">
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      </Route>
      <Route path="/workflow/checkin/:taskId?">
        <ProtectedRoute>
          <CheckinPage />
        </ProtectedRoute>
      </Route>
      <Route path="/workflow/form/:taskId?">
        <ProtectedRoute>
          <FormPage />
        </ProtectedRoute>
      </Route>
      <Route path="/workflow/media/:taskId?">
        <ProtectedRoute>
          <MediaPage />
        </ProtectedRoute>
      </Route>
      <Route>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary mb-2">404</h1>
            <p className="text-muted-foreground">Página não encontrada</p>
          </div>
        </div>
      </Route>
    </Switch>
  );
}
