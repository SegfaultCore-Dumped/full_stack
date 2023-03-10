import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import {
  Divider,
  IconButton, InputAdornment, InputBase, Stack,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmojiPicker, { Theme } from 'emoji-picker-react';
import React, { useEffect, useRef, useState } from 'react';
import propTypes from 'prop-types';
import io from 'socket.io-client';

function HeaderChat({ author, avatar }) {
  return (
    <div
      style={{
        padding: '20px 30px 10px 30px',
        top: 0,
        zIndex: 1,
        position: 'absolute',
        backgroundColor: '#141414',
        width: '100%',
      }}
    >
      <Stack
        direction="column"
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{ marginBottom: (2) }}
        >
          <Avatar
            source={avatar}
            sx={{
              width: 40,
              height: 40,
              marginRight: (2),
            }}
          />
          <Typography variant="h6">
            {author}
          </Typography>
        </Stack>
        <Divider />
      </Stack>

    </div>
  );
}

HeaderChat.propTypes = {
  author: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
};

function Rooms({ selectedIListItem }) {
  const [messages, setMessages] = useState([]);
  const [emojiMenu, setEmojiMenu] = useState(false);
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef(null);
  const [socket, setSocket] = useState(null);

  const token = localStorage.getItem('token');
  console.log(token);
  useEffect(() => {
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (!socket) return;

    const username = 'data';
    const room = selectedIListItem;
    socket.emit('joinRoom', { username, room });

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    // eslint-disable-next-line consistent-return
    return function cleanup() {
      socket.off('message');
    };
  }, [socket, selectedIListItem]);
  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (inputText.length > 0) {
        // socket.emit('chatMessage', event.target.elements.msg.value);
        socket.emit('chatMessage', inputText);
        // setMessages([...messages, inputText]);
      }
      setInputText('');
    }
  };

  useEffect(() => {
    chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '100vh',
        borderLeft: 1,
        borderRight: 1,
        borderColor: 'grey.800',
        backgroundColor: '#141414',
        position: 'relative',
      }}
    >
      <HeaderChat author={selectedIListItem} avatar="../" />

      {emojiMenu && (
      <div style={{
        position: 'absolute',
        zIndex: 1,
        right: 10,
        bottom: 70,
      }}
      >
        <EmojiPicker
          theme={Theme.dark}
          onEmojiClick={(emojiData) => {
            setInputText(inputText + emojiData.emoji);
          }}
        />
      </div>
      )}

      <div style={{
        overflow: 'auto',
        overflowY: 'scroll',
        overflowX: 'hidden',
        zIndex: 0,
        paddingLeft: 30,
        paddingRight: 30,
      }}
      >
        <div style={{
          overflow: 'auto',
          overflowY: 'scroll',
          overflowX: 'hidden',
          zIndex: 0,
          paddingLeft: 30,
          paddingRight: 30,
        }}
        >
          {messages.map((message) => (
            <div key={message.username}>
              <Box
                sx={{
                  display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: (2),
                }}
              >
                <Avatar sx={{
                  width: 40,
                  height: 40,
                  marginRight: (2),
                }}
                />

                <Stack direction="column" alignItems="start-flex">
                  <Stack direction="row" spacing={1} alignItems="start-flex">
                    <Typography variant="body2">
                      {message.username}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'grey.500' }}>
                      {message.time}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body2"
                    sx={{
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                    }}
                  >
                    {message.text}
                  </Typography>
                </Stack>

              </Box>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div ref={chatEndRef} />
      </div>
      <InputBase
        sx={{
          pl: 3, pr: 3, pt: 2, pb: 2,
        }}
        placeholder="Send message to John Doe..."
        value={inputText}
        onChange={handleInputTextChange}
        onKeyDown={handleKeyDown}
        fullWidth
        multiline
        inputProps={{
          style: {
            whiteSpace: 'pre-wrap',
            backgroundColor: '#101010',
            padding: 10,
            borderRadius: 10,
          },
        }}
        endAdornment={(
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => {
                setEmojiMenu(!emojiMenu);
              }}
            >
              <EmojiEmotionsIcon />
            </IconButton>
          </InputAdornment>
          )}
      />
    </Box>
  );
}

export default Rooms;

Rooms.propTypes = {
  selectedIListItem: propTypes.string.isRequired,
};
