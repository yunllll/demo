<template>
  <div class="home">
    <h2 class="title">每日膳食建议表格</h2>
    <table class="meal-table">
      <thead>
        <tr>
          <th width="20%">早餐</th>
          <th width="15%">建议量</th>
          <th width="20%">午餐</th>
          <th width="15%">建议量</th>
          <th width="20%">晚餐</th>
          <th width="15%">建议量</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>全麦面包</td>
          <td>2片</td>
          <td rowspan="3">米饭</td>
          <td rowspan="3">1碗</td>
          <td>肉肉</td>
          <td>100克</td>
        </tr>
        <tr>
          <td>鸡蛋</td>
          <td>1个</td>
          <td>蔬菜</td>
          <td>200克</td>
        </tr>
        <tr>
          <td>水果</td>
          <td>1份</td>
          <td>豆腐</td>
          <td>100克</td>
        </tr>
        <tr class="note">
          <td colspan="2">小贴士：多喝水，保持身体健康</td>
          <td>燕麦粥</td>
          <td>1碗</td>
          <td>水果</td>
          <td>1份</td>
        </tr>
        <tr class="note">
          <td colspan="8"><a href="your-link-here" style="color: #ceceec; text-decoration: none;">查看菜谱</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.home {
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.meal-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
}

.meal-table th,
.meal-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

.meal-table th {
  background-color: #f0f8ff;
}

.note {
  background-color: #fff8dc;
}

.note td {
  font-size: 0.9em;
  color: #666;
}
</style>
