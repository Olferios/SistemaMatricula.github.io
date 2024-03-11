const listaProgramas=[];

const cargarPrograma=async()=>{
    try{
        const respuesta=await fetch("http://localhost:3000/programas");

        if(!respuesta.ok){
            throw new Error('Error al cargar programas');
        }
        const programa=await respuesta.json();
        listaProgramas.push(...programa);
    }catch(error){
        console.error('Error al cargar programas',error.message);
    }
    
}

const mostrarProgramas = async () => {
    //await cargarPrograma();

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
   tablaProgramaElement.style.display='block';
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
   contenedorPrincipal.style.display='none';


    try {
        let tablaProgramaHTML = `
            <div class="table-responsive">
                <table class="table table-hover">
                <h2> Programa Academicos</h2>
                
                    <thead>
                        <tr>
                            <th><h2>id</h2></th>
                            <th><h2>nivel</h2></th>
                            <th><h2>nombre</h2></th>
                        </tr>
                    </thead>
                    <tbody id="tablaProgramacion">
                        ${generarOptionsProgramas()}
                    </tbody>
                </table>
            </div>`;

        tablaProgramaElement.innerHTML = tablaProgramaHTML;

        const volverButton = document.createElement('button');
        volverButton.textContent = 'Volver al inicio';
        volverButton.addEventListener('click', volverFormulario);
        volverButton.classList.add('align-left'); // Agrega la clase 'align-left'
        tablaProgramaElement.appendChild(volverButton);

    } catch (error) {
        console.error('Error al mostrar programas', error.message);
    }
}

const generarOptionsProgramas=()=>{
    let options='';
    numProgramas=listaProgramas.length;
    for(const programa of listaProgramas) {
        console.log(programa)
        options+=`<tr>`
        options+=`<td>${programa.id}</td> <td>${programa.nombre}</td> <td>${programa.nivel}</td>`;
        options+=`</tr>`;
    
    }
    console.log(options);
    return options;
}
const volverFormulario=()=>{
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
