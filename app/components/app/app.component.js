import tpl from './app.html';
import './app.less';
class ctrl {
    constructor(DataHelper) {
        'ngInject';

        this._DataHelper = DataHelper;
    }
    $onInit(){
        this.goto('page1');
        this.graphType = 'line';
        this.graphTypes = [
            {
                title: 'Linear',
                value: 'line'
            },
            {
                title: 'Scatter',
                value: 'scatter'
            }
        ];
        this.audience = this._DataHelper.getAudience();
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