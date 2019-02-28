const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const Munro = function() {
  this.munros = [];
};



Munro.prototype.getData = function () {

  const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/munros');
  requestHelper.get()
    .then((data) => {
      this.handleDataReady(data);
      PubSub.publish('Munro:munro-data-ready', this.munros);
      console.log(data);
    })

};

Munro.prototype.handleDataReady= function (munros) {
  const munroNames = this.getMunroNames(munros);
  this.modelMunros(munroNames);
  console.log(munroNames);
};

Munro.prototype.getMunroNames = function (munros) {
  return munros
  .map(munro => munro.name)
  console.log(munros);
};

Munro.prototype.modelMunros = function (munroNames) {
  this.munros = munroNames.map(munroName) => {
    return {
      name: munroName
    }
  }

};


module.exports = Munro;
