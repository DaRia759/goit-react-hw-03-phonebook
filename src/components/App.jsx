import React from "react";
import { nanoid } from 'nanoid';
import Form  from './Form/Form';
import PropTypes from 'prop-types';
import Filter from './Filter/Filter';
import ListContacts from './ContactList/ContactList';
import ContactsItem from "./ContactsItem/ContactItem";
import css from './App.module.css';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: '',
  };

  handleAddContact = ({name, number}) => {
     const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.checkNameToSame(name)
      ? alert(`${name} is already in contacts`)
      : this.addNewContact(newContact);
  };


  checkNameToSame = name => {
    const lowerCaseNewName = name.toLowerCase();
    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === lowerCaseNewName
    );
  };

  addNewContact = newContact => {
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount () {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };

  componentDidUpdate (prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
 
    return(
      <div>
        <h1 className={css.h1}>Phonebook</h1>
        <Form onAddContact={this.handleAddContact} />
        <h2 className={css.h2}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}></Filter>
        <ListContacts children={
          <ContactsItem
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        }
        />
      </div>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      // filter: PropTypes.string.isRequired,
    })
  ),
};

export default App;