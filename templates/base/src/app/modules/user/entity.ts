import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('varchar', { nullable: false })
    username!: string;
    
    @Column('varchar', { nullable: false })
    password!: string;
    
    @Column('varchar', { nullable: false, unique: true })
    email!: string;
}