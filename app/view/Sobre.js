/**
 * @class App.view.Home
 * @extends extendsClass
 *
 * Tela de entrada do aplicativo
 */
Ext.define('App.view.Sobre', {
    extend: 'Ext.Panel',
    alias: 'widget.sobre',

    config: {
       	title: 'Sobre',
       	padding: 10,
       	items: [
       		{
       			xtype: 'container',
       			html: ['<h1>Sobre nós</h1>'].join()
       		}
       	]
    }
});