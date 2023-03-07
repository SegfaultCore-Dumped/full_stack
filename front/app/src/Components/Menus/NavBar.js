import { Avatar, Box, Divider } from '@mui/material';
import React from 'react';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch } from 'react-redux';
import { setUserLoggedOut } from '../../Reducers/Actions/AuthAction';

function BottomButtons() {
  const dispatch = useDispatch();

  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
      <SettingsIcon sx={{ fontSize: 35 }} />
      <div style={{ padding: 30 }}>
        <PowerSettingsNewIcon sx={{ fontSize: 35 }} onClick={() => dispatch(setUserLoggedOut())} />
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div>
      <Box
        sx={{
          height: '100vh',
          backgroundColor: '#141414',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'white',
        }}
      >

        <div style={{ padding: 10 }}>
          <Avatar
            alt="Avatar"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56 }}
          />
        </div>

        <Divider sx={{ width: 57, backgroundColor: 'white' }} />

        <PersonIcon sx={{ fontSize: 45 }} />
        <QuestionAnswerIcon sx={{ fontSize: 45 }} />

        <BottomButtons />
      </Box>
    </div>
  );
}

export default NavBar;
