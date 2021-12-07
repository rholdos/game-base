
'use strict';

const Route = use('Route');
const Database = use('Database');

// Default routes
Route.get('/', () => {
  return { greeting: '- This is Adonis JS Server for GameBase App -' };
});

// Server API Routes
Route.group( () => {
  Route.post('register', 'UserController.register');
  Route.post('login', 'UserController.login');
	Route.get('users', 'UserController.selectLogged');
	Route.get('users/:id', 'UserController.select');
	Route.patch('users/:id', 'UserController.update');

	Route.post('clans', 'ClanController.insert');
	Route.get('clans/:id', 'ClanController.select');
	Route.patch('clans/:id', 'ClanController.update');
	Route.delete('clans/:id', 'ClanController.delete');

  Route.get('games', 'GameController.select').middleware('auth');
  Route.post('games', 'GameController.insert').middleware('auth');

	Route.get('wishes', 'WishController.select').middleware('auth');
	Route.post('wishes', 'WishController.insert').middleware('auth');
	Route.delete('wishes/:id', 'WishController.delete').middleware('auth');
}).prefix('server');


// Testing routes --------------------------------------------------------------------------
// Route.get('/users', async () => { return await Database.table('users').select('*'); });
// Route.get('/clans', async () => { return await Database.table('clans').select('*'); });
// Route.get('/games', async () => { return await Database.table('games').select('*'); });
// Route.get('/wishes', async () => { return await Database.table('wishes').select('*'); });
