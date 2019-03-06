import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../Context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => (
          <div>
            <h3>
              <span className="red-text">Contact </span>List
            </h3>
            {value.contacts.map(contact => (
              <Contact
                key={contact.id}
                id={contact.id}
                name={contact.name}
                email={contact.email}
                telephone={contact.telephone}
                address={contact.address}
              />
            ))}
          </div>
        )}
      </Consumer>
    );
  }
}

export default Contacts;
