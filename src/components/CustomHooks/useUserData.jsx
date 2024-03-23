import React, { useState, useEffect } from 'react';

const useUserData = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchUserData = async () => {
    setLoading(true);
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
        throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUsers(data);
        setError(null);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
    };

    fetchUserData();

    }, []);
        return { users, loading, error };
}

export default useUserData;
