const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;

  beforeEach(function () {
      park = new Park('Jurassic Park', 5.00);
      dinosaur1 = new Dinosaur('Pteradactyl', 'Carnivore', 20);
      dinosaur2 = new Dinosaur('Brontosaurus', 'Herbivore', 15);
  });

  it('should have a name', function() {
      const actual = park.name;
      assert.deepStrictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
      const actual = park.ticketPrice;
      assert.deepStrictEqual(actual, 5.00);
  });

  it('should have a collection of dinosaurs', function () {
      const actual = park.dinosaurs;
      assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
      park.addDinosaur(dinosaur1);
      const actual = park.dinosaurs.length;
      assert.deepStrictEqual(actual, 1);
  });
    
  it('should be able to remove a dinosaur from its collection', function () {
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.removeDinosaur(dinosaur1);
      const actual = park.dinosaurs.length;
      assert.deepStrictEqual(actual, 1);
  });
    
  it('should be able to find the dinosaur that attracts the most visitors', function () {
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      const actual = park.mostVisited();
      assert.deepStrictEqual(actual, dinosaur1);   
  });

  it('should be able to find all dinosaurs of a particular species', function () {
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur2);
      const actual = park.find_all('Pteradactyl').length;
      assert.deepStrictEqual(actual, 3);
  });

  it('should be able to calculate the total number of visitors per day', function () {
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      const actual = park.dailyVisitors();
      assert.deepStrictEqual(actual, 35);
  });

  it('should be able to calculate the total number of visitors per year', function () {
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      const actual = park.yearlyVisitors();
      assert.deepStrictEqual(actual, 12285);
  });

  it('should be able to calculate total revenue for one year', function () {
      const actual = park.yearlyRevenue();
      assert.deepStrictEqual(actual, 1755);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.remove_all('Brontosaurus');
      const actual = park.dinosaurs.length;
      assert.deepStrictEqual(actual, 3);
  })

  it('should be able to provide an object containing the number of dinosaurs of each diet type', function () {
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      const dietObject = {
        'carnivore': 3,
        'herbivore': 2,
        'omnivore': 0
      };
      const actual = park.diets();
      assert.deepStrictEqual(actual, dietObject);
  })

});
