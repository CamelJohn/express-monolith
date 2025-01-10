import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { TokenTypeEnum } from './interfaces';

export class TokenEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('varchar')
    token!: string;

    @Column({ type: 'enum', enum: TokenTypeEnum, nullable: false })
    type!: TokenTypeEnum;
}