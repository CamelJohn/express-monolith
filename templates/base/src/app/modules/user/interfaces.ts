import { UserEntity } from './entity';

export interface CreateUserDto extends Pick<UserEntity, 'email' | 'username' | 'password'> {}
