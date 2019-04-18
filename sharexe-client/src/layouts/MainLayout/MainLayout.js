import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import DashboardArea from '../../components/DashboardArea/DashboardArea';
import ModalConductor from '../../modals/ModalConductor';
import Snackbar from '../../components/Snackbar/Snackbar';

import './MainLayout.css';

const MainLayout = (props) => (
    <div>
        <Header />
        
        <DashboardArea />

        {props.children}

        <Footer />

        <ModalConductor />
        
        <Snackbar />
    </div>
);

export default MainLayout;