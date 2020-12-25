import React, { Component } from 'react';
import classes from '../style/job.module.css';
import JobPanel from '../components/JobPanel';

class Job extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experiences: []
        }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/fendivictor/portfolio-img/master/data/experience.json')
            .then(res => res.json())
            .then((parsedJson) => {
                this.setState({
                    experiences: [
                        ...parsedJson.experiences
                    ]
                });
            })
            .catch(error => console.log('an error occured while fetching data'))
    }

    render() {
        return(
            <div className={classes.jobWrapper}>
                <div className="container">
                    <h2 className={classes.sectionTitle}>Job History</h2>
                    <div className={classes.panelWrapper}>
                        {
                            this.state.experiences.map((val, index) => (
                                <JobPanel key={val.id} jobTitle={val.title} jobLocation={val.place} jobDuration={val.time} jobDescription={val.description} />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Job;