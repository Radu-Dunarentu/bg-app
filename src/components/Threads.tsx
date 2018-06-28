import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LocalPostOffice from '@material-ui/icons/LocalPostOffice';
import * as React from 'react';
import {Link} from 'react-router-dom';
// import {Link} from 'react-router-dom';

interface IData {
  id: number;
  guid: number;
  name: string;
  date: string;
}

let id = 0;
let guid = 10;
function createData(name: string): IData {
  id += 1;
  guid += 1;
  const date = (new Date).toLocaleString();
  return { id, name, date, guid};
}

const data: IData[] = [
  createData('dw'),
  createData('23'),
  createData('dwa'),
  createData('Cupcgdgrdake'),
  createData('rgdr'),
];

export interface IMatch {
  params: { id: string };
  isExact: boolean;
  path: string;
  url: string;
}

interface IThread {
  match: IMatch;
  classes: any;
}


class Threads extends React.Component<IThread> {

  componentDidMount() {
    console.warn('component did mount with id', this.props.match.params);
  }

  render() {
    const {match, classes} = this.props;
    return(
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Title
            </Typography>
            <Link to="/newThread" >
              <Button color="secondary">Add New</Button>
            </Link>
          </Toolbar>
        </AppBar>

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
                  <TableRow key={n.id} >
                    <TableCell component="th" scope="row">
                      <ListItem component={Link}  {...{to: "/topic/" + n.guid}}>
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

export default withStyles({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})(Threads);