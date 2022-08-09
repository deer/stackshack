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
      <a href={stack.demo} class={tw`text-blue-600 active:text-red-600`}>{stack.demo}</a>
      <div class={tw`mb-2`}>{stack.description}</div>   
      <div class={tw`mb-2`}>Built with:</div>
      <ul class={tw`list-disc ml-5 -mt-2`}>
        {stack.technologies.map((t) => (<li>{t}</li>))}
      </ul>
    </div>
  );
}