const usuario = document.getElementById("IngresaUsuario")

const titulo = document.getElementById("titulo")

if(usuario && titulo){

    usuario.addEventListener("change", function(e){
            titulo.innerHTML = `<h1>Hola ${usuario.value}</h1>`
        })

}

    
    // Esto le pregunte a ChatGPT y me tiro esto porque no sabia como hacerlo pero solo agregue el .value y me salio lo mismo, solo que con la letra mas grande no se por qué. No se cual seria mejor en este caso.
    
    // usuario.addEventListener("keydown", function(e){
    //     if(e.key === "Enter"){
    //         titulo.innerHTML = `Hola ${usuario.value}`
    //     }
    // })

const contraseña = "123"

const password = document.getElementById("IngresaContraseña")

if(password){

    password.addEventListener("keydown", function(e){
        if(e.key === "Enter"){
            if(password.value === contraseña){
                window.location.href = "cuenta.html"
            }else{
                alert("Contraseña incorrecta")
            }
        }
    })

}


const transferencias = [
    {
        nombre: "Pablo"
    },

    {
        nombre: "Micaela"
    },

    {
        nombre: "gonzalo"
    },

    {
        nombre: "Jose"
    }
]


const nombreInput = document.getElementById("nombre")

const montoInput = document.getElementById("monto")

if (localStorage.getItem("saldo") === null) {
  localStorage.setItem("saldo", "10000")
}



if(nombreInput){

    
    nombreInput.addEventListener("keydown", function(e){
        if(e.key === "Enter"){
            const existe = transferencias.some(persona => persona.nombre.toLowerCase() === nombreInput.value.toLowerCase())
            if(existe){
                alert("El usuario tiene una cuenta")
                montoInput.disabled = false
                montoInput.focus()
            }else{
                alert("El usuario no existe")
                montoInput.disabled = true
                montoInput.value = ""
            }
        }
    })

}

if (montoInput) {


  montoInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {

      const monto = Number(montoInput.value)
      const saldoActual = Number(localStorage.getItem("saldo"))

      if (monto <= 0) {
        alert("Ingresá un monto válido")
        return
      }

      if (monto > saldoActual) {
        alert("Saldo insuficiente")
        return
      }

      const nuevoSaldo = saldoActual - monto
      localStorage.setItem("saldo", nuevoSaldo)

      alert("Transferencia realizada. Saldo restante: $" + nuevoSaldo)

      montoInput.value = ""

    }

  })

}

