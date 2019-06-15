module.exports = {
  transform: { "^.+\\.js": "babel-jest" },
  testMatch: ["**/__tests__/**/*.js"],
  verbose: true,
  setupFiles: ["./src/setupTests.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testEnvironment: "jsdom"
};
