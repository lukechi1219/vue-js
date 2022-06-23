import Vue from 'vue'
import App from './App.vue'
import router from "./router";

export class MfeVue extends HTMLElement {
	connectedCallback() {

		// new Vue(App).mount(this)

		let currentUrl = window.location.pathname;
		console.log(currentUrl);

		if (currentUrl && currentUrl.startsWith('/vue')) {

			let currentRoute = router.currentRoute;
			console.log(currentRoute.path);

			if (currentRoute && currentRoute.path !== currentUrl) {

				router.push(currentUrl).then((route) => {
					console.log(route);
				});
			}
		} else {
			router.push('/vue');
		}

		new Vue({
			router,
			render: (h) => h(App)
		}).$mount(this)
	}
}

customElements.define('vue-element', MfeVue);
