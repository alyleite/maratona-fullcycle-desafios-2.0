import {MigrationInterface, QueryRunner} from "typeorm";
import { Maratona } from '../maratona/maratona.model';

export class MaratonaInsert1588811731572 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        queryRunner
            .manager
            .createQueryBuilder()
            .insert()
            .into(Maratona)
            .values([
                {"aula": "Full Cycle: Arquitetura e Estudo de Caso"},
                {"aula": "Ecossistema JS com Diego da Rocketseat"},
                {"aula": "Microsserviço Live Manager e Comunicação"},
                {"aula": "Skills de um Dev Full Cycle com Rodrigo Branas e Henrique Bastos"},
                {"aula": "Realizando Streaming com Websockets e WebRTC"},
                {"aula": "Tempo Real na Web"},
                {"aula": "Microsserviços de Chat e CodeBot"},
                {"aula": "gRPC é o futuro"},
                {"aula": "Deploy com Docker e Kubernetes"},
                {"aula": "CI / CD e Tipos de Deploy"},
                {"aula": "Dados do Chat com RabbitMQ e Elastic Stack"},
                {"aula": "Kafka com Elastic Stack"},
                {"aula": "Service Mesh com Istio e Kiali"},
                {"aula": "Abertura das Matrículas"}
            ])
            .execute()
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
