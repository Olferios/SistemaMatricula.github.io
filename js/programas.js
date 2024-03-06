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
    await cargarPrograma();

    const tablaProgramasElement = document.getElementById('listadoProgramas');

    try {
        let tablaProgramasHTML = `
            <div class="table-responsive">
                <table class="table table-hover">
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

        tablaProgramasElement.innerHTML = tablaProgramasHTML;
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
