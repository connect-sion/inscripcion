import React from 'react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full px-3 py-2 border rounded-none appearance-none text-neutral-900 placeholder-neutral-500 border-neutral-300 rounded-t-md focus:outline-none focus:ring-primary-800 focus:border-primary-800 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full px-3 py-2 border rounded-none appearance-none text-neutral-900 placeholder-neutral-500 border-neutral-300 rounded-b-md focus:outline-none focus:ring-primary-800 focus:border-primary-800 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-primary-800 group hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-800"
          >
            Sign in
          </button>
        </div>
      </form>
    </Layout>
  );
}
