import React from 'react';
import { Avatar, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import TopBar from '../../components/topbar/Topbar';
import SideMenu from '../admin/sidebar/SideMenu';
import axios from 'axios';

function FoodDonor() {
  const [loading, setLoading] = useState(false);
  const [donors, setDonors] = useState([]);
     // baseURL
     const HOST_BASE = "http://localhost:8080";
     // Picture profile
     const pfile = `${HOST_BASE}/images/`;
   
     useEffect(()=>{
      setLoading(true);
       const fetchPosts = async ()=> {
        await axios.get(`${HOST_BASE}/donors`)
        .then(datares => {
         setDonors(datares.data);
        })
        .catch(console.error)
       }
       fetchPosts();
       setLoading(false);
     },[]);
   

  return (
    <div>
    <TopBar/>
    <div className='adminContent'>
    <div className='SideMenuAndPageContent'>
    <SideMenu/>
    <div className='PageContent'>
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "photo",
            render: (photo) => {
              return <Avatar src={pfile+photo} />;
            },
          },
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Donor",
            dataIndex: "username",
            render: (value) => <span>{value}</span>,
          },
          {
            title: "Address",
            dataIndex: "address",
            render: (value) => <span>{value}</span>,
          },
          {
            title: "Region",
            dataIndex: "region",
            render: (value) => <span>{value}</span>,
          },
          {
            title: "Country",
            dataIndex: "country",
            render: (value) => <span>{value}</span>,
          },
          {
            title: "Phone",
            dataIndex: "phone",
            render: (value) => <span>{value}</span>,
          },
          {
            title: "Email",
            dataIndex: "email",
            render: (value) => <span>{value}</span>,
          },
          {
            title: "Status",
            dataIndex: "status",
            render: (value) => <span>{value}</span>,
          },
          {
            title: "Created",
            dataIndex: "createdAt",
            render: (value) => <span>{new Date(value).toDateString()}</span>,
          },
          {
            title: "updated",
            dataIndex: "updatedAt",
            render: (value) => <span>{new Date(value).toDateString()}</span>,
          },
        ]}
        dataSource={donors}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
    </div>
    </div>
    </div>
    </div>
  );
}

export default FoodDonor;
