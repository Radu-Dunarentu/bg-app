import * as React from 'react';
import { firestore } from '../firebase';
import '../styles.css';

class ForumTable extends React.Component {

    render() {
      firestore.collection("users").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
            console.log(doc.id + '=>' + doc.data());
          });
        });
        return(
            <div className='appLayout__constrainWidth'>Forum</div>
        );
    }
}

export default ForumTable;
