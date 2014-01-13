/**
 * Tela que controla as views, nela serão adicionadas/removidas as views dos controllers
 * @extends Ext.navigation.View
 */
Ext.define('App.view.Main', {
    extend: 'Ext.navigation.View', // 
    xtype: 'main',
    alias: 'widget.main', // Não esqueça de dar o apelido para referenciar nos controllers.
    config: {
        tabBarPosition: 'top',

        items: [
            // Chama a tela inicial
            {
                xtype: 'home',
                title: 'Tela inicial'
            }
        ]
    }
});
