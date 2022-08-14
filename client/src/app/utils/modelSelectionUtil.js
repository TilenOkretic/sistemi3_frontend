// import { closeConfiguratorMenu } from '../../sketchfab_webpack_engine/utils/configurationMenuUtil';
// import { addClass, removeDom } from '../../sketchfab_webpack_engine/utils/dom';
// import Card from '../card';

let openModelSelection = (api) => {
    location.reload();

    /*
        I used 'location.reload' just because the old way soft locked the app in an infinite loop 
        with no indication why
    */ 

    // setBoatModel(api, -1);

    // addClass(document.querySelector('#api-frame-holder'), 'd-none');
    
    // closeConfiguratorMenu(api);
    // api.stop();
    
    // // document.querySelector('#btn-holder').classList.add('d-none');
    // document.querySelector('#wrapper').classList.replace('d-flex', 'd-none');
    
    // let bh = document.createElement('div');
    // bh.id = ('model-selection-holder');
    // addClass(bh, 'w-100');
    // addClass(bh, 'h-100');
    // addClass(bh, 'd-flex');
    // addClass(bh, 'flex-wrap');
    // addClass(bh, 'align-items-center');
    // addClass(bh, 'justify-content-center');

    // document.querySelector('#app').appendChild(bh);
    
    // new Card(21);
    // new Card(23);
    // new Card(25);
    // new Card(28);
    // new Card(32);

    // removeDom('rts-btn');
};

export {
    openModelSelection
};
