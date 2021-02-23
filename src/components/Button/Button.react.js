import React from 'react';
import './Button.css';
class Button extends React.Component {
    constructor(props) {
        super(props);
    }
render() {
        let {children} = this.props
        return (
            <div className='button_wrapper'>
                <button className="button">{children}</button>
            </div>
        );
    }
}
export default Button;