import { FiXSquare } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { useDelContactMutation, useGetContactsQuery } from 'redux/contactsApi';

export const ContactsList = () => {
  const [delContact] = useDelContactMutation();
  const { filter } = useSelector(state => state.filter);
  const { data: contacts } = useGetContactsQuery(filter);
  return (
    <>
      {contacts?.length ? (
        <ul className={css.listContacts}>
          {contacts?.map(({ name, id, number }) => (
            <li key={id} className={css.contact}>
              {name}:
              <span className={css.contact_tel}>
                {number}
                <button
                  className={css.btn_del}
                  type="button"
                  onClick={() => delContact(id)}
                >
                  <IconContext.Provider value={{ size: '1.2em' }}>
                    <FiXSquare />
                  </IconContext.Provider>
                </button>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="not_found">Not found contacts</p>
      )}
    </>
  );
};
