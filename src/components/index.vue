<template>
    <div class="common-layout">
        <el-container>
            <el-aside style="min-height: 100vh;" :width="asideWidth">
                <div class="aside"><img src="@/assets/avatar_img/bob.png" alt=""
                        style="width: 40px; height: 40px; border-radius: 50%;">
                    <transition name="el-fade-in">
                        <span class="logo-title" v-show="!isCollapse">帮忙贷</span>
                    </transition>
                </div>
                <el-menu active-text-color="#d3e0e2" background-color="#545c64" class="el-menu-vertical-demo" router
                    :default-active="$route.path" text-color="#cecece" @open="handleOpen" @close="handleClose"
                    style="border: none;" :collapse="isCollapse" :collapse-transition="false">
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <message />
                            </el-icon>
                            <span>首页</span>
                        </template>
                        <el-menu-item-group title="功能">
                            <el-menu-item index="/index" @click="addBreadcrumb('数据大屏', '/index')">数据大屏</el-menu-item>
                            <el-menu-item index="/1">待办事项</el-menu-item>
                            <el-menu-item index="/2">工作报告</el-menu-item>
                            <el-menu-item index="/3">个人账户</el-menu-item>
                            <el-menu-item index="/4">客户管理</el-menu-item>
                            <el-menu-item index="/5">业务中心</el-menu-item>
                            <el-menu-item index="/6">财务管理</el-menu-item>
                            <el-menu-item index="/7">贷后管理</el-menu-item>
                            <el-menu-item index="/4">消息中心</el-menu-item>
                            <el-menu-item index="/5">呼叫中心</el-menu-item>
                            <el-menu-item index="/6">查询中心</el-menu-item>
                            <el-menu-item index="/7">统计报表</el-menu-item>
                            <el-menu-item index="/6">配置中心</el-menu-item>
                            <el-menu-item index="/7">组织架构</el-menu-item>
                            <el-menu-item index="/6">日志管理</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header style="padding-left: 40px;padding-right: 40px;">
                    <el-breadcrumb :separator-icon="ArrowRight">
                        <el-breadcrumb-item :to="{ path: '/index' }"><el-icon @click="handleCollapse">
                                <Fold v-if="!isCollapse" />
                                <Expand v-else />
                            </el-icon><span style="margin-left: 10px;">首页</span></el-breadcrumb-item>
                        <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="index" :to="{ path: item.path }">
                            {{ item.label }}
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                    <el-dropdown placement="bottom-start" style="margin-left: auto;">
                        <el-button style="display: flex; align-items: center; justify-content: center;"><img
                                src="@/assets/avatar_img/angel.png" alt=""
                                style="width: 30px; height: 30px; border-radius: 50%;">管理员</el-button>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>个人信息</el-dropdown-item>
                                <el-dropdown-item>修改密码</el-dropdown-item>
                                <el-dropdown-item @click="Logout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </el-header>
                <el-main><el-descriptions class="margin-top" title="数据展示" :column="2" :size="small" :style="blockMargin"
                        border>
                        <template #extra>
                            <el-button type="primary">仅个人数据</el-button>
                            <el-button type="primary">部门数据</el-button>
                        </template>
                        <el-descriptions-item label="已上门数">999</el-descriptions-item>
                    </el-descriptions>
                    <el-table :data="users" style="width: 50% ;margin-top: 50px;" :row-class-name="tableRowClassName"
                        height="250">
                        <el-table-column prop="ranking" label="排名" width="180" />
                        <el-table-column prop="worker_name" label="员工名称" width="180" />
                        <el-table-column prop="get_m" label="已上门" />
                        <el-table-column prop="get_d" label="已签单" />
                    </el-table>
                    <div class="card">
                        <section class="landscape-section">
                            <div class="sky"></div>
                            <div class="sun"></div>
                            <div class="hill-1"></div>
                            <div class="hill-2"></div>
                            <div class="ocean">
                                <div class="reflection"></div>
                                <div class="reflection"></div>
                                <div class="reflection"></div>
                                <div class="reflection"></div>
                                <div class="reflection"></div>
                                <div class="shadow-hill-1"></div>
                                <div class="shadow-hill-2"></div>
                            </div>
                            <div class="hill-3"></div>
                            <div class="hill-4"></div>
                            <div class="tree-1">
                                <svg stroke-width="0.00064" stroke="#b77873" fill="#b77873" xml:space="preserve"
                                    viewBox="0 0 64.00 64.00" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.0">
                                    <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                                    <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M32,0C18.148,0,12,23.188,12,32c0,9.656,6.883,17.734,16,19.594V60c0,2.211,1.789,4,4,4s4-1.789,4-4v-8.406 C45.117,49.734,52,41.656,52,32C52,22.891,46.051,0,32,0z"
                                            fill="#b77873"></path>
                                    </g>
                                </svg>
                            </div>
                            <div class="tree-2">
                                <svg stroke-width="0.00064" stroke="#b77873" fill="#b77873" xml:space="preserve"
                                    viewBox="0 0 64.00 64.00" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.0">
                                    <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                                    <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M32,0C18.148,0,12,23.188,12,32c0,9.656,6.883,17.734,16,19.594V60c0,2.211,1.789,4,4,4s4-1.789,4-4v-8.406 C45.117,49.734,52,41.656,52,32C52,22.891,46.051,0,32,0z"
                                            fill="#b77873"></path>
                                    </g>
                                </svg>
                            </div>
                            <div class="tree-3">
                                <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64.00 64.00"
                                    xml:space="preserve" fill="#a16773" stroke="#a16773" stroke-width="0.00064">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path fill="#a16773"
                                            d="M32,0C18.148,0,12,23.188,12,32c0,9.656,6.883,17.734,16,19.594V60c0,2.211,1.789,4,4,4s4-1.789,4-4v-8.406 C45.117,49.734,52,41.656,52,32C52,22.891,46.051,0,32,0z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <div class="filter"></div>
                        </section>

                        <section class="content-section">
                            <div class="weather-info">
                                <div class="left-side">
                                    <div class="icon">
                                        <svg stroke="#000000" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24">
                                            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                                            <g stroke-linejoin="round" stroke-linecap="round"
                                                id="SVGRepo_tracerCarrier"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path stroke-linecap="round" stroke-width="1.5" stroke="#ffffff"
                                                    d="M22 14.3529C22 17.4717 19.4416 20 16.2857 20H11M14.381 9.02721C14.9767 8.81911 15.6178 8.70588 16.2857 8.70588C16.9404 8.70588 17.5693 8.81468 18.1551 9.01498M7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H7M7.11616 11.6089C6.88706 10.9978 6.7619 10.3369 6.7619 9.64706C6.7619 6.52827 9.32028 4 12.4762 4C15.4159 4 17.8371 6.19371 18.1551 9.01498M7.11616 11.6089C7.68059 11.7184 8.20528 11.9374 8.66667 12.2426M18.1551 9.01498C18.8381 9.24853 19.4623 9.60648 20 10.0614">
                                                </path>
                                            </g>
                                        </svg>
                                    </div>
                                    <p>Cloudy</p>
                                </div>
                                <div class="right-side">
                                    <div class="location">
                                        <div>
                                            <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px"
                                                viewBox="0 0 64 64" xml:space="preserve" fill="#ffffff"
                                                stroke="#ffffff">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path fill="#ffffff"
                                                        d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z">
                                                    </path>
                                                </g>
                                            </svg>
                                            <span>Spain</span>
                                        </div>
                                    </div>
                                    <p>Monday, 4th May</p>
                                    <p class="temperature">24°C</p>
                                </div>
                            </div>
                            <div class="forecast">
                                <div>
                                    <p>Tuesday, 5th May</p>
                                    <p>24°C</p>
                                </div>
                                <div class="separator"></div>
                                <div>
                                    <p>Wednesday, 6th May</p>
                                    <p>26°C</p>
                                </div>
                                <div class="separator"></div>
                                <div>
                                    <p>Thursday, 7th May</p>
                                    <p>22°C</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <!-- 头像                     -->
                    <!-- <div class="card">
                            <div class="card_load"></div>
                            <div class="card_load_extreme_title"></div>
                            <div class="card_load_extreme_descripion"></div>
                        </div> -->
                </el-main>
                <el-footer>Footer</el-footer>
                <dataCard></dataCard>
            </el-container>
        </el-container>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from "axios"
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    Message
} from '@element-plus/icons-vue';
import dataCard from '../components/data_card.vue'
// 使用 ref 创建响应式数据
const users = ref([]);

let isCollapse = ref(true);
let asideWidth = ref('64px'); // 也将 asideWidth 转换为响应式变量
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath);
};
// 切换折叠状态的处理函数
const handleCollapse = () => {
    isCollapse.value = !isCollapse.value; // 使用 .value 来访问和修改
    asideWidth.value = isCollapse.value ? '64px' : '200px'; // 同样使用 .value
};
const handleClose = (key, keyPath) => {
    console.log(key, keyPath);
};


const tableRowClassName = ({ row, rowIndex }) => {
    if (rowIndex === 1) {
        return 'warning-row';
    } else if (rowIndex === 3) {
        return 'success-row';
    }
    return '';
}

const breadcrumbs = ref([]); // 创建响应式数组来存储面包屑项

const addBreadcrumb = (label, path) => {
    // 清空面包屑数组，确保只有当前项
    breadcrumbs.value = [];
    breadcrumbs.value.push({ label, path }); // 添加新的面包屑项
};
</script>

<style lang="scss" scoped>
.aside {
    height: 60px;
    line-height: 60px;
    background-color: #8c939d;
    color: #d3e0e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
}

item:hover,
el-submenu__title:hover {
    color: #fff !important;
}

.el-submenu__title:hover i {
    color: #fff !important;
}

.el-menu-item.is-active {
    background-color: #5ab9f0 !important;
    border-radius: 5px !important;
}

.el-aside {
    transition: width 0.4s;
    box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
}

.logo-title {
    margin-left: 5px;
    font-size: 14px;
    transition: all 0.4s;
}

.el-header {
    box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
    display: flex;
    align-items: center;
}

.el-descriptions {
    margin-top: 20px;
}

.cell-item {
    display: flex;
    align-items: center;
}

.margin-top {
    margin-top: 20px;
}

.el-table .warning-row {
    --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

.el-table .success-row {
    --el-table-tr-bg-color: var(--el-color-success-light-9);
}

/* From Uiverse.io by KSAplay */
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 220px;
    height: 350px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 12px 12px 0px rgba(0, 0, 0, 0.1);
    background-color: white;
}

/* Landscape section */
.landscape-section {
    position: relative;
    width: 100%;
    height: 70%;
    overflow: hidden;
}

.landscape-section * {
    position: absolute;
}

.sky {
    width: 100%;
    height: 100%;
    background: rgb(247, 225, 87);
    background: linear-gradient(0deg,
            rgba(247, 225, 87, 1) 0%,
            rgba(233, 101, 148, 1) 100%);
}

.sun {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: white;
    bottom: 40%;
    left: 23%;
    filter: drop-shadow(0px 0px 10px white);
}

.sun::after {
    position: absolute;
    content: "";
    width: 118%;
    height: 118%;
    border-radius: 50%;
    background-color: white;
    opacity: 0.5;
}

.sun::before {
    position: absolute;
    content: "";
    width: 134%;
    height: 134%;
    border-radius: 50%;
    background-color: white;
    opacity: 0.1;
}

.ocean {
    overflow: hidden;
    bottom: 0;
    width: 100%;
    height: 28%;
    background: rgb(241, 192, 125);
    background: linear-gradient(0deg,
            rgba(241, 192, 125, 1) 0%,
            rgba(247, 218, 150, 1) 100%);
}

.reflection {
    position: absolute;
    background-color: white;
    opacity: 0.5;
    z-index: 1;
}

.reflection:nth-child(1) {
    width: 40px;
    height: 10px;
    clip-path: polygon(0% 0%, 100% 0%, 50% 20%);
    top: 5%;
    left: 32%;
}

.reflection:nth-child(2) {
    width: 80px;
    height: 15px;
    clip-path: polygon(0% 0%, 100% 0%, 60% 20%, 40% 20%);
    top: 15%;
    left: 39%;
}

.reflection:nth-child(3) {
    width: 60px;
    height: 2px;
    clip-path: polygon(0% 50%, 40% 0%, 60% 0%, 100% 50%, 60% 100%, 40% 100%);
    top: 27%;
    right: 15%;
}

.reflection:nth-child(4) {
    width: 70px;
    height: 2px;
    clip-path: polygon(0% 50%, 40% 0%, 60% 0%, 100% 50%, 60% 100%, 40% 100%);
    top: 37%;
    right: 28%;
}

.reflection:nth-child(5) {
    width: 70px;
    height: 3px;
    clip-path: polygon(0% 50%, 40% 0%, 60% 0%, 100% 50%, 60% 100%, 40% 100%);
    top: 46%;
    right: 8%;
}

.hill-1 {
    right: -25%;
    bottom: 20%;
    width: 150px;
    height: 40px;
    border-radius: 50%;
    background-color: #e6b29d;
}

.shadow-hill-1 {
    right: -25%;
    top: -30%;
    width: 150px;
    height: 40px;
    border-radius: 50%;
    background-color: #f1c7a0;
    opacity: 1;
}

.hill-2 {
    right: -36%;
    bottom: 10%;
    width: 150px;
    height: 80px;
    border-radius: 50%;
    background-color: #c29182;
}

.shadow-hill-2 {
    right: -36%;
    top: -65%;
    width: 150px;
    height: 80px;
    border-radius: 50%;
    background-color: #e5bb96;
    opacity: 1;
}

.hill-3 {
    left: -100%;
    bottom: -28%;
    width: 350px;
    height: 150px;
    border-radius: 50%;
    background-color: #b77873;
    z-index: 3;
}

.tree-1 {
    bottom: 20%;
    left: 3%;
    width: 50px;
    height: 70px;
    z-index: 3;
}

.tree-2 {
    bottom: 14%;
    left: 25%;
    width: 50px;
    height: 70px;
    z-index: 3;
}

.hill-4 {
    right: -100%;
    bottom: -40%;
    width: 350px;
    height: 150px;
    border-radius: 50%;
    background-color: #a16773;
    z-index: 3;
}

.tree-3 {
    bottom: 10%;
    right: 1%;
    width: 65px;
    height: 80px;
    z-index: 3;
}

.filter {
    height: 100%;
    width: 100%;
    background: linear-gradient(0deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 40%);
    z-index: 5;
    opacity: 0.2;
}

/* Content section */
.content-section {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.weather-info {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    text-align: center;
    top: 0;
    right: 0%;
    width: 100%;
    padding-top: 15px;
    color: white;
    z-index: 10;
}

.weather-info .left-side:not(.icon) {
    width: 20%;
    font-size: 11pt;
    font-weight: 600;
    align-self: baseline;
}

.icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon svg {
    width: 40px;
}

.weather-info .right-side {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.weather-info .right-side p:nth-child(2) {
    font-size: 9pt;
    margin: 0;
    padding: 0;
}

.weather-info .location span {
    font-size: 11pt;
    font-weight: 700;
    text-transform: uppercase;
}

.location {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: 0;
    margin: 0;
}

.location svg {
    width: 14px;
    height: auto;
}

.temperature {
    font-size: 20pt;
    font-weight: 700;
    line-height: 30px;
}

.forecast {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    padding: 10px 25px;
}

.forecast>div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: lightslategray;
    font-size: 9pt;
}

.separator {
    width: 100%;
    height: 2px;
    background-color: rgb(233, 233, 233);
    border-radius: 1px;
}
</style>