import tpl from './app.html';
import './app.less';
import { PAGES } from './app.constant';
import { CHART_TYPES } from '../chart/chart.constant';

class ctrl {
    constructor(DataHelper) {
        'ngInject';

        this._DataHelper = DataHelper;

        this.pages = PAGES;
    }
    $onInit() {
        this.goto(PAGES[0].value);
        this.graphType = 'line';
        this.graphTypes = CHART_TYPES;
        this.audience = this._DataHelper.getAudience();
        this.bandwidth = this._DataHelper.getBandwidth();
        this.usage = this._DataHelper.getUsage();
        this.country = this._DataHelper.getCountry();
        this.options = {
            scales: {
                xAxes: [{
                    type: 'time',
                }]
            }
        };
    }

    goto(page) {
        this.currentPage = page;
    }
}

export const appComponent = {
    templateUrl: tpl,
    controller: ctrl
};