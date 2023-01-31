class Country {
    name;
    language;
    population;
    populationGrowthRate;
    _statePrivacy;
    _leader;
    constructor(name, language, population, populationGrowthRate, _statePrivacy, _leader) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
        this._statePrivacy = _statePrivacy;
        this._leader = _leader;
    }
    get privateData() {
        return this._statePrivacy;
    }
    set leader(newLeader) {
        this._leader = newLeader;
    }
}
class OICCountry extends Country {
    constructor(name, language, population, populationGrowthRate, statePrivacy, leader) {
        super(name, language, population, populationGrowthRate, statePrivacy, leader);
    }
    populationGrowth() {
        this.population = this.population * (1 + this.populationGrowthRate / 100);
        return this.population;
    }
}
let Pakistan = new OICCountry("Pakistan", "Urdu", 300000000, 2.5, "manaheel", "amjad");
console.info(Pakistan);
Pakistan.leader = "imran khan";
console.log(Pakistan.privateData);
console.info(Pakistan);
export {};
