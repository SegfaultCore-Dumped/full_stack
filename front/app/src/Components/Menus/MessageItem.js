import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';

export default function MessageItem() {
  return (
    <List
      sx={{
        '.MuiListItem-padding': { padding: '0px 0px 0px 0px' },
      }}
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
