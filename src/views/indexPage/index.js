// import axios from "@/axios.js"
// import bus from "@/bus.js";

export default {
    data() {
        return {
            activeIndex: '/actionrun',// 激活的菜单
            isCollapse: true
        };
    },
    props: [], //获取组件外数据

    created() { //实例挂载之前	
    },
    mounted() { //实例挂载之后
        console.log('zepto已加载',$('body'));
    },
    methods: { //方法
        handleSelect(key, keyPath) { //选择的菜单
            
        },
        gotowarn(){
        	this.$router.push({
                path: 'warning',
                name: '警告',
                meta: {
                    title: '警告'
                },
        	});
        }
    },
    watch: { //监听
        $route(to, from) { // 对路由变化作出响应...

        },
    },
    computed: {

    }
}