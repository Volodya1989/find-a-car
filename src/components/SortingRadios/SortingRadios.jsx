import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { Wrapper } from './SortingRadios.styled';
// import { Avatar } from '@mui/material';

const SortingRadios = () => {
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
    setValue('');
    setHelperText('Sorting Reseted');

    // setTimeout(() => {
    //   setHelperText('');
    // }, '1000');
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormControl
          sx={{ m: 3, minWidth: '155px', minHeight: '155px' }}
          error={error}
          variant="standard"
        >
          <FormLabel
            sx={{
              color: 'white',
            }}
            id="demo-error-radios"
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
                color: 'white',
              }}
              value="Brand Name"
              label="Brand"
              control={
                <Radio
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#73f5f3',
                    },
                  }}
                />
              }
            />

            <FormControlLabel
              sx={{
                color: 'white',
              }}
              value="Model Name"
              label="Model"
              control={
                <Radio
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#73f5f3',
                    },
                  }}
                />
              }
            />
            <FormControlLabel
              sx={{
                color: 'white',
              }}
              value="Price Amount"
              label="Price"
              control={
                <Radio
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#73f5f3',
                    },
                  }}
                />
              }
            />
          </RadioGroup>
          <FormHelperText sx={{ m: 3, color: 'white' }}>
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
            // startIcon={<Avatar src={require('../../icons/reset.svg')} />}

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
    </Wrapper>
  );
};
export default SortingRadios;
