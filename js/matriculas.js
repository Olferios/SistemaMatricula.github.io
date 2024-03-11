const listadoMatriculas=[];

const cargarMatricula=async()=>{
  try{
      const respuesta=await fetch("http://localhost:3000/matriculas");

      if(!respuesta.ok){
          throw new Error('Error al cargar matricula');
      }
      const matricula=await respuesta.json();
      listadoMatriculas.push(...matricula);
  }catch(error){
      console.error('Error al cargar matricula',error.message);
  }
}

const guardarMatricula=async(nuevaMatricula)=>{
  try{

      const respuesta=await fetch('http://localhost:3000/matriculas',{
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body: JSON.stringify(nuevaMatricula),
      });

      if(!respuesta.ok){
         throw new Error('Error al crear el Estudiante. Estado: ',respuesta.status);
      }
      const matriculaCreada=await respuesta.json();
     
      
      console.log('Matricula creado:', matriculaCreada);

  }catch(error){
      console.error("Error al cargar matricula",error.message);
  }
}

const getEstudianteMatricula=()=>{
  let options='';
  for(const estudiante of listadoEstudiantes){
      options+=`<option value="${estudiante.id}">${estudiante.nombre}${estudiante.apellido}</option>`;
  }
  return options;
}

const getAsignaturaMatricula=()=>{
  let options='';
  for(const asignatura of listaAsignaturas){
      options+=`<option value="${asignatura.id}">${asignatura.codigo}</option>`;
  }
  return options;
}

const getPeriodoMatricula=()=>{
  let options='';
  for(const periodo of listaPeriodos){
      options+=`<option value="${periodo.id}">${periodo.codigo}</option>`;
  }
  return options;
}

cargarFormularioMatricula=()=>{
  //const matriculaForm=document.getElementById('moduloMatriculas')
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
   const asignaturasContainer=document.getElementById('asignaturasContainer')

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
   matriculaForm.style.display='block';
   contenedorTabla.style.display='none';
   contenedorTablaII.style.display='none';
   listaMatriculasElement.style.display='none';
   horarioForm.style.display='none';
   contenedorPrincipal.style.display='none';
   asignaturasContainer.style.display='block';

   
  matriculaForm.innerHTML=`
      <h2> Inscripción de Matriculas
      <label for="estudianteIdMatricula">Estudiante:</label>
      <select id="estudianteIdMatricula" required>
       ${getEstudianteMatricula()} //aqui falta definir esta lista
      </select>

      <label for="asignaturaIdMatricula">Asignatura a matricular:</label>
      <select id="asignaturaIdMatricula" required>
       ${getAsignaturaMatricula()} //aqui falta definir esta lista
      </select>

      <label for="periodoIdMatricula">Periodo a matricular:</label>
      <select id="periodoIdMatricula" required>
       ${getPeriodoMatricula()} //aqui falta definir esta lista
      </select>

      

      <button type="button" onclick="agregarOtraAsignatura()">Agregar Otra Asignatura</button>
      <br>

      <button type="button" onclick="crearMatricula()">Guardar</button>   

  `;
}
const agregarOtraAsignatura = () => {
  const asignaturasContainer = document.getElementById('asignaturasContainer');

  const nuevaAsignaturaHTML = `
      <label for="asignaturaIdMatricula">Asignatura a matricular:</label>
      <select id="asignaturaIdMatricula" required>
          ${getAsignaturaMatricula()}
      </select>
  `;

  asignaturasContainer.innerHTML += nuevaAsignaturaHTML;
};


const obtenerHorarioAsignatura = (asignaturaId) => {
  const asignatura = listaAsignaturas.find((asig) => asig.id === String(asignaturaId));
  return asignatura ? asignatura.horario_clases : null;
};

const validarCamposMatricula = () => {
  const estuIdMatricula = document.getElementById('estudianteIdMatricula').value;
  const asigIdMatricula = document.getElementById('asignaturaIdMatricula').value;
  const perioIdMatricula = document.getElementById('periodoIdMatricula').value;

  if (!estuIdMatricula || !asigIdMatricula || !perioIdMatricula) {
    alert('Por favor, complete todos los campos requeridos.');
    console.log('Validación de campos fallida');
    return false;
  }

  // Validar si el horario se cruza con otras asignaturas ya matriculadas
  const horarioAsignaturaSeleccionada = obtenerHorarioAsignatura(asigIdMatricula);
  const asignaturasMatriculadasEstudiante = listadoMatriculas.filter(
    (matricula) => matricula.estudiante_id === Number(estuIdMatricula)
  );

  const horariosSeCruzan = asignaturasMatriculadasEstudiante.some((matricula) => {
    const horarioMatricula = obtenerHorarioAsignatura(matricula.asignatura_id);

    // Verificar si los horarios se cruzan
    if (horarioMatricula && horarioAsignaturaSeleccionada) {
      return horarioMatricula.some((claseMatricula) =>
        horarioAsignaturaSeleccionada.some(
          (claseSeleccionada) =>
            claseMatricula.dia === claseSeleccionada.dia &&
            claseMatricula.hora_inicio < claseSeleccionada.hora_fin &&
            claseMatricula.hora_fin > claseSeleccionada.hora_inicio
        )
      );
    }

    return false;
  });

  if (horariosSeCruzan) {
    alert('Los horarios de las asignaturas se cruzan. No se puede realizar la matrícula.');
    console.log('Validación de horarios fallida');
    return false;
  }

  console.log('Validación de campos y horarios exitosa');
  return true;
};



const crearMatricula = async () => {
  const estuIdMatricula = document.getElementById('estudianteIdMatricula').value;
  const perioIdMatricula = document.getElementById('periodoIdMatricula').value;

  // Obtén las asignaturas seleccionadas
  const asignaturasSeleccionadas = document.querySelectorAll('#asignaturaIdMatricula');

  if (!validarCamposMatricula() || asignaturasSeleccionadas.length === 0) {
    return;
  }

  const nuevasMatriculas = [];

  asignaturasSeleccionadas.forEach((asignatura) => {
    const asignaturaId = asignatura.value;

    // Buscar la asignatura en la lista de asignaturas
    const asignaturaSeleccionada = listaAsignaturas.find((asig) => asig.id === asignaturaId);

    if (asignaturaSeleccionada) {
      // Obtener el número de créditos de la asignatura
      const creditosAsignatura = asignaturaSeleccionada.creditos;

      // Buscar la tarifa correspondiente al periodo y programa
      const tarifa = listaTarifas.find(
        (tarifa) => tarifa.periodo_id === Number(perioIdMatricula) && tarifa.programa_id === asignaturaSeleccionada.programa_id
      );

      if (tarifa) {
        // Calcular el precio de la matrícula
        const precioMatricula = creditosAsignatura * tarifa.costo_credito;
        const maxId=Math.max(...listadoMatriculas.map(matricula=>matricula.id),0);

        // Crear nueva matrícula con el precio calculado
        const nuevaMatricula = {
          id: maxId+1,
          estudiante_id: Number(estuIdMatricula),
          asignatura_id: Number(asignaturaId),
          periodo_id: Number(perioIdMatricula),
          precio: precioMatricula,
        };

        nuevasMatriculas.push(nuevaMatricula);
      } else {
        console.error('No se encontró la tarifa correspondiente para la asignatura seleccionada');
      }
    } else {
      console.error('No se encontró la asignatura con ID', asignaturaId);
    }
  });

  // Guarda solo las nuevas matrículas
  await Promise.all(nuevasMatriculas.map(guardarMatricula));

  // Agrega las nuevas matrículas a la lista principal
  listadoMatriculas.push(...nuevasMatriculas);

  alert('Matrículas creadas con éxito');
};



