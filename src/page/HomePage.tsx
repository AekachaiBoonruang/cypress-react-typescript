import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ProjectCard } from '../component/Card/Card'
import { SideBar } from '../component/Sidebar/Sidebar'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

function HomePage() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideBar />
        </Grid>
        <Grid item xs={6}>
          <ProjectCard />
        </Grid>
      </Grid>
    </div>
    );
}

export default HomePage;
