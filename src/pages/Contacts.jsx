import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { FormAddContacts } from 'components/Form/Form';
import React, { useEffect } from 'react';
import { getError, getIsLoading } from 'store/contacts/selectors';
import Loader from 'react-js-loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'store/contacts/operation';
import { Helmet } from 'react-helmet';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <div className="maine_box">
        <Helmet>
          <title>Contacts</title>
        </Helmet>
        <h1 className="h1 mt-2">Phonebook</h1>
        <FormAddContacts />
        <h2 className="h2 mt-3">Contacts</h2>
        <Filter />
        <ContactsList />
        {isLoading && (
          <Loader
            type="spinner-cub"
            bgColor={'#3367D1'}
            title={'spinner-cub'}
            size={30}
          />
        )}
        {error && <p className="text-danger mt-3">{error}</p>}
      </div>
    </main>
  );
};

export default Contacts;
