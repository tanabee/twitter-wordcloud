import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  padding: {
    paddingTop: '50px',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MyAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar color="default">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Twitter Wordcloud
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.padding} />
    </div>
  );
}
