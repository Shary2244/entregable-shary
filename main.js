// selecionar formulario
const formulario = documen.querySelector("#contacto")

if(formulario){
    formulario.eddEventListener("submit",
    (event) =>{
        //evitar que el formulario se envie
        event.proventDefaul();

        //obtener los valores de mi formulario
        const nombre= document.getElementsById("nombre").value;
        const correo= document.getElementsById("correo").value;
        const telefono= document.getElementsById("telefono").value;
        const mensajes= document.getElementsById("mensajes").value;
        const nacionalidad= document.getElementsById("nacionalidad").value;

        //imprimir los valores por consola
        console.log("nombre", nombre)
        console.log("correo", correo)
        console.log("telefono", telefono)
        console.log("mensajes", mensajes)
        console.log("nacionalidad", nacionalidad)

        alert(`hola ${nombre} 
               tu correo es ${correo}
               y tu motivo de contacto es ${mensajes}```)
    })
} else{
    console.error("no se pudo encontrar tu formulario con el ID #contacto")
}