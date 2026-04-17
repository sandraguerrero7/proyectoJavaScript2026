function ingresarDep(){
    // Función que permite ingresar una dependencia
    let dependencia, texto; 
    dependencia= prompt('Ingrese la dependencia');
    alert(dependencia);
    texto = document.getElementById('text_department');
    texto.innerHTML = 'Departamento: ' + dependencia;

}

function calcularEdad(){
    // Función que permite calcular la edad del empleado
    alert('Calcular la edad');
}

function calcularAnt(){
    // Función que permite calcular la antiguedad del empleado
    alert('Calcular Antiguedad');
}

function calcularPres() {
    // Función que permite calcular las prestaciones sociales 
    alert('Calcular prestaciones');
}

function verInfo(){
    // Visualiza la información del empleado en un modal
    let nombre, apellido, genero, fecha_nac, fecha_ing, salario;
    nombre = document.getElementById('name').value;
    apellido = document.getElementById('lastname').value;
    fecha_nac = document.getElementById('birthday').value;
    fecha_ing = document.getElementById('date_entry').value;
    salario = document.getElementById('salary').value;

    /*
    Asignar los valores que capture de los input del formulario
    y se los asigno al modal
    */

    document.getElementById('modal-name').innerHTML = 'Nombre: ' + nombre;
    document.getElementById('modal-lastname').innerHTML = 'Apellido: ' + apellido;
    document.getElementById('modal-birthday').innerHTML = 'Fecha Nacimiento: ' + fecha_nac;
    document.getElementById('modal-date_entry').innerHTML = 'Fecha Ingreso: ' + fecha_ing;
    document.getElementById('modal-salary').innerHTML = 'Salario: ' + salario;

    let myModal = new bootstrap.Modal(document.getElementById('infoModal'));
    myModal.show();

}