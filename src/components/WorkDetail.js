import React from 'react';
import classes from '../style/workdetail.module.css';

const workDetail = (props) => {
    let link;
    if (props.data.url !== '') {
        link =  <div className={classes.linkWrapper}>
                    <span>Url: </span>
                    <a href={props.data.url} target="_blank" rel="noreferrer">{props.data.url}</a>
                </div>;
    }

    let technologies;
    if (props.data.technologies) {
        technologies = 
            <div className={classes.listWrapper}>
                Built with:
                <ul className={classes.listTechnologies}> 
                {
                    props.data.technologies.map((value, i) => (
                        <li key={i}>{value}</li>
                    ))
                }
                </ul>
            </div>;
    }

    return(
        <div>            
            <div className={classes.detailsArea}> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <a href={props.data.img}>
                                <img className={classes.imgWork} src={props.data.img} alt={props.data.title} />
                            </a>
                        </div>
                        <div className="col-md-6">
                            <h4 className={classes.workTitle}>{props.data.title}</h4>
                            <p className={classes.workDescription}>
                                {props.data.description}
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

export default workDetail;