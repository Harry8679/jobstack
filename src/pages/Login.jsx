// src/pages/Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LogoDark from '../assets/images/logo-dark.png';
import LogoLight from '../assets/images/logo-light.png';
import bg3 from '../assets/images/hero/bg3.jpg';

const Login = () => {
  return (
    <section
      className="h-screen flex items-center justify-center relative overflow-hidden bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${bg3})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>

      <div className="container relative z-10">
        <div className="max-w-md w-full mx-auto relative overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
            <div className="p-6">
              <Link to="/">
                <img src={LogoDark} alt="Logo" className="mx-auto h-[24px] block dark:hidden" />
                <img src={LogoLight} alt="Logo" className="mx-auto h-[24px] dark:block hidden" />
              </Link>

              <h5 className="my-6 text-xl font-semibold">Login</h5>

              <form className="text-start">
                <div className="grid grid-cols-1">
                  <div className="mb-4 text-start">
                    <label htmlFor="LoginEmail" className="font-semibold">Email Address:</label>
                    <input type="email" id="LoginEmail" className="form-input mt-3 rounded-md w-full px-4 py-2 border" placeholder="name@example.com" />
                  </div>

                  <div className="mb-4 text-start">
                    <label htmlFor="LoginPassword" className="font-semibold">Password:</label>
                    <input type="password" id="LoginPassword" className="form-input mt-3 rounded-md w-full px-4 py-2 border" placeholder="Password:" />
                  </div>

                  <div className="flex justify-between mb-4">
                    <div className="inline-flex items-center">
                      <input id="RememberMe" type="checkbox" className="size-4 me-2 accent-green-600 border border-gray-200 dark:border-gray-800" />
                      <label htmlFor="RememberMe" className="text-slate-400">Remember me</label>
                    </div>
                    <Link to="/reset-password" className="text-slate-400 text-sm">Forgot password?</Link>
                  </div>

                  <div className="mb-4">
                    <button type="submit" className="py-2 px-5 w-full bg-emerald-600 hover:bg-emerald-700 border border-emerald-600 hover:border-emerald-700 text-white rounded-md font-semibold">
                      Login / Sign in
                    </button>
                  </div>

                  <div className="text-center">
                    <span className="text-slate-400 me-2">Don't have an account?</span>
                    <Link to="/inscription" className="text-slate-900 dark:text-white font-bold">Sign Up</Link>
                  </div>
                </div>
              </form>
            </div>

            <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 text-center">
              <p className="mb-0 text-gray-400 font-medium">
                © {new Date().getFullYear()} Jobstack. Designed by{' '}
                <a href="https://shreethemes.in" target="_blank" rel="noreferrer" className="text-reset">Shreethemes</a>.
              </p>
            </div>
        </div>
      </div>

      <div className="fixed bottom-3 right-3">
        <Link to="/" className="back-button size-9 inline-flex items-center justify-center text-base font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-md">
          <i className="feather feather-arrow-left" />
        </Link>
      </div>
    </section>
  );
};

export default Login;