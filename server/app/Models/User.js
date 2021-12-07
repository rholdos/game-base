
'use strict';

const Model = use('Model');
const Hash = use('Hash');

class User extends Model {
  static boot () {
    super.boot();
    /* Hash the password before saving it to the database */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    })
  }

  /* A relationship on games */
  games () {
    return this.hasMany('App/Models/Game');
  }

	/* A relationship on wishes */
	wishes () {
		return this.hasMany('App/Models/Wish');
	}

	/* A relationship on clan */
	clan () {
		return this.hasOne('App/Models/Clan');
	}
}

module.exports = User;
