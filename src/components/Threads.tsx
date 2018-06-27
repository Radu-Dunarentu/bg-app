import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LocalPostOffice from '@material-ui/icons/LocalPostOffice';
import * as React from 'react';
// import {Link} from 'react-router-dom';

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
  createData('dw'),
  createData('23'),
  createData('dwa'),
  createData('Cupcgdgrdake'),
  createData('rgdr'),
];

interface IMatch {
  params: { id: string };
  isExact: boolean;
  path: string;
  url: string;
}

interface IThread {
  match: IMatch;
}

class Threads extends React.Component<IThread> {

  componentDidMount() {
    console.warn('component did mount with id', this.props.match.params);
  }

  render() {
    const {match} = this.props;
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
                      <ListItem>
                        <ListItemIcon>
                          <LocalPostOffice />
                        </ListItemIcon>
                        <ListItemText
                          primary={n.name}
                          secondary={match.params.id}
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

export default Threads;