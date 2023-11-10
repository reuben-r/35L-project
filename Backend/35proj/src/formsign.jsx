import './signup.css'
import React, { useEffect, useState} from "react";

class SignTemplate extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
      this.state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone: ''
      }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

    handleSubmit = (e) => {
        e.preventDefault();
        // get form data out of state
        const { first_name, last_name, password, email, phone } = this.state;
        fetch('http://localhost:8081', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
            })
            .then((response) => response.json())
            .then((result) => {
            console.log(result)
        })
  }
  

    render() {
    const { classes } = this.props;
    const { first_name, last_name, password, email, phone } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={this.myRef} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    };
  };
export default SignTemplate;