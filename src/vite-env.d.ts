// src/custom.d.ts
/// <reference types="vite/client" /> // Зазвичай тут, або у vite-env.d.ts

declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}