import { client } from "./client";

export async function runSubscriber() {
  await client.connect();
  await client.subscribe("message", (e) => {
    console.log(e);
  });
}

runSubscriber();
