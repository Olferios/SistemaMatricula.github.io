// js/reporteUno.js

// Función para obtener el total de matrículas recaudadas por periodo y el precio total
const generarReporteUno = () => {
  // Objeto para almacenar el total de matrículas por periodo y el precio total
  let reporte = {};

  // Iterar sobre la lista de matrículas
  listadoMatriculas.forEach(matricula => {
      // Cambia matricula.periodo a matricula.periodo_id
      const periodo = matricula.periodo_id;

      // Verificar si el periodo ya está en el objeto reporte
      if (reporte.hasOwnProperty(periodo)) {
          // Sumar el precio al periodo existente
          reporte[periodo].totalMatriculas += 1;
          reporte[periodo].precioTotal += matricula.precio;
      } else {
          // Agregar un nuevo periodo al objeto reporte
          reporte[periodo] = {
              totalMatriculas: 1,
              precioTotal: matricula.precio,
          };
      }
  });

  // Crear la tabla y agregarla al contenedor en el HTML
  const tabla = document.createElement('table');
  tabla.innerHTML = `
      <thead>
          <tr>
              <th>Periodo</th>
              <th>Total Matrículas</th>
              <th>Precio Total</th>
          </tr>
      </thead>
      <tbody>
          ${Object.keys(reporte).map(periodo => `
              <tr>
                  <td>${periodo}</td>
                  <td>${reporte[periodo].totalMatriculas}</td>
                  <td>$ ${reporte[periodo].precioTotal}</td>
              </tr>
          `).join('')}
      </tbody>
  `;

  // Obtener el contenedor donde se mostrará la tabla y agregarla
  //const contenedorTabla = document.getElementById('moduloReportesUno');
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
   asignaturaForm.style.display='none';
   asignaturaIIElement.style.display='none';
   matriculaForm.style.display='none';
   contenedorTabla.style.display='block';
   contenedorTablaII.style.display='none';
   listaMatriculasElement.style.display='none';
   horarioForm.style.display='none';
   contenedorPrincipal.style.display='none';

   

  contenedorTabla.innerHTML = '<h2>Matrícula más matriculada</h2>';
  contenedorTabla.appendChild(tabla);
};

