import prompt from "prompt";
import { client } from "./client";

async function getUsername() {
  console.log("Digite seu nome de usuário");
  const { username } = await prompt.get(["username"]);
  return username;
}

export async function runPublisher() {
  const username = await getUsername();
  await client.connect();
  while (true) {
    const { mensagem: message } = await prompt.get(["mensagem"]);
    const now = new Date();
    const text = `[${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}] [${username}]: ${message}`;
    await client.publish("message", text);
  }
}

runPublisher();
