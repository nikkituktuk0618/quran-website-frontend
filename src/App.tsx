import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ProtectedRoutes from "./components/common/ProtectedRoutes";
import AdminLogin from "./pages/AdminLogin";
import Videos from "./components/Admin/Videos";
import Playlists from "./components/Admin/Playlists";
import Students from "./components/Admin/Students";
import Courses from "./components/Admin/Courses";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dailyquran/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoutes>
                <Admin />
              </ProtectedRoutes>
            }
          >
            <Route
              path="students"
              element={<Students />}
            />
            <Route path="playlist" element={<Playlists />} />
            <Route path="courses" element={<Courses />} />
            <Route
              path="video"
              element={<Videos />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
