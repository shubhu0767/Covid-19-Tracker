import React, { useEffect, useState } from 'react';
import './covid.css';

const Covid = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        // https://api.covid19india.org/data.json
        const getCovidData = async () => {
            try {
                const res = await fetch('https://api.covid19api.com/summary');
                const actualData = await res.json();
                console.log(actualData.Global);
                setData(actualData.Global);
            } catch (err) {
                console.log(err);
            }
        }

        getCovidData();
        return () => {

        }
    }, [])

    return (
        <>
            <section>
                <div className="header">
                    <h1>Live</h1>
                    <h2>COVID-19 CORONAVIRUS TRACKER</h2>
                </div>
                <div className="card">
                    <div className="card-main">
                        <div className="card-inner">
                            <p className="data">Country</p>
                            <p className="data">ALL</p>
                        </div>
                    </div>
                    <div className="card-main">
                        <div className="card-inner">
                            <p className="data">New Confirm</p>
                            <p className="data">{data.NewConfirmed}</p>
                        </div>
                    </div>
                    <div className="card-main">
                        <div className="card-inner">
                            <p className="data">Total Confirmed</p>
                            <p className="data">{data.TotalConfirmed}</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-main">
                        <div className="card-inner">
                            <p className="data">Total Death</p>
                            <p className="data">{data.TotalDeaths}</p>
                        </div>
                    </div>
                    <div className="card-main">
                        <div className="card-inner">
                            <p className="data">New Deaths</p>
                            <p className="data">{data.NewDeaths}</p>
                        </div>
                    </div>
                    <div className="card-main">
                        <div className="card-inner">
                            <p className="data">Upadated</p>
                            <p className="data">{data.Date}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Covid