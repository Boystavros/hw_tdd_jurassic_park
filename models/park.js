const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
    this.daysOpen = 351;
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
    dinoIndex = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(dinoIndex, 1);
}

Park.prototype.mostVisited = function () {
    let mostVisited = this.dinosaurs[0];
    for (let i = 1;  i < this.dinosaurs.length; i++) {
        if (this.dinosaurs[i].guestsAttractedPerDay > mostVisited.guestsAttractedPerDay) {
            mostVisited = this.dinosaurs[i];
        }
    }
    return mostVisited;
}

Park.prototype.find_all = function (dinosaurSpecies) {
    const found = [];
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species === dinosaurSpecies) {
            found.push(dinosaur);
        }
    }
    return found;
}

Park.prototype.dailyVisitors = function () {
    let total = 0;
    for (let dinosaur of this.dinosaurs) {
        total += dinosaur.guestsAttractedPerDay;
    }
    return total;
}

Park.prototype.yearlyVisitors = function () {
    return this.dailyVisitors() * this.daysOpen;
}

Park.prototype.yearlyRevenue = function () {
    return this.ticketPrice * this.daysOpen;
}

Park.prototype.remove_all = function (dinosaurSpecies) {
    for (let i = this.dinosaurs.length - 1; i >= 0; i--) {
        if (this.dinosaurs[i].species === dinosaurSpecies) {
            this.dinosaurs.splice(i, 1);
        }
    }
}

Park.prototype.diets = function () {
    const dietObject = {
        'carnivore': 0,
        'herbivore': 0,
        'omnivore': 0
    };
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.diet === 'Carnivore') {
            dietObject['carnivore'] += 1;
        }
        else if (dinosaur.diet === 'Herbivore') {
            dietObject['herbivore'] += 1;
        }
        else {
            dietObject['omnivore'] += 1;         
        }
    }
    return dietObject;
}



module.exports = Park;