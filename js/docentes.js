const listaDocentes=[];

//esto para luego mostrar en una tabla de docentes inscritos

const cargarDocente=async()=>{
    try{
        const respuesta=await fetch("http://localhost:3000/profesores");

        if(!respuesta.ok){
            throw new Error('Error al cargar Dcoentes');
        }
        const docente=await respuesta.json();
        listaDocentes.push(...docente);
    }catch(error){
        console.error('Error al cargar docente',error.message);
    }
    
}
const guardarDocente= async(nuevoDocente)=>{
    try{

        const respuesta=await fetch('http://localhost:3000/profesores',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(nuevoDocente),
        });

        if(!respuesta.ok){
           throw new Error('Error al crear el docente. Estado: ',respuesta.status);
        }
        const docenteCreado=await respuesta.json();
       
        
        console.log('Docente creado:', docenteCreado);

    }catch(error){
        console.error("Error al cargar Docente",error.message);
    }
}

const cargarFormularioDocente=()=>{
    //const docenteForm=document.getElementById('formDocente');
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
    docenteForm.style.display='block';
    asignaturaForm.style.display='none';
    asignaturaIIElement.style.display='none';
    matriculaForm.style.display='none';
    contenedorTabla.style.display='none';
    contenedorTablaII.style.display='none';
    listaMatriculasElement.style.display='none';
    horarioForm.style.display='none';
    contenedorPrincipal.style.display='none';

    
    console.log(listaDepartamentos)
    docenteForm.innerHTML=`
        <form>
        <h2> Inscripcion Docentes</h2>
        <label for="nombreDocente">Nombres:</label>
        <input type="text" id="nombreDocente" required>

        <label for="apellidoDocente">Apellidos:</label>
        <input type="text" id="apellidoDocente" required>

        <label for="tipoDocumentoDocente"> Tipo Documento:</label>
        <select id="tipoDocumentoDocente" name="tipoDocumento" required>
            <option value="CC">Cedula</option>
            <option value="CE">Cedula Extranjeria</option>
            <option value="Pasaporte">Numero Pasaporte</option>
            <option value="TI">Tarjeta Identidad</option>
        </select>

        <label for="numeroDocumentoDocente">Numero documento:</label>
        <input type="number" id="numeroDocumentoDocente" required>

        <label for="departamentoId">Departamento:</label>
        <select id="departamentoId" required>
                ${getDepartamentoId()}
        </select>
        

        <button type="button" onclick="crearDocente()">Crear Docente</button>
        </form>
                
    `;

}
    // aqui agregar las demas vista que se deben borrar
    
const crearDocente = async()=>{
    const inputNombreDocente=document.getElementById('nombreDocente');
    const inputApellidoDocente=document.getElementById('apellidoDocente');
    const inputTipoDocumentoDocente=document.getElementById('tipoDocumentoDocente');
    const inputNumeroDocumentoDocente=document.getElementById('numeroDocumentoDocente');
    const inputDepartamentoId=document.getElementById('departamentoId');

    const nombreDocenteInput=inputNombreDocente.value;
    const apellidoDocenteInput=inputApellidoDocente.value;
    const tipoDocumentoDocenteInput=inputTipoDocumentoDocente.value;
    const numeroDocumentoDocenteInput=inputNumeroDocumentoDocente.value;
    const departamentoIdInput=inputDepartamentoId.value;

    const nuevoDocente={
        id:listaDocentes.length+1,
        tipo_documento:tipoDocumentoDocenteInput,
        numero_documento:numeroDocumentoDocenteInput,
        nombre:nombreDocenteInput,
        apellido:apellidoDocenteInput,
        departamento_id:departamentoIdInput,
    }
    await guardarDocente(nuevoDocente);
    // para guardar y cargar await loadDocente

    inputNombreDocente.value='';
    inputApellidoDocente.value='';
    inputTipoDocumentoDocente.value='';
    inputNumeroDocumentoDocente.value='';
    inputDepartamentoId.value='';

    alert('Docente creado con exito')

    return nuevoDocente;



}

const getDepartamentoId=()=>{
    let options='';
    for(const departamento of listaDepartamentos){
        options+=`<option value="${departamento.id}">${departamento.nombre}</option>`;
    }
    return options;
}


