import Route from '@ember/routing/route';
import constants from '../constants';
import { get, set } from '@ember/object';

export default Route.extend({

  model(params, transiton){
    const id = get(transiton.queryParams, 'id');
    const tenista = constants.TENISTAS.findBy('id', id);
    const totalSlams = tenista.grand_slams.reduce((total, slam)=> {
      total = total + slam.ganado
      return total;
    },0);

    set(tenista, 'totalSlams', totalSlams);
    return tenista;
  }

});
