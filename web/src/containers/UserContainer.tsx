import { Box, Button, Container } from '@material-ui/core';
import { useState } from 'react';
import { UserAdd } from '../components/UserAdd';
import { UserList } from '../components/UserList';

enum DisplayMode {
  list,
  add,
  edit,
}

export const UserContainer: React.FunctionComponent = () => {
  const [, setUid] = useState<string>('');
  const [mode, setMode] = useState<DisplayMode>(DisplayMode.list);

  const displayComponent = () => {
    if (mode === DisplayMode.list) {
      return <UserList selectUser={(uid: string) => setUid(uid)}></UserList>;
    } else if (mode === DisplayMode.add) {
      return <UserAdd done={() => setMode(DisplayMode.list)}></UserAdd>;
    } else {
      return (<></>)
    }
  };

  return (
    <Container maxWidth="md">
      <Box my={3} textAlign="right">
        {mode !== DisplayMode.edit && <Button variant="contained" color="primary" onClick={() => setMode(DisplayMode.add)}>
          Edit User
        </Button>}
        {mode !== DisplayMode.add && <Button variant="contained" color="primary" onClick={() => setMode(DisplayMode.add)}>
          Add New
        </Button>}
        {mode !== DisplayMode.list && <Button variant="contained" color="primary" onClick={() => setMode(DisplayMode.list)}>
          List
        </Button>}
      </Box>
      {displayComponent()}
    </Container>
  )
};
