import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Debug() {

    const [users, setUsers] = useState([]);
    const [credentials, setCredentials] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const [usersResponse, credentialsResponse] = await Promise.all([
                axios.get('/api/users'),
                axios.get('/api/credentials')
            ]);

            setUsers(usersResponse.data.users);
            setCredentials(credentialsResponse.data.credentials);
        }

        fetchData();
    }, []);

    return (
        <div className="App">
            <h1>Debug</h1>
            <h2>Users</h2>
            <ul>
                {users.map((user) => {
                    return <li key={user.id}>{`${user.username} ${user.password}`}</li>
                })}
            </ul>
            <h2>Credentials</h2>
            <ul>
                {credentials.map((credential) => {
                    return <li key={credential.id}>{`${credential.appName} ${credential.accessToken}`}</li>
                })}
            </ul>
        </div>
    );
}

export default Debug;
