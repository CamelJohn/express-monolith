import bcrypt from 'bcryptjs';
import { ValidatePasswordDto } from './interfaces';

const validate_password = (dto: ValidatePasswordDto) => {
    return bcrypt.compare(dto.clear_text_password, dto.hashed_password);
}

const password_service = {
    validate_password
}

export default password_service;