/** @type {import('jest').Config} */
export default {
    testEnvironment: 'node',
    transform: {},
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    }
};