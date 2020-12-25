import React from 'react';
import classes from '../style/footer.module.css';

const footer = (props) => (
    <div className={classes.footerWrapper}>
        <div className="container">
            <div className={classes.footerText}>
                {props.footerText}
            </div>
        </div>
    </div>
);  

export default footer;