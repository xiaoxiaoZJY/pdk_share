import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import echarts from './views/charts/echarts.vue'

import ClassifyManage from './views/product/ClassifyManage.vue'
import ProductDetails from './views/product/ProductDetails.vue'
import ProductProperty from './views/product/ProductProperty.vue'
import ClassifyProblem from './views/product/ClassifyProblem.vue'
import CustomerService from './views/product/CustomerService.vue'

import PurchaseOrder from './views/collect/PurchaseOrder.vue'
import SupplyOrder from './views/collect/SupplyOrder.vue'
import TagLibrary from './views/collect/TagLibrary.vue'

import RegularOrder from './views/order/RegularOrder.vue'
import ConsultOrder from './views/order/ConsultOrder.vue'

import ConsultantList from './views/consultant/ConsultantList.vue'

import MemberList from './views/member/MemberList.vue'
import MemberGrade from './views/member/MemberGrade.vue'

import CaseList from './views/case/CaseList.vue'

import AdvertiseList from './views/advertise/AdvertiseList.vue'

import TopicCenter from './views/topic/TopicCenter.vue'

import DistributionMember from './views/distribution/DistributionMember.vue'
import DistributionProduct from './views/distribution/DistributionProduct.vue'
import DistributionOrder from './views/distribution/DistributionOrder.vue'
import DistributionBill from './views/distribution/DistributionBill.vue'
import DistributionText from './views/distribution/DistributionText.vue'

import Coupon from './views/coupon/Coupon.vue'

import HelpContent from './views/help/HelpContent.vue'
import HelpColumn from './views/help/HelpColumn.vue'
import HelpAdvice from './views/help/HelpAdvice.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '首页',
        children: [
            { path: '/table', component: echarts, name: '数据可视化' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '产品',
        children: [
            { path: '/classify_manage', component: ClassifyManage, name: '分类管理' },
            { path: '/product_details', component: ProductDetails, name: '产品详细' },
            { path: '/classify_problem', component: ClassifyProblem, name: '常见问题' },
            { path: '/customer_service', component: CustomerService, name: '售后' },
            { path: '/product_property', component: ProductProperty, name: '产品属性' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '采集中心',
        children: [
            { path: '/purchase_order', component: PurchaseOrder, name: '采购订单' },
            { path: '/supply_order', component: SupplyOrder, name: '供应订单' },
            { path: '/tag_library', component: TagLibrary, name: '标签库' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '订单中心',
        children: [
            { path: '/regular_order', component: RegularOrder, name: '常规订单' },
            { path: '/consult_order', component: ConsultOrder, name: '咨询订单' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '顾问组',
        children: [
            { path: '/consultant_list', component: ConsultantList, name: '顾问列表' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '会员',
        children: [
            { path: '/member_list', component: MemberList, name: '会员列表' },
            { path: '/member_grade', component: MemberGrade, name: '会员等级' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '案例',
        children: [
            { path: '/case_list', component: CaseList, name: '案例列表' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '广告',
        children: [
            { path: '/advertise_list', component: AdvertiseList, name: '广告列表' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '专题',
        children: [
            { path: '/topic_center', component: TopicCenter, name: '专题中心' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '分销',
        children: [
            { path: '/distribution_member', component: DistributionMember, name: '分销会员' },
            { path: '/distribution_product', component: DistributionProduct, name: '分销产品' },
            { path: '/distribution_order', component: DistributionOrder, name: '分销订单' },
            { path: '/distribution_bill', component: DistributionBill, name: '分销账单' },
            { path: '/distribution_text', component: DistributionText, name: '分销文案' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '帮助',
        children: [
            { path: '/help_content', component: HelpContent, name: '帮助内容' },
            { path: '/help_column', component: HelpColumn, name: '帮助栏目' },
            { path: '/help_advice', component: HelpAdvice, name: '投诉与建议' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '优惠券',
        children: [
            { path: '/coupon_center', component: Coupon, name: '优惠券列表' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;