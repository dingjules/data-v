import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-chart.js';

import { appComponent } from './app.component';

export const appModule = angular.module('app', ['ngMaterial', 'chart.js'])
    .component('app', appComponent)
    .name; 