import { cva, type VariantProps } from "class-variance-authority";

export { default as Alert } from "./Alert.vue";
export { default as AlertDescription } from "./AlertDescription.vue";
export { default as AlertTitle } from "./AlertTitle.vue";

export const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>span]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>span]:gap-x-3 gap-y-0.5 items-start [&>span]:size-4 [&>span]:translate-y-0.5 [&>span]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive border-destructive bg-transparent [&>span]:text-current *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type AlertVariants = VariantProps<typeof alertVariants>;
