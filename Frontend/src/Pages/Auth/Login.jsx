import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DollarSign } from "lucide-react";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if(isLogin){
            Login(email,password)
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
          <p className="text-gray-400 text-sm mt-1">Smart financial management</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex rounded-xl bg-gray-100 p-1 mb-6">
            <button className="flex-1 py-2 text-sm font-medium rounded-lg transition-all bg-white shadow-sm text-foreground">Login</button>
            <button className='flex-1 py-2 text-sm font-medium rounded-lg transition-all'>Register</button>
          </div>

 <form onSubmit={handleLogin} className="space-y-4">
            
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={!isLogin}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
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
  )
}

export default Login
