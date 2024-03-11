const listaCursos=[];

const cargarCurso=async()=>{
    try{
        const respuesta=await fetch("http://localhost:3000/cursos");

        if(!respuesta.ok){
            throw new Error('Error al cargar cursos');
        }
        const curso=await respuesta.json();
        listaCursos.push(...curso);
    }catch(error){
        console.error('Error al cargar cursos',error.message);
    }
    
}
const mostrarCurso = async () => {
    //await cargarCurso();

    //const tablaCursoElement = document.getElementById('listadoCursos');
      //para borrar resto elementos menos el actual
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
    tablaCursoElement.style.display='block';
    docenteForm.style.display='none';
    asignaturaForm.style.display='none';
    asignaturaIIElement.style.display='none';
    matriculaForm.style.display='none';
    contenedorTabla.style.display='none';
    contenedorTablaII.style.display='none';
    listaMatriculasElement.style.display='none';
    horarioForm.style.display='none';
    contenedorPrincipal.style.display='none';


    try {
        let tablaCursoHTML = `
            <div class="table-responsive">
            <h2> Cursos Disponibles</h2>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th><h2>Id</h2></th>
                            <th><h2>Nombre</h2></th>
                            <th><h2>codigo</h2></th>
                            <th><h2>Guia Catedra</h2></th>
                        </tr>
                    </thead>
                    <tbody id="tablaProgramacion">
                        ${generarOptionsCurso()}
                    </tbody>
                </table>
            </div>`;

            tablaCursoElement.innerHTML = tablaCursoHTML;

            const volverButton = document.createElement('button');
            volverButton.textContent = 'Volver al inicio';
            volverButton.addEventListener('click', volverFormularioCur);
            volverButton.classList.add('align-left'); // Agrega la clase 'align-left'
            tablaCursoElement.appendChild(volverButton);
    } catch (error) {
        console.error('Error al mostrar Curso', error.message);
    }
}

const generarOptionsCurso=()=>{
    let options='';
    numCursos=listaCursos.length;
    for(const curso of listaCursos){
        console.log(curso)
        options+=`<tr>`
        options+=`<td>${curso.id}</td> <td>${curso.nombre}</td><td>${curso.codigo}</td><td> ${curso.guia_catedra} </td>`;
        options+=`</tr>`;
    }

    console.log(options);
    return options;
}

const volverFormularioCur=()=>{
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
    listaMatriculasElement.style.display='none';
    horarioForm.style.display='none';
    contenedorPrincipal.style.display='block';
    
}

