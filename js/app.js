//************ variables y selectores ***********/ 

const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


//********************* Eventos ****************/

eventListener();
function eventListener() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}


//********************* Clases ****************/




//********************* Funciones ****************/

function preguntarPresupuesto() {
    const presupuestoUsuario  = prompt("¿Cuánto es tu presupuesto");

    console.log(Number(presupuestoUsuario));

    if(preguntarPresupuesto === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    };
};

