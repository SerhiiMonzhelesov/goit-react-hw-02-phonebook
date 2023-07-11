function Filter({ handleChangeFilter }) {
  return (
    <label>
      Find contacts by name
      <input type="text" onChange={handleChangeFilter}></input>
    </label>
  );
}

export default Filter;
