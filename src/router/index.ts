import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProjectDetails from "../views/ProjectDetails.vue";


const router = createRouter ({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/projects",
            name: "projectDetails",
            component: ProjectDetails

        }
    ],
})

export default router;
