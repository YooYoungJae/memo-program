import Vue from 'vue'
import Router from 'vue-router'
import MyInfo from '@/view/home/MyInfo/MyInfo'
import IdeaBox from '@/view/home/IdeaBox/IdeaBox'
import WhoPay from '@/view/home/whoPay/WhoPay'
import SelectFoods from '@/view/home/selectFoods/SelectFoods'
import MyMemo from '@/view/home/myMemo/MyMemo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'myMemo',
      component: MyMemo
    },
    {
      path: '/MyInfo',
      name: 'MyInfo',
      component: MyInfo
    },
    {
      path: '/IdeaBox',
      name: 'IdeaBox',
      component: IdeaBox
    },
    {
      path: '/whoPay',
      name: 'whoPay',
      component: WhoPay
    },
    {
      path: '/selectFoods',
      name: 'selectFoods',
      component: SelectFoods
    },
  ]
})
