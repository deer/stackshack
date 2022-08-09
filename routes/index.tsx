/** @jsx h */
import { Handlers, PageProps } from "$fresh/server.ts";
import { h } from "preact";
import { tw } from "@twind";
import { gql, request, GraphQLClient } from "graphql";

import { Stack } from "../utils/types.ts";
import StackCard from "../src/StackCard.tsx";
import Header from "../src/Header.tsx";

import { TOKEN } from "../utils/env.ts";

export const handler: Handlers<{
  stacks: Stack[];
}> = {
  async GET(req, ctx) {
    const query = gql`
      {
        stacks {
          demo
          description
          name
          order
          technologies
        }
      }
    `;

    const endpoint = "https://eu-central-1.aws.realm.mongodb.com/api/client/v2.0/app/application-0-eikog/graphql";
    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        apiKey: `${TOKEN}`,
      },
    });;
    const result = await graphQLClient.request(query);
    //console.log(JSON.stringify(graphQLClient, undefined, 2));

    return ctx.render({
      stacks: result.stacks.map((s: Stack) => ({

        ...s,
      }))
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
