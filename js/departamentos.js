const listaDepartamentos=[];

const cargarDepartamento=async()=>{
    try{
        const respuesta=await fetch("http://localhost:3000/departamentos");

        if(!respuesta.ok){
            throw new Error('Error al cargar programas');
        }
        const departamento=await respuesta.json();
        listaDepartamentos.push(...departamento);
    }catch(error){
        console.error('Error al cargar programas',error.message);
    }
    
}

const mostrarDepartamentos = async () => {
    //await cargarDepartamento();

    const tablaDepartamentoElement = document.getElementById('listadoDepartamentos');

    try {
        let tablaDepartamentosHTML = `
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th><h2>id</h2></th>
                            <th><h2>nombre</h2></th>
                        </tr>
                    </thead>
                    <tbody id="tablaProgramacion">
                        ${generarOptionsDepartamentos()}
                    </tbody>
                </table>
            </div>`;

            tablaDepartamentoElement.innerHTML = tablaDepartamentosHTML;
    } catch (error) {
        console.error('Error al mostrar Departamentos', error.message);
    }
}

const generarOptionsDepartamentos=()=>{
    let options='';
    numDepartamentos=listaDepartamentos.length;
    for(const departamento of listaDepartamentos) {
        console.log(departamento)
        options+=`<tr>`
        options+=`<td>${departamento.id}</td> <td>${departamento.nombre}</td>`;
        options+=`</tr>`;
    
    }
    console.log(options);
    return options;
}

