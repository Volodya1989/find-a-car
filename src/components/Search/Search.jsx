import { Wrapper, Label, Field, SearchWrapper } from './Search.styled';

export default function Search({
  id = 'search',
  name = 'search',
  placeholder = 'Search For Your Car',
  onQueryChange,
  query,
  disabled,
}) {
  return (
    <SearchWrapper>
      <Wrapper>
        <Field
          id={id}
          name={name}
          value={query}
          // disabled={filter}
          onChange={onQueryChange}
          autoComplete="off"
        />

        <Label htmlFor={id}>{placeholder}</Label>
      </Wrapper>
    </SearchWrapper>
  );
}
