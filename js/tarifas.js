const listaTarifas=[];

const cargarTarifa=async()=>{
    try{
        const respuesta=await fetch("http://localhost:3000/tarifas");

        if(!respuesta.ok){
            throw new Error('Error al cargar tarifas');
        }
        const tarifa=await respuesta.json();
        listaTarifas.push(...tarifa);
    }catch(error){
        console.error('Error al cargar tarifas',error.message);
    }
    
}

const mostrarTarifa = async () => {
    //await cargarTarifa();

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
    tablaTarifaElement.style.display='block';
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
        let tablaTarifaHTML = `
            <div class="table-responsive">
                <table class="table table-hover">
                <h2> Tarifas</h2>
                    <thead>
                        <tr>
                            <th><h2>Id</h2></th>
                            <th><h2>Costo Credito</h2></th>
                            <th><h2>Periodo Id</h2></th>
                            <th><h2>Programa Id</h2></th>
                        </tr>
                    </thead>
                    <tbody id="tablaProgramacion">
                        ${generarOptionsTarifa()}
                    </tbody>
                </table>
            </div>`;

            tablaTarifaElement.innerHTML = tablaTarifaHTML;

            const volverButton = document.createElement('button');
            volverButton.textContent = 'Volver al inicio';
            volverButton.addEventListener('click', volverFormularioTar);
            volverButton.classList.add('align-left'); // Agrega la clase 'align-left'
            tablaTarifaElement.appendChild(volverButton);
    
    } catch (error) {
        console.error('Error al mostrar Tarifa', error.message);
    }
    
}

const generarOptionsTarifa=()=>{
    let options='';
    numTarifas=listaTarifas.length;
    for(const tarifa of listaTarifas){
        console.log(tarifa)
        options+=`<tr>`
        options+=`<td>${tarifa.id}</td> <td>${tarifa.costo_credito}</td><td>${tarifa.periodo_id}</td><td> ${tarifa.programa_id} </td>`;
        options+=`</tr>`;
    }
        

    
    
    console.log(options);
    return options;
}

const volverFormularioTar=()=>{
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

