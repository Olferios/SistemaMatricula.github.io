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
    await cargarPeriodo();

    const tablaPeriodoElement = document.getElementById('listadoPeriodos');

    try {
        let tablaPeriodoHTML = `
            <div class="table-responsive">
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


