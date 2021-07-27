import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Priceperbnb() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState(false)
    useEffect(() => {
        // fetch("https://wallet.sparkpoint.io/api/v2/wallet/conversionRates")
        //     .then((response) => {
        //         if (response.ok) {
        //             return response.json();
        //         }
        //         throw response;
        //     })
        (async () => {
            try {
                setLoading(true);
                const res = await axios.get('https://wallet.sparkpoint.io/api/v2/wallet/conversionRates');
                setData(res.data.conversions.bnb.usd)
                setLoading(false)
            }
            catch(e){
                setError(true);
                console.log(e)
            }
        })()
        
    }, []);
    if (loading) return "Loading...";
    if (err) return "Error...";

    return data;
}

