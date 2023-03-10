import { Grid } from '@mui/material';
import React from 'react';
import News from '../Components/News';
import Rooms from '../Components/Rooms';
import MenuLists from '../Components/Menus/MenuLists';
import NavBar from '../Components/Menus/NavBar';
import Participants from '../Components/Participants';

export default function Home() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedIListItem, setSelectedIListItem] = React.useState(0);

  let renderNewsAndRooms;
  if (selectedIndex === 0 && !selectedIListItem) {
    renderNewsAndRooms = <News />;
  } else if (selectedIListItem) {
    renderNewsAndRooms = <Rooms selectedIListItem={selectedIListItem} />;
  }

  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
    if (index === 0) {
      setSelectedIListItem(0);
    }
  };
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
        <MenuLists
          setSelectedIndex={setSelectedIndex}
          handleMenuItemClick={handleMenuItemClick}
          setSelectedIListItem={setSelectedIListItem}
        />
      </Grid>
      <Grid item xs={6.5}>
        {renderNewsAndRooms}
      </Grid>
      <Grid item xs={2}>
        <Participants />
      </Grid>
    </Grid>
  );
}
