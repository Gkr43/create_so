sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'createso1/test/integration/FirstJourney',
		'createso1/test/integration/pages/salesorderList',
		'createso1/test/integration/pages/salesorderObjectPage'
    ],
    function(JourneyRunner, opaJourney, salesorderList, salesorderObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('createso1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThesalesorderList: salesorderList,
					onThesalesorderObjectPage: salesorderObjectPage
                }
            },
            opaJourney.run
        );
    }
);