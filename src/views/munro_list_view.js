const PubSub = require('../helpers/pub_sub.js');


const MunroListView = function(container) {

  this.container = container;

}

MunroListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munro:munro-data-ready', (evt) => {
    this.munros = evt.detail;
    this.render();
   console.log(evt);
  });

};





module.exports = MunroListView;
