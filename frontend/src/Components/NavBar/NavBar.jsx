import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Updated to use useNavigate
import { Menu, Spin } from 'antd';
import './NavBar.css';
import { HomeOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';

export const NavBar = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Updated to use useNavigate for redirection

  const logout = () => {
    setLoading(true);
    localStorage.removeItem('token');
   
    setTimeout(() => {
      setLoading(false);
      console.log('User logged out');
      navigate('/login'); // Updated to use navigate for redirection
    }, 1000);
  };

  return (
    <div>
      {loading && (
        <div className="loading-overlay">
          <Spin spinning={loading} tip="Logging out..." size="large" />
        </div>
      )}

      <div>
        <Menu mode="horizontal" className="bg-gray-800 text-white navbar-small">
          <Menu.Item key="home" icon={<HomeOutlined />} className="menu-item hover:bg-gray-700">
            <Link to={"/"}>Main</Link>
          </Menu.Item>

          <Menu.Item key="admin" icon={<UserOutlined />} className="menu-item hover:bg-gray-700">
            <Link to={"/admin/adminpage"}>Admin Page</Link>
          </Menu.Item>

          <Menu.Item
            key="logout"
            icon={<LogoutOutlined />}
            className="menu-item hover:bg-gray-700"
            style={{ marginLeft: 'auto' }}
            onClick={logout}
          >
            Logout
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};