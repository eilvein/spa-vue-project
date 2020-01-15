import Vue from 'vue'
import 'ant-design-vue/dist/antd.css'
import { Pagination, Row, Col, Button, message } from 'ant-design-vue'

Vue.component(Pagination.name, Pagination)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Button.name, Button)

message.config({
    top: `100px`,
    duration: 2,
    maxCount: 3
})

Vue.prototype.$Message = message
