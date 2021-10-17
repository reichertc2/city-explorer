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

    handleChange = (event) => {
        event.preventDefault();
        console.log(event);
        this.props.resetState();
        // this.addon1.value ="";
        // this.setState({ cityEntry: event.target.value });
        // let cityEntry = this.state.cityEntry;
        this.props.assignLocation(event.target.value);
    }
    render() {
        // console.log('this is state from form.js', this.state)
        return (
            <>
                <InputGroup className="m-3 p-5">
                    <InputGroup.Text id="addon1" className="p-3">City Search:  </InputGroup.Text>
                    <FormControl
                        placeholder="Enter City Name"
                        onChange={(event) => {
                            event.preventDefault();
                            this.setState({ cityEntry: event.target.value })
                        }}
                        value={this.state.value}
                    />
                    <Button
                        variant="secondary"
                        value={this.state.cityEntry}
                        onClick={this.handleChange}>Explore!!!!!!!!!</Button>
                </InputGroup>
            </>
        )
    }

};

export default Form;
