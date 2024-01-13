import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { FormAddContacts } from 'components/Form/Form';
import React, { useEffect } from 'react';
import { getError } from 'store/contacts/selectors';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'store/contacts/operation';

const Contacts = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <section className="contacts_list">
        <div className="container">
          <h1 className="h1 mt-2">Phonebook</h1>
          <FormAddContacts />
          <h2 className="h2 mt-3">Contacts</h2>
          <Filter />
          <ContactsList />

          {error && <p className="text-danger mt-3">{error}</p>}
        </div>
      </section>
    </main>
  );
};

export default Contacts;
