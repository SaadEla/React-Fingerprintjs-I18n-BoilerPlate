
import React, {Component } from 'react';
import { withNamespaces } from 'react-i18next';



class internationalization extends Component  {

    render(){
        const { t, i18n } = this.props;
        return (
            <div>
            <button onClick={() => i18n.changeLanguage('fr')}>fr</button>
            <button onClick={() => i18n.changeLanguage('en')}>en</button>
            <h1>{t('Welcome to React')}</h1>
            <h1>{t('salam')}</h1>
          </div>
        );
    }
}

export default withNamespaces ('page')(internationalization);
