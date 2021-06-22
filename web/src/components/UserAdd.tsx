import { Checkbox, TextField } from '@brainstationau/formik-material-ui';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Formik, Form } from 'formik';
import axios from 'axios';

export interface UserAddProps {
  done: () => void;
}

export const UserAdd: React.FunctionComponent<UserAddProps> = ({done}) => {
  const submitForm = async (values: any) => {
    await axios.put('http://localhost:8080/user', values)
      .then(done);
  };

  return (
    <Card variant="outlined">
      <Formik
        initialValues={{}}
        onSubmit={submitForm}
      >
        {({ submitForm }) => (
          <Form>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Add User
              </Typography>
              <Box>
                <TextField
                  name="firstName"
                  label="First Name"
                  id="first-name"
                  fullWidth={true}
                  helperText="Enter your first name"
                />
                <TextField
                  name="lastName"
                  label="Last Name"
                  id="last-name"
                  fullWidth={true}
                  helperText="Enter your last name"
                />
                <TextField
                  name="email"
                  label="Email"
                  id="email"
                  fullWidth={true}
                  helperText="Enter your email"
                />
                <Checkbox
                  name="active"
                  label="User is active"
                  checkboxProps={{ id: 'active' }}
                  helperText="Is user active?"
                />
              </Box>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={submitForm}>Submit</Button>
            </CardActions>
          </Form>
        )}
      </Formik>

    </Card>
  );
}
