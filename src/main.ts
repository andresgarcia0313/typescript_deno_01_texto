export class TextProcessor {
    process(text: string): string {
      return `salida esperada: ${text}`;
    }
  }
  
  export const procesarTexto = (entrada: string): string =>
    new TextProcessor().process(entrada);
  
  if (import.meta.main) console.log(procesarTexto("Hola Mundo"));
  