// /* Manejo del DOM */
// const contenedor = document.getElementById("contenedor");

const data = () =>{
    fetch('https://raw.githubusercontent.com/DanielaGutierrezG/LIM009-DL-2.0/master/src/data/potter.json')
    .then(res=>res.json())
    .then(datos=>{
       paintData(datos)
    })
}
data();


const data2 = () =>{
    fetch('https://raw.githubusercontent.com/DanielaGutierrezG/LIM009-DL-2.0/master/src/data/potter.json')
    .then(res=>res.json())
    .then(datos=>{
       paintHouses(datos)
    })
}
data2();



const data3 = () =>{
    fetch('https://raw.githubusercontent.com/DanielaGutierrezG/LIM009-DL-2.0/master/src/data/potter.json')
    .then(res=>res.json())
    .then(datos=>{
       paintGender(datos)
    })
}
 data3();



const data4 = () =>{
    fetch('https://raw.githubusercontent.com/DanielaGutierrezG/LIM009-DL-2.0/master/src/data/potter.json')
    .then(res=>res.json())
    .then(datos=>{
       paintRol(datos)
    })
}
data4();



const data5 = () =>{
    fetch('https://raw.githubusercontent.com/DanielaGutierrezG/LIM009-DL-2.0/master/src/data/potter.json')
    .then(res=>res.json())
    .then(datos=>{
       paintSortAsc(datos)
    })
}
data5();


const data6 = () =>{
    fetch('https://raw.githubusercontent.com/DanielaGutierrezG/LIM009-DL-2.0/master/src/data/potter.json')
    .then(res=>res.json())
    .then(datos=>{
       paintSortDes(datos)
    })
}
data6();

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
    


const home = document.getElementsByClassName("casas");

const paintHouses=(datos)=>{
for (let i=0; i<home.length; i++){
    console.log(home[i])
    home[i].addEventListener("change", ()=>{
        let valor = home[i].value;
        if(valor === "Gryffindor"){
            let gryff = window.filterHome(datos, valor);
            paintData(gryff);
        }

        if(valor === "Slytherin"){
            let Slyt = window.filterHome(datos, valor);
            paintData(Slyt);
        }

        if(valor === "Ravenclaw"){
            let raven = window.filterHome(datos, valor);
            paintData(raven);
        }

        if(valor === "Hufflepuff"){
            let huffle = window.filterHome(datos, valor);
            paintData(huffle);
        }

        })
    }};


    
const paintGender=(datos)=>{
    const gender = document.getElementsByClassName("genero");
    for (let i=0; i<gender.length; i++){
        gender[i].addEventListener("change", ()=>{
            let valor = gender[i].value;
            if(valor === "female"){
                let femenino = window.filterGender(datos, valor);
                paintData(femenino);
            }
            else if (valor === "male"){
                let masculino = window.filterGender(datos, valor);
                paintData(masculino);
            }
        })
  }  };


  const paintRol=(datos)=>{

    const rol = document.getElementsByClassName("rol");
    for (let i=0; i<rol.length; i++){
        rol[i].addEventListener("change", ()=>{
           let valor = rol[i].value;
           if (valor === "student") {
               let estudiante = window.filterStudent(datos);
               paintData(estudiante);
           }
           else if (valor === "staff") {
               let personal = window.filterStaff(datos);
               paintData(personal);
           }
        })
    }};

 
    const paintSortDes=(datos)=>{

 document.getElementById("btnDescendente").addEventListener("click", () => {
     let ordenado = window.sortAgeDes(datos);
     paintData(ordenado);
})
    }



    const paintSortAsc=(datos)=>{

     document.getElementById("btnAscendente").addEventListener("click", () => {
        let ordenado = window.sortAgeAsc(datos);
        paintData(ordenado);
   })
       }
   
   