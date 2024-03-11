const listaSalones=[];

const cargarSalon=async()=>{
    try{
        const respuesta=await fetch("http://localhost:3000/salones");

        if(!respuesta.ok){
            throw new Error('Error al cargar tarifas');
        }
        const salon=await respuesta.json();
        listaSalones.push(...salon);
    }catch(error){
        console.error('Error al cargar salones',error.message);
    }
    
}

const mostrarSalon = async () => {
    //await cargarSalon();

    //const tablaSalonElement = document.getElementById('listadoSalones');

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
    tablaSalonElement.style.display='block';
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
        let tablaSalonHTML = `
            <div class="table-responsive">
                <table class="table table-hover">
                <h2> Salones</h2>
                    <thead>
                        <tr>
                            <th><h2>Id</h2></th>
                            <th><h2>Capacidad Alumnos</h2></th>
                            <th><h2>Edificio</h2></th>
                            <th><h2>Piso</h2></th>
                            <th><h2>Numero de identificación</h2></th>
                        </tr>
                    </thead>
                    <tbody id="tablaProgramacion">
                        ${generarOptionsSalones()}
                    </tbody>
                </table>
            </div>`;

            tablaSalonElement.innerHTML = tablaSalonHTML;

            const volverButton = document.createElement('button');
            volverButton.textContent = 'Volver al inicio';
            volverButton.addEventListener('click', volverFormularioTar);
            volverButton.classList.add('align-left'); // Agrega la clase 'align-left'
            tablaSalonElement.appendChild(volverButton);
    } catch (error) {
        console.error('Error al mostrar salon', error.message);
    }
}

const generarOptionsSalones=()=>{
    let options='';
    numSalones=listaSalones.length;
    for(const salon of listaSalones){
        console.log(salon)
        options+=`<tr>`
        options+=`<td>${salon.id}</td> <td>${salon.capacidad_alumnos}</td><td>${salon.edificio}</td><td>${salon.piso}</td><td>${salon.numero_identificacion}</td>`;
    }
        

    
    
    console.log(options);
    return options;
}


const volverFormularioSal=()=>{
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
