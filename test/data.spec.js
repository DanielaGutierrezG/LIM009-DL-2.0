global.window = global;
require('../src/data');
require('./data.spec.js');

describe('filterGender', () => {
  it('debería ser una función', () => {
    expect(typeof window.filterGender).toBe('function');
  });

  it('Esta funcion deberia filtrar por genero', () => {
    expect(window.filterGender([{ name: "Hermione", gender: "female"}, { name: "Harry Potter", gender: "male"}], "female")).toEqual({ name: "Hermayone", gender: "female"});
  });
});

describe('filterHouse', () => {
  it('debería ser una función', () => {
    expect(typeof window.filterHouse).toBe('function');
  });

  it('Esta funcion deberia filtrar por genero', () => {
    expect(window.filterGender([{ name: "Draco", house: "Slytherin"}, { name: "Harry Potter", house: "Gryffindor"}], "Gryffindor")).toEqual({ name: "Harry Potter", house: "Gryffindor"});
  });
});
