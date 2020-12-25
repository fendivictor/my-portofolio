import React, { Component } from 'react';
import classes from '../style/workdetail.module.css';

class WorkDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            works: {}
        }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/fendivictor/portfolio-img/master/data/latest-works.json')
            .then(res => res.json())
            .then((parsedJson) => {
                parsedJson.works.forEach(row => {
                    if (row.id.toString() === this.props.id) {
                        this.setState({
                            works: {
                                ...row
                            }
                        })
                    }
                });
            })
            .catch(error => console.log('an error occured while fetching data'))
    }

    render() {

        let link;
        if (this.state.works.url !== '') {
            link =  <div>
                        <span>Url: </span>
                        <a href={this.state.works.url} target="_blank" rel="noreferrer">{this.state.works.url}</a>
                    </div>;
        }

        let technologies;
        if (this.state.works.technologies) {
            technologies = 
                <div className={classes.listWrapper}>
                    Built with:
                    <ul className={classes.listTechnologies}> 
                    {
                        this.state.works.technologies.map((value, i) => (
                            <li key={i}>{value}</li>
                        ))
                    }
                    </ul>
                </div>;
        }

        return(
            <div>            
                <div className={classes.bannerArea}>
                    <div className="container">
                        <div className={classes.textWrapper}>
                            <h1 className={classes.bannerText}>
                                Portofolio Details 
                            </h1>
                        </div>
                    </div>
                </div>
                <div className={classes.detailsArea}> 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <a href={this.state.works.img}>
                                    <img className={classes.imgWork} src={this.state.works.img} alt={this.state.works.title} />
                                </a>
                            </div>
                            <div className="col-md-6">
                                <h4 className={classes.workTitle}>{this.state.works.title}</h4>
                                <p className={classes.workDescription}>
                                    {this.state.works.description}
                                </p>
                                {link}
                                {technologies}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkDetail;