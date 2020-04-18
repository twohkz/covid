import React from 'react';

import Global from './Global';
import Country from './Country';
import History from './History';
import Footer from './Footer';

const pStyle = {
    fontSize: '150px',
    Align: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color:'red',
    
  };

const Dashboard = () => {
    return (
        <div className='container mt-2'>

            <div className='row'>
                <div className='col-12 mb-2'>
                    <h5 className='text-left'>Country Wise Stats</h5>
                    <hr />
                </div>
                <div className='col-12'>
                    <Country />
                </div>
            </div>
            <div className='row mb-3 mt-3'>
                <div className='col-12'>
                    <h5 className='text-left'>History (Global)</h5>
                    <hr />
                </div>
                <div className='col-12'>
                    <History />
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col-12 mb-2'>
                    <h5 className='text-left'>Global Stats</h5>
                    <hr />
                </div>
                <div className='col-12'>
                    <Global />
                </div>
            </div>
            
            
                    <div  className='row mb-3 mt-3' style={pStyle}>
                        <Footer />
                    </div>
            
            </div>
        
    )
};

export default Dashboard;