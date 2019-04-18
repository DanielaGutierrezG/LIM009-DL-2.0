/* Manejo del DOM */
// const contenedor = document.getElementById("contenedor");
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
        <section id = "x"><img class="center-block" id ="Imagenes" src="${datos[i].image}" class = "center"></img></section> 
        <section class="info" id="letra">
        ${datos[i].name} </br>
        ${datos[i].house} </br> </br>
        Especie </br>
        ${datos[i].species} </br> </br>
        Rol </br>
        Edad </br> </br>
        Actor </br>
         ${datos[i].actor} </br>  
        </section> 
        </section> 
        `;
    }
    contenedor.innerHTML = nuevo;
    }

