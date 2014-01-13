/**
 * @class App.controller.Home
 * @extends extendsClass
 *
 * Controller da tela inicial
 */
Ext.define('App.controller.Home', {
    extend: 'Ext.app.Controller',
    requires: [
    	'App.view.Main',
        'App.view.Home',
        'App.view.Sobre'
    ],

    config: {

    	// Aqui você referencia os itens da home, como a própria view e os botões que terão algum evento
        refs: {

        	// Referencia a view principal de navegação
        	mainView: {
        		xtype: 'main', // Apelido da View
                selector: 'main',
                autoCreate: true
        	},

        	// Referencia a view da Home
        	homeView: {
        		xtype: 'home', // Apelido da View
                selector: 'home',
                autoCreate: true
        	},

        	// Referencia a view de Sobre (será chamada assim que o botão ser executado)
        	sobreView: {
        		xtype: 'sobre', // Apelido da View
                selector: 'sobre',
                autoCreate: true
        	},

        	// Referencia o botão que mudará a view
        	sobreBtn: '#sobreBtn'
        },

        control: {

        	// Escuta eventos
        	sobreBtn: {
        		// Toque no botão
        		tap: 'showSobreView'
        	}

        }

    },

    /**
     * Função que irá adicionar e ativar a view Sobre
     *
     * @return {void} 
     */
    showSobreView: function () {
    	this.getMainView().push(this.getSobreView());
    }
});	