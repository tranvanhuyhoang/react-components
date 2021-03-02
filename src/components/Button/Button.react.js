import React from 'react';
import './Button.css';
class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    onPress = () => {
        const button = document.querySelector('.tvhh-button-custom');
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
        },500);
        });
        this.props.onClick && this.props.onClick();
    }


    render() {
        let {
            children,
            className,
        } = this.props
        return (
            <button 
            id="tvhh-id-button-custom" 
            className={`tvhh-button-custom ${className ? className : ''}`} 
            onClick={this.onPress}>
                {children ? children : 'Press Me'}
            </button>
        );
    }
}
export default Button;