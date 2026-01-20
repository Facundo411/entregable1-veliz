const usuario = document.getElementById("IngresaUsuario")

let titulo = document.getElementById("titulo")

usuario.addEventListener("change", function(e){
        titulo.innerHTML = `<h1>Hola ${usuario.value}</h1>`
    })
    
    // Esto le pregunte a ChatGPT y me tiro esto porque no sabia como hacerlo pero solo agregue el .value y me salio lo mismo, solo que con la letra mas grande no se por qué. No se cual seria mejor en este caso.
    
    // usuario.addEventListener("keydown", function(e){
    //     if(e.key === "Enter"){
    //         titulo.innerHTML = `Hola ${usuario.value}`
    //     }
    // })

const contraseña = "123"

const password = document.getElementById("IngresaContraseña")

password.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        if(password.value === contraseña){
            window.location.href = "cuenta.html"
        }else{
            alert("Contraseña incorrecta")
        }
    }
})

const transferir = [
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

const nombre = document.getElementById(nombre)

nombre.addEventListener("change", function(){

})