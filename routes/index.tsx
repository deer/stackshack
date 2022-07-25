/** @jsx h */
import { Handlers, PageProps } from "$fresh/server.ts";
import { h } from "preact";
import { tw } from "@twind";
import { gql, request } from "graphql";

import { Stack } from "../utils/types.ts";
import StackCard from "../src/StackCard.tsx";
import Header from "../src/Header.tsx";

export const handler: Handlers<{
  stacks: Stack[];
}> = {
  async GET(req, ctx) {
    const query = gql`
      {
        sites {
          name,
          frontend,
          backend,
          demo,
          description,
          order
        }
      }
    `;
    const asdf = await request("https://qbkbluxz.directus.app/graphql", query);

    return ctx.render({
      stacks: asdf.sites.map((s: Stack) => ({
        ...s,
      })).sort((a: Stack, b: Stack) => a.order - b.order),
    });
  },
};

export default function Home(
  props: PageProps<{
    stacks: Stack[];
  }>
) {
  const { stacks } = props.data;

  return (
    <div class={tw`mx-auto max-w-screen-xl`}>
      <Header />
      <div class={tw`grid sm:grid-cols-2 md:grid-cols-3 mt-5 gap-2`}>
        {stacks.map((stack) => (
          <StackCard stack={stack} />
        ))}
      </div>
    </div>
  );
}
