import angular from 'angular';

import { appModule } from './components/app/app.module'

angular.module('data-v', [
    appModule
]);

angular.element(() => angular.bootstrap(document, [appModule], {
    strictDi: true
}));