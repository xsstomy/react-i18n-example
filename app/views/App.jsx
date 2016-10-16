import React, {Component} from 'react';

import {FormattedMessage} from 'react-intl';

class App extends Component {
   
    render() {
        return (
            <div>
                <FormattedMessage id="app.label" />
            </div>
        )
    }
}

export default App;