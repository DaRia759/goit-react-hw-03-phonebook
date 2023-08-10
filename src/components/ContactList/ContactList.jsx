import React from "react";
import PropTypes from 'prop-types';

import css from './ContactList.module.css';

class ListContacts extends React.Component {
    render() {
        const { children } = this.props;
        return <ul className={css.contactList}>{children}</ul>
    }
}

ListContacts.propTypes = {
    children: PropTypes.node.isRequired,
};


export default ListContacts;
