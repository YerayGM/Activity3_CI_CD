/** @type {import('jest').Config} */
export default {
    testEnvironment: 'node',
    transform: {},
    coverageThreshold: {
        global: {
            branches: 40,
            functions: 70,
            lines: 70,
            statements: 70
        }
    }
};