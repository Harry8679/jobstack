import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoDark from '../assets/images/logo-dark.png';
import LogoLight from '../assets/images/logo-light.png';
import bg3 from '../assets/images/hero/bg3.jpg';

const Signup = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    password: '',
    confirmPassword: '',
    accept: false,
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

    if (!formData.nom) newErrors.nom = 'Nom requis';
    if (!formData.prenom) newErrors.prenom = 'Prénom requis';
    if (!formData.telephone) newErrors.telephone = 'Téléphone requis';
    if (!formData.password) newErrors.password = 'Mot de passe requis';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirmation requise';
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      newErrors.passwordMatch = 'Les mots de passe ne correspondent pas';
    }
    if (!formData.accept) newErrors.accept = 'Vous devez accepter les conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Inscription réussie !');
      // Ici, tu peux envoyer les données vers ton backend.
    }
  };

  const getInputClass = (field, matchCheck = false) => {
    if (matchCheck && formData.password && formData.confirmPassword) {
      return formData.password === formData.confirmPassword
        ? 'border-green-500'
        : 'border-red-500';
    }

    return errors[field] ? 'border-red-500' : 'border-gray-300 dark:border-gray-700';
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

            <h5 className="my-6 text-xl font-semibold text-center text-white">Inscription</h5>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {[
                { id: 'nom', label: 'Nom :', placeholder: 'ANGUILET' },
                { id: 'prenom', label: 'Prénom :', placeholder: 'Thomas' },
                { id: 'telephone', label: 'Numéro de téléphone :', placeholder: '+24166626745' },
              ].map(({ id, label, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {label}
                  </label>
                  <input
                    id={id}
                    type="text"
                    placeholder={placeholder}
                    value={formData[id]}
                    onChange={handleChange}
                    className={`mt-1 w-full px-4 py-2 border rounded-md bg-white dark:bg-slate-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 ${getInputClass(id)}`}
                  />
                  {errors[id] && <p className="text-xs text-red-500 mt-1">{errors[id]}</p>}
                </div>
              ))}

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mot de passe:
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Renseigner votre mot de passe"
                  value={formData.password}
                  onChange={handleChange}
                  className={`mt-1 w-full px-4 py-2 border rounded-md bg-white dark:bg-slate-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 ${getInputClass('password', true)}`}
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Confirmer le mot de passe:
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Veuillez confirmer votre mot de passe"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`mt-1 w-full px-4 py-2 border rounded-md bg-white dark:bg-slate-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 ${getInputClass('confirmPassword', true)}`}
                />
                {errors.passwordMatch && (
                  <p className="text-xs text-red-500 mt-1">{errors.passwordMatch}</p>
                )}
              </div>

              <div className="flex items-center">
                <input
                  id="accept"
                  type="checkbox"
                  checked={formData.accept}
                  onChange={handleChange}
                  className={`size-4 me-2 accent-green-600 border ${errors.accept ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                />
                <label htmlFor="accept" className="text-sm text-slate-600 dark:text-slate-400">
                  J'accepte{' '}
                  <Link to="/terms" className="text-emerald-600 hover:underline">
                    les Termes et Conditions
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md transition duration-150"
              >
                Inscription
              </button>

              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Avez-vous déjà un compte ?{' '}
                <Link to="/connexion" className="font-medium text-emerald-600 hover:underline">
                  Connexion
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