/* Manejo de data */

   const filterGender = (datos, genero) => {
    let arr = [];
    for (let i = 0; i < datos.length; i++) {
      if (datos[i].house.indexOf(genero) >= 0) {
        arr.push(datos[i]);
      }
    }
    return arr;
  };

  const filterHouse = (datos, casa) => {
    let arr = [];
    for (let i = 0; i < datos.length; i++) {
      if (datos[i].house.indexOf(casa) >= 0) {
        arr.push(datos[i]);
      }
    }
    return arr;
  };
   
  
