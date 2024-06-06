export * from "./packages";
export * from "./file";
export * from "./auth";
export * from "./schemas";

export interface TokenPayload {
    id: string;
    login: string;
    role: string;
}