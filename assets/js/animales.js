//3. Realizar una consulta asíncrona utilizando una función async/await para obtener las imágenes correspondientes a los animales. 
//4. Realizar por lo menos una función autoejecutable IIFE. 


export { arrAnimales, arrInstanciados };

const arrAnimales = [];
const arrInstanciados = [];


(async () => {
    try {
        const response = await fetch("animales.json");
        if (!response.ok) {
            throw {
                code: response.status,
                message: "Datos solicitados no encontrados"
            }
        }
        const data = await response.json();
        data.animales.forEach(animal => {
            arrAnimales.push(animal)
        });
    } catch (error) {
        console.log(error);
    }
})();

