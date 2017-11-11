import tpl from './app.html';
class ctrl {
    constructor() {
        this.appName = 'Data V'
    }
}

export const appComponent = {
    templateUrl: tpl,
    controller: ctrl
};