import { developmentLog, getEnviromentLevel } from '../logger';
import { hideLoading, showLoading } from '../utils/loadingUtil';

export default class Launcher {
    constructor(application) {
        (async ()=> {
            this.application = application;
            showLoading();
            developmentLog(`Running in ${getEnviromentLevel()} mode`);        
            await this.application.loadAssets();
            developmentLog('Assets have loaded');
            await this.application.onPageLoad(this.application.API);
            hideLoading();
            developmentLog('Page has loaded');
        })();
    }
}
