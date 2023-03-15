import { ContactsList } from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loader } from './Loader/Loader';

export default function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>

      <ContactForm />

      <h2> Contacts</h2>

      <ContactFilter />
      {isLoading && !error && <Loader />}
      <ContactsList />
    </div>
  );
}
