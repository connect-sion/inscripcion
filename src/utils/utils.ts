export function optionsFromObj(obj: Record<string, string>) {
  let options = [];
  for (const key in obj) {
    options.push({ label: obj[key], value: key });
  }
  return options;
}

export function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
