
'use strict';

const Model = use('Model');

class Game extends Model {
  /* A relationship on users */
  user() {
    return this.belongsTo('App/Models/User');
  }
}

module.exports = Game;
