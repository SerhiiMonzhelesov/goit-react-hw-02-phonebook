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
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase().trim())
    );

    // const noContacts = this.state.contacts.length === 0;
    // const oneContact = this.state.contacts.length <= 1;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          addContact={this.addContact}
        />
        {this.state.contacts.length ? (
          <h2>Contacts</h2>
        ) : (
          <p className="message">No contacts in the phonebook</p>
        )}
        {this.state.contacts.length > 1 && (
          <Filter handleChangeFilter={this.handleChangeFilter} />
        )}

        <Contacts contacts={filteredContacts} onRemove={this.onRemove} />
      </Container>
    );
  }
}

export default App;
