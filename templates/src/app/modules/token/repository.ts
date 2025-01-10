import AppDataSource from '../../database';
import { TokenEntity } from './entity';

export const tokenRepository = AppDataSource.getRepository(TokenEntity);