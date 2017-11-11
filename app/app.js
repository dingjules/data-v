import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import { appModule } from './components/app/app.module'

import './common/style.less';

angular.module('data-v', [
    'ngMaterial',
    appModule
])
.config(($mdThemingProvider) => {
    'ngInject';

    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('red');
  })
;

angular.element(() => angular.bootstrap(document, [appModule], {
    strictDi: true
}));