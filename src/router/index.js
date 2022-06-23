import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import demo1 from "../components/demo1.vue";

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: "/vue",
			name: "index",
			component: HelloWorld,
		},
		{
			path: "/vue/demo1",
			name: "demo1",
			component: demo1
		}
	]
});
