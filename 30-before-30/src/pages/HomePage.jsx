import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Link from '@material-ui/core/Link';
// Components

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    transform: 'translateZ(0)',
  },
  titleBar: {
    background: 'rgba(255, 255, 255, 0.7)',
    color: '#5B7431'
  }
}));

export const HomePage = props => { 
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <Link href="#" >
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar className={classes.titleBar}
                title={tile.title}
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}