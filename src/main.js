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
        <section id = "x"><center><img id ="Imagenes" src="${datos[i].image}"></img></center></section> 
        <section class="info" id="letra">
        <center>${datos[i].name}</center> </br>
        <center>${datos[i].house}</center> </br> 
        Especie </br>
        ${datos[i].species} </br> </br>`
        if (datos[i].hogwartsStudent == true) {
            nuevo +=`Rol</br> ${"Estudiante"}</br></br>`
        } else {
        nuevo +=` ${"Personal"}</br> </br>`
        }
        if (typeof datos[i].yearOfBirth == "number") {
            nuevo += `Edad</br>${2019-datos[i].yearOfBirth}</br></br>`;
        } else {
            nuevo +=` ${"No se sabe"}</br></br>`
            }
     nuevo += `Actor </br>
         ${datos[i].actor} </br>  
        </section> 
        </section> 
        `;
    }
    contenedor.innerHTML = nuevo;
    }

