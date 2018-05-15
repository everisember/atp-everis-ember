import Controller from '@ember/controller';

export default Controller.extend({

  searchLabel: 'Buscar Tenista',

  noResults: 'No hay resultados',

  name: '',

  results: [],

  actions: {

    search() {
      console.log(this.get('name'));
      console.log(this.get('model'));
      this.set('results', this.get('model').filter((elem) =>
        elem.nombre.toUpperCase().includes(this.get('name').toUpperCase())
      ));
    }
  }

});
