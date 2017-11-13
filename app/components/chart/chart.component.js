import Chart from 'chart.js';

import tpl from './chart.html';
import './chart.less';

class ctrl {
    constructor($element) {
        'ngInject';
        this._ctx = $element.find('canvas');
    }
    $onInit(){
        this.chart = new Chart(this._ctx, {
            type: this.type,
            data: this.data,
            options: this.options
        });
    }

    $onChanges(changes) {
        if (changes && changes.type && this.chart) {
            this.chart.destroy();
            this.chart = new Chart(this._ctx, {
                type: this.type,
                data: this.data,
                options: this.options
            });
        }
        if (changes && changes.sampleRate && this.chart) {
            const originData = angular.copy(this.data);
            originData.datasets.map(data => {
                data.data = data.data.filter((value, index) => index % this.sampleRate === 0);
            })
            this.chart.destroy();
            this.chart = new Chart(this._ctx, {
                type: this.type,
                data: originData,
                options: this.options
            });
        }
    }
}

export const chartComponent = {
    bindings: {
        data: '<',
        options: '<',
        type: '<',
        sampleRate: '<'
    },
    templateUrl: tpl,
    controller: ctrl
};