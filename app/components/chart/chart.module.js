import angular from 'angular';

import { chartComponent } from './chart.component';

export const chartModule = angular.module('chart', [])
    .component('chart', chartComponent)
    .name; 