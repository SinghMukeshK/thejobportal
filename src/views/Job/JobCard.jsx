import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CommentOutlined from '@material-ui/icons/CommentOutlined';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';

import ShareOutlined from '@material-ui/icons/ShareOutlined';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import Divider from '@material-ui/core/Divider';
import { red } from '@material-ui/core/colors';
import { Link } from "react-router-dom";
import Table from '../../components/Table';
import Drawer from '@material-ui/core/Drawer';
import JobDetails from './JobDetails';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    avatar: {
        backgroundColor: red[500],
    },
});

export default function JobCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        console.log('@@@@@@@@@@@@@@@@@@@@@@')
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <Card className={classes.root} variant="" color="primary">
            <CardHeader
                avatar={
                    <Avatar color="primary" aria-label="recipe" className={classes.avatar}>            R          </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreHoriz color="primary" />
                    </IconButton>
                }
                color="primary"
                title={props.job.jobTitle}
                subheader={props.job.jobDetail.updatedOn}
            />
            <Divider variant="middle" />
            <CardContent>
                {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.job.jobDetail.shortDescription}
                </Typography> */}
                {/* <Typography className={classes.pos} color="textSecondary">
                    Updated on {props.job.jobDetail.updatedOn}
                </Typography> */}
                {/* <Typography variant="h6" component="h2"></Typography> */}
                <Typography className={classes.pos} color="textSecondary">
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {props.job.jobDetail.detailDescription}
                </Typography>
                <Grid container spacing={1} style={{ paddingTop: "5px" }}>
                    {props.job.dates && <Table rows={props.job.dates} tableTitle="Important Dates" md="12" />}
                </Grid>

            </CardContent>
            <Divider variant="middle" />
            <CardActions lang="hindi">
                {/* <Link target="_blank" to={`/job/${props.job.jobId}/${props.job.jobTitle}`} size="small">
                    <Button variant="text" color="primary" size="small" >Learn More</Button>
                </Link> */}
                <Button variant="outlined" color="primary" size="small"  >Apply Now</Button>
                {/* <Button variant="text" color="primary" size="small" startIcon={<ThumbUpAltOutlined />}>Like</Button>

                <Button variant="text" color="primary" size="small" startIcon={<ShareOutlined />}>Share</Button>
                <Button color="primary" size="small" startIcon={<CommentOutlined />} >Comment</Button> */}
                <Button variant="outlined" color="primary" size="small" onClick={toggleDrawer('right', true)}>View Full Detail</Button>
                <Drawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    onOpen={toggleDrawer('right', true)}
                >
                    <JobDetails job={props.job} close={toggleDrawer} />
                </Drawer>
            </CardActions>
        </Card>
    );
}
