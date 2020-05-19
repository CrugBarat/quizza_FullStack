import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';
import NewGame from '@/views/NewGame.vue';
import Classic from '@/views/Classic.vue';
import Seek from '@/views/Seek.vue';
import Mental from '@/views/Mental.vue';
import HallOfFame from '@/views/HallOfFame';
import Warning from '@/views/Warning';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes:[
    {
      path: '',
      name:'home',
      component: Home
    },
    {
      path: '/newgame',
      name:'newgame',
      component: NewGame,
      props: true
    },
    {
      path: '/classic',
      name:'classic',
      component: Classic,
      props: true
    },
    {
      path: '/seek',
      name:'seek',
      component: Seek,
      props: true
    },
    {
      path: '/mental',
      name:'mental',
      component: Mental,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      props: true
    },
    {
      path: '/halloffame',
      name: 'halloffame',
      component: HallOfFame,
      props: true
    },
    {
      path: '/warning',
      name:'warning',
      component: Warning,
      props: true
    }
  ]
});


export default router;
