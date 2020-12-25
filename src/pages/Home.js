import { Component, React } from "react";
import Banner from '../components/Banner';
import Work from '../components/Work';
import Job from '../components/Job';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Work />
                <Job />
                <Contact />
                <Footer footerText="Copyright &copy;2020 All rights reserved | Built with ReactJS" />
            </div>
        );
    }
}

export default Home;