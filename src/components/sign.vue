<template>
    <div
        style="height: 100vh; overflow: hidden;display: flex;justify-content: center;align-items: center;background-color: #cecece;">
        <div style="display: flex;background-color: white;width: 50%;border-radius: 5px;overflow: hidden;">
            <div style="flex: 1;">
                <img src="@/assets/AnKe.jpg" alt="" style="width: 100%;">
            </div>
            <div style="flex: 1;display: flex;align-items: center;justify-content: center;">
                <el-form :model="user" style="width: 80%;position: relative;">
                    <div style="font-size: 20px; font-weight: bold;margin-bottom: 20px;">欢迎注册帮忙贷</div>
                    <el-form-item prop="username">
                        <el-input size="medium" placeholder="账号名" v-model="user.username">
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
                    <el-form-item prop="confirmPassword">
                        <el-input size="medium" placeholder="再次输入密码" v-model="user.confirmPassword" show-password>
                            <template #prefix>
                                <el-icon>
                                    <Lock />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="width: 100%;" @click="register">注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import axios from 'axios'; // 引入 axios
import { useRouter } from 'vue-router';

const $router = useRouter();

const user = reactive({
    username: '',
    password: '',
    confirmPassword: ''
});

// 注册
const register = async () => {
    // 检查用户名和密码是否为空
    if (!user.username || !user.password || !user.confirmPassword) {
        ElMessage.warning('请先输入账号和密码');
        return; // 终止函数执行
    }

    // 检查密码是否一致
    if (user.password !== user.confirmPassword) {
        ElMessage.warning('两次输入的密码不一致');
        return;
    }

    // 检查密码复杂性
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordPattern.test(user.password)) {
        ElMessage.warning('密码必须包含大小写字母、数字，并且至少6位');
        return;
    }

    try {
        const response = await axios.post('http://localhost:3001/api/register', {
            username: user.username,
            password: user.password
        });

        // 注册成功，显示消息
        ElMessage.success(response.data.message);
        // 重定向到登录页面
        $router.push('/login');
    } catch (error) {
        if (error.response) {
            // 处理错误响应
            ElMessage.error(error.response.data.message);
        } else {
            ElMessage.error('注册失败，请重试');
        }
    }
};

</script>

<style lang="scss" scoped></style>
