// src/pages/Signup.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LogoDark from '../assets/images/logo-dark.png';
import LogoLight from '../assets/images/logo-light.png';
import bg3 from '../assets/images/hero/bg3.jpg';

const Signup = () => {
  return (
    <section
      className="h-screen flex items-center justify-center relative overflow-hidden bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${bg3})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <div className="relative overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
            <div className="p-6">
              <Link to="/">
                <img src={LogoDark} alt="Logo dark" className="mx-auto h-[24px] block dark:hidden" />
                <img src={LogoLight} alt="Logo light" className="mx-auto h-[24px] dark:block hidden" />
              </Link>

              <h5 className="my-6 text-xl font-semibold">Signup</h5>

              <form className="text-start">
                <div className="grid grid-cols-1">
                  <div className="mb-4 text-start">
                    <label htmlFor="RegisterName" className="font-semibold">Your Name:</label>
                    <input
                      id="RegisterName"
                      type="text"
                      placeholder="Harry"
                      className="form-input mt-3 rounded-md w-full px-4 py-2 border"
                    />
                  </div>

                  <div className="mb-4 text-start">
                    <label htmlFor="RegisterEmail" className="font-semibold">Email Address:</label>
                    <input
                      id="RegisterEmail"
                      type="email"
                      placeholder="name@example.com"
                      className="form-input mt-3 rounded-md w-full px-4 py-2 border"
                    />
                  </div>

                  <div className="mb-4 text-start">
                    <label htmlFor="RegisterPassword" className="font-semibold">Password:</label>
                    <input
                      id="RegisterPassword"
                      type="password"
                      placeholder="Password"
                      className="form-input mt-3 rounded-md w-full px-4 py-2 border"
                    />
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center">
                      <input
                        id="acceptTandC"
                        type="checkbox"
                        className="size-4 me-2 accent-green-600 border border-gray-200 dark:border-gray-800"
                      />
                      <label htmlFor="acceptTandC" className="text-slate-400">
                        I Accept{' '}
                        <Link to="/terms" className="text-emerald-600 hover:underline">
                          Terms And Condition
                        </Link>
                      </label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <button
                      type="submit"
                      className="py-2 px-5 w-full bg-emerald-600 hover:bg-emerald-700 border border-emerald-600 hover:border-emerald-700 text-white rounded-md font-semibold"
                    >
                      Register
                    </button>
                  </div>

                  <div className="text-center">
                    <span className="text-slate-400 me-2">Already have an account?</span>
                    <Link to="/connexion" className="text-slate-900 dark:text-white font-bold">Sign in</Link>
                  </div>
                </div>
              </form>
            </div>

            <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 text-center">
              <p className="mb-0 text-gray-400 font-medium">
                © {new Date().getFullYear()} Jobstack. Designed by{' '}
                <a href="https://shreethemes.in/" target="_blank" rel="noreferrer" className="text-reset">
                  Shreethemes
                </a>.
              </p>
            </div>
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

export default Signup;