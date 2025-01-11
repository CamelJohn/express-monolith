import AppDataSource from '../../database';
import ExampleEntity from './entity';
class Service {
    constructor(private exampleRepository = AppDataSource.getRepository(ExampleEntity)) {}

    async get () {
        return this.exampleRepository.findOne();
    }
}

export default Service;
