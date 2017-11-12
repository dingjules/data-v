import angular from 'angular';

import { DataHelperService } from './DataHelper.service';

export const servicesModule = angular.module('services', [])
    .service('DataHelper', DataHelperService)
    .name; 