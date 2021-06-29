import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import HomeIcon from '@material-ui/icons/Home';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import {RegisterCard} from '../Register/RegisterForm'
import {LoginCard} from '../Login/LoginForm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 400,
    minWidth: 200,
    height: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export const SideBar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
        <Router>
        <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
            </ListSubheader>
        }
        className={classes.root}
        >
        <Link to="/">
        <ListItem button>
            <ListItemIcon>
            <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        </Link>
        <Link to="/login">
        <ListItem button>
            <ListItemIcon>
            <VpnKeyIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
        </ListItem>
        </Link>
        <Link to="/register">
        <ListItem button>
            <ListItemIcon>
            <GroupAddIcon />
            </ListItemIcon>
            <ListItemText primary="Register" />
        </ListItem>
        </Link>
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
            <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText primary="Project" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Project 1" />
            </ListItem>
            <ListItem button className={classes.nested}>
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Project 2" />
            </ListItem>
            <ListItem button className={classes.nested}>
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Project 3" />
            </ListItem>
            <ListItem button className={classes.nested}>
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Project 4" />
            </ListItem>
            <ListItem button className={classes.nested}>
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Project 5" />
            </ListItem>
            </List>
        </Collapse>
        </List>

        <Switch>
          <Route path="/login">
            <LoginCard />
          </Route>
          <Route path="/register">
            <RegisterCard />
          </Route>
          <Route path="/">
          </Route>
        </Switch>
        </Router>
  );
}
