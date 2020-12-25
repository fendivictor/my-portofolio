import React from 'react';
import classes from '../style/workthumb.module.css';

const workthumb = (props) => (
    <a href={"/detail/" + props.id} className={classes.workWrapper}>
        <img className={classes.imgWork} src={props.picture} />
        <p className={classes.titleWork}>
            {props.title}
        </p>
    </a>
);

export default workthumb;