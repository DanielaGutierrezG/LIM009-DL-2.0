global.window = global;
require('../src/data');
require('./data.spec.js');

describe('filterGender', () => {
  it('debería ser una función', () => {
    expect(typeof window.filterGender).toBe('function');
  });

  it('Esta funcion deberia filtrar por genero', () => {
    expect(window.filterGender([{ name: "Hermione", gender: "female"}, { name: "Harry Potter", gender: "male"}], "female")).toEqual([{ name: "Hermione", gender: "female"}]);
  });
});

describe('filterHome', () => {
  it('debería ser una función', () => {
    expect(typeof window.filterHome).toBe('function');
  });

  it('Esta funcion deberia filtrar por casa', () => {
    expect(window.filterHome([{ name: "Draco", house: "Slytherin"}, { name: "Harry Potter", house: "Gryffindor"}], "Gryffindor")).toEqual([{ name: "Harry Potter", house: "Gryffindor"}]);
  });
});


describe('filterStudent', () => {
  it('debería ser una función', () => {
    expect(typeof window.filterStudent).toBe('function');
  });

  it('Esta funcion deberia filtrar por estudiante', () => {
    expect(window.filterStudent([{ name: "Draco", hogwartsStudent: true }, { name: "Severus", hogwartsStudent: false }], "student")).toEqual([{ name: "Draco", hogwartsStudent: true }]);
  });
});


describe('filterStaff', () => {
  it('debería ser una función', () => {
    expect(typeof window.filterStaff).toBe('function');
  });

  it('Esta funcion deberia filtrar por personal', () => {
    expect(window.filterStaff([{ name: "Draco", hogwartsStaff: false }, {name: "Severus", hogwartsStaff: true }], "staff")).toEqual([{name: "Severus", hogwartsStaff: true }]);
  });
});


describe('sortAgeDes', () => {
  it('debería ser una función', () => {
    expect(typeof window.sortAgeDes).toBe('function');
  });

  it('Esta funcion deberia ordenar por edad en forma descendente', () => {
    expect(window.sortAgeDes([{yearOfBirth: 1995}, {yearOfBirth: 1865}])).toEqual([{yearOfBirth: 1865}, {yearOfBirth: 1995}]);
  });
});


describe('sortAgeAsc', () => {
  it('debería ser una función', () => {
    expect(typeof window.sortAgeAsc).toBe('function');
  });

  it('Esta funcion deberia ordenar por edad en forma descendente', () => {
    expect(window.sortAgeAsc([{yearOfBirth: 1995}, {yearOfBirth: 1865}])).toEqual([{yearOfBirth: 1995}, {yearOfBirth: 1865}]);
  });
});
