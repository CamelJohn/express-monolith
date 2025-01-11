import AppDataSource from '../../database';
import { UserEntity } from './entity';

const userRepository = AppDataSource.getRepository(UserEntity);

export default userRepository;