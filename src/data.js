/* Manejo de data */

const filterGender = (datos, condition) => {
    let nuevo = [];
    for (let i=0; i<datos.length; i++) {
        if (datos[i].gender === condition) {
            nuevo.push(datos[i]);
        }
    }
    return nuevo;
};
window.filterGender = filterGender;


const filterHome = (datos, condition) => {
    let nuevo = [];
    for (let i=0; i<datos.length; i++) {
        if (datos[i].house === condition) {
            nuevo.push(datos[i]);
        }
    }
    return nuevo;
};
window.filterHome = filterHome;

const filterStudent = (datos) => {
    let nuevo = [];
    for (let i=0; i<datos.length; i++) {
        if (datos[i].hogwartsStudent === true) {
            nuevo.push(datos[i]);
        }
    }
    return nuevo;
};
window.filterStudent = filterStudent;

const filterStaff = (datos) => {
    let nuevo = [];
    for (let i=0; i<datos.length; i++) {
        if (datos[i].hogwartsStaff === true) {
            nuevo.push(datos[i]);
        }
    }
    return nuevo;
};
window.filterStaff = filterStaff;






   
  
