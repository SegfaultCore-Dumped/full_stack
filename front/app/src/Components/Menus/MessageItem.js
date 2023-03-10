import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import PropTypes from 'prop-types';

export default function MessageItem({ setSelectedIndex }) {
  return (
    <List
      sx={{
        '.MuiListItem-padding': { padding: '0px 0px 0px 0px' },
      }}
      onClick={() => setSelectedIndex(0)}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="John Doe" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="John Doe"
          secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        />
      </ListItem>
      <Divider component="li" />
    </List>
  );
}

MessageItem.propTypes = {
  setSelectedIndex: PropTypes.func.isRequired,
};
