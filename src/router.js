import Vue from "vue";
import Router from "vue-router";
import home from '@/views/indexPage/index.vue'
Vue.use(Router);

const router = new Router({
    routes: [{
            path: '/login',
            name: 'login',
            meta: {
                title: '登录页'
            },
            component: () =>
                import ('views/Login/index.vue')
        },
        {
            path: '/',
            name: 'home',
            meta: {
                title: '首页'
            },
            component: home,
            children: [{
                    path: 'actionrun',
                    name: '运行程序',
                    meta: {
                        title: '运行程序'
                    },
                    component: () =>
                        import ('views/actionRun/index.vue')
                },
                {
                    path: 'moxibustion',
                    name: '艾灸',
                    meta: {
                        title: '艾灸'
                    },
                    component: () =>
                        import ('views/Moxiustion/index.vue')
                },
                {
                    path: 'warning',
                    name: '警告',
                    meta: {
                        title: '警告'
                    },
                    component: () =>
                        import ('views/Warning/index.vue')
                },
            ]
        },
        {
            path: '/setup',
            component: home,
            children: [{
                    path: '',
                    name: '设置主页面',
                    meta: {
                        title: '设置',
                        actPath: '/setup'
                    },
                    component: () =>
                        import ('views/setUp/index.vue')
                },
                {
                    path: 'coordinateSys',
                    name: '坐标系标定',
                    meta: {
                        title: '坐标系标定',
                        actPath: '/setup'
                    },
                    component: () =>
                        import ('views/setUp/coordinateSys/index.vue')
                },
            ]
        },
        {
            path: '/pt',
            name: '编程与示教',
            meta: {
                title: '编程与示教'
            },
            component: home,
            children: [{
                    path: 'graphical',
                    name: '图形化编程',
                    meta: {
                        title: '图形化编程'
                    },
                    component: () =>
                        import ('views/Graphical/index.vue')
                },
                {
                    path: 'arl',
                    name: 'ARL',
                    meta: {
                        title: 'ARL'
                    },
                    component: () =>
                        import ('views/ARL/index.vue')
                },
                {
                    path: 'teaching',
                    name: '示教',
                    meta: {
                        title: '示教'
                    },
                    component: () =>
                        import ('views/Teaching/index.vue')
                },
            ]
        },

    ]
});

export default router;