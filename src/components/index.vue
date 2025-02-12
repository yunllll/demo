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
                    <div style="text-align: center;margin: 10px auto;">客户资质表</div>
                    <el-form style="max-width: 600px;margin: 0 auto;" ref="ruleFormRef" :rules="rules" :model="Form"
                        label-width="auto" :label-position="labelPosition" :size="size">
                        <el-form-item label="客户姓名" prop="name">
                            <el-input v-model="Form.name" placeholder="请输入客户姓名" />
                        </el-form-item>
                        <el-form-item label="客户电话" prop="phone">
                            <el-input v-model="Form.phone" placeholder="请输入客户的联系方式" />
                        </el-form-item>
                        <el-form-item label="客户邮箱">
                            <el-input v-model="Form.email" placeholder="请输入客户的邮箱 有的话" />
                        </el-form-item>
                        <el-form-item label="加入时间">
                            <el-col :span="11">
                                <el-date-picker v-model="Form.date1" type="date" aria-label="Pick a date"
                                    placeholder="Pick a date" style="width: 100%" />
                            </el-col>
                            <el-col class="text-center" :span="1" style="margin: 0 0.5rem">-</el-col>
                            <el-col :span="11">
                                <el-time-picker v-model="Form.date2" aria-label="Pick a time" placeholder="Pick a time"
                                    style="width: 100%" />
                            </el-col>
                        </el-form-item>
                        <el-form-item label="状态">
                            <el-checkbox-group v-model="Form.status">
                                <el-checkbox-button value="on" name="status">
                                    已上门
                                </el-checkbox-button>
                                <el-checkbox-button value="off" name="status">
                                    未上门
                                </el-checkbox-button>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="客户特征">
                            <el-checkbox-group v-model="Form.trait">
                                <el-checkbox label="0星：未核实到客户情况" value="" disabled />
                                <br />
                                <el-checkbox label="电话未接通" value="0_1" />
                                <el-checkbox label="空号" value="0_2" />
                                <el-checkbox label="停机" value="0_3" />
                                <el-checkbox label="无法接通" value="0_4" />
                                <el-checkbox label="通话中" value="0_5" />
                                <el-checkbox label="用户忙" value="0_6" />

                                <br />
                                <el-checkbox label="1星：资质不符" value="" disabled />

                                <br />
                                <el-checkbox label="不在本地工作，没有可贷点" value="1_1" />
                                <el-checkbox label="无任何资产" value="1_2" />

                                <br />
                                <el-checkbox label="2星：单一资质" value="" disabled />
                                <br />
                                <el-checkbox label="社保" value="2_1" />
                                <el-checkbox label="车" value="2_2" />
                                <el-checkbox label="外省按揭房" value="2_3" />
                                <el-checkbox label="本地三人及以上共有房" value="2_4" />
                                <el-checkbox label="保单" value="2_5" />

                                <br />
                                <el-checkbox label="2星+" value="" disabled />
                                <br />
                                <el-checkbox label="有住房公积金（公积金单边<600，双边<1200）" value="2_0_1" />

                                <br />
                                <el-checkbox label="3星" value="" disabled />
                                <br />
                                <el-checkbox label="有住房公积金（公积金单边≥600，双边≥1200）" value="3_1" />

                                <br />
                                <el-checkbox label="4星" value="" disabled />
                                <br />
                                <el-checkbox label="浙江省内按揭房（不包含杭州）（个人或夫妻共有，两人及以下共有" value="4_1" />
                                <br />
                                <el-checkbox label="5星" value="" disabled />
                                <br />
                                <el-checkbox label="杭州本地房（个人或夫妻共有，两人及以下共有房）（无论是全款，
                                按揭，抵押）" value="5_1" />
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">提交判断</el-button>
                            <el-button @click="resetForm">取消</el-button>
                        </el-form-item>
                        <el-rate v-model="Form.star" disabled text-color="#ff9900" />
                        <div style="color: #ff9900;">{{ Form.star }}星级客户！</div>
                    </el-form>

                    <el-table :data="users" style="width: 50% ;margin-top: 50px;" :row-class-name="tableRowClassName"
                        height="250">
                        <el-table-column prop="ranking" label="排名" width="180" />
                        <el-table-column prop="worker_name" label="员工名称" width="180" />
                        <el-table-column prop="get_m" label="已上门" />
                        <el-table-column prop="get_d" label="已签单" />
                    </el-table>
                    <el-table :data="filterTableData" style="width: 100%">
                        <el-table-column label="客户名" prop="name" />
                        <el-table-column label="客户资质" prop="star" />
                        <el-table-column label="添加日期" prop="date" />
                        <el-table-column label="上门状态" prop="status" />
                        <el-table-column label="情况" prop="trait" />
                        <el-table-column label="电话" prop="phone" />
                        <el-table-column align="right">
                            <template #header>
                                <el-input v-model="search" style="max-width: 600px" placeholder="查找客户"
                                    class="input-with-select">
                                    <template #prepend>
                                        <el-button :icon="Search" />
                                    </template>
                                </el-input>
                            </template>
                            <template #default="scope">
                                <el-button size="small" @click="onAddItem">
                                    添加
                                </el-button>
                                <el-button size="small" type="danger" @click.prevent="deleteRow(scope.$index)">
                                    删除
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div>
                        <h1>用户信息</h1>
                        <input v-model="tableData.id" placeholder="输入用户ID" />
                        <button @click="fetchUserData(tableData.id)">查询用户</button>
                        <div v-if="queryUserData.id">
                            <h2>用户信息</h2>
                            <p>姓名: <input v-model="tableData.name" /></p>
                            <p>电话: <input v-model="tableData.phone" /></p>
                            <p>日期: <input v-model="tableData.date" /></p>
                            <p>星级: <input v-model="tableData.star" /></p>
                            <p>状态: <input v-model="tableData.status" /></p>
                            <p>特征: <input v-model="tableData.trait" /></p>
                            <button @click="updateUserData(queryUserData.id)">更新用户</button>
                        </div>
                    </div>

                    <div style="text-align: center;width: 400px;">
                        <VueDataUi component="VueUiDonut" :config="config" :dataset="dataset" />
                    </div>
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
    <div>
        <h1>欢迎来到用户管理系统</h1>

        <!-- 根据用户角色显示不同的功能 -->
        <div v-if="userRole === 'admin'">
            <h2>管理员功能</h2>
            <button @click="accessAdmin">访问管理员页面</button>
            <div v-if="message">{{ message }}</div> <!-- 直接使用 message -->
        </div>

        <div v-else-if="userRole === 'accountant'">
            <h2>会计功能</h2>
            <p>这里是会计特有的功能。</p>
        </div>

        <div v-else>
            <h2>普通用户功能</h2>
            <p>这里是普通用户的功能。</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed, reactive } from 'vue'
import axios from "axios"
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    Message
} from '@element-plus/icons-vue';
import dataCard from '../components/data_card.vue'
import { Search } from '@element-plus/icons-vue'

const userRole = localStorage.getItem('userRole');
if (userRole === 'admin') {
    // 显示管理员特有的功能
} else if (userRole === 'accountant') {
    // 显示会计特有的功能
} else {
    // 显示普通用户功能
}

const message = ref(''); // 用于存储响应消息
const accessAdmin = async () => {
    try {
        const userRole = localStorage.getItem('userRole'); // 获取用户角色
        const response = await axios.get('http://localhost:3001/admin', {
            headers: {
                'X-User-Role': userRole // 将用户角色添加到请求头
            }
        });
        message.value = response.data; // 将响应数据存储到 message 中
        console.log(message.value);
    } catch (error) {
        console.error('请求失败:', error);
        message.value = '请求失败，无法访问管理员页面。'; // 确保这里是字符串
    }
};


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

const search = ref('')
const tableData = ref([]);
const queryUserData = ref([]);
const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/alluserdata');
        // 假设后端返回的数据格式与 tableData 结构一致
        tableData.value = response.data.map(item => ({
            id: item.id,
            date: item.date2,
            name: item.name,
            star: `${item.star}星`,
            status: item.status,
            phone: item.phone,
            trait: item.trait
        }));
    } catch (error) {
        console.error('获取数据失败:', error);
    }
};

const filterTableData = computed(() =>
    tableData.value.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)
const filterQueryUserData = computed(() =>
    queryUserData.value.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)

import dayjs from 'dayjs';
const now = new Date(); // 当前日期

const deleteRow = async (index) => {
    const userId = tableData.value[index].id; // 假设每个用户记录都有一个 id 字段

    try {
        await axios.delete(`http://localhost:3001/api/deleteuserdata/${userId}`);
        tableData.value.splice(index, 1); // 从本地数据中删除
    } catch (error) {
        console.error('删除失败:', error);
    }
};

const onAddItem = async () => {
    now.setDate(now.getDate() + 1);
    const newItem = {
        id: 888,
        date: dayjs(now).format('YYYY-MM-DD'),
        name: 'Tom',
        star: 4,
        status: 'on',
        trait: '佩奇',
        phone: '13165967980',
    };

    try {
        const response = await axios.post('http://localhost:3001/api/adduserdata', newItem);
        // 如果需要，可以将返回的用户 ID 添加到新记录中
        newItem.id = response.data.userId; // 假设后端返回新用户的 ID
        tableData.value.push(newItem);
    } catch (error) {
        console.error('添加失败:', error);
    }
};

const fetchUserData = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3001/api/userdata/${userId}`);
        const userData = response.data;
        // 将查询到的数据填充到表单中
        // 假设你有一个表单对象来存储用户数据
        queryUserData.value = {
            id: userData.id,
            date: userData.date1,
            name: userData.name,
            star: userData.star,
            status: userData.status,
            trait: userData.trait,
            phone: userData.phone,
        };
        console.log(queryUserData.value);
    } catch (error) {
        console.error('查询失败:', error);
    }
};

const updateUserData = async (userId) => {
    try {
        const response = await axios.put(`http://localhost:3001/api/updateuserdata/${userId}`, {
            name: tableData.value.name,
            phone: tableData.value.phone,
            date: tableData.value.date,
            star: tableData.value.star,
            status: tableData.value.status,
            trait: tableData.value.trait,
        });
        console.log('更新成功:', response.data);
        // 你可以在这里刷新数据或做其他处理
    } catch (error) {
        console.error('更新失败:', error);
    }
};

const size = ref('default'); // 默认大小
const labelPosition = ref('left'); // 默认标签位置
const ruleFormRef = ref();
const Form = reactive({
    name: '',
    phone: '',
    date1: '',
    date2: '',
    status: [],
    trait: [],
    star: 1
});

const rules = {
    name: [
        { required: true, message: '姓名为必填项', trigger: 'blur' },
    ],
    phone: [
        { required: true, message: '手机号为必填项', trigger: 'blur' },
        { pattern: /^[0-9]{11}$/, message: '手机号必须为11位数字', trigger: 'blur' },
    ],
    // 其他字段的校验规则...
};

const onSubmit = async () => {
    const formEl = ruleFormRef.value;
    if (!formEl) return;

    await formEl.validate(async (valid, fields) => {
        if (valid) {
            console.log('提交的表单数据:', Form);
            try {
                // 发送 POST 请求，将表单数据存储到数据库
                const response = await axios.post('http://localhost:3001/api/submit', Form);
                console.log('提交成功:', response.data);
            } catch (error) {
                console.error('提交失败:', error);
            }
        } else {
            console.log('表单校验失败:', fields);
        }
    });
};

const resetForm = () => {
    Object.keys(Form).forEach(key => {
        Form[key] = Array.isArray(Form[key]) ? [] : ''; // 重置数组为 []
    });
};
import { VueDataUi } from "vue-data-ui";
import "vue-data-ui/style.css"; // If you are using multiple components, place styles import in your main

const config = ref({
    type: 'polar',
    responsive: false,
    theme: '',
    customPalette: [],
    useCssAnimation: true,
    useBlurOnHover: true,
    userOptions: {
        show: true,
        showOnChartHover: false,
        keepStateOnChartLeave: true,
        position: 'right',
        buttons: {
            tooltip: true,
            pdf: true,
            csv: true,
            img: true,
            table: true,
            labels: true,
            fullscreen: true,
            sort: false,
            stack: false,
            animation: false,
            annotator: true
        },
        buttonTitles: {
            open: 'Open options',
            close: 'Close options',
            tooltip: 'Toggle tooltip',
            pdf: 'Download PDF',
            csv: 'Download CSV',
            img: 'Download PNG',
            table: 'Toggle table',
            labels: 'Toggle labels',
            fullscreen: 'Toggle fullscreen',
            annotator: 'Toggle annotator'
        }
    },
    translations: {
        total: 'Total',
        average: 'Average'
    },
    table: {
        show: false,
        responsiveBreakpoint: 400,
        th: {
            backgroundColor: '#FFFFFFff',
            color: '#1A1A1Aff',
            outline: 'none'
        },
        td: {
            backgroundColor: '#FFFFFFff',
            color: '#1A1A1Aff',
            outline: 'none',
            roundingValue: 0,
            roundingPercentage: 0
        },
        columnNames: {
            series: 'Series',
            value: 'Value',
            percentage: 'Percentage'
        }
    },
    style: {
        fontFamily: 'inherit',
        chart: {
            useGradient: true,
            gradientIntensity: '69',
            backgroundColor: '#efebebff',
            color: '#ccb3b3ff',
            layout: {
                labels: {
                    dataLabels: {
                        show: true,
                        useLabelSlots: false,
                        hideUnderValue: 3,
                        prefix: '',
                        suffix: ''
                    },
                    value: {
                        rounding: 0,
                        show: true,
                        formatter: null
                    },
                    percentage: {
                        color: '#56b3b2ff',
                        bold: true,
                        fontSize: 18,
                        rounding: 0,
                        formatter: null
                    },
                    name: {
                        color: '#3a3131ff',
                        bold: true,
                        fontSize: 14
                    },
                    hollow: {
                        show: true,
                        total: {
                            show: true,
                            bold: false,
                            fontSize: 18,
                            color: '#AAAAAAff',
                            text: 'Total',
                            offsetY: 0,
                            value: {
                                color: '#1A1A1Aff',
                                fontSize: 18,
                                bold: true,
                                suffix: '',
                                prefix: '',
                                offsetY: 0,
                                rounding: 0,
                                formatter: null
                            }
                        },
                        average: {
                            show: true,
                            bold: false,
                            fontSize: 18,
                            color: '#AAAAAAff',
                            text: 'Average',
                            offsetY: 0,
                            value: {
                                color: '#9f9999ff',
                                fontSize: 18,
                                bold: true,
                                suffix: '',
                                prefix: '',
                                offsetY: 0,
                                rounding: 0,
                                formatter: null
                            }
                        }
                    }
                },
                donut: {
                    strokeWidth: 55,
                    borderWidth: 1,
                    useShadow: false,
                    shadowColor: '#1A1A1A'
                }
            },
            comments: {
                show: true,
                showInTooltip: true,
                width: 100,
                offsetY: 0,
                offsetX: 0
            },
            legend: {
                show: true,
                bold: false,
                backgroundColor: '#FFFFFFff',
                color: '#847575ff',
                fontSize: 16,
                roundingValue: 0,
                roundingPercentage: 0
            },
            tooltip: {
                show: true,
                color: '#1A1A1Aff',
                backgroundColor: '#FFFFFFff',
                fontSize: 14,
                customFormat: null,
                borderRadius: 4,
                borderColor: '#e1e5e8',
                borderWidth: 1,
                backgroundOpacity: 30,
                position: 'center',
                offsetY: 24,
                showValue: true,
                showPercentage: true,
                roundingValue: 0,
                roundingPercentage: 0
            },
            title: {
                text: '重要程度',
                color: '#1A1A1Aff',
                fontSize: 20,
                bold: true,
                textAlign: 'center',
                paddingLeft: 0,
                paddingRight: 0,
                subtitle: {
                    color: '#A1A1A1ff',
                    text: '',
                    fontSize: 16,
                    bold: false
                }
            }
        }
    }
});

const dataset = ref([
    {
        name: '一星级客户',
        values: [
            25
        ],
        color: '#deedf7'
    },
    {
        name: '二星级客户',
        values: [
            25
        ],
        color: '#d7ca89'
    },
    {
        name: '三星级客户',
        values: [
            25
        ],
        color: '#0fff77'
    },
    {
        name: '四星级客户',
        values: [
            25
        ],
        color: '#6fbcec'
    },
    {
        name: '五星级客户',
        values: [
            25
        ],
        color: '#e83521'
    }
]);

// 在组件挂载时获取数据
onMounted(() => {
    fetchData();
});
</script>

<style lang="scss" scoped>
.el-radio-group {
    margin-right: 12px;
}

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