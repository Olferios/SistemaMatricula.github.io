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
    await cargarTarifa();

    const tablaTarifaElement = document.getElementById('listadoTarifas');

    try {
        let tablaTarifaHTML = `
            <div class="table-responsive">
                <table class="table table-hover">
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


