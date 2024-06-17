//1. rear las clases representadas en el diagrama implementando la herencia indicada.

export class Animal {

    #nombre
    #edad
    #img
    #comentarios
    #sonido

    constructor(nombre, edad, img, comentarios, sonido) {
        this.#nombre = nombre
        this.#edad = edad
        this.#img = img
        this.#comentarios = comentarios
        this.#sonido = sonido

    }

    get nombre() {
        return this.#nombre
    }

    get edad() {
        return this.#edad
    }

    get img() {
        return this.#img
    }

    get comentarios() {
        return this.#comentarios
    }

    get sonido() {
        return this.#sonido
    }
}


export class Leon extends Animal {

    rugir() {
        console.log('rugir')
    }
}

export class Lobo extends Animal {

    aullar() {
        console.log('aullar')
    }
}

export class Oso extends Animal {

    gruñir() {
        console.log('gruñir')
    }
}

export class Serpiente extends Animal {

    sisear() {
        console.log('sisear')
    }
}

export class Aguila extends Animal {

    chillar() {
        console.log('chillar')
    }
}