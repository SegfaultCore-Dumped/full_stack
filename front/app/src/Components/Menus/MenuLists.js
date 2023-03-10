import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/styles';
// import MessageItem from './MessageItem';
import SearchBar from '../SearchBar';
import MessageGroupItem from './MessageGroupItem';

function MenuButtons({ handleMenuItemClick }) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
      pt={1}
    >
      <Button
        variant="contained"
        color="neutral"
        sx={{ fontSize: 10 }}
        onClick={() => handleMenuItemClick(0)}
      >
        Home
      </Button>
      {/* <Button
        variant="contained"
        color="neutral"
        sx={{
          fontSize: 10,
        }}
        onClick={() => setSelectedIndex(1)}
      >
        Rooms
      </Button> */}
    </Stack>
  );
}

MenuButtons.propTypes = {
  handleMenuItemClick: PropTypes.func.isRequired,
};

export default function MenuLists({ setSelectedIndex, setSelectedIListItem }) {
  const theme = useTheme();
  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
    setSelectedIListItem(0);
  };
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <div style={{ padding: 15 }}>
        <SearchBar />
        <Divider sx={{ padding: 0.5 }} />
        <MenuButtons handleMenuItemClick={handleMenuItemClick} />
        {/* <MessageItem setSelectedIndex={setSelectedIndex} /> */}
        <MessageGroupItem setSelectedIListItem={setSelectedIListItem} />
      </div>
    </Box>
  );
}

MenuLists.propTypes = {
  setSelectedIndex: PropTypes.func.isRequired,
  setSelectedIListItem: PropTypes.func.isRequired,
};
