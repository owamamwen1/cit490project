import { UsergroupAddOutlined, ShoppingOutlined,} from "@ant-design/icons";
import { Card, Space, Statistic, Typography } from "antd";
import { useEffect, useState } from "react";
import axios from 'axios';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip,Legend,} from "chart.js";
import TopBar from "../../components/topbar/Topbar";
import SideMenu from "./sidebar/SideMenu";
ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip,  Legend);

function PageAdmin() {
  const [userCount, setUserCount] = useState(0);
  const [foodTotal, setFoodTotal] = useState(0);

  // baseURL
  const HOST_BASE = "http://localhost:8080";
       
  useEffect(() => {
    // user
    const fetchUsers = async ()=> {
     await axios.get(`${HOST_BASE}/users`)
     .then(datauser => {
      setUserCount(datauser.data.length);
     })
     .catch(console.error)
    }
    fetchUsers();
    // food
const fetchFoodDonor = async ()=> {
  await axios.get(`${HOST_BASE}/donors`)
  .then(datafood => {
   // get the total food donations
   setFoodTotal(datafood.data.length);
  })
  .catch(console.error)
 }
 fetchFoodDonor();

    });




     return (
      <div>
      <TopBar/>
      <div className='adminContent'>
      <div className='SideMenuAndPageContent'>
      <SideMenu/>
      <div className='PageContent'>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction="horizontal">
          <DashboardCard
            icon={
              <UsergroupAddOutlined
                style={{
                  color: "green",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Users"}
            value={userCount}
          />
          <DashboardCard
            icon={
              <ShoppingOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgba(0,0,255,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Foods"}
            value={foodTotal}
          />
        </Space>
        <Space>

        </Space>
      </Space>
      </div>
      </div>
      </div>
      </div>
    );

    function DashboardCard({ title, value, icon }) {
      return (
        <Card>
          <Space direction="horizontal">
            {icon}
            <Statistic title={title} value={value} />
          </Space>
        </Card>
      );
    }
}

export default PageAdmin;
