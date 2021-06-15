import { Container } from '@material-ui/core';
import { UserList } from '../components/UserList';

export const UserContainer: React.FunctionComponent = () => {
  return (
    <Container maxWidth="md">
      <UserList></UserList>
    </Container>
  )
};
