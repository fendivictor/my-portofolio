import React, { Component } from 'react';
import classes from '../style/banner.module.css';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            developer_name: '',
            developer_job: '',
            link_hire: ''
        }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/fendivictor/portfolio-img/master/data/banner.json')
            .then(res => res.json())
            .then((parsedJson) => {
                this.setState({
                    ...parsedJson
                });
            })
            .catch(error => console.log('an error occured while fetching data'))
    }

    render() {
        return (
            <div className={classes.background}>
                <div className="container">
                    <div className={classes.bannerContent}>
                        <div className={classes.bannerMe}>
                            Hi, I'm
                        </div>
                        <h1 className={classes.devName}>
                            {this.state.developer_name}
                        </h1>
                        <p className={classes.devProfession}>
                            {this.state.developer_job}
                        </p>
                        <a href={this.state.link_hire} className={classes.devHire}>
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;