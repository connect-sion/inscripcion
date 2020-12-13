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
