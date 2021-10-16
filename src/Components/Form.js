import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityEntry: ''
        }
    }

    handleChange(event) {
        event.preventDefault();
        console.log(event);
        this.setState({ cityEntry: event.target.value });
        this.props.assignLocation(this.state.cityEntry);
    }
    render() {
        return (
            <>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="addon1" className="p3">City Search (From Form.js):</InputGroup.Text>
                    <FormControl
                        placeholder="Enter City Name"
                        onChange={this.handleChange}
                    />
                    <Button
                        variant="secondary"
                        onClick={this.props.getLocation}>Explore!!!!!!!!!</Button>
                </InputGroup>
                <h3>{this.state.cityEntry}</h3>
            </>
        )
    }

};

export default Form;
