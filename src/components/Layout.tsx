import React, { ReactNode, useEffect } from 'react';
import { useDbContext } from '../utils/hooks';
import * as texts from '../utils/translation';

interface LayoutProps {
  children: ReactNode | ReactNode[];
}
export default function Layout({ children }: LayoutProps) {
  const { db } = useDbContext();
  useEffect(() => {
    db?.collection('church')
      .get()
      .then((query) => {
        query.forEach((doc) => {
          console.log({ id: doc.id, data: doc.data() });
        });
      });
  });
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="w-auto h-40 mx-auto"
            src={process.env.PUBLIC_URL + '/idmji.jpg'}
            alt={texts.es.churchName}
          />
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            {texts.es.title}
          </h2>
        </div>
        {children}
      </div>
    </div>
  );
}
