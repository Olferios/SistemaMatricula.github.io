const listadoEstudiantes=[];

//para crear depsues la tabla para mostrar los estudiantes

const cargarEstudiante=async()=>{
    try{
        const respuesta=await fetch("http://localhost:3000/alumnos");

        if(!respuesta.ok){
            throw new Error('Error al cargar Estudiante');
        }
        const estudiante=await respuesta.json();
        listadoEstudiantes.push(...estudiante);
    }catch(error){
        console.error('Error al cargar estudiante',error.message);
    }
}

const guardarEstudiante=async(nuevoEstudiante)=>{
    try{

        const respuesta=await fetch('http://localhost:3000/alumnos',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(nuevoEstudiante),
        });

        if(!respuesta.ok){
           throw new Error('Error al crear el Estudiante. Estado: ',respuesta.status);
        }
        const estudianteCreado=await respuesta.json();
       
        
        console.log('Estudiante creado:', estudianteCreado);

    }catch(error){
        console.error("Error al cargar estudiante",error.message);
    }
}

const cargarFormularioEstudiante=()=>{
    //const estudianteForm=document.getElementById('listadoEstudiantes');
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
    estudianteForm.style.display='block';
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
    contenedorPrincipal.style.display='none';


    estudianteForm.innerHTML=`
        <h2> Inscripción Alumnos</h2>
        <label for="nombreEstudiante">Nombres:</label>
        <input type="text" id="nombreEstudiante" required>

        <label for="apellidoEstudiante">Apellidos:</label>
        <input type="text" id="apellidoEstudiante" required>

        <label for="tipoDocumento"> Tipo Documento:</label>
        <select id="tipoDocumento" name="tipoDocumento" required>
            <option value="CC">Cedula</option>
            <option value="CE">Cedula de Extranjeria</option>
            <option value="Pasaporte">Numero Pasaporte</option>
            <option value="TI">Tarjeta Identidad</option>
        </select>

        <label for="numeroDocumento">Numero documento:</label>
        <input type="number" id="numeroDocumento" required>

        <label for="ciudad">Ciudad Residencia:</label>
        <input type="text" id="ciudad" required>

        <label for="direccionEstudiante">Dirección:</label>
        <input type="text" id="direccionEstudiante" required>

        <label for="telefonoEstudiante">Telefono:</label>
        <input type="number" id="telefonoEstudiante" required>

        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input type="date" id="fechaNacimiento" required>

        <label for="generoEstudiante">Ingrese su genero:</label>
        <select id="generoEstudiante" name="genero" required>
            <option value="H">Hombre</option>
            <option value="M">Mujer</option>
            
        </select>

        <label for="ProgramaId">Programa Academico:</label>
        <select id="ProgramaID" required>
                ${getProgramaId()} //aqui falta definir esta lista
        </select>
        <button type="button" onclick="crearEstudiante()">Crear Estudiante</button>
    `;// aqui agregar las demas vista que se deben borrar
    


}

const crearEstudiante = async()=>{
    const inputNombreEstudiante=document.getElementById('nombreEstudiante');
    const inputApellidoEstudiante=document.getElementById('apellidoEstudiante');
    const inputTipoDocumento=document.getElementById('tipoDocumento');
    const inputNumeroDocumento=document.getElementById('numeroDocumento');
    const inputCiudad=document.getElementById('ciudad');
    const inputDireccionEstudiante=document.getElementById('direccionEstudiante');
    const inputTelefonoEstudiante=document.getElementById('telefonoEstudiante');
    const inputFechaNacimiento=document.getElementById('fechaNacimiento');
    const inputGeneroEstudiante=document.getElementById('generoEstudiante');
    const inputProgramaID=document.getElementById('ProgramaID');
    //const idEstudianteInput=listadoEstudiantes.length;

    const nombreEstudianteInput=inputNombreEstudiante.value;
    const apellidoEstudianteInput=inputApellidoEstudiante.value;
    const tipoDocumentoInput=inputTipoDocumento.value;
    const numeroDocumentoInput=inputNumeroDocumento.value;
    const ciudadInput=inputCiudad.value;
    const direccionEstudianteInput=inputDireccionEstudiante.value;
    const telefonoEstudianteInput=inputTelefonoEstudiante.value;
    const fechaNacimientoInput=inputFechaNacimiento.value;
    const generoEstudianteInput=inputGeneroEstudiante.value;
    const programaIDInput=inputProgramaID.value;

    
    const nuevoEstudiante={
        id:listadoEstudiantes.length+1,
        nombre:nombreEstudianteInput,
        apellido:apellidoEstudianteInput,
        tipo_documento:tipoDocumentoInput,
        numero_documento:numeroDocumentoInput,
        ciudad_residencia:ciudadInput,
        direccion:direccionEstudianteInput,
        telefono:telefonoEstudianteInput,
        fecha_nacimiento:fechaNacimientoInput,
        sexo:generoEstudianteInput,
        programa_id:programaIDInput,
    }
    await guardarEstudiante(nuevoEstudiante);
    //await cargarEstudiante ();

    inputNombreEstudiante.value='';
    inputApellidoEstudiante.value='';
    inputTipoDocumento.value='';
    inputNumeroDocumento.value='';
    inputCiudad.value='';
    inputDireccionEstudiante.value='';
    inputTelefonoEstudiante.value='';
    inputFechaNacimiento.value='';
    inputGeneroEstudiante.value='';
    inputProgramaID.value='';

    alert ('Estudiante creado con exito');

    return nuevoEstudiante;


}

const getProgramaId=()=>{
    let options='';
    for(const programa of listaProgramas){
        options+=`<option value="${programa.id}">${programa.nombre}</option>`;
    }
    return options;
}