import React, { useState, useEffect } from 'react'
import Loading from './months/loading';
import monthsdetail from "./months/monthsdetail";

const UseMonthAPI = () => {

    const [months, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getmonths = async () => {
        try {
            const response = await fetch('https://v1.igpods.com/api/social_calendar/get/January');
             setLoading(false);
            setUsers(await response.json());
        } catch (error) {
            setLoading(false);
            console.log("my error is "+ error);
        }
    }

    useEffect(() => {
        getmonths();
    }, []);

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Getmonths months={months}/>
        </>
    )
}

export default UseMonthAPI
