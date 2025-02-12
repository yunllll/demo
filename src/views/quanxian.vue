<template>
    <el-container>
        <el-header>
            <h1>权限管理</h1>
        </el-header>

        <el-main>
            <el-table :data="permissions" style="width: 100%">
                <el-table-column prop="action" label="操作"></el-table-column>
                <el-table-column prop="admin" label="管理员" align="center">
                    <template #default="scope">
                        <el-checkbox v-model="scope.row.admin" disabled></el-checkbox>
                    </template>
                </el-table-column>
                <el-table-column prop="accountant" label="会计" align="center">
                    <template #default="scope">
                        <el-checkbox v-model="scope.row.accountant" disabled></el-checkbox>
                    </template>
                </el-table-column>
                <el-table-column prop="user" label="普通用户" align="center">
                    <template #default="scope">
                        <el-checkbox v-model="scope.row.user" disabled></el-checkbox>
                    </template>
                </el-table-column>
            </el-table>

            <h2>搜索</h2>
            <el-form :inline="true" :model="searchCriteria">
                <el-form-item label="关键词">
                    <el-input v-model="searchCriteria.keyword" placeholder="输入关键词"></el-input>
                </el-form-item>
                <el-form-item label="日期">
                    <el-date-picker v-model="searchCriteria.date" type="daterange" placeholder="选择日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="金额范围">
                    <el-input-number v-model="searchCriteria.minAmount" placeholder="最小金额"></el-input-number>
                    <el-input-number v-model="searchCriteria.maxAmount" placeholder="最大金额"></el-input-number>
                </el-form-item>
                <el-form-item label="账目类型">
                    <el-select v-model="searchCriteria.accountType" placeholder="选择类型">
                        <el-option label="类型1" value="type1"></el-option>
                        <el-option label="类型2" value="type2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search">搜索</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
</template>

<script setup>
import { ref } from 'vue';
import { ElContainer, ElHeader, ElMain, ElTable, ElTableColumn, ElCheckbox, ElForm, ElFormItem, ElInput, ElDatePicker, ElInputNumber, ElSelect, ElOption, ElButton } from 'element-plus';

const permissions = ref([
    { action: '添加条目', admin: true, accountant: true, user: false },
    { action: '删除条目', admin: true, accountant: false, user: false },
    { action: '查询条目', admin: true, accountant: true, user: true },
    { action: '修改条目', admin: true, accountant: true, user: false },
    { action: '权限更改', admin: true, accountant: false, user: false },
    { action: '条目更改审核', admin: true, accountant: false, user: false },
]);

const searchCriteria = ref({
    keyword: '',
    date: [],
    minAmount: null,
    maxAmount: null,
    accountType: '',
});

function search() {
    console.log('搜索条件:', searchCriteria.value);
}
</script>

<style>
.el-header {
    background-color: #f5f5f5;
    padding: 20px;
}
</style>