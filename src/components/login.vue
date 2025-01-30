<template>
    <div
        style="height: 100vh; overflow: hidden;display: flex;justify-content: center;align-items: center;background-color: #cecece;">
        <div style="display: flex;background-color: white;width: 50%;border-radius: 5px;overflow: hidden;">
            <div style="flex: 1;">
                <img src="@/assets/logo.png" alt="" style="width: 100%;">
            </div>
            <div style="flex: 1;display: flex;align-items: center;justify-content: center;">
                <el-form :model="user" style="width: 80%;position: relative;">
                    <div style="font-size: 20px; font-weight: bold;margin-bottom: 20px;">欢迎登录帮忙贷</div>
                    <el-form-item prop="username">
                        <el-input size="medium" placeholder="请输入账号" v-model="user.username">
                            <template #prefix>
                                <el-icon>
                                    <User />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input size="medium" placeholder="请输入密码" v-model="user.password" show-password>
                            <template #prefix>
                                <el-icon>
                                    <Lock />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="width: 100%;" @click="login">登录</el-button>
                        <Vcode :show="isShow" @success="handleSuccess" @close="close" @fail="fail" :imgs="[Img]"></Vcode>
                    </el-form-item>
                    <el-form-item>
                        <div style="display: flex;justify-content: space-between;width: 100%;">
                            <div>还没有账号？请 <router-link to="/sign" style="color: #0f9876; cursor: pointer;">注册</router-link></div>
                            <div><span style="color: #0f9876;cursor: pointer;"@click="forget">忘记密码</span></div>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import axios from 'axios'; // 引入 axios

// 自定义背景图
import Img from '@/assets/avatar_img/pikaqiu.png';
import Vcode from 'vue3-puzzle-vcode';

const user = reactive({
    username: '',
    password: ''
});

const isShow = ref(false);
const $router = useRouter();

// 登录
const login = async () => {
    // 检查用户名和密码是否为空
    if (!user.username || !user.password) {
        ElMessage.warning('请先输入账号和密码');
        return; // 终止函数执行
    }

    isShow.value = true; // 显示验证码
    console.log(user);
    try {
        const response = await axios.post('http://localhost:3001/api/login', {
            username: user.username,
            password: user.password
        });

        // 登录成功，显示消息
        ElMessage.success(response.data.message);
    } catch (error) {
        if (error.response) {
            // 处理错误响应
            ElMessage.error(error.response.data.message);
            isShow.value = false;
        } else {
            ElMessage.error('登录失败，请重试');
        }
    }
};

// 用户通过了验证
const handleSuccess = (msg) => {
    isShow.value = false; // 隐藏验证码模态框
    console.log('验证通过: ' + msg);
    // 跳转到首页
    $router.push('/index');
};

// 用户点击遮罩层，关闭模态框
const close = () => {
    isShow.value = false;
};

// 用户验证失败
const fail = () => {
    console.log('验证失败');
};

const forget = () => {
    ElMessage.info('联系后台获取！');
}

</script>

<style lang="scss" scoped></style>
