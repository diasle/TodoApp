import React from 'react';

class DefaultProps extends React.Component {
    render () {
        return (
        <div>
            {this.props.oneProp}
            {this.props.twoProp}
        </div>
        )
    }
}

DefaultProps.defaultProps = {
    oneProp : "Hello",
    twoProp : "world!"
};

export default DefaultProps;


