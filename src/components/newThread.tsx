import {Theme} from '@material-ui/core';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
// import * as ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';


interface IPostThread {
  classes: any;
}

interface INewThreadState {
  text: string;
}

class NewThread extends React.Component <IPostThread, INewThreadState>{

  constructor(props: IPostThread) {
    super(props);
    this.state = { text: '' } ;// You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  handleChange(event: any) {
    console.warn(event.target.value, );
    this.setState({ text: event.target.value })
  }

  handleKey(event: any ) {
    if (event.key === 'Enter') {
      this.setState({ text: '' });
      event.target.value = '';
    }
  }

  render() {
    const {classes} = this.props;
    return(
      <div>
        <Paper className={classes.root} elevation={1}>
          <TextField
            id="title-id"
            label="Title"
            placeholder="Enter a meaningful title"
            className={classes.textField}
            margin="normal"
            fullWidth
          />
        </Paper>
        {/*<ReactQuill value={this.state.text}
          onChange={this.handleChange} />*/}
        <Input
          defaultValue="Hello world"
          fullWidth
          className={classes.input}
          onChange={this.handleChange}
          onKeyPress={this.handleKey}
          inputProps={{
            'aria-label': 'Description',
          }}
        />
      </div>
    );
  }
}
export default withStyles(({ mixins, spacing }: Theme) => createStyles({
  root: {
    ...mixins.gutters(),
    paddingTop: spacing.unit * 2,
    paddingBottom: spacing.unit * 2,
    border: '1px solid #ccc',
    borderBottom: 0,
    boxShadow: 'none'
  },
  input: {
    border: '1px solid #ccc'
  }
}))(NewThread);