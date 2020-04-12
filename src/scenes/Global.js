import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import styled from '@emotion/styled';

import { useTheme } from '../contexts/ThemeContext';

const Global = () => {
    const themeState = useTheme();
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://covid-193.p.rapidapi.com/statistics?country=All', {
            'method': 'GET',
            'headers': {
                'x-rapidapi-host': "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "6e5e4a470fmsh2cb76a891d5004ep14da9ejsn8a5f9975df86"
            }
        })
            .then(async response => {
                const res = await response.json();
                setStats(res.response);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    }, []);
    
    const Card = styled('div')`
        &:hover {
            box-shadow: ${themeState.dark ?
            '0px 0px 25px 1px rgba(255, 255, 255, 0.75)'
            : '0px 0px 25px 1px rgba(0, 0, 0, 0.75)'
        }
        }
    `;

    if (loading) {
        return (
            <div className='d-flex justify-content-center w-100'>
                <ReactLoading type='spinningBubbles' color='#347B98' height={'10%'} width={'10%'} />
            </div>
        )
    }
    return (
        <div className="row display-flex">
            <div className="col col-12 col-sm-3 mb-3 mb-sm-0">
                <Card className="card h-100 bg-tiber">
                    <div className="card-body text-center">
                        <h5 className="card-title">Total Cases</h5>
                        <p className='stat-number'>{stats[0].cases.total}</p>
                    </div>
                </Card>
            </div>
            <div className="col col-12 col-sm-3 mb-3 mb-sm-0">
                <Card className="card h-100 bg-green">
                    <div className="card-body text-center">
                        <h5 className="card-title">Active Cases</h5>
                        <p className='stat-number'>{stats[0].cases.active}</p>
                    </div>
                </Card>
            </div>
            <div className="col col-12 col-sm-3 mb-3 mb-sm-0">
                <Card className="card h-100 bg-astral">
                    <div className="card-body text-center">
                        <h5 className="card-title">Recovered Cases</h5>
                        <p className='stat-number'>{stats[0].cases.recovered}</p>
                    </div>
                </Card>
            </div>
            <div className="col col-12 col-sm-3">
                <Card className="card h-100 bg-red">
                    <div className="card-body text-center">
                        <h5 className="card-title">Total Deaths</h5>
                        <p className='stat-number'>{stats[0].deaths.total}</p>
                    </div>
                </Card>
            </div>
        </div>
    )
};

export default Global;