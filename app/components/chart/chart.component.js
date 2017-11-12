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
            data: {
                datasets: [{
                    label: 'Scatter Dataset',
                    data: this.data
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        type: 'time',
                        position: 'bottom'
                    }]
                }
            }
        });
    }

    $onChanges(changes) {
        if (changes && changes.type && this.chart) {
            this.chart.destroy();
            this.chart = new Chart(this._ctx, {
                type: this.type,
                data: {
                    datasets: [{
                        label: 'Scatter Dataset',
                        data: this.data
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            type: 'time',
                            position: 'bottom'
                        }]
                    }
                }
            });
        }
    }

}

export const chartComponent = {
    bindings: {
        data: '<',
        options: '<',
        type: '<'
    },
    templateUrl: tpl,
    controller: ctrl
};