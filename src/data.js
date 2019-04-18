/* Manejo de data */
const role = datos => {

    st = "Estudiante";
    pr = "Personal";
  
    for (let i=0; i<datos.length; i++){
      if (datos[i].hogwartsStudent == true){
  return(st) ;}
  
  else
   return(pr) 
  
    }
  }


  const age = datos => {
 
    let edad;  
     let anios;
     let newArray =[];
   
   for(let i=0; i< datos.length; i++){
       anios = datos[i].yearOfBirth; 
     newArray.push(anios)   
     }
     for (let i=0; i<newArray.length; i++){
       edad = 2019 - newArray[i];
   console.log(edad);
     }
   }

   
  
