import React, { Component } from 'react';
import classes from '../style/work.module.css';
import WorkThumb from '../components/WorkThumb';
import Modal from '../components/UI/Modal/Modal';
import WorkDetail from '../components/WorkDetail';

class Work extends Component {
    constructor(props) {
        super(props);

        this.state = {
            works: [],
            modalShow: false,
            workDetail: {}
        }

        this.onClickWorkHandler = this.onClickWorkHandler.bind(this);
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

    onClickWorkHandler = (id) => {
        this.state.works.forEach(row => {
            if (row.id === id) {
                this.setState({
                    modalShow: true,
                    workDetail: row
                });
            }
        });
    }

    onCloseModal = () => {
        this.setState({
            modalShow: false
        });
    }

    render() {
        return(
            <div className={classes.workArea}>
                <div className="container">
                    <h2 className={classes.sectionTitle}>Latest Works</h2>
                    <div className={classes.workThumbWrapper}>
                        {
                            this.state.works.map((val, index) => (
                                <WorkThumb showDetail={this.onClickWorkHandler} key={val.id} id={val.id} picture={val.img} title={val.title} alt={val.title} />
                            ))
                        }
                    </div>
                </div>
                <Modal show={this.state.modalShow} modalClosed={this.onCloseModal}>
                    <WorkDetail data={this.state.workDetail} />
                </Modal>
            </div>
        );
    }
}

export default Work;