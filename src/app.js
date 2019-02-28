const Munro = require('./models/munro.js');
const MunroListView = require('./views/munro_list_view.js');



document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const munroListContainer = document.querySelector('#munros');
  const munroListView = new MunroListView(munroListContainer);
  munroListView.bindEvents();


  const munros = new Munro();
  munros.getData();
  // munros.bindEvents();


});
