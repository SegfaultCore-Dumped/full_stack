import { Typography, Avatar, ListItemAvatar } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';

function ParticipantsList({ label }) {
  return (
    <>
      <Typography variant="h6" component="div" sx={{ padding: 1 }}>
        {label}
      </Typography>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Group Chat" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText primary="John Doe" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Group Chat" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText primary="John Doe" />
        </ListItem>
      </List>
    </>
  );
}

ParticipantsList.propTypes = {
  label: PropTypes.string.isRequired,
};

export default function Participants() {
  return (
    <Box sx={{
      height: '100vh',
      backgroundColor: '#111111',
    }}
    >
      <div style={{ padding: 15 }}>
        <Typography variant="h5" component="div" sx={{ padding: 1 }}>
          Participants
        </Typography>
        <Divider sx={{ padding: 1 }} />
        <ParticipantsList label="Online - (2)" />
        <ParticipantsList label="Offline - (2)" />
      </div>
    </Box>
  );
}
