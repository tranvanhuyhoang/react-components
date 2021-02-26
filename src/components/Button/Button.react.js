import React from 'react';
import './Button.css';
class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    onPress = () => {
        console.log("vo day")
        const button = document.querySelector('#button-custom');
        button.addEventListener('click', function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.className = "ripples";
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
        setTimeout(() => {
            ripples.remove()
        },700);
        })
    }


    render() {
        let {
            children,
            className,
        } = this.props
        return (
            <div className={`button_wrapper ${className}`}>
                <button id="button-custom" onClick={this.onPress}>{children ? children : 'Press Me'}</button>
            </div>
        );
    }
}
export default Button;