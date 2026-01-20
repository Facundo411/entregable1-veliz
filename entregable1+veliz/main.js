// let nombre = "facundo"

// let apellido = "veliz"

// let edad = "21"


// for (let i = 0; i <= 12; i++) {
//     console.log( 'factura ' + i);
// }

// const apellido = "veliz"

// alert("bienvenido a la panaderia mediterranea")

// console.log(amasadora)

// let nombre = prompt("como te llamas")

// alert("hola "+nombre)

// let saldo = 1000

// let retira = prompt("cuanto vas a retirar")

// if(retira <= saldo){
//     alert("operacion exitosa")
// }else{
//     alert("no tenes saldo suficiente")
// }


// const IVA= 1.21
// function calcularIva(importe){ //creo una funcion con un parametro
//     if(parseFloat(importe)){ // convierto el numero a un flotante
//         let resultado = importe*IVA
//         alert("el importe mas iva es:" + resultado)
//     }
// }
// function calcularPrecioFinal(){
//     let precioDelProducto= prompt("ingresa el precio del producto")
//     calcularIva(precioDelProducto)
// }
// calcularPrecioFinal()

// function contraseña (){
//     if
// }



let nombre = prompt("como te llamas")

alert("hola "+nombre)

let saldo = 10000

function bienvenida(){
    console.log("bienvenido a su cuenta "+nombre)
}

bienvenida()

let clave = prompt("ingrese la contraseña")

const contraseña = "123"

if(clave === contraseña){
    alert("bienvenido "+nombre);

} else {
    prompt("contraseña incorrecta intente otra vez")
} 

let retira = prompt("cuanto queres retirar")

if(retira <= saldo){
    confirm("aqui esta su dinero")
}else if(retira > saldo){
    prompt("no tenes saldo suficiente intente otra vez")
}else{
    prompt("lo siento, intente otra vez")
}

let transferir = ["pablo", "micaela", "roberto", "axel"]

let pregunta = prompt("a quien queres transferirle")

if(pregunta == transferir[0]){
    console.log("operacion exitosa")
}else if(pregunta == transferir[1]){
    console.log("lo siento no es posible realizar esta accion ahora ")
}else{
    console.log("esta persona no tiene una cuenta registrada")
}


