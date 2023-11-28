import { Wrapper, Label, Field, SearchWrapper } from './Search.styled';

const Search = ({
  id = 'search',
  name = 'search',
  placeholder = 'Search For Your Car',
  onQueryChange,
  query,
}) => {
  return (
    <SearchWrapper>
      <Wrapper>
        <Field
          id={id}
          name={name}
          value={query}
          onChange={onQueryChange}
          autoComplete="off"
        />

        <Label htmlFor={id}>{placeholder}</Label>
      </Wrapper>
    </SearchWrapper>
  );
};

export default Search;
