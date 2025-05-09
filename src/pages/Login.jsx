import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoDark from '../assets/images/logo-dark.png';
import LogoLight from '../assets/images/logo-light.png';
import bg3 from '../assets/images/hero/bg3.jpg';

const Login = () => {
  const [formData, setFormData] = useState({
    telephone: '',
    password: '',
    remember: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.telephone) newErrors.telephone = 'Numéro requis';
    if (!formData.password) newErrors.password = 'Mot de passe requis';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getInputClass = (field) =>
    `mt-1 w-full px-4 py-2 border rounded-md bg-white dark:bg-slate-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
      errors[field] ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
    }`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Connexion réussie !');
      // Ici tu peux appeler ton API
    }
  };

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

            <h5 className="my-6 text-xl text-white font-semibold text-center">Connexion</h5>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Numéro de téléphone:
                </label>
                <input
                  id="telephone"
                  type="text"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="+24166626745"
                  className={getInputClass('telephone')}
                />
                {errors.telephone && <p className="text-xs text-red-500 mt-1">{errors.telephone}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mot de passe:
                </label>
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Renseigner votre mot de passe"
                  className={getInputClass('password')}
                />
                {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
              </div>

              <div className="flex items-center justify-between">
                <label className="inline-flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="form-checkbox text-emerald-600 dark:bg-slate-800"
                  />
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    Se souvenir de moi
                  </span>
                </label>
                <Link to="/reset-password" className="text-sm text-emerald-600 hover:underline">
                  Mot de passe oublié?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md transition duration-150"
              >
                Connexion
              </button>

              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Vous n'avez pas de compte ?{' '}
                <Link to="/inscription" className="font-medium text-emerald-600 hover:underline">
                  Inscription
                </Link>
              </p>
            </form>
          </div>

          <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 text-center">
            <p className="mb-0 text-gray-400 text-xs font-medium">
              © {new Date().getFullYear()} Jobstack. Designed by{' '}
              <a href="https://shreethemes.in" target="_blank" rel="noreferrer" className="text-reset">
                Shreethemes
              </a>.
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-3 right-3">
        <Link to="/" className="size-9 inline-flex items-center justify-center text-base font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-md">
          <i className="feather feather-arrow-left" />
        </Link>
      </div>
    </section>
  );
};

export default Login;