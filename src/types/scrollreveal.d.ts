// types/scrollreveal.d.ts
declare module 'scrollreveal' {
    interface ScrollRevealObject {
        reveal(selector: string, options?: object): void;
        destroy(): void;
        // Add other methods and properties as needed
    }
    const ScrollReveal: (options?: object) => ScrollRevealObject;
    export default ScrollReveal;
  }
  