// para cargar la información desde que abre la página
window.onload = print1 = () =>{ // declaramos la función print1
  let dataStorage = JSON.parse(localStorage.getItem('key')); // declaramos la variable dataStorage que 
  console.log(dataStorage);
  let resultado = document.getElementById('resultado');
  let pintar = 
    `<ul>
    <li>Nombre: ${dataStorage.name}</li>
    <li>Apellido: ${dataStorage.apellido}</li>
    <li>Email: ${dataStorage.email}</li>
  </ul>`;

  resultado.innerHTML = pintar;
};
   