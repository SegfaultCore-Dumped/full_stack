import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import React from 'react';

export default function MessageGroupItem() {
  return (
    <List
      sx={{
        '.MuiListItem-padding': { padding: '0px 0px 0px 0px' },
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Group Chat" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Group Chat 1"
          secondary={(
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                John Doe —
              </Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </>
          )}
          style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        />
      </ListItem>
      <Divider component="li" />
    </List>
  );
}
