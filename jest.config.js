module.exports = {
    // [...]
    // Replace `ts-jest` with the preset you want to use
    // from the above list
    preset: 'ts-jest',
    setupFilesAfterEnv: ['jest-expect-message'],
    "testEnvironment": "node",
    transform: {
        '^.+\\.ts?$': 'ts-jest',
      },
  }