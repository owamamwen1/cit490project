import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';
import './viewUser.css'


// baseURL
const HOST_BASE = "http://localhost:8080";

const URL = `${HOST_BASE}/users`;

function useAPi(url) {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await axios.get(url)
    setData(response.data)
  }

  const removeData = (id) => {
    axios.delete(`${url}/${id}`).then(() => {
      const del = data.filter((item) => id !== item._id)
      setData(del)
    })
  }

  return { data, removeData }
}

// Component
const ViewUserTable = () => {
     const { data, removeData } = useAPi(URL)

    const renderHeader = () => {
        let headerElement = ['name', 'type', 'email', 'phone', 'Address', 'Region', 'Country','Role', 'User']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return data && data.map(({ _id, lastName, firstName, donorType, email, phone, address, region, country, userRole, userActive }) => {
            return (
                <tr key={_id}>
                    <td>{lastName}&nbsp;{firstName}</td>
                    <td>{donorType}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{address}</td>
                    <td>{region}</td>
                    <td>{country}</td>
                    <td>{userRole}</td>
                    <td className='action'>
                        <button className='button' onClick={() => removeData(_id)}>{userActive === true ? 'Active': 'NotActive'} </button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            <h1 id='title'>Users</h1>
            <table id='viewusers'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </>
    )
}


function ViewUser() {

  return (
    <div className="viewbody">
    <>
    <ViewUserTable/>
    </>
</div>
  );
}

export default ViewUser;