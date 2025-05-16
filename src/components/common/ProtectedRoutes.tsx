import NotFound from "@/pages/NotFound";
import { decodeToken, isTokenExpired } from "@/utils/helper/tokens";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ children, type = "admin" }) {
  const [loading, setLoading] = useState({
    loading: true,
    unautherized: false,
  });
  const [tokenExpired, setTokenExpired] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (type === "admin") {
      authenticateAdmin();
    } else {
      authenticateUser();
    }
  }, [type]);

  const authenticateUser = () => {
    const decodedToken = decodeToken();
    if (decodedToken?.role === "student") {
      if (isTokenExpired(decodedToken?.exp)) {
        setTokenExpired(true);
        setLoading({
          loading: false,
          unautherized: false,
        });
      } else {
        setLoading({
          loading: false,
          unautherized: false,
        });
      }
    } else {
      setLoading({
        loading: false,
        unautherized: true,
      });
      navigate("/login");
    }
  };

  const authenticateAdmin = () => {
    const decodedToken = decodeToken();
    if (decodedToken?.role === "admin") {
      if (isTokenExpired(decodedToken?.exp)) {
        setTokenExpired(true);
        setLoading({
          loading: false,
          unautherized: false,
        });
      } else {
        setLoading({
          loading: false,
          unautherized: false,
        });
      }
    } else {
      setLoading({
        loading: false,
        unautherized: true,
      });
      navigate("/dailyquran/admin/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    if (type === "admin") {
      navigate("/dailyquran/admin/login");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="h-full">
      {loading.loading ? (
        <div className="h-screen w-screen flex items-center justify-center">
          loading...
        </div>
      ) : loading.unautherized ? (
        "loading..."
      ) : (
        <>
          {tokenExpired ? (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 max-w-sm mx-4 shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Session Expired
                </h3>
                <p className="text-gray-600 mb-6">
                  Your session has expired. Please login again to continue.
                </p>
                <button
                  onClick={handleLogout}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            children
          )}
        </>
      )}
    </div>
  );
}

export default ProtectedRoutes;
