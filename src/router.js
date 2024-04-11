import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '.pages/HomePage';
import ProjectsPage from '.pages/ProjectsPage';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsPage
        },
    ]
})

export {router};