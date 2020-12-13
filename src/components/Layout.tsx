import React, { ReactNode, useEffect, useState } from 'react';

import { Select } from './form/Select';

import { useDbContext } from '../hooks/useDbContext';
import * as texts from '../utils/translation';
import {
  capitalize,
  getChurch,
  getLang,
  optionsFromObj,
  setChurch,
  setLang,
} from '../utils/utils';

interface LayoutProps {
  subtitle?: (lang: Langs) => string;
  children: (lang: Langs) => ReactNode | ReactNode[];
}

type Langs = 'es' | 'pr' | 'en' | 'fr' | 'de' | 'it';
const langs: Record<Langs, string> = {
  es: 'Español',
  pr: 'Portugues',
  en: 'English',
  fr: 'Français',
  de: 'Deutch',
  it: 'Italiano',
};
export default function Layout({ subtitle, children }: LayoutProps) {
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
  const [churchStorage, setChurchStorage] = useState<string>(getChurch);
  useEffect(() => {
    setChurch(churchStorage);
  }, [churchStorage]);

  // Read language from state
  const langsOptions = optionsFromObj(langs);
  const [langStorage, setLangStorage] = useState<Langs>(getLang);
  useEffect(() => {
    setLang(langStorage);
  }, [langStorage]);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-neutral-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* Titles */}
        <div>
          <img
            className="w-auto h-40 mx-auto"
            src={process.env.PUBLIC_URL + '/idmji.jpg'}
            alt={texts.es.churchName}
          />
          <h1 className="mt-6 text-3xl font-extrabold text-center text-neutral-900">
            {texts.es.title}
          </h1>
          {subtitle && (
            <h2 className="mt-4 text-xl font-bold text-center text-neutral-900">
              {subtitle}
            </h2>
          )}
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
        {children(langStorage)}
      </div>
    </div>
  );
}
