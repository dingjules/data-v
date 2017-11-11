import angular from 'angular';

import { appModule } from './components/app/app.module'

import './common/style.less';

angular.module('data-v', [
    appModule
])
    .config(($mdThemingProvider) => {
        'ngInject';

        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
    })
    .config((ChartJsProvider) => {
        'ngInject';
        // Configure all charts
        ChartJsProvider.setOptions({
            chartColors: ['#FF5252', '#FF8A80'],
            responsive: false
        });
        // Configure all line charts
        ChartJsProvider.setOptions('line', {
            showLines: false
        });
    })
    ;

angular.element(() => angular.bootstrap(document, [appModule], {
    strictDi: true
}));