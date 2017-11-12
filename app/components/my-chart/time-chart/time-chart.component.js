import tpl from './time-chart.html';
import { TIME_CHART_TYPES } from '../chart.constant';

class ctrl {
    $onInit() {
        this.graphType = TIME_CHART_TYPES[0].value;
        this.graphTypes = TIME_CHART_TYPES;
        this.options = {
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
        data: '<'
    },
    templateUrl: tpl,
    controller: ctrl
};