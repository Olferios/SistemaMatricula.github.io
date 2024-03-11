const listaAsignaturas=[];

const cargarAsignaturas=async()=>{
    try{
        console.log('Entrando a cargarAsignaturas');
        const respuesta=await fetch("http://localhost:3000/asignaturas");

        if(!respuesta.ok){
            throw new Error('Error al cargar asignaturas');
        }
        const asignatura=await respuesta.json();
        listaAsignaturas.push(...asignatura);
    }catch(error){
        console.error('Error al cargar asignatura',error.message);
    }
}

const guardarAsignatura=async(nuevoAsignatura)=>{
    try{
        console.log('Entrando a guardarAsignatura'); 

        const respuesta=await fetch('http://localhost:3000/asignaturas',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(nuevoAsignatura),
        });

        if(!respuesta.ok){
           throw new Error('Error al crear asignatura. Estado: ',respuesta.status);
        }
        const asignaturaCreada=await respuesta.json();
        
       
        
        console.log('asignatura creado:', asignaturaCreada);

    }catch(error){
        console.error("Error al cargar asignatura",error.message);
    }
}

cargarFormularioAsignatura=()=>{
    
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
    tablaCursoElement.style.display='none';
    docenteForm.style.display='none';
    asignaturaForm.style.display='block';
    asignaturaIIElement.style.display='block';
    matriculaForm.style.display='none';
    contenedorTabla.style.display='none';
    contenedorTablaII.style.display='none';
    listaMatriculasElement.style.display='none';
    horarioForm.style.display='none';
    contenedorPrincipal.style.display='none';


    asignaturaForm.innerHTML=`
        <h2> Inscripcion de Asignaturas  </h2>
        <label for="codigoCurso">Curso:</label>
        <select id="codigoCurso" required>
            ${getCurso()} //aqui falta definir esta lista
        </select>

        <label for="codigoAsignatura">codigo asignatura:</label>
        <input type="text" id="codigoAsignatura" required>

        <label for="numeroCreditos">Creditos:</label>
        <input type="number" id="numeroCreditos" required>

        <label for="docenteId">Nombre Docente:</label>
        <select id="docenteId" required>
            ${getDocenteId()} //aqui falta definir esta lista
        </select>

        <label for="cupos">Cupos:</label>
        <input type="number" id="cupos" required> 

        

        <label for="Primer horario">Primer Dia</label>
        <select id="Primerdia" name=" dia" required>
            <option value="diaUno">Lunes</option>
            <option value="diaDos">Martes</option>
            <option value="DiaTres">Numero</option>
            <option value="DiaCuatro">Jueves</option>
            <option value="DiaCinco">Viernes</option>
        </select>

        <label for="primerahoraInicio">Horario Uno</label>
        <select id="primerahoraInicio" name="horaInicio" required>
            <option value="1">6:00am - 8:00am</option>
            <option value="2">8:00am - 10:00am</option>
            <option value="3">10:00am - 12:00m</option>
            <option value="4">12:00m - 13:59pm</option>
            <option value="5">14:00pm - 15:59pm</option>
            <option value="6">16:00pm - 17:59pm</option>
            <option value="7">18:00pm - 19:59pm</option>
        </select>
        <label for="primerSalon">Salon</label>
        <select id="primerSalon" required>
            ${getSalonId()} //aqui falta definir esta lista
        </select>

        <label for="segundoDia">Segundo Dia</label>
        <select id="segundoDia" name="segundoDia" required>
            <option value="diaUno">Lunes</option>
            <option value="diaDos">Martes</option>
            <option value="DiaTres">Numero</option>
            <option value="DiaCuatro">Jueves</option>
            <option value="DiaCinco">Viernes</option>
        </select>
        <label for="segundahoraInicio">Horario Dos</label>
        <select id="segundahoraInicio" name="horaInicio" required>
            <option value="1">6:00am - 8:00am</option>
            <option value="2">8:00am - 10:00am</option>
            <option value="3">10:00am - 12:00m</option>
            <option value="4">12:00m - 13:59pm</option>
            <option value="5">14:00pm - 15:59pm</option>
            <option value="6">16:00pm - 17:59pm</option>
            <option value="7">18:00pm - 19:59pm</option>
        </select>

        <label for="segundoSalon">Salon</label>
        <select id="segundoSalon" required>
            ${getSalonId()} //aqui falta definir esta lista
        </select>

        <button type="button" onclick="crearAsignatura()">Crear Asignatura</button>

    `;
}

const getCurso=()=>{
    let options='';
    for(const curso of listaCursos){
        options+=`<option value="${curso.id}">${curso.nombre}</option>`;
    }
    return options;
}

const getDocenteId=()=>{
    let options='';
    for(const docente of listaDocentes){
        options+=`<option value="${docente.id}">${docente.nombre}</option>`;
    }
    return options;
}

const getSalonId=()=>{
    let options='';
    for(const salon of listaSalones){
        options+=`<option value="${salon.id}">${salon.numero_identificacion}</option>`;
    }
    return options;
}



const validarCampos = () => {
    const curso = document.getElementById('codigoCurso').value;
    const codigoAsignatura = document.getElementById('codigoAsignatura').value;
    const numeroCreditos = document.getElementById('numeroCreditos').value;
    const docenteId = document.getElementById('docenteId').value;
    const cupos = document.getElementById('cupos').value;

    if (!curso || !codigoAsignatura || !numeroCreditos || !docenteId || !cupos) {
        alert('Por favor, complete todos los campos requeridos.');
        console.log('Validación de campos fallida');
        return false;
    }
    console.log('Validación de campos exitosa'); 
    return true;
}

const validarHorarios = (primerDia, primerHoraInicio, primerSalonId, segundoDia, segundoHoraInicio, segundoSalonId) => {
    for (const asignaturaExistente of listaAsignaturas) {
      if (
        asignaturaExistente.horario_clases &&
        Array.isArray(asignaturaExistente.horario_clases) &&
        (
          (primerDia === asignaturaExistente.horario_clases[0].dia &&
            primerHoraInicio >= asignaturaExistente.horario_clases[0].hora_inicio &&
            primerHoraInicio < asignaturaExistente.horario_clases[0].hora_fin) ||
          (primerDia === asignaturaExistente.horario_clases[1].dia &&
            primerHoraInicio >= asignaturaExistente.horario_clases[1].hora_inicio &&
            primerHoraInicio < asignaturaExistente.horario_clases[1].hora_fin)
        )
      ) {
        return false;
      }
      if (
        asignaturaExistente.horario_clases &&
        Array.isArray(asignaturaExistente.horario_clases) &&
        (
          (segundoDia === asignaturaExistente.horario_clases[0].dia &&
            segundoHoraInicio >= asignaturaExistente.horario_clases[0].hora_inicio &&
            segundoHoraInicio < asignaturaExistente.horario_clases[0].hora_fin) ||
          (segundoDia === asignaturaExistente.horario_clases[1].dia &&
            segundoHoraInicio >= asignaturaExistente.horario_clases[1].hora_inicio &&
            segundoHoraInicio < asignaturaExistente.horario_clases[1].hora_fin)
        )
      ) {
        return false;
      }
    }
    return true;
  };

const crearAsignatura = async () => {
    try {
      console.log("Entrando a crearAsignatura");
      if (!validarCampos()) {
        return;
      }
  
      await cargarAsignaturas(); // Asegúrate de que cargarAsignaturas devuelve una promesa
      console.log("Carga de asignaturas completada");
      const maxId = Math.max(...listaAsignaturas.map(asignatura => asignatura.id), 0);
      
     
    
      // Crear un nuevo objeto asignatura
      const nuevoAsignatura = {
        id:maxId+1,
        curso: document.getElementById("codigoCurso").value,
        codigo: document.getElementById("codigoAsignatura").value,
        creditos: document.getElementById("numeroCreditos").value,
        docente: document.getElementById("docenteId").value,
        cupos: document.getElementById("cupos").value,
        horario_clases: [
          {
            dia: document.getElementById("Primerdia").options[document.getElementById("Primerdia").selectedIndex].text,
            hora_inicio: document.getElementById("primerahoraInicio").value,
            
            salon_id: document.getElementById("primerSalon").value,
          },
          {
            dia: document.getElementById("segundoDia").options[document.getElementById("segundoDia").selectedIndex].text,
            hora_inicio: document.getElementById("segundahoraInicio").value,
            
            salon_id: document.getElementById("segundoSalon").value,
          },
        ],
      };
  
      // Validar que los horarios no se crucen
      if (
        nuevoAsignatura.horario_clases[0].dia === nuevoAsignatura.horario_clases[1].dia &&
        nuevoAsignatura.horario_clases[0].hora_inicio === nuevoAsignatura.horario_clases[1].hora_inicio
      ) {
        alert("Los horarios no pueden ser iguales.");
        return;
      }
  
      // Validar que los salones no estén ocupados en los horarios especificados en el JSON
      if (!validarHorarios(
          nuevoAsignatura.horario_clases[0].dia,
          nuevoAsignatura.horario_clases[0].hora_inicio,
          nuevoAsignatura.horario_clases[0].salon_id,
          nuevoAsignatura.horario_clases[1].dia,
          nuevoAsignatura.horario_clases[1].hora_inicio,
          nuevoAsignatura.horario_clases[1].salon_id
        )) {
        return;
      }
  
      // Llamar a la función para guardar la asignatura
      const asignaturaCreada = await guardarAsignatura(nuevoAsignatura); // Asegúrate de que guardarAsignatura devuelve una promesa
  
      // Agregar la asignatura creada al arreglo listaAsignaturas
      listaAsignaturas.push(asignaturaCreada);
  
      // Limpiar el formulario
      alert("Asignatura creada con éxito.");
  
    } catch (error) {
      console.error("Error al crear asignatura:", error);
    }
  };