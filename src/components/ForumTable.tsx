// import {Theme} from '@material-ui/core';
// import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
// import createStyles from '@material-ui/core/styles/createStyles';
// import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FolderIcon from '@material-ui/icons/Folder';
import * as React from 'react';
import {Link} from 'react-router-dom';
import '../styles.css';

interface IData {
    id: number;
    name: string;
    date: string;
}

let id = 0;
function createData(name: string): IData {
  id += 1;
  const date = (new Date).toLocaleString();
  return { id, name, date};
}

const data: IData[] = [
  createData('Frozen yoghurt'),
  createData('Ice cream sandwich'),
  createData('Eclair'),
  createData('Cupcake'),
  createData('Gingerbread'),
];

class ForumTable extends React.Component {
    state = {
        categories: true
    };

    render() {
        return(
            <div>
              <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell>Last Post</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map(n => {
                      return (
                        <TableRow key={n.id}>
                          <TableCell component="th" scope="row">
                            <ListItem component={Link}  {...{to: "/threads/" + n.id}}>
                              <ListItemIcon>
                                <FolderIcon />
                              </ListItemIcon>
                              <ListItemText
                                primary={n.name}
                                secondary={'Secondary text'}
                              />
                            </ListItem>
                          </TableCell>
                          <TableCell>{n.date}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Paper>
            </div>
        );
    }
}

export default (ForumTable);
