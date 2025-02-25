export class Main {
  main(text: string): string {
    return `${text}`;
  }
}
export const main = (entrada: string): string => new Main().main(entrada);
if (import.meta.main) console.log(main("Texto"));
