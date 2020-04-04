import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="Main">
                Main
            </div>
        );
    }
}

if (document.getElementById('Main')) ReactDOM.render(<Main/>, document.getElementById('Main'))
