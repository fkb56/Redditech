/** @type {{preset: string, transformIgnorePatterns: string[], verbose: boolean}} */
const config = {
    verbose: true,
    transformIgnorePatterns: [
        "node_modules/(?!(react-native-base64|@react-native|react-native|@react-native-async-storage)/)"
    ],
    preset: "react-native",
    setupFiles: ["./Test/__mocks__/@react-native-async-storage/async-storage.js"]
};

module.exports = config;