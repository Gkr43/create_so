sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'createso1',
            componentId: 'salesorderObjectPage',
            contextPath: '/salesorder'
        },
        CustomPageDefinitions
    );
});