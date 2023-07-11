function Contacts({ contacts, onRemove }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button type="button" onClick={() => onRemove(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Contacts;
