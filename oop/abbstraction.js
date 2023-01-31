class Country {
    name;
    language;
    population;
    populationGrowthRate;
    constructor(name, language, population, populationGrowthRate) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
    }
}
class OICCountry extends Country {
    constructor(name, language, population, populationGrowthRate) {
        super(name, language, population, populationGrowthRate);
    }
    populationGrowth() {
        this.population = this.population * (1 + this.populationGrowthRate / 100);
        return this.population;
    }
}
let Pakistan = new OICCountry("Pakistan", "Urdu", 300000000, 2.5);
//console.info(Pakistan);
console.log(Pakistan.populationGrowth());
export {};
// console.info(Pakistan);
// Pakistan.populationGrowth();
// console.info(Pakistan);
