import { assertEquals } from "std/assert/assert_equals.ts";
import { main } from "../src/main.ts";

Deno.test("La función main retorna la misma entrada", () => {
  const resultado = main("entrada");
  console.log("Resultado:", resultado);
  assertEquals(resultado, "entrada");
});
