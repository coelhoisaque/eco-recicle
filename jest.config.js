module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleNameMapper: {
      // Simula importações de ficheiros de estilo
      '\\.(css|scss)$': 'identity-obj-proxy',
      // Simula importações de outros ficheiros (imagens, etc)
      '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    },
  };