import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProjectDetails from "../views/ProjectDetails.vue";


const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/projects/:name",
            name: "projectDetails",
            component: ProjectDetails

        }
    ],
})

export default router;
