import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { Wrapper, InnerWrapper } from './SortingRadios.styled';

const SortingRadios = ({
  onSortingCars,
  onResetSorting,
  setSortedCars,
  cars,
  isShowSorting,
}) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const [helperText, setHelperText] = useState('');

  const handleRadioChange = event => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSortingCars(value, cars, setSortedCars);
    if (value === 'Brand Name') {
      setHelperText('Sorted By Brand');
      setError(false);
    } else if (value === 'Model Name') {
      setHelperText('Sorted By Model');
      setError(false);
    } else if (value === 'Price Amount') {
      setHelperText('Sorted By Price');
      setError(false);
    } else {
      setHelperText('Please try again.');
      setError(true);
    }
    setValue(event.target.value);
  };

  const handleReset = event => {
    event.preventDefault();
    if (!helperText) return;
    if (helperText === 'Sorting Reseted') return;
    setValue('');
    onResetSorting(cars, setSortedCars);
    setHelperText('Sorting Reseted');
  };

  return (
    <Wrapper visible={isShowSorting.toString() === 'true' ? 'true' : 'false'}>
      <InnerWrapper
        visible={isShowSorting.toString() === 'true' ? 'true' : 'false'}
      >
        <form onSubmit={handleSubmit}>
          <FormControl
            sx={{ m: 3, minWidth: '155px', minHeight: '155px' }}
            error={error}
            variant="standard"
          >
            <FormLabel
              sx={{
                color: '#141414',
              }}
              id="demo-error-radios"
              style={{
                color: '#141414',
              }}
            >
              Sort by
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="sorting"
              value={value || ''}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                sx={{
                  color: '#141414',
                }}
                value="Brand Name"
                label="Brand"
                control={
                  <Radio
                    sx={{
                      color: '#0d34d1',
                      '&.Mui-checked': {
                        color: '#73f5f3',
                      },
                    }}
                  />
                }
              />

              <FormControlLabel
                sx={{
                  color: '#141414',
                }}
                value="Model Name"
                label="Model"
                control={
                  <Radio
                    sx={{
                      color: '#0d34d1',
                      '&.Mui-checked': {
                        color: '#73f5f3',
                      },
                    }}
                  />
                }
              />
              <FormControlLabel
                sx={{
                  color: '#141414',
                }}
                value="Price Amount"
                label="Price"
                control={
                  <Radio
                    sx={{
                      color: '#0d34d1',
                      '&.Mui-checked': {
                        color: '#73f5f3',
                      },
                    }}
                  />
                }
              />
            </RadioGroup>
            <FormHelperText sx={{ m: 3, color: '#141414' }}>
              {helperText}
            </FormHelperText>
            <Button
              sx={{ mt: 1, mr: 1 }}
              type="submit"
              variant="contained"
              disabled={!value}
            >
              Submit
            </Button>
            <Button
              onClick={handleReset}
              sx={{
                mt: 1,
                mr: 1,
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                backgroundColor: '#edeff0',
                top: '0',
                left: '100%',
              }}
              style={{
                borderRadius: '50%',
                minWidth: '30px',
                minHeight: '30px',
                padding: '5px',
                position: 'absolute',
              }}
              type="submit"
              variant="contained"
              disabled={!helperText}
            >
              <img
                src={require('../../icons/reset.png')}
                alt="reset button"
                width="40px"
                height="40px"
              />
            </Button>
          </FormControl>
        </form>
      </InnerWrapper>
    </Wrapper>
  );
};
export default SortingRadios;
