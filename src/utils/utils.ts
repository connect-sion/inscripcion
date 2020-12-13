export function optionsFromObj(obj: Record<string, string>) {
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

export function getLang() {
  return localStorage.getItem('langStorage') || 'es';
}
export function setLang(lang: string) {
  localStorage.setItem('langStorage', lang);
}
