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
import SimpleModal from './Modal';
import Table from '../components/Table';

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
        fontSize: 12,
        fontWeight: 500
    },
    pos: {
        marginBottom: 12,
    },
    avatar: {
        backgroundColor: red[500],
    },
});

export default function OutlinedCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>            R          </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreHoriz />
                    </IconButton>
                }
                title={props.job.jobTitle}
                subheader={props.job.jobDetail.postedOn}
            />
            <Divider variant="middle" />
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.job.jobDetail.shortDescription}
                </Typography>
                <Typography variant="body2" component="p">
                    <Grid container spacing={1}>
                        {props.job.dates && <Table rows={props.job.dates} tableTitle="Important Dates" />}

                        {props.job.vacancies && <Table rows={props.job.vacancies} tableTitle="Vacencies" />}
                        {props.job.examDetails && <Table rows={props.job.examDetails} tableTitle="Exam Details" />}
                        {props.job.links && <Table rows={props.job.links} tableTitle="Important Downloads" />}
                    </Grid>
                </Typography>

            </CardContent>
            <Divider variant="middle" />
            <CardActions>
                <Link target="_blank" to={`/job/${props.job.jobId}/${props.job.jobTitle}`} size="small">
                    <Button size="small" >Learn More</Button>

                </Link>
                <Button size="small" >View Advertisement</Button>
                <Button size="small" >Apply Now</Button>
                <IconButton aria-label="settings">
                    <ThumbUpAltOutlined fontSize="small" />
                </IconButton>
                <IconButton aria-label="settings">
                    <ShareOutlined fontSize="small" />
                </IconButton>
                <IconButton aria-label="settings">
                    <CommentOutlined fontSize="small" title="Comment" titleAccess />
                </IconButton>

                {/*
                 <SimpleModal data={props.job} /> */}
            </CardActions>
        </Card >
    );
}
