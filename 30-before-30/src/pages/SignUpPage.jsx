import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import SignUpForm from '../components/sign-up/SignUpForm';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent:'center',
    alignItems:"center",
    backgroundColor: theme.palette.background.paper,
  },
  form: {
    zIndex: 2,
  },
  card: {
    overflow: 'hidden',
    width: '500px',
    height: '325px',
    borderRadius: 0,
    border: 'none',
    margin: '5vw',
  },
  img: {
    width: '500px',
    position: 'relative',
  }
}))

export function SignUpPage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <SignUpForm className={classes.form} />
        <Card className={classes.card}>
          <CardMedia className={classes.img}
            component="img"
            alt="Men running toward the ocean on a beach"
            image="https://images.unsplash.com/photo-1468183654773-77e2f0bb6bf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          />
        </Card>   
      </div>
    </>
  )
}