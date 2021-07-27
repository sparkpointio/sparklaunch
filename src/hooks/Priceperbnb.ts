// Fetch api price per BNB

import React, { useState, useEffect } from "react";


const fetchData = () => {
    return fetch("https://api.sparkswap.info/api/assets")
        .then((response) => response.json())
        .then((data)=> console.log(data));}
        // {data.0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c[0].BNB}

        export default fetchData


/*
export default function Priceperbnb() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("https://api.sparkswap.info/api/assets")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    if (loading) return "Loading...";
    if (error) return "Error!";

    return (
        // {data.0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c[0].BNB}
        
    );
}
*/
