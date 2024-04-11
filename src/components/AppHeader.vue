<template>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Boolfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink :to="{name: 'home'}" class="nav-link">
                                Home
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink :to="{name: 'projects'}" class="nav-link">
                                Projects
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'AppHeader'
}
</script>

<style scoped>
.navbar {
    padding-inline: 10%;
}
</style>