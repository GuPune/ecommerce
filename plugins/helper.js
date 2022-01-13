import Vue from 'vue'
const moment = require('moment')

Vue.mixin({

  methods:{
    handleCatch(error){



if(error.response.status === 401){
  
  localStorage.removeItem("shipping");
  localStorage.removeItem("listorder");
  localStorage.removeItem("delivery");
  localStorage.removeItem("cart");
  this.$auth.logout()
}
    },
    formatPrice(value) {
      if(value){
        return parseFloat(value).toFixed(0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      }
      return 0
    },
    makeQueryString(data){
      let queryString = []

      _.each(data, (value, key) => {
        queryString.push(key + '=' + value)
      })

      queryString = _.join(queryString, '&')

      return queryString
    },
    transactionType(type, transactionType){
      if(transactionType === 'voucher'){
        return 'ใช้คูปอง'
      }
      if(transactionType === 'point'){
        if(type === '0'){
          return 'ใช้คะแนน'
        }else{
          return 'รับคะแนน'
        }
      }
      if(transactionType === 'credit'){
        if(type === '0'){
          return 'ใช้เครดิต'
        }else{
          return 'เติมเครดิต'
        }
      }
    }
  },
  filters: {
    moment(value, format) {
      if(value){
        return moment(value).format(format)
      }
      return ''
    },
    limitString(value, max = 200, format = ' ...') {
      if (value !== null || value !== undefined) {
        if (value.length > max) {
          return value.substr(0, max - 1) + format
        }
      }
      return value
    },
    formatPrice(value) {
      if(value){
        return parseFloat(value).toFixed(0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      }
      return 0
    },
    formatPriceAndTextVoucher(value) {
      if(value){
        if(value === 'voucher'){
          return 'voucher'
        }
        return parseFloat(value).toFixed(0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      }
      return 0
    }
  }
})
