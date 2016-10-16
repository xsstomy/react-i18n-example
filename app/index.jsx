import React from 'react';
import {render} from 'react-dom';
import App from './views/App';

// 国际化
import intl from 'intl';
import {addLocaleData, IntlProvider} from 'react-intl';
import zh_CN from './constants/zh_CN';
import en_US from './constants/en_US';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
addLocaleData([...en, ...zh]);


function chooseLocale() {
    const language = getLanguage();
    switch (language.split('-')[0]) {
        case 'en':
            return en_US;
        case 'zh':
            return zh_CN;
        default:
            return zh_CN;
    }
};

function getLanguage() {
    return navigator.language || navigator.browserLanguage;
};

const router = (
    <IntlProvider locale={getLanguage()} messages={chooseLocale()}>
        <App />
    </IntlProvider>
)

render(
    router,document.getElementById('root')
)