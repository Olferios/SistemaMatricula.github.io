

const getEstudianteHorario = () => {
    let options = '';
    for (const estudiante of listadoEstudiantes) {
        options += `<option value="${estudiante.id}">${estudiante.nombre} ${estudiante.apellido}</option>`;
    }
    return options;
}

const cargarFormularioHorario = () => {
    console.log("Función cargarFormularioHorario llamada correctamente")
    
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
    contenedorTablaII.style.display='none';
    listaMatriculasElement.style.display='block';
    horarioForm.style.display='block';
    contenedorPrincipal.style.display='none';


    horarioForm.innerHTML = `
        <label for="codigoCurso">Nombre Estudiante</label>
        <select id="codigoCurso" required>
            ${getEstudianteHorario()}
        </select>

        <button type="button" onclick="mostrarHorarioEstudiante()">Mostrar Horario</button>

        
        
    `;
};
const obtenerAsignaturasMatriculadas = (idEstudiante) => {
    const asignaturasMatriculadas = [];

    for (const matricula of listadoMatriculas) {
        if (matricula.estudiante_id === idEstudiante) {
            asignaturasMatriculadas.push(matricula.asignatura_id);
        }
    }

    return asignaturasMatriculadas;
};
const mostrarHorarioEstudiante = () => {
    const selectEstudiante = document.getElementById('codigoCurso');

    const estudianteId = parseInt(selectEstudiante.value, 10);

    const asignaturasMatriculadas = obtenerAsignaturasMatriculadas(estudianteId);

    const listaMatriculasElement = document.getElementById('moduloHorario');
    
    
    listaMatriculasElement.innerHTML = ''; // Limpiar la lista antes de mostrar nueva información

    if (asignaturasMatriculadas.length > 0) {
        const listaHTML = asignaturasMatriculadas.map(asignaturaId => {
            const asignatura = listaAsignaturas.find(asig => asig.id == asignaturaId);
            if (asignatura) {
                const horariosHTML = asignatura.horario_clases.map(horario => {
                    return `<li class="horario-item">Día: ${horario.dia}, Hora: ${horario.hora_inicio}</li>`;
                }).join('');

                return `<ul class="asignatura-list">
                            <li class="asignatura-item">Asignatura: ${asignatura.codigo}</li>
                            ${horariosHTML}
                        </ul>`;
            } else {
                return `<p>Asignatura con ID ${asignaturaId} no encontrada.</p>`;
            }
        }).join('');

        listaMatriculasElement.innerHTML = listaHTML;
    } else {
        listaMatriculasElement.innerHTML = '<p>El estudiante no tiene matrículas.</p>';
    }
};


