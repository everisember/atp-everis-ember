import Controller from '@ember/controller';
import constants from '../constants';

export default Controller.extend({

  noResults: 'No hay resultados',

  actions:{
    filterList(filter){
      if(constants.GENERO.ambos !== filter){
        return this.set('model', constants.TENISTAS.filter((tenist) => tenist.genero === filter));
      }
      return this.set('model', constants.TENISTAS);
    }
  }
});
