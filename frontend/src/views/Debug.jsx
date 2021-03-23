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
        <div className="bg-gray-700 h-screen overflow-hidden">
            <h1 className="text-2xl font-bold mb-8 mt-4 text-white">Debug</h1>
            <div className="w-2/5 m-auto border p-6 mb-8 bg-white">
                <h2 className="text-xl text-left font-bold">Users</h2>
                <ul class="divide-y divide-gray-200 ml-8">
                    {users.map((user) => {
                        return <li class="py-4 flex" key={user.id}>{`${user.id} ${user.username} ${user.password}`}</li>
                    })}
                </ul>
            </div>
            <div className="w-2/5 m-auto border p-6 bg-white">
                <h2 className="text-xl text-left font-bold">Credentials</h2>
                <ul class="divide-y divide-gray-200 ml-8">
                    {credentials.map((credential) => {
                        return <li class="py-4 flex" key={credential.id}>{`${credential.id} ${credential.appName} ${credential.accessToken}`}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Debug;
