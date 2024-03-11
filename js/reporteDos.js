

const encontrarNombreAsignatura=(idAsignatura)=> {
    const asignaturaEncontrada = listaAsignaturas.find(asignatura => asignatura.id === idAsignatura);
    return asignaturaEncontrada ? asignaturaEncontrada.codigo : 'Asignatura no encontrada';
}
// Función para obtener la asignatura más matriculada
const generarReporteDos = () => {
    // Objeto para almacenar la cantidad de matrículas por asignatura
    let reporte = {};

    // Iterar sobre la lista de matrículas
    listadoMatriculas.forEach(matricula => {
        const asignatura = matricula.asignatura_id;

        // Verificar si la asignatura ya está en el objeto reporte
        if (reporte.hasOwnProperty(asignatura)) {
            // Sumar una matrícula a la asignatura existente
            reporte[asignatura] += 1;
        } else {
            // Agregar una nueva asignatura al objeto reporte
            reporte[asignatura] = 1;
        }
    });

    // Encontrar la asignatura más matriculada
    const asignaturaMasMatriculada = Object.keys(reporte).reduce((a, b) => reporte[a] > reporte[b] ? a : b);

    const nombreAsignaturaMasMatriculada = encontrarNombreAsignatura(asignaturaMasMatriculada);
    // Crear la tabla y agregarla al contenedor en el HTML
    const tabla = document.createElement('table');
    tabla.innerHTML = `
        <thead>
            <tr>
                <th>Id Asignatura</th>
                <th>Nombre Asignatura</th>
                <th>Cantidad de Matrículas</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${asignaturaMasMatriculada}</td>
                <td>${nombreAsignaturaMasMatriculada}</td>                  
                <td>${reporte[asignaturaMasMatriculada]}</td>
            </tr>
        </tbody>
    `;

    // Obtener el contenedor donde se mostrará la tabla y agregarla
    //const contenedorTablaII = document.getElementById('moduloReportesDos');

   
    //para borrar resto elementos menos el actual
   const listaMatriculasElement = document.getElementById('moduloHorario');
   const horarioForm = document.getElementById('formularioHorario');
   const estudianteForm=document.getElementById('listadoEstudiantes')
   const tablaProgramaElement=document.getElementById('listadoProgramas');
   const tablaDepartamentoElement = document.getElementById('listadoDepartamentos');
   const tablaPeriodoElement=document.getElementById('listadoPeriodos');
   const tablaTarifaElement = document.getElementById('listadoTarifas');
   const tablaSalonElement=document.getElementById('listadoSalones');
   const tablaCursoElement=document.getElementById('listadoCursos');
   const docenteForm=document.getElementById('formDocente'); 
   const asignaturaForm=document.getElementById('moduloAsignaturas');
   const asignaturaIIElement=document.getElementById('asignaturasContainer');
   const matriculaForm=document.getElementById('moduloMatriculas');
   const contenedorTabla = document.getElementById('moduloReportesUno');
   const contenedorTablaII = document.getElementById('moduloReportesDos');
   const contenedorPrincipal=document.getElementById('tituloRPincipal');

   // aca se da estilos
   estudianteForm.style.display='none';
   tablaProgramaElement.style.display='none';
   tablaDepartamentoElement.style.display='none';
   tablaPeriodoElement.style.display='none';
   tablaTarifaElement.style.display='none';
   tablaSalonElement.style.display='none';
   tablaCursoElement.style.display='none';
   docenteForm.style.display='none';
   asignaturaForm.style.display='none';
   asignaturaIIElement.style.display='none';
   matriculaForm.style.display='none';
   contenedorTabla.style.display='none';
   contenedorTablaII.style.display='block';
   listaMatriculasElement.style.display='none';
   horarioForm.style.display='none';
   contenedorPrincipal.style.display='none';

    
    

    contenedorTablaII.innerHTML = '<h2>Asignatura más matriculada</h2>';
    contenedorTablaII.appendChild(tabla);
};

// Llamar a la función al cargar la página

