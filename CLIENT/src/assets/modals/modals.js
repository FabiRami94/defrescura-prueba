
import alert from 'sweetalert2';

export const SuccessAddCart = () => {
    alert.fire({
        title:"Producto agregado",
        html: `<div class="modalExpert">
                    <span>El producto ha sido agregado exitosamente al carrito</span> 
                    <hr>
                </div>`,
        icon: "success",
        showConfirmButton: false,
        showCloseButton: true,
    })
}

export const SuccessDeleteCart = () => {
    alert.fire({
        title:"Producto eliminado",
        html: `<div class="modalExpert">
                    <span>El producto ha sido eliminado exitosamente al carrito</span> 
                    <hr>
                </div>`,
        icon: "success",
        showConfirmButton: false,
        showCloseButton: true,
    })
}

export const SuccessBuy = () => {
    alert.fire({
        title:"Selección de productos exitosa",
        html: `<div class="modalExpert">
                    <span>Esto simula el éxito de la selección final de productos</span> 
                    <hr>
                </div>`,
        icon: "success",
        showConfirmButton: false,
        showCloseButton: true,
    })
}

export const alertError = () =>{
    alert.fire({
        title:"Lo sentimos",
        text: "No pudimos recibir el mensaje, inténtalo mas tarde.",
        icon: "error",
        confirmButtonText: 'Cerrar'
    })
}