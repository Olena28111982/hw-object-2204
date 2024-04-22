//Створити об'єкт country двома способами: літерально та за допомогою функції конструктора
// - name (рядок)
// - population (число)
// - area (число)
// метод:
// - getDensity() - повертає число 45.78

const country = {
  name: "Ukraine",
  population: 38000000,
  area: 603000,
  getDensity: function () {
    return this.population / this.area;
  },
};
console.log(country.getDensity());

function Country(name, population, area) {
    this.name = name,
    this.population = population,
    this.area = area,
    this.getDensity = function () {
      return this.population / this.area;
    };
}

const contry1 = new Country("Ukraine", 38000000, 603000);
console.log(contry1.getDensity())
