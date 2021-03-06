import React, {Component, PropTypes} from 'react';
import Contact from './Contact';

class ContactList extends Component {
  render() {
    return (
      <div>
        <ul className="contact-list">
          {this.props.contacts.map(contact => {
            return (
              <Contact
                key={contact._id}
                id={contact._id}
                name={contact.name}
                avatar={contact.avatar}
                occupation={contact.occupation}
                onSelectClick={() => this.props.onSelectContact(contact)}
                onDeleteClick={() => this.props.onDeleteContact(contact._id)}

              />
            );
          })}
          <span onClick={this.props.onResetClick}> Reset </span>
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  onResetClick: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
  onSelectContact: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default ContactList;
