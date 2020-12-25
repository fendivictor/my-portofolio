import React, { Component } from 'react';
import classes from '../style/contact.module.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {
                phone: '',
                email: '',
                website: ''
            }
        };
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/fendivictor/portfolio-img/master/data/contact.json')
            .then(res => res.json())
            .then((parsedJson) => {
                this.setState({
                    contact: {
                        ...parsedJson
                    }
                });
            })
            .catch(error => console.log('an error occured while fetching data'))
    }

    render() {
        return (
           <div className={classes.contactWrapper}>
                <div className="container">
                    <div className={classes.sectionTitle}>
                        <h2 className={classes.contactTitle}>
                            Contact Me
                        </h2>
                    </div>
                    <div className={classes.contactListWrapper}>
                        <div className={classes.contactItem}>
                            <a href={"tel:" + this.state.contact.phone}>{this.state.contact.phone}</a>
                        </div>
                        <div className={classes.contactItem}>
                            <a href={"mailto:" + this.state.contact.email}>{this.state.contact.email}</a>
                        </div>
                        <div className={classes.contactItem}>
                            <a href={"https://" + this.state.contact.website}>{this.state.contact.website}</a>
                        </div>
                    </div>
                </div>
           </div>
        );
    }
}

export default Contact;