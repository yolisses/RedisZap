import prompt from "prompt";
import { runSubscriber } from "./subscriber";
import { runPublisher } from "./publisher";

async function getIsPublisher() {
  prompt.start();
  while (true) {
    console.log("Abrir como publisher? [s/n]");
    const { resposta: answer } = await prompt.get(["resposta"]);
    if (answer === "s") return true;
    if (answer === "n") return false;
    console.log('Invalid input "' + answer + '"\n');
  }
}

async function main() {
  const isPublisher = await getIsPublisher();
  if (isPublisher) runPublisher();
  else runSubscriber();
}

main();
