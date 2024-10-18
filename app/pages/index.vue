<script setup lang="ts">
import authClient from "~/lib/client";
const { signIn } = authClient;

const { data: session } = await authClient.useSession(useFetch);

const email = ref("");
const password = ref("");

const login = async () => {
  const { data, error } = await signIn.email(
    {
      email: email.value,
      password: password.value,
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
    <p>Login with an existing account</p>
    <form @submit.prevent="login">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="email" />
      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="password" />
      <button type="submit">Submit</button>
    </form>
    <NuxtLink to="/register" class="secondary"> Create account </NuxtLink>
  </div>
  <div v-else>
    <h1>Logged in</h1>
    <pre>{{ session.user }}</pre>
    <button @click="() => navigateTo('/dashboard')">
      Go to protected route
    </button>
  </div>
</template>
