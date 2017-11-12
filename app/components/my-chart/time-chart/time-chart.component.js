import tpl from './time-chart.html';
import { TIME_CHART_TYPES } from '../chart.constant';

class ctrl {
    $onInit() {
        this.graphType = TIME_CHART_TYPES[0].value;
        this.graphTypes = TIME_CHART_TYPES;
        this.options = {
            title: {
                display: true,
                text: this.title
            },
            scales: {
                xAxes: [{
                    type: 'time',
                }]
            }
        };
    }
}

export const timeChartComponent = {
    bindings: {
        data: '<',
        title: '@'
    },
    templateUrl: tpl,
    controller: ctrl
};