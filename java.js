alert("Hola mundo");
console.log("Hola mundo")

let variable = 45;
const constante = 10;
console.log(variable,constante);

function funcional(){
   let obj = document.getElementById("text")
    console.log(obj.value)
};


function validarEdad(){
    let edad = document.getElementById("edad").value
    console.log(edad)
    if (edad < 18){
        document.getElementById("resp").innerHtml = "Es menor de edad"
        console.log("Es menor de edad")
    }else{
        document.getElementById("respuesta").innerHTML = "Es mayor de edad"
        console.log("es mayor de edad")
    }
    console.log("fuera del if")
}
