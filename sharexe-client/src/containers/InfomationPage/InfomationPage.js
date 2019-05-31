import React, { Component, Fragment } from 'react';
import InformationUser from './Information.jsx';
import Status from './Status.jsx';
import Author from './Author.jsx';
import Dashboard from './Dashboard.jsx';
class InformationPage extends Component {
    render() {
        return (
            <section class="author-profile-area">
                <div class="container">
                 <div class="row">
                    <div class="col-lg-4">
                        
                        <Author />
                    </div>

                    <div class="col-lg-8">
                        <Dashboard />
                        <InformationUser />
                    </div>
                 </div>
                </div>
            </section>
        );
    }
}

export default InformationPage;