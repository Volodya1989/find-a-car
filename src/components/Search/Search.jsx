import { Wrapper, Label, Field, SearchWrapper } from './Search.styled';

export default function Search({
  id = 'search',
  name = 'search',
  placeholder = 'Search Your Car',
  onChange,
  value,
  disabled,
}) {
  return (
    <SearchWrapper>
      <Wrapper>
        <Field
          id={id}
          name={name}
          value={value}
          disabled={disabled}
          // onChange={onChange}
          autoComplete="off"
        />

        <Label htmlFor={id}>{placeholder}</Label>
      </Wrapper>
    </SearchWrapper>
  );
}
