import {getStoreData, storeData} from "../Services/service";

jest.mock('@react-native-async-storage/async-storage', () =>
    require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

describe("storage", () => {
    it('test add string to local storage', async () => {
        const name = "test"
        const val = "test"
        await storeData(name, val)
        const storage = getStoreData(name)
        expect(storage).resolves.toBe(val)
    })

    it('test add object to local storage', async () => {
        const name = "test2"
        const object = {test2: "test2"}
        await storeData(name, object)
        const storage = getStoreData(name)
        expect(storage).resolves.toStrictEqual(object)
    })
})