import React from 'react'
import Card from '../../components/Card';
import Grid from '@material-ui/core/Grid';

import JobService from '../../service/JobService';
import JobCard from '../../views/Job/JobCard';

const Job = () => {
    let jobs = new JobService().getJobs();
    return (
        <React.Fragment>
            <Grid container spacing={1}>
                {jobs.map(job => {
                    return (
                        <Grid item spacing={0}>
                            <JobCard job={job}/>
                        </Grid>
                    )
                })}
            </Grid>

        </React.Fragment>
    )
}

export default Job;