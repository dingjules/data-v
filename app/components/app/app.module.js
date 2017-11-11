import angular from 'angular';
import { appComponent } from './app.component';

export const appModule = angular.module('app', [])
    .component('app', appComponent)
    .name; 