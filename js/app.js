//************ variables y selectores ***********/ 

const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


//********************* Eventos ****************/

eventListener();
function eventListener() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}


//********************* Clases ****************/

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

class UI {

}

//** Instanciar **/
let presupuesto;
const ui = new UI;

//********************* Funciones ****************/

function preguntarPresupuesto() {
    const presupuestoUsuario  = prompt("¿Cuánto es tu presupuesto");

    // console.log(Number(presupuestoUsuario));

    if(preguntarPresupuesto === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    };

    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);
};

