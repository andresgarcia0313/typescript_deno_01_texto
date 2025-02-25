export class Main {
  main(text: string): string {
    return `${text}`;
  }
}
export const main = (text: string): string => new Main().main(text);
if (import.meta.main) console.log(main("Texto"));
