import useNotification from "@/hooks/useNotification";
import { postCaller } from "@/lib/apiCaller";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const route = useNavigate();
  const {contextHolder,showNotification} = useNotification()

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

  const handleSubmit = async (e:React.ChangeEvent<HTMLFormElement>) => {
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
      const _data = response.response;
      localStorage.setItem("accessToken",_data?.token)
    }else if(response.type === "error"){
      showNotification("error","Failed to login",response.message.error)
    }
  };

  return (
    <>
    {contextHolder}
    <div className="flex min-h-screen">
      {/* Left side - Image placeholder (will be hidden on mobile) */}
      <div className="hidden md:flex md:w-1/2 relative">
        <img
          src="/login.png"
          alt="Quran with golden pages"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <Link to="/" className="text-primary text-2xl font-playfair">
          <div className="absolute top-7 left-7">
            <img src="/logo.png" alt="Logo" className="w-25 h-20" />
          </div>
        </Link>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full md:w-1/2 bg-white p-6 flex items-center justify-center relative">
        <div className="absolute top-0 right-0">
          <img
            src="/leaves-2.png"
            alt="Decorative leaves"
            className="w-32 h-32 object-contain opacity-70"
          />
        </div>

        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4 font-poppins">
            Login to Qur'an Everyday
          </h1>

          {/* Google Sign In Button */}
          {/* <button className="w-full flex items-center justify-center border border-gray-300 rounded-full py-2 px-4 mb-4 hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
          </button>

          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="px-3 text-gray-500 text-sm">or</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div> */}

          {/* Email Form */}
          <form onSubmit={handleSubmit}>
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
              
            >
              LOGIN
            </button>
          </form>

          <div className="text-center text-sm font-poppins">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-amber-700 font-medium hover:underline font-poppins"
            >
              Create an account
            </a>
          </div>
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
    </>
  );
};

export default Login;
