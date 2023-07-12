import StyledContacts from './StyledContacts';
import { ImBin } from 'react-icons/im';

function Contacts({ contacts, onRemove }) {
  return (
    <StyledContacts>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id} className="item">
            <p className="text">{name}</p>
            <p>{number}</p>
            <button type="button" onClick={() => onRemove(id)} className="btn">
              <ImBin className="icon" />
            </button>
          </li>
        );
      })}
    </StyledContacts>
  );
}

export default Contacts;
