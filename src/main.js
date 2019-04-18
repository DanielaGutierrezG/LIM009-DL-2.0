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
        nuevo +=`
        <section class = "col-xs-6 col-sm-6 col-md-4 col-lg-4">
        <section id = "x">`
        if (datos[i].house == "Slytherin") {
            nuevo +=`<div><img id="bandera" src="https://www.logolynx.com/images/logolynx/53/5390e974544de6279c4d9cb6253e3a2c.jpeg"></div>`
        } 
        if (datos[i].house == "Gryffindor") {
            nuevo +=`<div><img id="bandera" src="https://i.pinimg.com/originals/bc/a9/f9/bca9f91e0175d3ea40f24788e5e6837f.jpg"></div>`
        } 
        if (datos[i].house == "Hufflepuff") {
            nuevo +=`<div><img id="bandera" src="https://i2.wp.com/bloghogwarts.com/wp-content/uploads/2008/05/hufflepuffcrest.jpg"></div>`
        } 
        if (datos[i].house == "Ravenclaw") {
            nuevo +=`<div><img id="bandera" src="https://i0.wp.com/bloghogwarts.com/wp-content/uploads/2008/05/ravenclawcrest.jpg"></div>`
        } 
        nuevo+=`
        <center><img id ="Imagenes" src="${datos[i].image}"></img></center></section> 
        <section class="info" id="letra">
        <center>${datos[i].name}</center> </br>
        <center>${datos[i].house}</center> </br> 
        <div><img id="icono" src="https://image.flaticon.com/icons/png/512/37/37171.png">Especie</div></br>
        ${datos[i].species} </br> </br>`
        if (datos[i].hogwartsStudent == true) {
            nuevo +=`<div><img id="icono" src="https://cdn.iconscout.com/icon/free/png-256/role-2-439291.png">Rol</div></br> ${"Estudiante"}</br></br>`
        } else {
        nuevo +=`<div><img id="icono" src="https://cdn.iconscout.com/icon/free/png-256/role-2-439291.png">Rol</div></br> ${"Personal"}</br> </br>`
        }
        if (typeof datos[i].yearOfBirth == "number") {
            nuevo += `<div><img id="icono" src="https://image.flaticon.com/icons/png/512/31/31370.png">Edad</div></br>${2019-datos[i].yearOfBirth}</br></br>`;
        } else {
            nuevo +=`<div><img id="icono" src="https://image.flaticon.com/icons/png/512/31/31370.png">Edad</div></br> ${"No se sabe"}</br></br>`
            }
     nuevo += `<div><img id="icono" src="https://image.flaticon.com/icons/png/512/409/409931.png">Actor</div> </br>
         ${datos[i].actor} </br>  
        </section> 
        </section> 

        `;
    }
    contenedor.innerHTML = nuevo;
    }

