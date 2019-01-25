<template>
    <div class="indexPage">
        <header>
            <div class="indexTools">
                <div class="itembox">
                    <img src="../../assets/img/nav_img/nav_icon_power-off_default.png" alt="">
                </div>
                <div class="itembox">
                    <img src="../../assets/img/nav_img/nav_icon_control_default.png" alt="">
                </div>
                <div class="itembox" @click='gotowarn'>
                    <img src="../../assets/img/nav_img/nav_icon_alarm_default.png" alt="">
                </div>
                <div class="itembox">
                    <img src="../../assets/img/nav_img/nav_icon_help_default.png" alt="">
                </div>
            </div>
            <nav>
                <el-menu router :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="rgba(255,255,255,.7)" active-text-color="#FFFFFF">
                    <el-menu-item index="/setup">设置</el-menu-item>
                    <el-submenu index="/pt" :show-timeout='200' :hide-timeout='200'>
                        <template slot="title">编程与示教</template>
                        <el-menu-item index="/pt/graphical">图形化编程</el-menu-item>
                        <el-menu-item index="/pt/arl">ARL</el-menu-item>
                        <el-menu-item index="/pt/teaching">示教</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/actionrun">运行程序</el-menu-item>
                    <el-menu-item index="/moxibustion">艾灸</el-menu-item>
                </el-menu>
            </nav>
            <div class="proStop"></div>
        </header>
        <div class="mainView">
            <router-view />
        </div>
    </div>
</template>
<script src="./index.js">
</script>
<style scoped="scoped" src="./index.css" lang="css"></style>