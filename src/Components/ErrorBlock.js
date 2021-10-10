import React from 'react';
import Button from 'react-bootstrap/Button';

class ErrorBlock extends React.Component {

    render() {
        return (
            <>
                {this.props.error && <div>
                    <h3>{this.props.errorMessage}, Please enter a valid city name. Have a nice Day!</h3>
                    <Button onClick={this.props.clearError}>Clear Error</Button>
                </div>}
            </>
        )
    }
}

export default ErrorBlock;