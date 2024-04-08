<script>
export default {
    name: "ProjectCard",
    props: [
        "propElement"
    ],
};
</script>

<template>
    <div class="col-4 project-container mt-3 ">
        <div class="card text-start p-3 project-card">

            <div class="card-body">
                <h4 class="card-title">{{ propElement.title }}</h4>
                <ul>
                    <li>
                        slug: <strong>{{ propElement.slug }}</strong>
                    </li>
                    <li v-if="propElement.category">
                        category:
                        <strong>{{ propElement.category.name }}</strong>
                    </li>
                    <li v-else>
                        category:
                        <strong>Nessuna</strong>
                    </li>
                    <li>
                        tags:
                        <span v-for="(element, index) in propElement.tags"
                            class="badge rounded-pill text-bg-primary me-1">{{ element.name }}</span>

                    </li>
                </ul>
                <p class="card-text">{{ propElement.description }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
li {
    list-style-type: disc;
}

.project-container {
    height: 450px;
}

.project-card {
    height: 100%;
    overflow: auto;
}

ol,
ul {
    padding-left: 1rem;
}
</style>