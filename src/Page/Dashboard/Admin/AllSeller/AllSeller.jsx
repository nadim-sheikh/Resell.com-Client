import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllSeller = () => {
    const data = useLoaderData()
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>User Roll</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(u => <tr key={u._id}>
                            <th>1</th>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.accountType}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllSeller;