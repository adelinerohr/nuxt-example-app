<script lang="ts" setup>
import type { FetchError } from "ofetch";
import type { ZodType, ZodTypeDef } from "zod";

import { vAutoAnimate } from "@formkit/auto-animate/vue";
import { toTypedSchema } from "@vee-validate/zod";

import { InsertCompanySchema } from "~/lib/db/schema";

const { $csrfFetch } = useNuxtApp();

const router = useRouter();
const submitError = ref("");
const loading = ref(false);
const submitted = ref(false);

const form = useForm({
  validationSchema: toTypedSchema(InsertCompanySchema as unknown as ZodType<any, ZodTypeDef, any>),
});

const onSubmit = form.handleSubmit(async (values) => {
  try {
    submitError.value = "";
    loading.value = true;
    await $csrfFetch("/api/companies", {
      method: "post",
      body: values,
    });
    submitted.value = true;
    navigateTo("/dashboard");
  }
  catch (e) {
    const error = e as FetchError;
    if (error.data?.data) {
      form.setErrors(error.data?.data);
    }
    submitError.value = error.statusMessage || "An unknown error occurred.";
  }
  loading.value = false;
});

onBeforeRouteLeave(() => {
  if (!submitted.value && form.meta.value.dirty) {
    // eslint-disable-next-line no-alert
    const confirm = window.confirm("Are you sure you want to leave? All unsaved changes will be lost.");
    if (!confirm) {
      return false;
    }
  }
  return true;
});
</script>

<template>
  <div class="flex flex-col gap-6 min-w-76 mx-auto w-full">
    <h1 class="text-5xl font-medium">
      Add Company
    </h1>
    <Alert v-if="submitError" variant="destructive">
      <AlertTitle>{{ submitError }}</AlertTitle>
    </Alert>
    <form class="space-y-6" @submit.prevent="onSubmit">
      <FormField
        v-slot="{ componentField }"
        name="name"
        :validate-on-blur="!form.isFieldDirty"
      >
        <FormItem v-auto-animate>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input
              :disabled="loading"
              type="text"
              placeholder="Company name"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField
        v-slot="{ componentField }"
        name="website"
        :validate-on-blur="!form.isFieldDirty"
      >
        <FormItem v-auto-animate>
          <FormLabel>Website</FormLabel>
          <FormControl>
            <Input
              :disabled="loading"
              type="text"
              placeholder="Company website"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField
        v-slot="{ componentField }"
        name="description"
        :validate-on-blur="!form.isFieldDirty"
      >
        <FormItem v-auto-animate>
          <FormLabel>Company Description</FormLabel>
          <FormControl>
            <Textarea
              :disabled="loading"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <div class="flex justify-end gap-2">
        <Button
          :disabled="loading"
          variant="secondary"
          @click="router.back()"
        >
          Cancel
        </Button>
        <Button :disabled="loading" type="submit">
          Add
          <div
            v-if="loading"
            class="animate-spin inline-block size-4 border-2 border-current border-t-transparent text-primary-foreground rounded-full dark:text-primary"
            role="status"
            aria-label="loading"
          >
            <span class="sr-only">Loading...</span>
          </div>
          <Icon v-else name="tabler:plus" />
        </Button>
      </div>
    </form>
  </div>
</template>
