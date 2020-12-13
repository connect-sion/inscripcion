export function optionsFromObj<T extends string>(obj: Record<T, string>) {
  let options = [];
  for (const key in obj) {
    options.push({ label: obj[key], value: key });
  }
  return options;
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getChurch() {
  return localStorage.getItem('churchStorage') || 'lausanne';
}
export function setChurch(curch: string) {
  localStorage.setItem('churchStorage', curch);
}

type Langs = 'es' | 'pr' | 'en' | 'fr' | 'de' | 'it';
export function getLang(): Langs {
  return (localStorage.getItem('langStorage') as Langs) || 'es';
}
export function setLang(lang: string) {
  localStorage.setItem('langStorage', lang);
}
