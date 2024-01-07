import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/contacts/operation';
import { getContacts, visibleContacts } from 'store/contacts/selectors';

export const ContactsList = () => {
  const items = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => () => {
    dispatch(deleteContact(id));
  };

  const arreyContactsFiltered = useSelector(visibleContacts);

  return (
    <ul className="list-group ">
      {arreyContactsFiltered.map(({ id, name, number }) => (
        <li className="list-group-item d-flex" key={id}>
          <div className="p-2">
            {name}: {number}
          </div>
          <button
            id={id}
            onClick={handleDeleteContact(id)}
            type="button"
            className="btn btn-danger ms-auto"
          >
            Delete
          </button>
        </li>
      ))}
      {items.length === 0 && <h3>Phonebook is empty</h3>}
    </ul>
  );
};
