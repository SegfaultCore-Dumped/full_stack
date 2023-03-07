import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import * as React from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: 'calc(1em)',
    fontSize: 14,
  },
  width: '100%',
}));

export default function SearchBar() {
  return (
    <Search>
      <StyledInputBase
        placeholder="Search for conversations..."
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}
