import {Theme} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import {IMatch} from './Threads';

interface IData {
  _id: string;
  index: number;
  guid: string;
  picture: string;
  age: number;
  name: IName;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: string;
}

interface IName {
  first: string;
  last: string;
}

interface ITopic {
  match: IMatch;
  classes: any;
}

const data: IData[] = [
  {
    "_id": "5b33996f188a46f5cf7a3170",
    "index": 0,
    "guid": "4d2c108a-29e1-4e8a-ba65-01ef644110b9",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "name": {
      "first": "Lawrence",
      "last": "Fox"
    },
    "email": "lawrence.fox@undefined.tv",
    "phone": "+1 (983) 469-2539",
    "address": "375 Madoc Avenue, Caron, Wyoming, 3791",
    "about": "Velit id enim esse ea eiusmod. Excepteur ea velit nisi cillum ad ut voluptate nostrud non eiusmod incididunt est esse ea. Consectetur ad sunt qui ut magna labore. Laboris ullamco veniam excepteur enim. Deserunt nisi sunt veniam sit veniam esse sint adipisicing pariatur. Id est adipisicing commodo minim aute sunt fugiat laboris ullamco ex ipsum in velit cupidatat.",
    "registered": "Friday, January 30, 2015 10:39 AM"
  },
  {
    "_id": "5b33996feca030b4bf876c2a",
    "index": 1,
    "guid": "1986b6d6-02a9-4560-99da-108d89532f50",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "name": {
      "first": "Molly",
      "last": "Montgomery"
    },
    "email": "molly.montgomery@undefined.info",
    "phone": "+1 (926) 434-3030",
    "address": "988 Roosevelt Court, Kohatk, Washington, 8717",
    "about": "Cillum in laborum adipisicing voluptate dolore laboris consequat esse veniam velit cupidatat do exercitation elit. Ad minim reprehenderit qui adipisicing quis dolor veniam occaecat excepteur proident consequat sunt. Tempor ad officia ad exercitation amet esse est qui magna exercitation ex. Reprehenderit minim do Lorem velit ea culpa Lorem nisi est. Anim consectetur deserunt officia fugiat ex sunt ea incididunt reprehenderit. Cillum labore incididunt nisi cillum enim cillum qui. Laboris eiusmod eiusmod aliqua Lorem enim dolor in est.",
    "registered": "Friday, September 5, 2014 12:54 PM"
  },
  {
    "_id": "5b33996fda3af721f17b7184",
    "index": 2,
    "guid": "81bce5ba-9d86-4982-bb88-801feb101cb4",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "name": {
      "first": "Daniels",
      "last": "Hale"
    },
    "email": "daniels.hale@undefined.me",
    "phone": "+1 (999) 531-2630",
    "address": "731 Rochester Avenue, Hondah, Iowa, 8181",
    "about": "Laborum nulla duis eu voluptate deserunt nisi adipisicing adipisicing proident. Tempor consectetur ipsum anim aliquip cillum aliqua non mollit nisi commodo. Enim duis qui quis ea aliquip et est est nisi ullamco irure consequat. Commodo in deserunt eiusmod sunt ullamco ex consequat ex amet aliquip enim eu. Incididunt occaecat laboris ullamco minim ut fugiat consectetur officia sunt mollit reprehenderit cillum. Officia ullamco aliquip non ad consectetur.",
    "registered": "Friday, February 5, 2016 4:10 PM"
  },
  {
    "_id": "5b33996fcc3abcc9824e8c47",
    "index": 3,
    "guid": "c1c7b19a-2f2c-48a3-999f-9353fd6a8ada",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "name": {
      "first": "Guzman",
      "last": "Coffey"
    },
    "email": "guzman.coffey@undefined.io",
    "phone": "+1 (884) 436-2468",
    "address": "886 Opal Court, Fontanelle, Hawaii, 9044",
    "about": "Deserunt esse sint eu ut qui magna aliqua nisi culpa esse. Nulla qui consequat aliqua mollit cupidatat enim labore eiusmod laborum nisi. Labore proident commodo voluptate mollit sint quis ea magna proident fugiat laborum Lorem reprehenderit.",
    "registered": "Sunday, July 23, 2017 8:43 AM"
  },
  {
    "_id": "5b33996f2f5760a3f8c8e822",
    "index": 4,
    "guid": "75794e9a-47a8-48a2-bce2-838a26cf9b8a",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "name": {
      "first": "Hardin",
      "last": "Wilson"
    },
    "email": "hardin.wilson@undefined.biz",
    "phone": "+1 (829) 527-2382",
    "address": "753 Beaumont Street, Whitehaven, Georgia, 7800",
    "about": "Consectetur ea enim amet esse consequat consectetur. Id commodo sunt laborum dolor ut officia aliqua labore non officia voluptate laborum veniam sunt. Voluptate exercitation magna veniam aute ipsum nostrud ipsum eu occaecat nisi. Amet ullamco adipisicing cillum proident. Ad quis labore ex cupidatat aute reprehenderit. Aliquip occaecat officia do et non.",
    "registered": "Tuesday, October 7, 2014 9:35 AM"
  },
  {
    "_id": "5b33996f8f1fadd3ae094ad0",
    "index": 5,
    "guid": "86aa9b51-9754-49a8-bf7e-7bfb9db30036",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "name": {
      "first": "Joni",
      "last": "Massey"
    },
    "email": "joni.massey@undefined.biz",
    "phone": "+1 (830) 514-2437",
    "address": "538 Lombardy Street, Golconda, New Hampshire, 7236",
    "about": "Labore ea enim Lorem enim nostrud adipisicing commodo consectetur tempor. Labore reprehenderit labore velit exercitation cupidatat elit mollit laborum. Anim anim dolor cupidatat cupidatat consequat qui aliquip. Amet ad magna qui id elit nisi cillum excepteur voluptate occaecat ad commodo. Amet fugiat ipsum sit sit ullamco labore id. Consequat proident est ex aliquip enim.",
    "registered": "Wednesday, January 18, 2017 10:16 PM"
  }
];

class Topic extends React.Component<ITopic> {
  render() {
    const {match, classes} = this.props;
    return(
      <div>

        <div>{match.params.id}</div>

        <div>
          {data.map((post: IData) => {
              return (
                <Paper className={classes.root} elevation={1} key={post._id}>
                  <Typography component="p">
                    {post.name.first} {post.name.last} {post.registered}
                  </Typography>
                 <Typography component="p">
                   {post.registered} {post.about}
                 </Typography>
                </Paper >
              )
            }
          )}
        </div>
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
}))(Topic);