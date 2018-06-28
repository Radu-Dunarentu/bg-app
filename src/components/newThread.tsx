import {Theme} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import ReactQuill from 'react-quill';

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
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value: string) {
    console.warn(value);
    this.setState({ text: value })
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
        <ReactQuill value={this.state.text}
                    onChange={this.handleChange} />
      </div>
    );
  }
}
export default withStyles(({ mixins, spacing }: Theme) => createStyles({
  root: {
    ...mixins.gutters(),
    paddingTop: spacing.unit * 2,
    paddingBottom: spacing.unit * 2,
  },
}))(NewThread);