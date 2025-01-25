<!-- <template>
    <div>
      <h1>房贷计算器</h1>
      <form @submit.prevent="calculateLoan">
        <div class="form-group">
          <label for="amount">贷款金额（元）：</label>
          <input type="number" id="amount" v-model="amount" required>
        </div>
        <div class="form-group">
          <label for="interest">年利率（%）：</label>
          <input type="number" step="0.01" id="interest" v-model="interest" required>
        </div>
        <div class="form-group">
          <label for="years">贷款期限（年）：</label>
          <input type="number" id="years" v-model="years" required>
        </div>
        <button type="submit" class="submit-button">计算</button>
      </form>
      <div class="result" v-if="monthlyPayment !== null">
        每月还款金额：{{ monthlyPayment.toFixed(2) }} 元
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // 定义响应式数据
  const amount = ref(0);
  const interest = ref(0);
  const years = ref(0);
  const monthlyPayment = ref(null);
  
  // 计算贷款
  const calculateLoan = () => {
    const monthlyInterest = interest.value / 100 / 12;
    const totalMonths = years.value * 12;
  
    // 计算每月还款金额
    const x = Math.pow(1 + monthlyInterest, totalMonths);
    monthlyPayment.value = (amount.value * monthlyInterest * x) / (x - 1);
  };
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
    margin: 20px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .submit-button {
    background-color: green;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  .result {
    margin-top: 20px;
    font-size: 18px;
  }
  </style>
   -->
   <template>
    <div>
      <h1>商品列表</h1>
      <div class="product" v-for="product in products" :key="product.name">
        <h2>{{ product.name }}</h2>
        <p>￥{{ product.price }}</p>
        <button @click="addToCart(product.name, product.price)">加入购物车</button>
      </div>
  
      <div class="cart">
        <h1>购物车</h1>
        <div id="cart-items">
          <div class="cart-item" v-for="(item, name) in cart" :key="name">
            {{ name }}：￥{{ item.price.toFixed(2) }} × {{ item.quantity }}
          </div>
        </div>
        <div class="total" id="total-price">总价：￥{{ totalPrice.toFixed(2) }}</div>
        <button class="checkout-button" @click="checkout">结账</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  // 商品列表
  const products = ref([
    { name: '商品A', price: 100 },
    { name: '商品B', price: 200 }
  ]);
  
  // 购物车
  const cart = ref({});
  
  // 添加商品到购物车
  const addToCart = (name, price) => {
    if (cart.value[name]) {
      cart.value[name].quantity += 1;
    } else {
      cart.value[name] = { price: price, quantity: 1 };
    }
  };
  
  // 计算总价
  const totalPrice = computed(() => {
    let total = 0;
    for (const item in cart.value) {
      total += cart.value[item].price * cart.value[item].quantity;
    }
    return total;
  });
  
  // 结账
  const checkout = () => {
    alert('结账成功');
  };
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
    margin: 20px;
  }
  .product {
    display: inline-block;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
  }
  .cart {
    margin-top: 20px;
  }
  .cart-item {
    margin: 5px 0;
  }
  .total {
    font-weight: bold;
  }
  .checkout-button {
    background-color: green;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  </style>
  