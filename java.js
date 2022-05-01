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
    
    let arreglo = (2 , 3, 4, 5 , 6 , 7)
    

    if (edad < 18){
        document.getElementById("respuesta").innerHTML = "Es menor de edad"
        console.log("Es menor de edad")
    }else{
        document.getElementById("respuesta").innerHTML = "Es mayor de edad"
        console.log("es mayor de edad")
    }

    for(let x =0; x <arreglo.length; x++){
        console.log(arreglo[x])
    }
    
    

}

function option(){

    let obj =document.getElementById("genero")
    console.log(obj.value)


}
