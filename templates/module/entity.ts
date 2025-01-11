import { BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

class ExampleEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
}

export default ExampleEntity;