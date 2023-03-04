import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactList, ContactForm, Filter } from 'components';
import { Container, SectionHeader, PageHeader } from './App.styled';

export function App() {
  return (
    <Container>
      <PageHeader>Phonebook</PageHeader>
      <ContactForm />
      <SectionHeader>Contacts</SectionHeader>
      <Filter />
      <ContactList />
      <ToastContainer />
    </Container>
  );
}
