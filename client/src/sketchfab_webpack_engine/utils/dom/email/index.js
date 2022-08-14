import { createElement } from '..';

export let createEmailInput = () => {
    let e = createElement('input', 'form-email-input');
    e.type = 'email';
    e.required = true;
    e.placeholder = 'example@mail.com';
    return e; 
};
