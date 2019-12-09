import React from 'react';

import {Layout} from "components/Layout"
import {Profile} from 'components/Profile';

export const routes = [
    {
        path: '/',
        exact: true,
        render: () => {return <Layout />; }
    },
    {
        path: '/chats/:id',
        exact: true,
        render: (params) => {return <Layout match={params.match} />; }
    },
    {
        path: '/profile/',
        exact: true,
        render: () => {return <Layout content={<Profile />} />;}
    }
];