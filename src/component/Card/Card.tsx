import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '100%',
    '&>div': {width: '50%', margin: 2}
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const ProjectCard = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Card >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Project Card
        </Typography>
        <Typography variant="h5" component="h2">
          Project Name {1}
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>
    <Card>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Project Card
        </Typography>
        <Typography variant="h5" component="h2">
        Project Name {2}
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>
    <Card>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Project Card
        </Typography>
        <Typography variant="h5" component="h2">
        Project Name {2}
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>
    <Card>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Project Card
        </Typography>
        <Typography variant="h5" component="h2">
        Project Name {2}
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>
    </div>
  );
}