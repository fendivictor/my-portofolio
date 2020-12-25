import { Component, React } from "react";
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WorkDetail from '../components/WorkDetail';

class Detail extends Component {
    render() {
        return (
            <div>
                <WorkDetail id={this.props.match.params.id} />
                <Contact />
                <Footer footerText="Copyright &copy;2020 All rights reserved | Built with ReactJS" />
            </div>
        );
    }
}

export default Detail;