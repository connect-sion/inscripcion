import React, { ReactNode, useEffect, useState } from 'react';

import { Select } from './form/Select';

import { useDbContext } from '../hooks/useDbContext';
import * as texts from '../utils/translation';
import { capitalize, optionsFromObj } from '../utils/utils';

interface LayoutProps {
  children: ReactNode | ReactNode[];
}

const langs: Record<string, string> = {
  es: 'Español',
  pr: 'Portugues',
  en: 'English',
  fr: 'Français',
  de: 'Deutch',
  it: 'Italiano',
};
export default function Layout({ children }: LayoutProps) {
  // Query for churches to backend
  const { church } = useDbContext();
  const [churchList, setChurchList] = useState<string[]>([]);
  useEffect(() => {
    church.get().then((query) => {
      let names: string[] = [];
      query.forEach((doc) => names.push(doc.id));
      setChurchList(names);
    });
  }, [church]);

  // Read church from state
  const [churchStorage, setChurchStorage] = useState<string>(
    localStorage.getItem('churchStorage') || 'lausanne',
  );
  useEffect(() => {
    localStorage.setItem('churchStorage', churchStorage);
  }, [churchStorage]);

  // Read language from state
  const langsOptions = optionsFromObj(langs);
  const [langStorage, setLangStorage] = useState(
    localStorage.getItem('langStorage') || 'es',
  );
  useEffect(() => {
    localStorage.setItem('langStorage', langStorage);
  }, [langStorage]);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* Titles */}
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

        {/* General options */}
        <div className="flex justify-between">
          <Select
            className="w-48"
            label={texts.es.langs}
            options={langsOptions}
            selected={{ label: langs[langStorage], value: langStorage }}
            onSelect={(sel) => setLangStorage(sel?.value || 'es')}
          />
          <Select
            className="w-48"
            label={texts.es.churches}
            options={churchList.map((val) => ({
              label: capitalize(val),
              value: val,
            }))}
            selected={{
              label: capitalize(churchStorage),
              value: churchStorage,
            }}
            onSelect={(sel) => setChurchStorage(sel?.value || 'lausanne')}
          />
        </div>

        {/* Main content */}
        {children}
      </div>
    </div>
  );
}
