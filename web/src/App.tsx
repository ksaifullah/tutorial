import { Box } from '@material-ui/core';
import { MainAppBar } from './components/MainAppBar';
import { UserContainer } from './containers/UserContainer';

function App() {
  return (
    <>
      <MainAppBar></MainAppBar>
      <Box mt={3}></Box>
      <UserContainer></UserContainer>
    </>
  );
}

export default App;
