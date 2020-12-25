import React from 'react';
import classes from '../style/jobpanel.module.css';

const jobpanel = (props) => (
    <div className={classes.panel}>
        <div className={classes.panelContent}>
            <div className={classes.panelTitle}>
                <div className={classes.jobName}>
                    <h4 className={classes.jobTitle}>{props.jobTitle}</h4>
                    <p>{props.jobLocation}</p>
                </div>
                <div className={classes.jobDurationWrapper}>
                    <p className={classes.jobDuration}>
                        {props.jobDuration}
                    </p>
                </div>
            </div>
            <div className={classes.panelBody}>
                <p className={classes.jobDescription}>
                    {props.jobDescription}
                </p>
            </div>
        </div>
    </div>
);

export default jobpanel;