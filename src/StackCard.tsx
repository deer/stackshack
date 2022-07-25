/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import { Stack } from "../utils/types.ts";

export default function StackCard({
  stack,
}: {
  stack: Stack;
}) {
  return (
    <div class={tw`rounded-xl border-1 p-5`}>
      <div class={tw`text-2xl font-bold mb-2`}>{stack.name}</div>
      <div class={tw`mb-2`}>Frontend: {stack.frontend}</div>
      <div class={tw`mb-2`}>Backend: {stack.backend}</div>
      <div class={tw`mb-2`}>Demo: {stack.demo}</div>
      <div class={tw`mb-2`}>{stack.description}</div>
    </div>
  );
}