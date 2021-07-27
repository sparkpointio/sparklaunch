import React, { useState, useEffect } from "react";


export default function Priceperbnb() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("https://wallet.sparkpoint.io/api/v2/wallet/conversionRates")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
           
    }, []);
    if (loading) return "Loading...";
    if (error) return "Error!";
    
    return (
        // {data.0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c[0].BNB}
        data.last_updated[0].bnb
        
    );
}

