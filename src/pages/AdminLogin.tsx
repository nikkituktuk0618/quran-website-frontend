import { postCaller } from '@/lib/apiCaller';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function AdminLogin() {
      const [showPassword, setShowPassword] = useState(false);
      const [userData, setUserData] = useState({
        email: "",
        password: "",
      });
      const route = useNavigate();
    
      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        type: string
      ) => {
        const inputText = e.target.value;
        setUserData((prev) => ({
          ...prev,
          [type]: inputText,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
          email: userData.email,
          password: userData.password,
        };
        const response = await postCaller({
          url: "auth/login",
          payload: payload,
          type: "withoutToken",
        });
        if (response.type === "success") {
          const userData = response.response
          localStorage.setItem("accessToken",userData.token)
          if(userData?.user?.role === "admin"){
            route("/admin")
          }else{
            route("/login")
          }
        }
      };
  return (
        <div className="flex flex-col items-center justify-center min-h-screen">
    
          {/* Right side - Login Form */}
          <div className="w-full md:w-2/3 bg-white p-6 flex items-center justify-center relative">
            <div className="absolute top-0 right-0">
              <img
                src="/leaves-2.png"
                alt="Decorative leaves"
                className="w-32 h-32 object-contain opacity-70"
              />
            </div>
    
            <div className="w-full max-w-md">
              <h1 className="text-2xl font-bold text-center mb-4 font-poppins">
                Admin Login to Qur'an Everyday
              </h1>
    
              <div className="flex items-center my-4">
                <div className="flex-1 border-t border-gray-300"></div>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>
    
              {/* Email Form */}
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-poppins">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-gray-900"
                    placeholder="username@gmail.com"
                    onChange={(e) => handleChange(e, "email")}
                  />
                </div>
    
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-poppins">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-gray-900"
                      placeholder="••••••••"
                      onChange={(e) => handleChange(e, "password")}
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 font-poppins"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7A9.97 9.97 0 014.02 8.971m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
    
                <button
                  type="submit"
                  className="w-full bg-[#DEC88E] hover:bg-[#beab79] text-black font-medium py-2 px-4 rounded-full transition-colors mb-6 font-poppins"
                  onClick={handleSubmit}
                >
                  LOGIN
                </button>
              </form>
            </div>
    
            <div className="absolute bottom-0 left-0">
              <img
                src="/leaves-1.png"
                alt="Decorative leaves"
                className="w-32 h-32 object-contain opacity-70"
              />
            </div>
          </div>
        </div>
  )
}

export default AdminLogin