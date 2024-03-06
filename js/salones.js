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
    await cargarSalon();

    const tablaSalonElement = document.getElementById('listadoSalones');

    try {
        let tablaSalonHTML = `
            <div class="table-responsive">
                <table class="table table-hover">
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


