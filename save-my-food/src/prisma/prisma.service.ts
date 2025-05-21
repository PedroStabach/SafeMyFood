import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "generated/prisma";


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    async onModuleInit() {
        await this.$connect();
    }
    // nao funcionou
    //async enableShutdownHooks(app: INestApplication) {
    //    await this.$on("beforeExit", async () => {
    //        await app.close()
    //    })
    //}
}