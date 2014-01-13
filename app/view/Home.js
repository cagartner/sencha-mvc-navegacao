/**
 * @class App.view.Home
 * @extends extendsClass
 *
 * Tela de entrada do aplicativo
 */
Ext.define('App.view.Home', {
    extend: 'Ext.Panel',
    alias: 'widget.home',

    config: {
       	title: 'Tela inicial',
       	padding: 10,
       	items: [
       		{
       			xtype: 'container',
       			html: ['<h1>Bem vindo a home</h1>'].join()
       		},
       		{
       			xtype: 'button',
       			text: 'Clique aqui para ir para Sobre.',
       			id: 'sobreBtn'
       		}
       	]
    }
});