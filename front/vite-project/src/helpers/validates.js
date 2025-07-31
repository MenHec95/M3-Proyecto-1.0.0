export const registerValidates = (input) => {
  const errors = {};

  if (!input.name) errors.name = "Se requiere Nombre y Apellido";
  if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s']{2,50}$/.test(input.name)) errors.name = "Nombre o Apellido invalido, solo letras y espacios";

  if (!input.email) errors.email = "Se requiere email";
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.email)) errors.email = "Email incorrecto, se debe asemejar a (email@email.com)";

  if (!input.birthdate) errors.birthdate = "Se requiere Fecha de nacimiento";
  if (!/^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])(?<!-02-(29|30))(?!-02-31)(?<!-(04|06|09|11)-31)$/.test(input.birthdate))
    errors.birthdate = "Formato de Fecha erroneo, debe ser DD-MM-AAAA";
  const fecha = new Date(input.birthdate);
  if (isNaN(fecha.getTime())) errors.birthdate = `Fecha ${fecha} no existe`;
  if (!validateMayorEdad(input.birthdate)) errors.birthdate = "Debes ser mayor de edad";

  if (!input.nDni) errors.nDni = "Se requiere Numero de DNI";
  if (!/^\d{7,10}$/.test(input.nDni)) errors.nDni = "El DNI debe tener entre 7 y 10 numeros";
  if (input.nDni < 0) errors.nDni = "El Dni no puede ser negativo";

  if (!input.username) errors.username = "El Usuario es requerido";
  if (!/^[a-zA-Z0-9._-]*$/.test(input.username)) errors.username = "El Usuario solo puede tener Letras, Puntos, Guiones Bajos y Medios";
  if (!/^.{4,20}$/.test(input.username)) errors.username = "El Usuario debe tener entre 4 y 20 caracteres";

  if (!input.password) errors.password = "La Contraseña es requerida";
  if (!/^.{8,20}$/.test(input.password)) errors.password = "La contraseña debe tener entre 8 y 20 caracteres";
  if (!/(?=.*[a-z])/.test(input.password)) errors.password = "La contraseña debe tener almenos 1 Minuscula";
  if (!/(?=.*[A-Z])/.test(input.password)) errors.password = "La contraseña debe tener almenos 1 Mayuscula";
  if (!/(?=.*\d)/.test(input.password)) errors.password = "La contraseña debe tener almenos 1 Numero";
  if (!/(?=.*[@$!%*?&#¡¿+çÇ.,:;-])/.test(input.password)) errors.password = "La contraseña debe tener almenos 1 Caracter Especial @$!%*?&#¡¿+çÇ.,:;-";

  return errors;
};

const validateMayorEdad = (fechaStr) => {
  const [year, month, day] = fechaStr.split("-").map(Number);
  const fechaNacimiento = new Date(year, month - 1, day);
  const hoy = new Date();
  const hace18Anios = new Date(hoy.getFullYear() - 18, hoy.getMonth(), hoy.getDate());

  return fechaNacimiento <= hace18Anios;
};
