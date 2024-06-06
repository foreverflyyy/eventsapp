export * from "./packages";
export * from "./file";
export * from "./auth";
export * from "./schemas";
export * from "./event";
export * from "./user";

export interface TokenPayload {
    id: string;
    login: string;
    role: string;
}

export interface RequestFiles {
    [key: string]: Express.Multer.File[];
}