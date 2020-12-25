import React, { Component } from 'react';
import classes from '../style/work.module.css';
import WorkThumb from '../components/WorkThumb';

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            works: []
        }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/fendivictor/portfolio-img/master/data/latest-works.json')
            .then(res => res.json())
            .then((parsedJson) => {
                this.setState({
                    works: [
                        ...parsedJson.works
                    ]
                });
            })
            .catch(error => console.log('an error occured while fetching data'))
    }

    render() {
        return(
            <div className={classes.workArea}>
                <div className="container">
                    <h2 className={classes.sectionTitle}>Latest Works</h2>
                    <div className={classes.workThumbWrapper}>
                        {
                            this.state.works.map((val, index) => (
                                <WorkThumb key={val.id} id={val.id} picture={val.img} title={val.title} alt={val.title} />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;