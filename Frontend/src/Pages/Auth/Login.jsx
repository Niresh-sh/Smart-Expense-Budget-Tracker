import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DollarSign } from "lucide-react";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isLogin) {
      Login(email, password);
    } else {
      register(name, email, password, confirmPassword);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md animate-scale-in">
          <div className="text-center mb-8">
            <div className="bg-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-2xl font-semibold font-sans">ExpenseTracker</h1>
            <p className="text-gray-400 text-sm mt-1">
              Smart financial management
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex rounded-xl bg-gray-100 p-1 mb-6">
              <button
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isLogin
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  !isLogin
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setIsLogin(false)}
              >
                Register
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={!isLogin}
                    className="w-full border border-gray-300 shadow-2xl rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-gray-300 shadow-2xl rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full border border-gray-300 shadow-2xl rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {!isLogin && (
                  <div className="mt-2">
                    <label className="block text-sm font-medium mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required={!isLogin}
                      className="w-full border border-gray-300 shadow-2xl rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full h-11 rounded-xl font-semibold bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
