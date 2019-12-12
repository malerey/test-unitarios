
alert("Bienvenido a una calculadora horrible")

let operacion = "";

while ( operacion != "SALIR") {
  operacion = prompt(`Indique que operacion desea realizar
  SUMAR
  RESTAR
  DIVIDIR
  MULTIPLICAR
  `)

  if (operacion === "SUMAR") {
    let num1 = prompt("primer numero a sumar")
    let num2 = prompt("segundo numero a sumar")
    alert(`El resultado es ${suma(num1, num2)}`) 
  }
}

