import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/index",
            name: "index",
            component: resolve => require(["@/pages/index"], resolve),
            meta: {
                title: "首页"
            }
        },
        {
            path: "/",
            redirect: {
                name: 'index',
            }
        }
    ]
});
