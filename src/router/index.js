import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Layout from '@/components/basic/layout'
import Icon from '@/components/basic/icon'
import Button from '@/components/basic/button'

import Radio from '@/components/form/radio'
import Checkbox from '@/components/form/checkbox'
import Input from '@/components/form/input'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/icon',
      name: 'Icon',
      component: Icon
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: Checkbox
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    }
  ]
})
