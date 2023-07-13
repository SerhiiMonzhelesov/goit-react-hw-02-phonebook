import { Component } from 'react';
import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const newContact = {
      id: nanoid(),
      ...contact,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  onRemove = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} addContact={this.addContact} />
        {contacts.length ? (
          <h2>Contacts</h2>
        ) : (
          <p className="message">No contacts in the phonebook</p>
        )}
        {contacts.length > 1 && (
          <Filter handleChangeFilter={this.handleChangeFilter} />
        )}

        <Contacts contacts={filteredContacts} onRemove={this.onRemove} />
      </Container>
    );
  }
}

export default App;
