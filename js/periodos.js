const listaPeriodos=[];

const cargarPeriodo=async()=>{
    try{
        const respuesta=await fetch("http://localhost:3000/periodos");

        if(!respuesta.ok){
            throw new Error('Error al cargar periodos');
        }
        const periodo=await respuesta.json();
        listaPeriodos.push(...periodo);
    }catch(error){
        console.error('Error al cargar periodos',error.message);
    }
    
}

const mostrarPeriodo = async () => {
    //await cargarPeriodo();

    //const tablaPeriodoElement = document.getElementById('listadoPeriodos');
    
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
   tablaPeriodoElement.style.display='block';
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
        let tablaPeriodoHTML = `
            <div class="table-responsive">
                <h2> Periodos Academicos</h2>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th><h2>Id</h2></th>
                            <th><h2>Nombre</h2></th>
                            <th><h2>Año</h2></th>
                            <th><h2>Semestre</h2></th>
                        </tr>
                    </thead>
                    <tbody id="tablaProgramacion">
                        ${generarOptionsPeriodos()}
                    </tbody>
                </table>
            </div>`;

            tablaPeriodoElement.innerHTML = tablaPeriodoHTML;
           
            const volverButton = document.createElement('button');
            volverButton.textContent = 'Volver al inicio';
            volverButton.addEventListener('click', volverFormulario);
            volverButton.classList.add('align-left'); // Agrega la clase 'align-left'
            tablaPeriodoElement.appendChild(volverButton);
                


    } catch (error) {
        console.error('Error al mostrar Periodo', error.message);
    }
}

const generarOptionsPeriodos=()=>{
    let options='';
    numPeriodos=listaPeriodos.length;
    for(const periodo of listaPeriodos){
        console.log(periodo)
        options+=`<tr>`
        options+=`<td>${periodo.id}</td> <td>${periodo.codigo}</td><td>${periodo.ano}</td><td> ${periodo.semestre} </td>`;
        options+=`</tr>`;
    }
        

    
    
    console.log(options);
    return options;
}

const volverFormularioPer=()=>{
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




