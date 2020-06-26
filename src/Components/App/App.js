import React from 'react';
import './App.css';
import Header from './../Header/Header';
import Number from './../Number/Number';
import Buttons from './../Buttons/Buttons';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: 0};
    }

    onChangeNumber(number) {
        this.setState({number})
    }

    render() {
        const number = this.state.number;

        return (
            <div className="App">
                <div className="App-header">
                    <Header/>
                    <Number number={number}/>
                    <Buttons number={number} onChangeNumber={this.onChangeNumber.bind(this)}/>
                </div>
            </div>
        );
    }
}
