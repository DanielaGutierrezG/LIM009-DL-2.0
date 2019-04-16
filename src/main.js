/* Manejo del DOM */
const contenedor = document.getElementById("contenedor");
const data = () =>{
    fetch('https://raw.githubusercontent.com/DanielaGutierrezG/LIM009-DL-2.0/master/src/data/potter.json')
    .then(res=>res.json())
    .then(datos=>{
        paintData(datos)
    })
}
data();

const paintData=(datos)=>{
    let nuevo="";
    for (let i=0; i<datos.length; i++){
        nuevo+=`
        <section class = "col-xs-6 col-sm-6 col-md-4 col-lg-4">
        <section id = "x" class = "col-xs-12 col-sm-12 col-md-12 col-lg-12"><img id ="Imagenes" src="${datos[i].image}"></img></section> 
        Actor:${datos[i].actor} </br>
        Personaje: ${datos[i].name} </br> 
        Especie: ${datos[i].species} </br>  
        Casa: ${datos[i].house} </br>   
        </section> 
        `;
    }
    contenedor.innerHTML = nuevo;
    }

