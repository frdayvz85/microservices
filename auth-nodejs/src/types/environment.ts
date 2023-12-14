export interface IEnvironment {
    port: string | undefined;
    database: {
        port: number;
        name: string;
        host: string;
        user: string;
        password: string;
    };
    mongoDB: {
        url: string;
    };
    accessToken: string;
    refreshToken: string;
    parentEmail: string;
    parentPassword: string;
    clientURL: string;
}