import React from 'react';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  button: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button time>Hello</Button>
    </div>
  );
}

export default App;
