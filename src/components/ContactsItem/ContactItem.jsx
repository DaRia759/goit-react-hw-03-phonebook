import React from "react";
import PropTypes from 'prop-types';
import css from './ContactItem.module.css'

class ContactsItem extends React.Component {
    render() {
        const { contacts, onDeleteContact } = this.props;
        return contacts.map(({ id, name, number }) => (
            <li key={id} className={css.contact}>
                {name}:{number}{' '}
                <button onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
        ));
    }
}

    ContactsItem.propTypes = {
        contact: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
        })
        ),
        onDeleteContact: PropTypes.func.isRequired,
    };

export default ContactsItem;