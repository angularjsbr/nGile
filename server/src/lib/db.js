var mongoose = require('mongoose');

var constants = require('../config/constants.js');

var uri = constants.dataBase['uri'];

module.exports = function() {
    
	mongoose.connect(constants.dataBase['uri']);

	mongoose.connection.on('connected', function() { 
		console.log('Mongoose! Conectado em ' + uri);               
	});

	mongoose.connection.on('disconnected', function() {
		console.log('Mongoose! Desconectado de ' + uri); 
	});

	mongoose.connection.on('error', function(erro) { 
		console.log('Mongoose! Erro na conexão: ' + erro); 
	});

	process.on('SIGINT', function() { 
		mongoose.connection.close(function() { 
			console.log('Mongoose! Desconectado pelo término da aplicação'); 
			process.exit(0);
	 	}); 
	});
}
