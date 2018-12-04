import app from './app';
import * as https from 'https';
import * as fs from 'fs';
import * as http from 'http';
import * as debug from 'debug';
import { Config } from './configuration/Config';


class Server {
    private static serverInstance: Server;
    private server: any;
    private port: number;

    public getServerInstance(): any {
        return this.server;
    }
    public static bootstrap(): Server {
        if (!this.serverInstance) {
            this.serverInstance = new Server();
            return this.serverInstance;
        } else {
            return  this.serverInstance;
        }

    }
    private runServer(): void {
        this.port = Config.Port;
        app.set('port', this.port);
        this.createServer();
    }
    private createServer() {
        this.server = http.createServer(app);
        this.server.listen(this.port);
    }


    public constructor() {
        this.runServer();
    }

}
export const server = Server.bootstrap();