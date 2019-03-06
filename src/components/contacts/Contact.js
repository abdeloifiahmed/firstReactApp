import React, { Component } from "react";
import { Consumer } from "../../Context";
import { Link } from "react-router-dom";
import axios from "axios";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = (id, dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        dispatch({ type: "DELETE_CONTACT", payload: id });
        console.log(res.data);
      });
  };

  showOnClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  render() {
    const { id, name, address, telephone, email } = this.props;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => (
          <div className="row">
            <div className="col s4">
              <h4 style={{ border: "1px solid black", padding: "0.5rem" }}>
                {name}
                <i
                  style={{ cursor: "pointer" }}
                  onClick={this.showOnClick}
                  className="material-icons"
                >
                  arrow_drop_down
                </i>
                <i
                  className="material-icons secondary-content red-text"
                  style={{ cursor: "pointer" }}
                  onClick={this.onDeleteClick.bind(
                    this,
                    id,
                    value.dispatch,
                    value
                  )}
                >
                  close
                </i>
                <Link to={`contact/edit/${id}`}>
                  <i className="material-icons secondary-content">edit</i>
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="collection">
                  <li className="collection-item">Email: {email}</li>
                  <li className="collection-item">Telefoon: {telephone}</li>
                  <li className="collection-item">Adres: {address}</li>
                </ul>
              ) : null}
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Contact;
