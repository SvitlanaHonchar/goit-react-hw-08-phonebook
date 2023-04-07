import PropTypes from 'prop-types';
import { StyledLabel } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { theme } from '../../helpers/theme';
import { ThemeProvider } from '@mui/material/styles';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
      <StyledLabel htmlFor="">
        <span>Filter by name:</span>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          color="primary"
          type="text"
          placeholder="name"
          onChange={event => {
            dispatch(setFilter(event.target.value));
          }}
        />
      </StyledLabel>
    </ThemeProvider>
  );
};

export default Filter;

Filter.propTypes = { onFilterContacts: PropTypes.func };
