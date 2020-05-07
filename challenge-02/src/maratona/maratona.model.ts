import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('maratona')
export class Maratona {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    aula: string;
}
