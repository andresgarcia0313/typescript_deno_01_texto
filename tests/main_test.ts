import { assertEquals } from "std/assert/assert_equals.ts";
import { main } from "../src/main.ts";

Deno.test("La función main retorna la misma entrada", () => {
  assertEquals( main("entrada"), "entrada");
});
