import {CLIENT_ID, OAUTH_REDDIT, REDIRECT_URI, SCOPE} from "@env"
import {accessToken, auth} from "../Routes/Reddit/OAuth.route";

let code;


describe("auth", () => {
    it("should return a valid authorization URL", () => {
        const expectedUrl =
            "https://www.reddit.com/api/v1/authorize?client_id="+ CLIENT_ID
            + "&response_type=code&state=state&redirect_uri=" + REDIRECT_URI + "&duration=permanent&scope=" + SCOPE;
        const url = auth();
        expect(url).toEqual(expectedUrl);
    });
});

describe("accessToken", () => {
    it("should retrieve an valid code", async () => {
        const expectedUrl =
            "https://www.reddit.com/api/v1/authorize?client_id="+ CLIENT_ID
            + "&response_type=code&state=state&redirect_uri=" + REDIRECT_URI + "&duration=permanent&scope=" + SCOPE;
        const url = auth();
        console.log(url)
        expect(url).toEqual(expectedUrl);
    });
    it("should retrieve an access token", async () => {
        const mockResponse = {
            url: "https://www.reddit.com?code=mockCode#_",
        };
        const mockToken = { access_token: "mockToken" };
        const axiosMock = jest.fn().mockResolvedValue({ data: mockToken });
        const storeDataMock = jest.fn();

        await accessToken(mockResponse, axiosMock, storeDataMock);

        expect(axiosMock).toHaveBeenCalledWith(
            "https://www.reddit.com/api/v1/access_token",
            {
                code: "mockCode",
                grant_type: "authorization_code",
                redirect_uri: REDIRECT_URI,
                code_verifier: "challenge",
            },
            {
                headers: {
                    Authorization: `Basic ${CLIENT_ID}:`,
                },
            }
        );
        expect(storeDataMock).toHaveBeenCalledWith("token", mockToken);
    });

    it("should log an error if the request fails", async () => {
        const mockResponse = {
            url: "https://www.reddit.com?code=mockCode#_",
        };
        const axiosMock = jest.fn().mockRejectedValue(new Error("mock error"));
        const consoleSpy = jest.spyOn(console, "log");

        await accessToken(mockResponse, axiosMock);

        expect(consoleSpy).toHaveBeenCalledWith("er", new Error("mock error"));
    });
});