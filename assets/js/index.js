import { Leon, Lobo, Oso, Serpiente, Aguila } from './TiposAnimales.js';
import { arrAnimales, arrInstanciados } from './animales.js';


const animal = document.querySelector('#animal')
const edad = document.querySelector('#edad')
const comentarios = document.querySelector('#comentarios')
const animalesCards = document.querySelector('#Animales')
const btnRegistrar = document.querySelector('#btnRegistrar')
const preview = document.querySelector('#preview')



function crearAnimal(nombre, edad, comentarios) {

    switch (nombre) {
        case 'Leon':
            const leon = new Leon(nombre, edad, arrAnimales[0].imagen, comentarios, arrAnimales[0].sonido)
            return leon;
        case 'Lobo':
            const lobo = new Lobo(nombre, edad, arrAnimales[1].imagen, comentarios, arrAnimales[1].sonido)
            return lobo;
        case 'Oso':
            const oso = new Oso(nombre, edad, arrAnimales[2].imagen, comentarios, arrAnimales[2].sonido)
            return oso;
        case 'Serpiente':
            const serpiente = new Serpiente(nombre, edad, arrAnimales[3].imagen, comentarios, arrAnimales[3].sonido)
            return serpiente;
        case 'Aguila':
            const aguila = new Aguila(nombre, edad, arrAnimales[4].imagen, comentarios, arrAnimales[4].sonido)
            return aguila;
    }
}
// 6. Utilizar la manipulación del DOM para mostrar en la tabla los animales registrados con el formulario. (renderizar card de animal)
function generarCardAnimales() {
    animalesCards.innerHTML = ''
    arrInstanciados.forEach(element => {
        animalesCards.innerHTML +=
            `<div class="col">
      <div class="card my-3" style="width: 10rem; height: 20rem">
        <img src="./assets/imgs/${element.img}" class="card-img-top" style="height: 15rem" alt="${element.img}">
        <div class="card-body">
        <button id='reproducirSonido' class="card-title"><i class="fa-solid fa-volume-high fa-lg"></i></button>
        </div>
      </div>
    </div>`
    });
}


document.addEventListener("DOMContentLoaded", function () {

    animal.addEventListener("change", () => {

        const imagenURL = arrAnimales.find(item => item.name === animal.value)?.imagen;
        if (imagenURL) {
            preview.innerHTML = `<img src="./assets/imgs/${imagenURL}" class="card-img-top" style="height: 15rem" alt="${animal.value}">`
        } else {
            preview.innerHTML = ''
        }
    });


    //   7. Validar que el usuario haya asignado todos los datos del animal antes de que éste sea agregado a la tabla. 

    btnRegistrar.addEventListener("click", () => {

        if (animal.selectedIndex === 0) {
            alert('Debes elegir un animal')
            return
        }

        if (edad.selectedIndex === 0) {
            alert('Debes elegir un rango de edad')
            return
        }
        if (comentarios.value.trim() === "") {
            alert('Debes escribir un comentario')
            return
        }

        //instanciar clase y almacenar el animal en un arreglo

        let creado = crearAnimal(animal.value, edad.value, comentarios.value)
        arrInstanciados.push(creado)

        //crear animales en card y pintarlo en plataforma

        generarCardAnimales()

        // 8. Devolver el formulario en un estado inicial luego de registrar a cada animal.

        animal.selectedIndex = 0
        edad.selectedIndex = 0
        comentarios.value = ''
    })
});
