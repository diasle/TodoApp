import React from 'react';
import PropTypes from 'prop-types';

class PropsVal extends React.Component {
    render () {
        return (
            <div>
                <h3>Array: {this.props.propArray}</h3>
                <h3>Bool: {this.props.propBool ? "True" : "False"}</h3>
                <h3>Func: {this.props.propFunction(3)}</h3>
                <h3>Number: {this.props.propNumber}</h3>
                <h3>String: {this.props.propString}</h3>
                <h3>Object: {this.props.propObject.name1}</h3>
                <h3>Object: {this.props.propObject.name2}</h3>
                <h3>Object: {this.props.propObject.name3}</h3>
            </div>
        )
    }
}

PropsVal.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunction: PropTypes.function,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
    propObject: PropTypes.object

};

PropsVal.defaultProps = {
    propArray: [1,2,3,4,5],
    propBool: true,
    propFunction: function(e){return e},
    propNumber: 5,
    propString: "Diana",
    propObject: {
        name1: "foo",
        name2: "bar",
        name3: "rar"
    }
};

export default PropsVal;
