<script setup lang="ts">
import authClient from "~/lib/client";
const { signUp } = authClient;

const { data: session } = await authClient.useSession(useFetch);

const name = ref("");
const email = ref("");
const password = ref("");

const register = async () => {
  const { data, error } = await signUp.email(
    {
      email: email.value,
      password: password.value,
      name: name.value,
    },
    {
      onRequest: (ctx) => {},
      onSuccess: (ctx) => {
        navigateTo("/dashboard");
      },
      onError: (ctx) => {
        alert(ctx.error.message);
      },
    }
  );
};
</script>
<template>
  <div v-if="!session?.user">
    <h4>Welcome to Nuxt Better Auth Sample</h4>
    <p>Create an account</p>
    <form @submit.prevent="register">
      <label for="username">Name</label>
      <input type="text" name="name" id="name" v-model="name" />
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="email" />
      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="password" />
      <button type="submit">Submit</button>
    </form>
    <NuxtLink to="/" class="secondary">
      Already have an account? Login
    </NuxtLink>
  </div>
  <div v-else>
    <h1>Logged in</h1>
    <pre>{{ session.user }}</pre>
    <button @click="() => navigateTo('/dashboard')">
      Go to protected route
    </button>
  </div>
</template>
