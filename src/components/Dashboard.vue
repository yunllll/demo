<template>
  <div class="dashboard">
    <Header />
    <div class="content">
      <Sidebar />
      <div class="main">
        <div class="cards">
          <div class="card">数据展示</div>
          <div class="card">重要程度</div>
          <div class="card">客户状态</div>
        </div>
        <div class="charts">
          <div class="chart">图表1</div>
          <div class="chart">图表2</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';

export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
}
.content {
  display: flex;
}
.main {
  flex: 1;
  padding: 20px;
}
.cards {
  display: flex;
  justify-content: space-between;
}
.card {
  background: #f0f0f0;
  padding: 20px;
  margin: 10px;
  flex: 1;
}
.charts {
  display: flex;
  margin-top: 20px;
}
.chart {
  background: #e0e0e0;
  padding: 20px;
  margin: 10px;
  flex: 1;
}
</style>