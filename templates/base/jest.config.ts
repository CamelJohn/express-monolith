import { type JestConfigWithTsJest, createDefaultPreset } from 'ts-jest';

const preset = createDefaultPreset();

const config: JestConfigWithTsJest = {
    ...preset,
};

export default preset;
