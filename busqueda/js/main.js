/* 
//Podemos hacer recorridos de arreglos asi o con foreach
for(let i=0; i<elephants.length; i++){
    console.log(elephants[i].name);
}*/

// document.getElementById("button").addEventListener("click", hacer);
document.getElementById("formulario").addEventListener("submit", buscar);
document.getElementById("boton").addEventListener("click",macho)
//document.getElementById("busqueda").addEventListener("keyup",buscar)


function macho(){
    const arreglo_filtrado = elephants.filter((elephant)=>{
        return elephant.sex == "Male";
    });

    dibujar(arreglo_filtrado);
}

function buscar(evt){
    evt.preventDefault();
    let elefante_a_buscar = document.getElementById("busqueda").value;

    const aux = elephants.filter((elephant)=>{
        /*if(elephant.name=="Babar")
            return true;
        else
            return false;*/

        let elefante = elephant.name.toLowerCase();
        let elefante2 = elefante_a_buscar.toLowerCase()

        return elefante.includes(elefante2);

        // return elephant.name.toLowerCase().includes(elefante_a_buscar.toLowerCase())

    });

    dibujar(aux);

}


function dibujar(elephants_filter){
    document.querySelector("#contenedor").innerHTML="";
    elephants_filter.forEach((elephant, i)=>{
            document.querySelector("#contenedor").innerHTML+=`<div class="col-3">
            <div class="card mb-5">
                <img src="${elephant.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${elephant.name}</h5>
                    <p class="card-text">${elephant.note}</p>
                    <a href="${elephant.wikilink}" target="_blank" class="btn btn-primary">Ver más</a>
                </div>
            </div>
        </div>`;
    })
}



dibujar(elephants);

/*Ejemplo NO LA USES ASI
function dibujar_secuencial(elefante_a_buscar){
    document.querySelector("#contenedor").innerHTML="";
    elephants.forEach((elephant, i)=>{
        // console.log(elephant.name)
        if(elephant.name == elefante_a_buscar){
            document.querySelector("#contenedor").innerHTML+=`<div class="col-3">
            <div class="card mb-5">
                <img src="${elephant.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${elephant.name}</h5>
                    <p class="card-text">${elephant.note}</p>
                    <a href="${elephant.wikilink}" target="_blank" class="btn btn-primary">Ver más</a>
                </div>
            </div>
        </div>`;
        }
    })
}
*/

