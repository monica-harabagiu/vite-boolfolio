<script>
import axios from 'axios';
import ProjectCard from "./ProjectCard.vue";

export default {
    name: "AppMain",
    components: {
        ProjectCard,
    },
    data() {
        return {
            arrayProjects: []
        }
    },
    methods: {
        getProjects() {
            axios.get('http://127.0.0.1:8001/api/test')
                .then(res => {
                    console.log(res.data.projects)

                    this.arrayProjects = res.data.projects
                })
        }
    },
    mounted() {
        this.getProjects()
    }
}

</script>

<template>

    <main>
        <h2>All Projects</h2>

        <div class="container my-5">
            <div class="row">
                <ProjectCard v-for="(element, index) in arrayProjects" :key="element.id" :propElement="element" />
            </div>
        </div>

        <!-- <ul>
            <li v-for="(element, index) in arrayProjects" :key="element.id">
                {{ element.title }}
            </li>
        </ul> -->
    </main>

</template>

<style scoped>
li {
    text-align: left;
}
</style>
