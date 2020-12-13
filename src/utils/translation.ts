interface Translations {
  churchName: string;
  title: string;
  langs: string;
  churches: string;
  booking: string;
  verify: string;
  cancel: string;
  phone: string;
  companions: string;
  limit: string;
  newUser: string;
  firstname: string;
  lastname: string;
  userNotFound: string;
  correct: (places: number) => string;
  return: string;
  confirmDelete: string;
  deleteCorrect: string;
}

export const es: Translations = {
  churchName: 'Iglesia Ministerial de Jesucristo Internacional',
  title: 'Sistema de reserva para iglesias en Suiza',
  langs: 'Idiomas',
  churches: 'Iglesias',
  booking: 'Reservar',
  verify: 'Verificar',
  cancel: 'Cancelar',
  phone: 'Número telefonico',
  companions: 'Número de acompañantes',
  limit: 'Cupos ocupados en',
  newUser: 'El número telefónico no tiene datos asociados',
  firstname: 'Nombre',
  lastname: 'Apellido',
  userNotFound: 'El teléfono no está registrado para esta fecha',
  correct: (places) => `Tiene separados ${places} puestos para esta fecha`,
  return: 'Regresar',
  confirmDelete: 'De continuar sus cupos serán liberados',
  deleteCorrect: 'Los cupos han sido liberados',
};

export const pr: Translations = {
  churchName: 'Igreja Ministerial de Jesus Cristo Internacional',
  title: 'Sistema de reservas para igrejas na Suíça',
  langs: 'línguas',
  churches: 'Igrejas',
  booking: 'reserva',
  verify: 'Verifica',
  cancel: 'Cancelar',
  phone: 'Número de telefone',
  companions: 'Número de companheiros',
  limit: 'Assentos ocupados em',
  newUser: 'O número de telefone não tem dados associados',
  firstname: 'Nome',
  lastname: 'Sobrenome',
  userNotFound: 'O telefone não está registrado para esta data',
  correct: (places) => `Tem posições ${places} separadas para esta data`,
  return: 'Para retornar',
  confirmDelete: 'Se você continuar, suas cotas serão liberadas',
  deleteCorrect: 'As cotas foram liberadas',
};

export const en: Translations = {
  churchName: 'Ministerial Church of Jesus Christ International',
  title: 'Reservation system for churches in Switzerland',
  langs: 'Languages',
  churches: 'Churches',
  booking: 'Booking',
  verify: 'Verify',
  cancel: 'Cancel',
  phone: 'Phone number',
  companions: 'Number of companions',
  limit: 'Seats occupied in',
  newUser: 'The phone number has no associated data',
  firstname: 'First name',
  lastname: 'Last name',
  userNotFound: 'The phone is not registered for this date',
  correct: (places) => `It has separate ${places} positions for this date`,
  return: 'Return',
  confirmDelete: 'If you continue, your reservations will be released',
  deleteCorrect: 'Reservations have been released',
};

export const fr: Translations = {
  churchName: 'Église ministérielle de Jésus-Christ International',
  title: 'Système de réservation des églises en Suisse',
  langs: 'Langues',
  churches: 'Églises',
  booking: 'Réserver',
  verify: 'Vérifier',
  cancel: 'Annuler',
  phone: 'Numéro de téléphone',
  companions: 'Nombre de compagnons',
  limit: 'Sièges occupés dans',
  newUser: `Le numéro de téléphone n'a pas de données associées`,
  firstname: 'Prénom',
  lastname: 'Nom',
  userNotFound: `Le téléphone n'est pas enregistré pour cette date`,
  correct: (places) => `Il a ${places} positions séparées pour cette date`,
  return: 'Retour',
  confirmDelete: 'Si vous continuez, vos quotas seront libérés',
  deleteCorrect: 'Les quotas ont été libérés',
};

export const de: Translations = {
  churchName: 'Ministerkirche Jesu Christi International',
  title: 'Reservierungssystem für Kirchen in der Schweiz',
  langs: 'Sprachen',
  churches: 'Kirchen',
  booking: 'Buchen',
  verify: 'Verifizieren',
  cancel: 'Abbrechen',
  phone: 'Telefonnummer',
  companions: 'Anzahl der Begleiter',
  limit: 'Sitzplätze belegt in',
  newUser: 'Der Telefonnummer sind keine Daten zugeordnet',
  firstname: 'Vorname',
  lastname: 'Nachname',
  userNotFound: 'Das Telefon ist für dieses Datum nicht registriert',
  correct: (places) => `Es hat separate ${places} Positionen für dieses Datum`,
  return: 'Return',
  confirmDelete: 'Wenn Sie fortfahren, werden Ihre Quoten freigegeben',
  deleteCorrect: 'Quoten wurden freigegeben',
};

export const it: Translations = {
  churchName: 'Chiesa ministeriale di Gesù Cristo internazionale',
  title: 'Sistema di prenotazione per le chiese in Svizzera',
  langs: 'Lingue',
  churches: 'Chiese',
  booking: 'Prenota',
  verify: 'Verifica',
  cancel: 'Annulla',
  phone: 'Numero di telefono',
  companions: 'Numero di companion',
  limit: 'Posti occupati in',
  newUser: 'Il numero di telefono non ha dati associati',
  firstname: 'Name',
  lastname: 'Cognome',
  userNotFound: 'Il telefono non è registrato per questa data',
  correct: (places) => `Ha ${places} posizioni separate per questa data`,
  return: 'Return',
  confirmDelete: 'Se continui, le tue quote verranno rilasciate',
  deleteCorrect: 'Le quote sono state rilasciate',
};
