import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaratonaModule } from './maratona/maratona.module';
import { Maratona } from './maratona/maratona.model';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        TypeOrmModule.forRoot({
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            type: process.env.TYPEORM_CONNECTION,
            database: process.env.TYPEORM_DATABASE,
            entities: [Maratona],
            host: process.env.TYPEORM_HOST,
            port: parseInt(process.env.TYPEORM_PORT),
            // synchronize: true
        }),
        MaratonaModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
