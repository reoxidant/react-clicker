import React from 'react';
import './Buttons.css';
import plus from './plus.svg';
import reset from './reset.svg';
import minus from './minus.svg';


export default class Buttons extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            action: null,
            buttons: [
                {
                    class: "button-plus",
                    src: plus,
                    alt: "icon-plus"
                },
                {
                    class: "button-reset",
                    src: reset,
                    alt: "icon-reset"
                },
                {
                    class: "button-minus",
                    src: minus,
                    alt: "icon-minus"
                }
            ]
        }
    }

    handlerClick(e) {
        if (e.target.className == "button-plus") {
            this.props.onChangeNumber(this.props.number + 1);
        } else if (e.target.className == "button-minus") {
            if (this.props.number >= 1) {
                this.props.onChangeNumber(this.props.number - 1);
            }
        } else {
            this.props.onChangeNumber(this.props.number * 0);
        }
    }


    render() {
        return (
            <div className="clicker-buttons">
                {this.state.buttons.map((item, index) => (
                    <button key={item + "" + index} className={item.class} onClick={this.handlerClick.bind(this)}>
                        <img src={item.src} alt={item.alt}/>
                    </button>
                ))}
            </div>
        );
    }
}