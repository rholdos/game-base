
'use strict';

const Model = use('Model');

class Clan extends Model {
	/* A relationship on users */
	users () {
		return this.hasMany('App/Models/User');
	}
}

module.exports = Clan;
