import angular from 'angular';
import { chartModule } from '../chart/chart.module';

import { timeChartComponent } from './time-chart/time-chart.component';
import { categoryChartComponent } from './category-chart/category-chart.component';

export const myChartModule = angular.module('myChart', ['ngMaterial', chartModule])
    .component('timeChart', timeChartComponent)
    .component('categoryChart', categoryChartComponent)
    .name; 