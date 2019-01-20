import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
// import { Link } from 'react-router-dom';
// import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames/bind';
// import * as db1 from '../../../firebase/firebase';
import {auth} from '../../../firebase/firebase';

const classes = require('./Authee.css');
const cx = classNames.bind(classes);

interface IProps {
  store: any;
}
interface IState {
  email;
  password;
  isLoggingIn;
}

@inject('store') @observer
class Screen extends Component<IProps, IState> {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggingIn: true,
    };
  }

  public render() {
    const containerClass = cx({
      container: true,
      // background: true,
    });
    return (
      <div className={containerClass}>
        {/* <Grid container={true} spacing={24}>
          <Grid item={true} xs={6} sm={3} />
          <Grid item={true} xs={6} sm={3} />
          <Grid item={true} xs={6} sm={3}> */}
            <Paper className={classes.box}>
              <Typography variant='h5'>
                Aplikasi NewLAB
              </Typography>
              <TextField
                id='outlined-name'
                label='Email'
                // value='mmto'
                onChange={(ev) => this.setState({ email: ev.target.value })}
                margin='normal'
                variant='outlined'
                style={{width: 250}}
              />
              <br/>
              <TextField
                id='outlined-pass'
                label='Password'
                // value='mmto'
                type='password'
                onChange={(ev) => this.setState({ password: ev.target.value })}
                margin='normal'
                variant='outlined'
                style={{width: 250}}
              />
              <br/>
              <Button variant='contained' color='primary'
                onClick={() => this._onLogin()}>
                Login
              </Button>
            </Paper>
          {/* </Grid>
        </Grid> */}
      </div>
    );
  }

  private _onLogin = () => {
    this.setState({ isLoggingIn: true });
    auth.signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((authUser) => {
        this.props.store.user.uid = authUser.user.uid;
        // this.props.navigation.navigate('AppLoaderScreen');
      })
      .catch((error) => {
        // Alert.alert(error.message);
        this.setState({ isLoggingIn: false });
      });
  }

}

export default Screen;
