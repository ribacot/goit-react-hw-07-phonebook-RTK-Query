import Container from './container/Container';
import { FormPhone } from './form/FormPhone';
import { ContactsList } from './contacts_list/ContactsList';
import Search from './search/Search';
import { useGetContactsQuery } from 'redux/contactsApi';

export const App = () => {
  const {
    data: contacts,
    isLoading,
    isSuccess,
    isError,
  } = useGetContactsQuery();
  return (
    <>
      <Container title="Phone book">
        <FormPhone />
      </Container>
      <Container title="Contacts">
        {isError && <p>Error!!!!!!</p>}
        {contacts?.length ? (
          <>
            <Search />
            <ContactsList />
          </>
        ) : (
          isSuccess && <p className="not_found">Phone book is empty</p>
        )}
        {isLoading && <p>Loading...</p>}
      </Container>
    </>
  );
};
