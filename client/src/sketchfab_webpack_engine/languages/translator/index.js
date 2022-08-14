import { developmentLog } from '../../logger';

let loadNewTransllationFiles = async (api) => {
    if (!api.translationFiles) api.translationFiles = {};
    let allFiles = require.context(process.env.LANG_PATH, true, /\.json/);
    await allFiles.keys().forEach(async (file)=> {
        console.log('file', file);
        import(`../../../app/assets/lang/${file.split('/')[1]}`).then(data => {
            developmentLog(`Loaded '${file}' translation file`);
            api.translationFiles[data['lang']] = data; 
        });
    });
};

let Translator = async(api, lang) => {
    developmentLog(`Translator set to '${lang}' language`);
    document.getElementsByTagName('html')[0].lang = lang;
    
    return api.translationFiles[lang];
};

export { loadNewTransllationFiles, Translator };
