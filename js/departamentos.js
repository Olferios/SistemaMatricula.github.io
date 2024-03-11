const listaDepartamentos=[];

const cargarDepartamento=async()=>{
    try{
        const respuesta=await fetch("http://localhost:3000/departamentos");

        if(!respuesta.ok){
            throw new Error('Error al cargar programas');
        }
        const departamento=await respuesta.json();
        listaDepartamentos.push(...departamento);
    }catch(error){
        console.error('Error al cargar programas',error.message);
    }
    
}

const mostrarDepartamentos = async () => {
    //await cargarDepartamento();

    //const tablaDepartamentoElement = document.getElementById('listadoDepartamentos');
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
    tablaDepartamentoElement.style.display='block';
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
    contenedorPrincipal.style.display='none';

    try {
        let tablaDepartamentosHTML = `
            <div class="table-responsive">
            <h2> Departamentos Academicos</h2>
                <table class="table table-hover">

                    <thead>
                        <tr>
                            <th><h2>id</h2></th>
                            <th><h2>nombre</h2></th>
                        </tr>
                    </thead>
                    <tbody id="tablaProgramacion">
                        ${generarOptionsDepartamentos()}
                    </tbody>
                </table>
            </div>`;

            tablaDepartamentoElement.innerHTML = tablaDepartamentosHTML;

            const volverButton = document.createElement('button');
            volverButton.textContent = 'Volver a inicio';
            volverButton.addEventListener('click', volverFormularioDep);
            volverButton.classList.add('align-left'); // Agrega la clase 'align-left'
            tablaDepartamentoElement.appendChild(volverButton);


    } catch (error) {
        console.error('Error al mostrar Departamentos', error.message);
    }
}

const generarOptionsDepartamentos=()=>{
    let options='';
    numDepartamentos=listaDepartamentos.length;
    for(const departamento of listaDepartamentos) {
        console.log(departamento)
        options+=`<tr>`
        options+=`<td>${departamento.id}</td> <td>${departamento.nombre}</td>`;
        options+=`</tr>`;
    
    }
    console.log(options);
    return options;
}

const volverFormularioDep=()=>{
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

