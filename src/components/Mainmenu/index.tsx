import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
    {
        label: '栏目 1',
        key: '/page1',
        icon: <PieChartOutlined />
    },
    {
        label: '栏目 2',
        key: '/page2',
        icon: <DesktopOutlined />
    },
    {
        label: '栏目 3',
        key: '/page3',
        icon: <UserOutlined />,
        children: [
            {
                label: '栏目 301',
                key: '/page3/page301'
            },
            {
                label: '栏目 302',
                key: '/page3/page302'
            },
        ]
    },
    {
        label: '栏目 4',
        key: '/page4',
        icon: <TeamOutlined />,
        children: [
            {
                label: '栏目 401',
                key: '/page4/page401'
            },
            {
                label: '栏目 402',
                key: '/page4/page402'
            },
        ]
    },
    {
        label: '栏目 5',
        key: '/page5',
        icon: <FileOutlined />
    },
]

const Comp: React.FC = () => {
    const navigteTo = useNavigate()
    const currentPage = useLocation()
    const menuClick = (e: { key: string }) => {
        // 点击调转到对应路由，编程式导航调转，使用useNavigate  hook
        navigteTo(e.key)
    }
    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[currentPage.pathname]}
            mode="inline"
            items={items}
            onClick={menuClick}
        />
    );
};

export default Comp;