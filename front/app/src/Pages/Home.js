import { Grid } from '@mui/material';
import React from 'react';
import Chat from '../Components/Chat';
import MenuLists from '../Components/Menus/MenuLists';
import NavBar from '../Components/Menus/NavBar';
import Participants from '../Components/Participants';

export default function Home() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={1}>
        <NavBar />
      </Grid>
      <Grid item xs={2.5}>
        <MenuLists />
      </Grid>
      <Grid item xs={6.5}>
        <Chat />
      </Grid>
      <Grid item xs={2}>
        <Participants />
      </Grid>
    </Grid>
  );
}
