import { assertEquals } from "std/assert/assert_equals.ts";
import { procesarTexto } from "../src/main.ts";

Deno.test("debería devolver el valor esperado", () => {
  const resultado = procesarTexto("entrada");
  // Imprimir el resultado en la consola
  console.log(resultado);
  assertEquals(resultado, "salida esperada: entrada");
});
