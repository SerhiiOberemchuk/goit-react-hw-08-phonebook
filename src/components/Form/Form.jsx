import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/contacts/operation';
import { getContacts, getIsLoading } from 'store/contacts/selectors';
import Loader from 'react-js-loader';

import swal from 'sweetalert';

export const FormAddContacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };
  const cleanState = () => {
    setName('');
    setNumber('');
  };
  const handleAddContact = e => {
    e.preventDefault();
    const newContact = {
      name: name,
      number: number,
    };

    const isContact = items.some(
      obj =>
        obj.name.trim().toLowerCase() === newContact.name.trim().toLowerCase()
    );
    if (isContact) {
      swal({
        title: newContact.name,
        text: 'Is already in contacts!',
        icon: 'info',
      });
      cleanState();
      return;
    }
    dispatch(addContact(newContact));
    cleanState();
  };
  return (
    <form onSubmit={handleAddContact}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          id="name"
          onChange={e => handleChange(e)}
          value={name}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Number
        </label>
        <input
          type="tel"
          className="form-control"
          name="number"
          id="number"
          value={number}
          onChange={e => handleChange(e)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {/* {isLoading ? (
          <Loader
            type="spinner-cub"
            bgColor={'#3367D1'}
            title={'spinner-cub'}
            size={20}
          />
        ) : (
          <p className="m-0">Add contact</p>
        )} */}
        <p className="m-0">Add contact</p>
      </button>
    </form>
  );
};
