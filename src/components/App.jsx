import { FormAddContacts } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'store/operation';
import { getError, getIsLoading } from 'store/selectors';
import Loader from 'react-js-loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="maine_box">
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
          size={100}
        />
      )}
      {error && <p className="text-danger mt-3">{error}</p>}
    </div>
  );
};
