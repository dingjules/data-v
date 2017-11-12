import tpl from './category-chart.html';
import { CATEGORY_CHART_TYPES } from '../../chart/chart.constant';

class ctrl {
    $onInit() {
        this.graphType = CATEGORY_CHART_TYPES[0].value;
        this.graphTypes = CATEGORY_CHART_TYPES;
    }
}

export const categoryChartComponent = {
    bindings: {
        data: '<'
    },
    templateUrl: tpl,
    controller: ctrl
};