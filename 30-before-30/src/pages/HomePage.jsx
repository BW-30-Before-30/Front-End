import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// Components


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '75px auto'
  },
  gridItem: {
    padding: theme.spacing(2)
  }
  }));

export const HomePage = props => { 
  const classes = useStyles();

  return (
    <>
      <div className={classes.content}>
        <Container className={classes.header}>
          <Typography className={classes.heading} variant="display3" align="left" color="textSecondary" component="h1">
            All Lists
          </Typography>
        </Container>

        <Grid container spacing={4} justify="center">      
          {props.lists && props.lists.map(item => {
            return (
              <Grid item className={classes.gridItem} s>
                <BucketListCard 
                  key={item.id}
                  {...item}
                  />
              </Grid>
            );
          })}
        </Grid>
      </div>
      <Footer />
    </>
  );
}