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
                <InputGroup style={{ height: "2rem", borderRadius: '10px' }}>
                    <InputGroup.Text id="addon1" style={{ fontWeight: "bold", fontSize: "1.25rem" }}>City Search:  </InputGroup.Text>
                    <FormControl style={{ margin: "1rem", backgroundColor: "##3a435e", height: "2rem", width: "70%", borderRadius: '10px', color: 'white' ,inputStyles: "white"}}
                        placeholder="Enter City Name"
                        onChange={(event) => {
                            event.preventDefault();
                            this.setState({ cityEntry: event.target.value })
                        }}
                        value={this.state.value}
                    />
                    <Button style={{padding:".5rem",  borderRadius:"10px", backgroundColor:"#3a435e"}}
                        variant="secondary"
                        value={this.state.cityEntry}
                        onClick={this.handleChange}>Explore!!!</Button>
                </InputGroup>
            </>
        )
    }

};

export default Form;
