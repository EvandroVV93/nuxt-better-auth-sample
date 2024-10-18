<script setup lang="ts">
import authClient from "~/lib/client";
const { signOut } = authClient;

const { data: session } = await authClient.useSession(useFetch);

const logout = async () => {
  const { error } = await signOut(
    {},
    {
      onRequest: (ctx) => {},
      onSuccess: (ctx) => {
        navigateTo("/");
      },
      onError: (ctx) => {
        alert(ctx.error.message);
      },
    }
  );
};
</script>

<template>
  <h1>This is a protected route</h1>
  <pre>{{ session?.user }}</pre>
  <button @click="logout">Logout</button>
</template>
