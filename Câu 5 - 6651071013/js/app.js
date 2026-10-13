// Create the Vue 3 app and mount it to <div id="app">.
const { createApp } = Vue;

createApp({
  data() {
    return {
      tuKhoa: '',
      cart: [],
      products: [
        { id: 1, ten: 'Electric Blue Phone Case', anh: '../images/blue-case.svg', gia: 250000, moTa: 'Soft silicone with shock protection' },
        { id: 2, ten: 'Clear Phone Case', anh: '../images/clear-case.svg', gia: 180000, moTa: 'Anti-yellowing, slim fit' },
        { id: 3, ten: 'Matte Black Phone Case', anh: '../images/black-case.svg', gia: 220000, moTa: 'Fingerprint-resistant, non-slip grip' },
        { id: 4, ten: 'Pastel Pink Phone Case', anh: '../images/pink-case.svg', gia: 230000, moTa: 'Raised camera edge for lens protection' },
        { id: 5, ten: 'Wireless Charging Pad', anh: '../images/wireless-charger.svg', gia: 350000, moTa: '15W Qi fast charging' },
        { id: 6, ten: 'TWS Active Earbuds', anh: '../images/wireless-earbuds.svg', gia: 690000, moTa: 'Bluetooth 5.3, 24-hour battery life' },
        { id: 7, ten: 'USB-C Charging Cable', anh: '../images/usb-c-cable.svg', gia: 120000, moTa: 'Braided 1 m cable with fast charging' },
        { id: 8, ten: '10,000 mAh Power Bank', anh: '../images/power-bank.svg', gia: 450000, moTa: 'Compact design with two output ports' }
      ]
    };
  },

  computed: {
    cartCount() { return this.cart.length; },
    tongTien() { return this.cart.reduce((tong, sp) => tong + sp.gia, 0); },
    danhSachLoc() {
      const k = this.tuKhoa.trim().toLowerCase();
      return this.products.filter(sp => sp.ten.toLowerCase().includes(k));
    }
  },

  methods: {
    themVaoGio(sanPham) { this.cart.push(sanPham); },
    xoaKhoiGio(index) { this.cart.splice(index, 1); },
    dinhDangGia(so) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'VND',
        maximumFractionDigits: 0
      }).format(so);
    }
  }
}).mount('#app');
