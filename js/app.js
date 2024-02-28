//************ variables y selectores ***********/ 

const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


//********************* Eventos ****************/

eventListener();
function eventListener() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto)
}


//********************* Clases ****************/

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        console.log(this.gastos);
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        // Extrayendo los valores
        const { presupuesto, restante } = cantidad;

        // Agregar al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {
        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert')

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaj de error
        divMensaje.textContent = mensaje;

        // Insertar en el HTML

        document.querySelector('.primario').insertBefore(divMensaje,formulario);

        //Quitar del HTML
        setTimeout(() => {
            divMensaje.remove();            
        }, 3000);
    }

    agregarGastoListado() {
        
        // Iterar sobre los gastos
        gastos.forEach( gastos => {
            
        })
    }
}

//** Instanciar **/
const ui = new UI;
let presupuesto;

//********************* Funciones ****************/

function preguntarPresupuesto() {
    const presupuestoUsuario  = prompt("¿Cuánto es tu presupuesto");

    // console.log(Number(presupuestoUsuario));

    if(preguntarPresupuesto === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    };

    //Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto)
};

// Añade gasto

function agregarGasto(e) {
    e.preventDefault();

    // Leer los datos del formmulario
    const nombre = document.querySelector( "#gasto" ).value;
    const cantidad = Number(document.querySelector( "#cantidad" ).value);

    // Validar
    if(nombre === "" || cantidad === ""){
        ui.imprimirAlerta('Ambos campos son obligatotios', 'error');
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no válida', 'error');

        return;
    }
    
    // Generar un objeto con el gasto
    const gasto = { nombre, cantidad, id: Date.now() }

    // Añade un nuevo gasto
    presupuesto.nuevoGasto( gasto );

    // Mensaje de todo bien
    ui.imprimirAlerta('Gasto agregado correctamente');

    //Imprimir los gastos
    const { gastos } = presupuesto;
    ui.imprimirGastosListado(gastos);

    // Reinicia el formulario
    formulario.reset();
}