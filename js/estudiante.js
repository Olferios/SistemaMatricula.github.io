
const cargarFormularioEstudiante=()=>{
    const estudianteForm=document.getElementById('listadoEstudiantes');
    estudianteForm.innerHTML=`
        <label for="nombreEstudiante">Nombres:</label>
        <input type="text" id="nombreEstudiante" required>

        <label for="apellidoEstudiante">Apellidos:</label>
        <input type="text" id="apellidoEstudiante" required>

        <label for="tipoDocumento"> Tipo Documento:</label>
        <select id="tipoDocumento" name="tipoDocumento" required>
            <option value="CC">Cedula</option>
            <option value="CE">Cedula Extranjeria</option>
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
        <button type="button" onclick="crearEstudiante()">Crear Estudiante</button>
    `;// aqui agregar las demas vista que se deben borrar
    


}