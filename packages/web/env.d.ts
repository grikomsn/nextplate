declare namespace NodeJS {
  interface ProcessEnv {
    VERCEL?: "1";
    VERCEL_ENV: "development" | "preview" | "production";

    EXAMPLE_SECRET: string;
    NEXT_PUBLIC_NOT_SO_SECRET: string;

    [k: string]: string;
  }
}
