import tpl from './category-chart.html';
import { CATEGORY_CHART_TYPES } from '../chart.constant';

class ctrl {
    $onInit() {
        this.graphType = CATEGORY_CHART_TYPES[0].value;
        this.graphTypes = CATEGORY_CHART_TYPES;

        this.options = {
            title: {
                display: true,
                text: this.title
            }
        };
    }
}

export const categoryChartComponent = {
    bindings: {
        data: '<',
        title: '@'
    },
    templateUrl: tpl,
    controller: ctrl
};