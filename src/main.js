// /* Manejo del DOM */
const contenedor = document.getElementById("contenedor");


const data = () => {
  fetch('https://raw.githubusercontent.com/DanielaGutierrezG/LIM009-DL-2.0/master/src/data/potter.json')
    .then(res => res.json())
    .then(datos => {
      paintData(datos);
      paintHouses(datos);
      paintGender(datos);
      paintRol(datos);
      paintSortAsc(datos);
      paintSortDes(datos);
    });
};
data();

const paintData = (datos) => {
  let nuevo = "";
  for (let i = 0; i < datos.length; i++) {
    nuevo += `
      <section id = card-${i}  class = "col-xs-6 col-lg-4 personaje">
       <section>`;
    if (datos[i].house === "Slytherin") {
      nuevo += `<div><img class="bandera" src="https://www.logolynx.com/images/logolynx/53/5390e974544de6279c4d9cb6253e3a2c.jpeg"></div>`;
    } else if (datos[i].house === "Gryffindor") {
      nuevo += `<div><img class="bandera" src="https://i.pinimg.com/originals/bc/a9/f9/bca9f91e0175d3ea40f24788e5e6837f.jpg"></div>`;
    } else if (datos[i].house === "Hufflepuff") {
      nuevo += `<div><img class="bandera" src="https://i2.wp.com/bloghogwarts.com/wp-content/uploads/2008/05/hufflepuffcrest.jpg"></div>`;
    } else if (datos[i].house === "Ravenclaw") {
      nuevo += `<div><img class="bandera" src="https://i0.wp.com/bloghogwarts.com/wp-content/uploads/2008/05/ravenclawcrest.jpg"></div>`;
    } else
      nuevo += `<div><img class="bandera" src="https://previews.123rf.com/images/ahasoft2000/ahasoft20001611/ahasoft2000161102930/66421405-excluir-marca-d-%C3%A1gua-de-carimbo-de-selo-de-borracha-x-cross-s%C3%ADmbolo-do-%C3%ADcone-dentro-do-quadro-do-c%C3%ADrculo-.jpg"></div>`;

    nuevo += `
      <img class ="Imagenes" src="${datos[i].image}"></img>
    </section>
    <section class="info letra">
      <div class = "centrar">${datos[i].name}</div> </br>
      <div class = "centrar">${datos[i].house}</div> </br> 
      <div><img class="icono" src="https://image.flaticon.com/icons/png/512/37/37171.png">Especie</div></br>
      ${datos[i].species} </br> </br>`;
    if (datos[i].hogwartsStudent) {
      nuevo += `<div class=''><img class="icono" src="https://cdn.iconscout.com/icon/free/png-256/role-2-439291.png">Rol</div></br> ${"Estudiante"}</br></br>`;
    } else {
      nuevo += `<div><img class="icono" src="https://cdn.iconscout.com/icon/free/png-256/role-2-439291.png">Rol</div></br> ${"Personal"}</br> </br>`;
    }


    if (typeof datos[i].yearOfBirth === "number") {
      nuevo += `<div><img class="icono" src="https://image.flaticon.com/icons/png/512/31/31370.png">Edad</div></br>${2019 - datos[i].yearOfBirth}</br></br>`;
    } else {
      nuevo += `<div><img class="icono" src="https://image.flaticon.com/icons/png/512/31/31370.png">Edad</div></br> ${"No se sabe"}</br></br>`;
    }
    nuevo += `<div><img class="icono" src="https://image.flaticon.com/icons/png/512/409/409931.png">Actor</div> </br>
${datos[i].actor} </br>  
</section> 
</section> 
`;
  }
  contenedor.innerHTML = nuevo;
};


const home = document.getElementsByClassName("casas");

const paintHouses = (datos) => {
  for (let i = 0; i < home.length; i++) {
    home[i].addEventListener("change", () => {
      let filtro = home[i].value;
      if (filtro === "Gryffindor") {
        let Gryffindor = window.filterHome(datos, filtro);
        paintData(Gryffindor);
      } else if (filtro === "Slytherin") {
        let Slytherin = window.filterHome(datos, filtro);
        paintData(Slytherin);
      } else if (filtro === "Ravenclaw") {
        let Ravenclaw = window.filterHome(datos, filtro);
        paintData(Ravenclaw);
      } else {
        let Hufflepuff = window.filterHome(datos, filtro);
        paintData(Hufflepuff);
      }
    });
  }
};
const paintGender = (datos) => {
  const gender = document.getElementsByClassName("genero");
  for (let i = 0; i < gender.length; i++) {
    gender[i].addEventListener("change", () => {
      let filtro = gender[i].value;
      if (filtro === "female") {
        let femenino = window.filterGender(datos, filtro);
        paintData(femenino);
      } else {
        let masculino = window.filterGender(datos, filtro);
        paintData(masculino);
      }
    });
  }
};


const paintRol = (datos) => {
  const rol = document.getElementsByClassName("rol");
  for (let i = 0; i < rol.length; i++) {
    rol[i].addEventListener("change", () => {
      let filtro = rol[i].value;
      if (filtro === "student") {
        let estudiante = window.filterStudent(datos);
        paintData(estudiante);
      } else {
        let personal = window.filterStaff(datos);
        paintData(personal);
      }
    });
  }
};


const paintSortDes = (datos) => {
  document.getElementById("btnDescendente").addEventListener("click", () => {
    let ordenado = window.sortAgeDes(datos);
    paintData(ordenado);
  });
};


const paintSortAsc = (datos) => {
  document.getElementById("btnAscendente").addEventListener("click", () => {
    let ordenado = window.sortAgeAsc(datos);
    paintData(ordenado);
  });
};

