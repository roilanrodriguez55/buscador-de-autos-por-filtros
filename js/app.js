//Objeto con los datos a buscar
const busqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  color: "",
  transmision: "",
};

//Data imputs
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

const max = 2020;
const min = max - 10;

//Resultado donde va a aparecer el objeto
const resultado = document.querySelector("#resultado");

document.addEventListener("DOMContentLoaded", () => {
  mostrarDatos(autos);
  llenarAños();
});

//Eventos del formulario
marca.addEventListener("change", (e) => {
  busqueda.marca = e.target.value;
  filtrarDatos();
});

year.addEventListener("change", (e) => {
  busqueda.year = parseInt(e.target.value);
  filtrarDatos();
});

minimo.addEventListener("change", (e) => {
  busqueda.minimo = parseInt(e.target.value);
  filtrarDatos();
});

maximo.addEventListener("change", (e) => {
  busqueda.maximo = parseInt(e.target.value);
  filtrarDatos();
});

puertas.addEventListener("change", (e) => {
  busqueda.puertas = parseInt(e.target.value);
  filtrarDatos();
});

transmision.addEventListener("change", (e) => {
  busqueda.transmision = e.target.value;
  filtrarDatos();
});

color.addEventListener("change", (e) => {
  busqueda.color = e.target.value;
  filtrarDatos();
});

//Mostrar datos
function mostrarDatos(autos) {
  limpiarHTML();
  autos.forEach((auto) => {
    const { marca, modelo, year, precio, puertas, transmision, color } = auto;
    const dato = document.createElement("p");
    dato.textContent = `
    ${marca} ${modelo} ${year} - Precio: ${precio} dolares - Puertas: ${puertas} - Transmision: ${transmision} - Color: ${color}
    `;
    resultado.appendChild(dato);
  });
}

//Limpiar html
function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

//Llenar los años
function llenarAños() {
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement("option");
    opcion.textContent = i;
    opcion.value = i;
    year.appendChild(opcion);
  }
}

//Filtrar datos
function filtrarDatos() {
  const resultados = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);
  console.log(resultados);
  if (resultados.length) {
    mostrarDatos(resultados);
  } else {
    noResultado();
  }
}

//Cartel que dice que no hay resultado
function noResultado() {
  limpiarHTML();
  const noResultado = document.createElement("div");
  noResultado.classList.add("error", "alerta");
  noResultado.textContent = "No se encontraron autos";
  resultado.appendChild(noResultado);
}

//Filtro de marca
function filtrarMarca(auto) {
  //Obtengo la marca del filtro
  const { marca } = busqueda;
  //Si tiene algun valor
  if (marca) {
    //Retorno si coincide con la marca del auto que se está iterando
    return auto.marca === marca;
  }
  //Sino retorno el auto para no perder la informacion
  return auto;
}

//Filtro de año
function filtrarYear(auto) {
  //Obtengo el año del filtro
  const { year } = busqueda;
  //Si tiene algun valor
  if (year) {
    //Retorno si coincide con el año del auto que se está iterando
    return auto.year === year;
  }
  //Sino retorno el auto para no perder la informacion
  return auto;
}

//Filtro de precio minimo
function filtrarMinimo(auto) {
  //Obtengo el valor minimo del precio del filtro
  const { minimo } = busqueda;
  //Si tiene algun valor
  if (minimo) {
    //Retorno si el precio del auto que se está iterando es mayor o igual al minimo del filtro
    return auto.precio >= minimo;
  }
  //Sino retorno el auto para no perder la informacion
  return auto;
}

//Filtro de precio maximo
function filtrarMaximo(auto) {
  //Obtengo el valor maximo del precio del filtro
  const { maximo } = busqueda;
  //Si tiene algun valor
  if (maximo) {
    //Retorno si el precio del auto que se está iterando es menor o igual al maximo del filtro
    return auto.precio <= maximo;
  }
  //Sino retorno el auto para no perder la informacion
  return auto;
}

//Filtro de puertas
function filtrarPuertas(auto) {
  //Obtengo la cantidad de puertas del filtro
  const { puertas } = busqueda;
  //Si tiene algun valor
  if (puertas) {
    //Retorno si el auto que se está iterando tiene la misma cantidad de puertas que el filtro
    return auto.puertas === puertas;
  }
  //Sino retorno el auto para no perder la informacion
  return auto;
}

//Filtro de transmision
function filtrarTransmision(auto) {
  //Obtengo la transmision del filtro
  const { transmision } = busqueda;
  //Si tiene algun valor
  if (transmision) {
    //Retorno si el auto que se está iterando tiene la misma transmision que el filtro
    return auto.transmision === transmision;
  }
  //Sino retorno el auto para no perder la informacion
  return auto;
}

//Filtro de color
function filtrarColor(auto) {
  //Obtengo la color del filtro
  const { color } = busqueda;
  //Si tiene algun valor
  if (color) {
    //Retorno si el auto que se está iterando tiene el mismo color que el filtro
    return auto.color === color;
  }
  //Sino retorno el auto para no perder la informacion
  return auto;
}
