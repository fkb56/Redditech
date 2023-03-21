import {store} from "../Redux/store";
import {addItemToPhone} from "../Redux/Slice/userSlice";

describe("redux", () => {
    it('should test get all state redux', function () {
        const userInfo = {
            "menu": {
                "items": {
                    "AccountBtnM": false,
                    "ChnAppsett": false,
                    "ChnRsett": false,
                    "Chnsett": false,
                    "IsConnected": false,
                    "IsPhone": false,
                    "IsSearch": false,
                    "Maccount": false,
                    "Menu": false,
                    "ScltdChannel": false,
                },
            },
            "token": {},
            "user": {
                "items": [
                    {
                        "id": 1,
                        "name": "iPhone10",
                    },
                    {
                        "id": 2,
                        "name": 'iPadPro'
                    },
                    {
                        "id": 3,
                        "name": "iWatch",
                    },
                ],
            },
        }

        const state = store.getState()

        expect(state).toStrictEqual(userInfo)
    })

    it('should test get all state redux user', function () {
        const userInfo = {
            items: [
                {id: 1, name: 'iPhone10'},
                {id: 2, name: 'iPadPro'},
                {id: 3, name: 'iWatch'},
            ]
        }

        const state = store.getState().user

        console.log(state)
        expect(state).toStrictEqual(userInfo)
    })

    it('should test add state redux user', async function () {
        const newItem = {name: 'iPhone'}

        const userInfo = {
            items: [
                {id: 1, name: 'iPhone10'},
                {id: 2, name: 'iPadPro'},
                {id: 3, name: 'iWatch'},
                {id: 4, name: newItem.name}
            ]
        }

        const state = store.getState().user

        await store.dispatch(addItemToPhone(newItem))

        console.log(await state)
        expect(state).toBe(userInfo)
    })
})