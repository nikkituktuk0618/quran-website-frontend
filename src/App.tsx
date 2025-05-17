import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Selling from "./pages/Selling";
import ProtectedRoutes from "./components/common/ProtectedRoutes";
import AdminLogin from "./pages/AdminLogin";
import Students from "./components/Admin/Students";
import Courses from "./components/Admin/Courses";
import PlaylistByID from "./components/Admin/PlayList/PlaylistByID";
import CourseByID from "./components/Admin/Course/CourseByID";
import VideoByID from "./components/Admin/Videos/VideoByID";
import CreateVideo from "./components/Admin/Videos/CreateVideos";
import CreatePlaylist from "./components/Admin/PlayList/CreatePlaylist";
import PublicCourses from "./pages/PublicCourses";
import UserCourses from "./components/User/Courses/UserCourses";
import Contact from "./pages/Contact";
import Playlist from "./components/User/Playlist/Playlist";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<PublicCourses />} />
          <Route path="/selling" element={<Selling />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dailyquran/admin/login" element={<AdminLogin />} />

          {/*................. for user................. */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes type="student">
                <UserCourses />
              </ProtectedRoutes>
            }
          />

          <Route
              path="/playlist/:playlistID"
              element={
                <ProtectedRoutes type="student">
                  <Playlist />
                </ProtectedRoutes>
              }
            />

          {/*................. for admin................. */}
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
              element={
                <ProtectedRoutes>
                  <Students />
                </ProtectedRoutes>
              }
            />
            <Route
              path="createplaylist"
              element={
                <ProtectedRoutes>
                  <CreatePlaylist />
                </ProtectedRoutes>
              }
            />
            <Route
              path="playlist/:playlistID"
              element={
                <ProtectedRoutes>
                  <PlaylistByID />
                </ProtectedRoutes>
              }
            />
            <Route
              path="courses"
              element={
                <ProtectedRoutes>
                  <Courses />
                </ProtectedRoutes>
              }
            >
              <Route
                path=":courseID"
                element={
                  <ProtectedRoutes>
                    <CourseByID />
                  </ProtectedRoutes>
                }
              >
                <Route
                  path="playlist/:playlistID"
                  element={
                    <ProtectedRoutes>
                      <PlaylistByID />
                    </ProtectedRoutes>
                  }
                >
                  <Route
                    path="video/:videoID"
                    element={
                      <ProtectedRoutes>
                        <VideoByID />
                      </ProtectedRoutes>
                    }
                  />
                </Route>
              </Route>
            </Route>
            <Route
              path="createvideo"
              element={
                <ProtectedRoutes>
                  <CreateVideo />
                </ProtectedRoutes>
              }
            />
            <Route
              path="video/:videoID"
              element={
                <ProtectedRoutes>
                  <VideoByID />
                </ProtectedRoutes>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
