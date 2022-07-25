/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";


export default function Header() {
  return (
    <div class={tw`p-5 bg-blue-500 text-white mb-5 flex`}>
        <div>
            <h1 class={tw`text-4xl`}>StackShack</h1>
        </div>
        <div>
            <h3 class={tw`text-xl`}>A site to compare various stacks</h3>
        </div>
    </div>
  );
}