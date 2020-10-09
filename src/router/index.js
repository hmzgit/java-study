import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Layout from '@/layout';

export default new Router({
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/home',
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('@/pages/home/index'),
                    meta: { title: '首页', icon: 'dashboard' }
                    // redirect: '/home/list-1',
                    // children: [
                    //     {
                    //         path: '/home/list-1',
                    //         name: 'list-1',
                    //         component: () => import('@/pages/home/item/list-1'),
                    //         meta: { title: '第一章', icon: 'dashboard' }
                    //     }
                    // ]
                },
                {
                    path: '/study',
                    name: 'study',
                    component: () => import('@/pages/study/index'),
                    meta: { title: 'java学习', icon: 'dashboard' }
                },
                {
                    path: '/download',
                    name: 'download',
                    component: () => import('@/pages/download/index'),
                    meta: { title: '首页', icon: 'dashboard' }
                },
                {
                    path: '/comunication',
                    name: 'comunication',
                    component: () => import('@/pages/comunication/index'),
                    meta: { title: '首页', icon: 'dashboard' }
                },
                {
                    path: '/feedback',
                    name: 'feedback',
                    component: () => import('@/pages/feedback/index'),
                    meta: { title: '首页', icon: 'dashboard' }
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('@/pages/about/index'),
                    meta: { title: '首页', icon: 'dashboard' }
                }
            ]
        }
    ]
});
