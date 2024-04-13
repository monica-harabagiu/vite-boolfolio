<template>
    <div class="container py-3">

        <h1 class="mt-2 fw-bold">{{ project?.title }}</h1>
        <h3 class="mt-2">{{ project?.type ? project?.type.name : '' }}</h3>

        <ul>
            <li>
                slug: <strong>{{ project?.slug }}</strong>
            </li>
            <li v-if="project?.category">
                category:
                <strong>{{ project?.category.name }}</strong>
            </li>
            <li v-else>
                category:
                <strong>Nessuna</strong>
            </li>
            <li>
                tags:
                <span v-for="(element, index) in project?.tags" class="badge rounded-pill text-bg-primary me-1">{{
            element.name }}</span>

            </li>
        </ul>
        <p class="card-text">{{ project?.description }}</p>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SingleProject',
    data() {
        return {
            project: []
        }
    },
    methods: {
        getSingleProject() {
            axios.get(`http://127.0.0.1:8000/api/test/${this.$route.params.slug}`)
                .then(res => {
                    console.log(res.data.project)

                    if (res.data.success) {
                        this.project = res.data.project
                    } else {
                        console.log('error')
                    }
                })
        }
    },
    mounted() {
        this.getSingleProject()
    }
}
</script>

<style scoped></style>