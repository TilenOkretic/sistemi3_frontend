import Upholstery from './components/upholstery';
import ExtraEquipment from './components/extraEquipment';
import ConfigFinish from './components/configFinish';
import ColorSelection from './components/colorSelection';
import HullAndMotorization from './components/hullAndMotorization';
import RoofSolutions from './components/roofSolutions';
import CockpitLayout from './components/cockpitLayout';
import BathingPlatform from './components/bathingPlatform';
import { Application } from '../sketchfab_webpack_engine/application';
import { setModelReference } from '../sketchfab_webpack_engine/config/setters/model';
import { Card21 } from './models/model21/card';
import Card23 from './models/model23/card';
import Card25 from './models/model25/card';
import Card28 from './models/model28/card';
import Card32 from './models/model32/card';
import { createReturnButton } from './utils/buttons/return';
import { moveCameraToBoatElement } from './utils/camera/boatConfiguratorCameraUtil';
import setupLanguageButtons from './languages';
import { createElement } from '../sketchfab_webpack_engine/utils/dom';

export default class BoatConfigurator extends Application {
    
    constructor() {
        super('Boat Configurator');
    }
        
    async onPageLoad(api) {
        
        setModelReference('model21', 'c3d6f98209d84e648766b2926bc08b55', api);
        
        setModelReference('model23', '5edbaf8dc19847c48b4a92d29a6cfb60', api);
        setModelReference('model25', '5edbaf8dc19847c48b4a92d29a6cfb60', api);
        
        setModelReference('model28', '89acf12fe1db4694a0308dfb515a8b6c', api);
        setModelReference('model32', '89acf12fe1db4694a0308dfb515a8b6c', api);

        if(this.API.TRANSLATOR) {
            this.addCard(new Card21(this));
            this.addCard(new Card23(this));
            this.addCard(new Card25(this));

            // TODO: this cards are not implemented because 28 / 32 models don't work correctly
            this.addCard(new Card28(this));
            this.addCard(new Card32(this));
        }
    }
    
    async preload(api){
        document.querySelector('#wrapper').classList.replace('d-none', 'd-flex');        
        this.API = api;
                
        createReturnButton(api);
        if (this.isMobile) {
            console.log('mobile: true');
            moveCameraToBoatElement('mobile', api);
        } else {
            await moveCameraToBoatElement('', this.API);
        }
        
        setupLanguageButtons(api);

        let btn = createElement('button', 'test');
        btn.textContent = 'test';
        btn.addEventListener('click', () => {
            console.log(api.defaultConfig);
        });

        document.body.appendChild(btn);
    }

    loadComponents(api) {
        this.addConfiguratorComponent(new HullAndMotorization(api));
        this.addConfiguratorComponent(new RoofSolutions(api));
        this.addConfiguratorComponent(new CockpitLayout(api));
        !api.isModel21() ? this.addConfiguratorComponent(new BathingPlatform(api)) : '';
        this.addConfiguratorComponent(new ColorSelection(api));
        this.addConfiguratorComponent(new Upholstery(api));
        this.addConfiguratorComponent(new ExtraEquipment(api));
        this.addConfiguratorComponent(new ConfigFinish(api));
    }

    apiGetters() {
        return {
            getBoatModel: () => this.API.currentModelId.split('model')[1],
            isModelInboard: () => this.API.currentModelId === 'model23' || this.API.currentModelId === 'model28',
            isModelOutboard: () => this.API.currentModelId === 'model25' || this.API.currentModelId === 'model32',
            isModelCabinEvo: () => this.API.currentModelId === 'model23' || this.API.currentModelId === 'model25',
            isModelCabin: () => this.API.currentModelId === 'model28' || this.API.currentModelId === 'model32',
            isModel21: () => this.API.currentModelId === 'model21',
            isModel23: () => this.API.currentModelId === 'model23',
            isModel25: () => this.API.currentModelId === 'model25',
            isModel28: () => this.API.currentModelId === 'model28',
            isModel32: () => this.API.currentModelId === 'model32',
            getOutboardEngineCountForModel: ()=> {
                switch (this.API.currentModelId) {
                  case 'model25':
                      return 1;
                  case 'model32':
                      return 2;
                  case 'model21':
                      return 1;
                  default:
                      return 0;
                }
            },
            getInboardEngineCountForModel: ()=> {
                switch (this.API.currentModelId) {
                  case 'model23':
                      return 1;
                  case 'model28':
                      return 2;
                  default:
                      return null;
                }
            },
            getElectricInboardEngineCountForModel: () => {
                switch (this.API.currentModelId) {
                  case 'model21':
                      return 1;
                  default:
                      return null;
                }
            },
        };
    }
}
