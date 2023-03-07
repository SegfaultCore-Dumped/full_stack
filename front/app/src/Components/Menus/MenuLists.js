import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/styles';
import MessageItem from './MessageItem';
import SearchBar from '../SearchBar';
import MessageGroupItem from './MessageGroupItem';

function MenuButtons({ setSelectedIndex }) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      pt={1}
    >
      <Button
        variant="contained"
        color="neutral"
        sx={{ fontSize: 10 }}
        onClick={() => setSelectedIndex(0)}
      >
        Direct Messages
      </Button>
      <Button
        variant="contained"
        color="neutral"
        sx={{
          fontSize: 10,
        }}
        onClick={() => setSelectedIndex(1)}
      >
        Group Chats
      </Button>
    </Stack>

  );
}

MenuButtons.propTypes = {
  setSelectedIndex: PropTypes.func.isRequired,
};

export default function MenuLists() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const theme = useTheme();

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
        <MenuButtons setSelectedIndex={setSelectedIndex} />
        {selectedIndex === 0 ? <MessageItem /> : null}
        {selectedIndex === 1 ? <MessageGroupItem /> : null}
      </div>
    </Box>
  );
}
