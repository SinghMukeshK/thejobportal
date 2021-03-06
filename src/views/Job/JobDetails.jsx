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
import Table from '../../components/Table';
import ColumnarTable from '../../components/ColumnarTable';
import AppBar from '../../components/AppBar'

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        marginTop: "80px",
        marginLeft: "50px",
        marginRight: "50px"
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
        backgroundColor: theme.palette.primary,
    },
}));

export default function JobDetails(props) {
    const classes = useStyles();
    console.log(props)
    return (
        <Grid container>
            <AppBar />
            <Grid item md={12}>
                <Card className={classes.root} variant="elevation">
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>            R          </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreHoriz color="primary" />
                            </IconButton>
                        }
                        title={props.job.jobTitle}
                        subheader={props.job.jobDetail.shortDescription}
                    /><Divider variant="middle" />
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {props.job.jobDetail.shortDescription}
                        </Typography>
                        <Typography variant="h6" component="h2">
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        </Typography>
                        <Typography variant="body2" component="p">
                            {props.job.jobDetail.detailDescription}
                        </Typography>
                        <Typography variant="body2" component="p">
                            <Grid container spacing={1}>
                                {/* <Grid item xs={6}> */}
                                {props.job.dates && <Table rows={props.job.dates} tableTitle="Important Dates" />}
                                {/* </Grid>
                                <Grid item xs={6}> */}
                                {props.job.examDetails && <Table rows={props.job.examDetails} tableTitle="Exam Details" />}
                                {/* </Grid>

                                <Grid item xs={6} spacing={2}> */}
                                {props.job.vacancies && <Table rows={props.job.vacancies} tableTitle="Vacencies" />}
                                {props.job.eligibilities && <ColumnarTable rows={props.job.eligibilities} tableTitle="Eligibility" />}
                                {/* </Grid>
                                <Grid item xs={6} spacing={2}> */}
                                {/* </Grid>
                                <Grid item xs={12} spacing={2}> */}
                                {/* </Grid> */}
                            </Grid>
                            <Grid container spacing={1}>
                                {props.job.links && <ColumnarTable rows={props.job.links} tableTitle="Important Downloads" />}
                            </Grid>
                        </Typography>

                    </CardContent>
                    <Divider variant="middle" />
                    <CardActions>
                        <Button variant="outlined" color="primary" size="small" >Apply Now</Button>
                        {/* <Button variant="outlined" color="primary" size="small" startIcon={<ThumbUpAltOutlined />}>Like</Button>
                        <Button variant="outlined" color="primary" size="small" startIcon={<ShareOutlined />}>Share</Button> */}
                        {/* <Button color="primary" size="small" startIcon={<CommentOutlined />} >Comment</Button> */}
                        <Button onClick={props.close('right', false)} variant="contained" color="primary" style={{
                            float: "right"
                        }}>Close</Button>
                    </CardActions>
                </Card>
            </Grid>
            {/* <Grid item md={2}></Grid> */}
        </Grid>
    );
}
