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
    
    const birth = new Date(document.getElementById('birthday').value);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();

    if (today < new Date(today.getFullYear(), birth.getMonth(), birth.getDate())) {
    age--;
    }
    alert('La edad del empleado es:' + age);
}

function calcularAnt(){
    // Función que permite calcular la antiguedad del empleado
    const ingreso = new Date(document.getElementById('date_entry').value);
    const hoy = new Date();

    let antiguedad = hoy.getFullYear() - ingreso.getFullYear();

    if (
        hoy.getMonth() < ingreso.getMonth() ||
        (hoy.getMonth() === ingreso.getMonth() &&
        hoy.getDate() < ingreso.getDate())
    ) {
        antiguedad--;
    }

    alert('La antigüedad del empleado es:' + antiguedad +'años');
}

function calcularPres() {
    // Función que permite calcular las prestaciones sociales 
    
    /*
    Prima de servicios: (Salario mensual x Días trabajados en el semestre) / 360
    Cesantías: (Salario mensual x Días trabajados) / 360
    Intereses sobre cesantías: (Cesantías x 0,12 x Días trabajados) / 360
    */
    let date_entry, entry, today, time, daysWorked, salary;

    date_entry = document.getElementById('date_entry').value;
    salary = document.getElementById('salary').value;

    entry = new Date(date_entry);
    today = new Date();
    time = today - entry;  // Diferencia en milisegundos
    daysWorked = Math.floor(time / (1000 * 60 * 60 * 24));  // Convertir milisegundos a días

    // Math.min(a, b): Retorna el valor más bajo entre a y b
    daysworkedsemester = Math.min(daysWorked, 180);

    bonus = (salary * daysworkedsemester)/360;
    severance_pay = (salary * daysWorked)/360;
    interests = (severance_pay * 0.12 * daysWorked)/360;

    alert(
        'La prima de servicios es:' + bonus +  '\n' +
        'Las cesantias son: '+ severance_pay +  '\n' +
        'Los intereses de las cesantias son: ' + interests
    )
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