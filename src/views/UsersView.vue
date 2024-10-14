<script setup>
import UserCard from "@/components/UserCard.vue";
import jimmy from "@/assets/images/jimmy.jfif"
import userData from "@/assets/data/users.json";
import { ref } from "vue";
import UserList from "@/components/UserList.vue";

const users = ref(userData);
document.title = 'Users';
</script>
<template>
    <div class="users">
        <h1>Användarsida</h1>
    </div>
    <UserCard :user="{ id: 1, namn: 'Jimmy', image: jimmy}"/>
    <UserList :user-list="users"/>
</template>
<style scoped>
</style>