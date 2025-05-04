import React from 'react';
import { Link } from 'react-router-dom';
import LogoDark from '../assets/images/logo-dark.png';
import LogoLight from '../assets/images/logo-light.png';
import bg3 from '../assets/images/hero/bg3.jpg';

const Signup = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${bg3})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>

      <div className="relative z-10 w-full max-w-sm mx-auto">
        <div className="overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
          <div className="p-6">
            <Link to="/">
              <img src={LogoDark} alt="Logo dark" className="mx-auto h-[24px] block dark:hidden" />
              <img src={LogoLight} alt="Logo light" className="mx-auto h-[24px] hidden dark:block" />
            </Link>

            <h5 className="my-6 text-xl font-semibold text-center">Signup</h5>

            <form className="space-y-4">
              <div>
                <label htmlFor="RegisterName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nom :
                </label>
                <input
                  id="RegisterName"
                  type="text"
                  placeholder="ANGUILET"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-slate-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="RegisterName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Prénom :
                </label>
                <input
                  id="RegisterName"
                  type="text"
                  placeholder="Thomas"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-slate-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="RegisterEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Numéro de téléphone :
                </label>
                <input
                  id="RegisterEmail"
                  type="text"
                  placeholder="+24166626745"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-slate-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="RegisterPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mot de passe:
                </label>
                <input
                  id="RegisterPassword"
                  type="password"
                  placeholder="Renseigner votre mot de passe"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-slate-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="RegisterPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Confirmer le mot de passe:
                </label>
                <input
                  id="RegisterPassword"
                  type="password"
                  placeholder="Veuillez confirmer votre mot de passe"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-slate-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="acceptTandC"
                  type="checkbox"
                  className="size-4 me-2 accent-green-600 border border-gray-300 dark:border-gray-600"
                />
                <label htmlFor="acceptTandC" className="text-sm text-slate-600 dark:text-slate-400">
                  I Accept{' '}
                  <Link to="/terms" className="text-emerald-600 hover:underline">
                    Terms And Condition
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md transition duration-150"
              >
                Register
              </button>

              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{' '}
                <Link to="/connexion" className="font-medium text-emerald-600 hover:underline">
                  Sign in
                </Link>
              </p>
            </form>
          </div>

          <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 text-center">
            <p className="mb-0 text-gray-400 text-xs font-medium">
              © {new Date().getFullYear()} Jobstack. Designed by{' '}
              <a href="https://shreethemes.in/" target="_blank" rel="noreferrer" className="text-reset">
                Shreethemes
              </a>.
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-3 right-3">
        <Link
          to="/"
          className="size-9 inline-flex items-center justify-center text-base font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-md"
        >
          <i className="feather feather-arrow-left" />
        </Link>
      </div>
    </section>
  );
};

export default Signup;
