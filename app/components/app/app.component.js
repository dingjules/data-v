import tpl from './app.html';
import './app.less';
class ctrl {
    $onInit(){
        this.goto('page1');
    }
    goto(page) {
        this.currentPage = page;
    }
}

export const appComponent = {
    templateUrl: tpl,
    controller: ctrl
};