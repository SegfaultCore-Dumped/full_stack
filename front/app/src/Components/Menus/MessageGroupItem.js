import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import React from 'react';
import PropTypes from 'prop-types';

export default function MessageGroupItem({ setSelectedIListItem }) {
  return (
    <List
      sx={{
        '.MuiListItem-padding': { padding: '0px 0px 0px 0px' },
      }}
    >
      <ListItem alignItems="flex-start" onClick={() => setSelectedIListItem('Javascript')}>
        <ListItemAvatar>
          <Avatar alt="JavaScript" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="JavaScript"
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
      <div>
        <ListItem alignItems="flex-start" onClick={() => setSelectedIListItem('Python')}>
          <ListItemAvatar>
            <Avatar alt="Python" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Python"
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
      </div>
      <div>
        <ListItem alignItems="flex-start" onClick={() => setSelectedIListItem('PHP')}>
          <ListItemAvatar>
            <Avatar alt="PHP" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="PHP"
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
      </div>
      <div>
        <ListItem alignItems="flex-start" onClick={() => setSelectedIListItem('C#')}>
          <ListItemAvatar>
            <Avatar alt="C#" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="C#"
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
      </div>
      <div>
        <ListItem alignItems="flex-start" onClick={() => setSelectedIListItem('Ruby')}>
          <ListItemAvatar>
            <Avatar alt="Ruby" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Ruby"
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
      </div>
      <div>
        <ListItem alignItems="flex-start" onClick={() => setSelectedIListItem('Java')}>
          <ListItemAvatar>
            <Avatar alt="Java" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Java"
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
      </div>
    </List>
  );
}

MessageGroupItem.propTypes = {
  setSelectedIListItem: PropTypes.func.isRequired,
};
