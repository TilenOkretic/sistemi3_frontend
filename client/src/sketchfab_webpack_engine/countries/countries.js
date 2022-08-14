
// TODO: refactor this class so that it is cleaner and easier to use

let BASE_UTL = 'https://restcountries.com';

let getAllCountries = async () => {

    let url = `${BASE_UTL}/v3.1/all`;
    
    let req = await fetch(url);
    let data = await req.json();

    let clist = [];
    data.forEach(element => {
        clist.push(element.name.common);
    });

    return clist;
};

let getCountryNameFromCountryCode = async (code) => {
    let url = `${BASE_UTL}/v3.1/alpha/${code}`;
    
    let req = await fetch(url);
    let data = await req.json();

    return data[0].name.common;
};

let getCountryFromCountryName = async (name) => {
    let aName = name.split(' ');
    let uName = '';
    aName.forEach(e => {
        uName += e.charAt(0).toUpperCase() + e.slice(1);
    });
    
    let url = `${BASE_UTL}/v3.1/name/${uName}`;
    let req = await fetch(url);
    let data = await req.json();
    return data[0];
};

let getCountryCodeFromCountryName = async (name) => await getCountryFromCountryName(name);

let isValidCountry = async (countryName) => {
    let all = await getAllCountries();
    return all.includes(countryName);
};

export {
    getAllCountries,
    getCountryNameFromCountryCode,
    getCountryCodeFromCountryName,
    getCountryFromCountryName,
    isValidCountry,
};
