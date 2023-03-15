import css from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/selector';
import { deleteContact } from 'redux/operations';

export const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contact} key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            className={css.btn}
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
