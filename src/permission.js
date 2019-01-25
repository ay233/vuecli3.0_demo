import router from './router';
import store from './store';
import NProgress from 'nprogress' ;// Progress 进度条
import 'nprogress/nprogress.css';// Progress 进度条样式
import { Message } from 'element-ui';
// import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/login']; // 不重定向白名单
router.beforeEach((to, from, next) => {
	window.document.title = to.meta.title;
    NProgress.start();
    next();
})

router.afterEach(() => {
    NProgress.done(); // 结束Progress
});
