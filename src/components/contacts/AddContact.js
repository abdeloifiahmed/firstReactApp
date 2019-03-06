import React, { Component } from "react";
import { Consumer } from "../../Context";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    telephone: "",
    address: ""
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { email, telephone, name, address } = this.state;

    const newContact = {
      name,
      telephone,
      email,
      address
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users/", newContact)
      .then(res => dispatch({ type: "ADD_CONTACT", payload: res.data }));

    this.setState({
      name: "",
      telephone: "",
      email: "",
      address: ""
    });

    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.id]: e.target.value });

  render() {
    const { name, email, telephone, address } = this.state;

    return (
      <Consumer>
        {value => {
          return (
            <div className="row">
              <div className="col s12 m6">
                <div className="card grey lighten-2">
                  <span className="card-title">Add Contact</span>
                  <div className="card-content">
                    <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            id="name"
                            type="text"
                            className="validate"
                            value={name}
                            onChange={this.onChange}
                            required
                          />
                          <label htmlFor="name">First Name</label>
                        </div>
                        <div className="input-field col s12">
                          <input
                            id="email"
                            type="email"
                            className="validate"
                            value={email}
                            onChange={this.onChange}
                            required
                          />
                          <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                          <input
                            id="telephone"
                            type="text"
                            className="validate"
                            value={telephone}
                            onChange={this.onChange}
                            required
                          />
                          <label htmlFor="telephone">Phone</label>
                        </div>
                        <div className="input-field col s12">
                          <input
                            id="address"
                            type="text"
                            className="validate"
                            value={address}
                            onChange={this.onChange}
                            required
                          />
                          <label htmlFor="address">Address</label>
                        </div>
                      </div>
                      <input type="submit" className="btn" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
