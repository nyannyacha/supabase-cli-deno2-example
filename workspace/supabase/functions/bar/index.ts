import cowsay from "cowcow";

console.log(cowsay);

export function meowmeow(): string {
  return cowsay.say({
    text: "meowmeow",
  });
}
