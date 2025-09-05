import { meowmeow } from "@scope/bar";

export function runServer() {
  Deno.serve(() => new Response(meowmeow()));
}
