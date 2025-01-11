import { CreateUserDto } from './interfaces';
import userRepository from './repository';

const user_service = {
    findOneByEmail: async (email: string) => {
        try {
            const user = await userRepository.findOneBy({ email });

            return user;
        } catch (error) {
            console.error({ error });
            throw error;
        }
    },
    create: async (dto: CreateUserDto) => {
        try {
            const user = await userRepository.save(dto);

            return user;
        } catch (error) {
            console.error({ error });
            throw error;
        }
    },
    getPassword: async (email: string) => {
        try {
            const user = await userRepository.findOneBy({ email });

            return user?.password;
        } catch (error) {
            console.error({ error });
            throw error;
        }
    }
}

export default user_service;