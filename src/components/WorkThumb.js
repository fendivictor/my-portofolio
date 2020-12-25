import React from 'react';
import classes from '../style/workthumb.module.css';

const workthumb = (props) => (
    <div className={classes.workWrapper}>
        <img onClick={() => props.showDetail(props.id)} className={classes.imgWork} src={props.picture} alt={props.title} />
        <p onClick={() => props.showDetail(props.id)} className={classes.titleWork}>
            {props.title}
        </p>
    </div>
);

export default workthumb;