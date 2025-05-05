import React from 'react';
import { Link } from 'react-router-dom';
import LogoLight from '../assets/images/logo-light.png';

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 dark:bg-slate-800">
      <div className="container">
        <div className="grid grid-cols-1">
          <div className="relative py-12">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
              <div className="md:col-span-3">
                <Link to="/" className="flex justify-center md:justify-start focus:outline-none">
                  <img src={LogoLight} alt="Logo" />
                </Link>
              </div>
              <div className="md:col-span-9">
                <ul className="list-disc footer-list md:text-end text-center space-x-3">
                  <li className="inline-block"><Link to="/" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium">Home</Link></li>
                  <li className="inline-block mt-[10px] md:mt-0"><Link to="/services" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium">How it works</Link></li>
                  <li className="inline-block mt-[10px] md:mt-0"><Link to="/create-job" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium">Create a job</Link></li>
                  <li className="inline-block mt-[10px] md:mt-0"><Link to="/aboutus" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium">About us</Link></li>
                  <li className="inline-block mt-[10px] md:mt-0"><Link to="/contact" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium">Contact us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[30px] border-t border-gray-800 dark:border-gray-700">
        <div className="container text-center">
          <div className="grid md:grid-cols-2 items-center gap-6">
            <div className="md:text-start text-center">
              <p className="mb-0 text-gray-300 font-medium">
                © {new Date().getFullYear()} Jobstack. Design with <i className="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" rel="noreferrer" className="text-reset">Shreethemes</a>.
              </p>
            </div>
            <ul className="list-none md:text-end text-center space-x-0.5">
              {[
                { icon: 'uil-shopping-cart', link: 'https://1.envato.market/jobstack' },
                { icon: 'uil-dribbble', link: 'https://dribbble.com/shreethemes' },
                { icon: 'uil-behance', link: 'https://www.behance.net/shreethemes' },
                { icon: 'uil-linkedin', link: 'http://linkedin.com/company/shreethemes' },
                { icon: 'uil-facebook-f', link: 'https://www.facebook.com/shreethemes' },
                { icon: 'uil-instagram', link: 'https://www.instagram.com/shreethemes/' },
                { icon: 'uil-twitter', link: 'https://twitter.com/shreethemes' },
                { icon: 'uil-envelope', link: 'mailto:support@shreethemes.in' },
              ].map(({ icon, link }, i) => (
                <li key={i} className="inline">
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="size-8 inline-flex items-center justify-center text-base font-semibold border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 hover:bg-emerald-600 text-white transition duration-500"
                  >
                    <i className={`uil ${icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
