import StyledFilter from './StyledFilter';

function Filter({ handleChangeFilter }) {
  return (
    <StyledFilter>
      Find contacts by name
      <input type="text" onChange={handleChangeFilter}></input>
    </StyledFilter>
  );
}

export default Filter;
