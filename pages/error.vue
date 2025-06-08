<script lang="ts" setup>
const route = useRoute();
const error = route.query.error || "An unknown error occured.";
</script>

<template>
  <div class="container mt-4 min-h-96 mx-auto flex items-center justify-center flex-col gap-6 bg-secondary rounded-2xl">
    <Alert variant="destructive" class="w-fit">
      <Icon name="tabler:exclamation-circle" size="18" />
      <AlertTitle>Oh no!</AlertTitle>
      <AlertDescription>{{ error }}</AlertDescription>
    </Alert>
    <NuxtLink to="/">
      <Button>
        Go back home
        <Icon name="tabler:arrow-left" />
      </Button>
    </NuxtLink>
  </div>
</template>
