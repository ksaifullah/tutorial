import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { RadioGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Radio } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
}

interface UserListProps {
  selectUser: (uid: string) => void;
}

export const UserList: React.FunctionComponent<UserListProps> = () => {
  const classes = useStyles();
  const [rows, setRows] = useState<User[]>([]);

  useEffect(() => {
    console.log('hello');
    axios.get('http://localhost:8080/users')
      .then(({data}) => {
        setRows(data);
      })
      .catch(console.error);
  }, []);

  return (
    <RadioGroup aria-label="user-id" name="uid" onClick={console.log}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="center">Is Active</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <FormControlLabel value={row.id} control={<Radio size="small" onClick={console.log} />} label={row.id} />
                </TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell align="center">{row.isActive ? 'Y' : 'N'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </RadioGroup>
  );
}
