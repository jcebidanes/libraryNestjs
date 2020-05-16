import {
    Entity,
    Column,
    PrimaryGeneratedColumn, 
} from 'typeorm';

@Entity({name: 'books'})
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    author: string;
}