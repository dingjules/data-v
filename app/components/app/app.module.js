import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import { servicesModule } from '../../services/service.module';
import { chartModule } from '../chart/chart.module';

import { appComponent } from './app.component';

export const appModule = angular.module('app', ['ngMaterial', chartModule, servicesModule])
    .component('app', appComponent)
    .name; 