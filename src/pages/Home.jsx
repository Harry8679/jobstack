import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-36 w-full bg-gradient-to-b from-emerald-600/20 dark:from-emerald-600/40 via-emerald-600/10 dark:via-emerald-600/20 to-transparent">
        <div className="container grid md:grid-cols-2 items-center gap-10 mt-10">
          {/* Job Search Form */}
          <div className="order-2 md:order-1">
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm dark:shadow-gray-800 p-6 md:p-8">
              <h4 className="text-3xl font-semibold mb-3">Find Your Expected Job</h4>
              <p className="text-slate-400">
                Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.
              </p>
              <form className="mt-6 grid gap-4">
                <div>
                  <label className="font-medium">Search :</label>
                  <input
                    type="text"
                    placeholder="Search your Keywords"
                    className="mt-2 w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-slate-800 border"
                  />
                </div>
                <div>
                  <label className="font-medium">Location :</label>
                  <select className="mt-2 w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-slate-800 border">
                    <option>Afghanistan</option>
                    <option>Canada</option>
                    <option>Denmark</option>
                    <option>Gambia</option>
                  </select>
                </div>
                <div>
                  <label className="font-medium">Job Type :</label>
                  <select className="mt-2 w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-slate-800 border">
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Remote Work</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="py-2 px-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-semibold"
                >
                  Search
                </button>
              </form>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="order-1 md:order-2">
            <img src="/assets/images/svg/woman_working_2.svg" alt="Hero" />
          </div>
        </div>
      </section>

      {/* Additional Sections Here */}
      {/* You can split other sections into reusable components like <CompanyLogos />, <HowItWorks />, etc. */}

      <Footer />
    </>
  );
};

export default Home;