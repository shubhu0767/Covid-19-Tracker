import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './covid.css';

const Covid = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        // Using Async, await and Fetch

        // const getCovidData = async () => {
        //     try {
        //         const res = await fetch('https://api.covid19api.com/summary');
        //         const actualData = await res.json();
        //         console.log(actualData);
        //         setData(actualData.Global);
        //     } catch (err) {
        //         console.log(err);
        //     }
        // }

        // getCovidData();

                // Using Axios

            axios.get('https://api.covid19api.com/summary')
                .then(res =>{
                    console.log(res.data.Global);
                    setData(res.data.Global);
                })
                .catch(error => console.log(error))
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
                            <h3 className="data">ALL</h3>
                        </div>
                    </div>
                    <div className="card-main">
                        <div className="card-inner">
                            <p className="data">New Confirm</p>
                            <h3 className="data">{data.NewConfirmed}</h3>

                        </div>
                    </div>
                    <div className="card-main">
                        <div className="card-inner">
                            <p className="data">Total Confirmed</p>
                            <h3 className="data">{data.TotalConfirmed}</h3>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-main">
                        <div className="card-inner">
                            <p className="data">Total Death</p>
                            <h3 className="data">{data.TotalDeaths}</h3>
                        </div>
                    </div>
                    <div className="card-main">
                        <div className="card-inner">
                            <p className="data">New Deaths</p>
                            <h3 className="data">{data.NewDeaths}</h3>
                        </div>
                    </div>
                    <div className="card-main">
                        <div className="card-inner">
                            <p className="data">Last Upadated</p>
                            <h3 className="data" id="date">{data.Date}</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Covid;