import axios from "axios";
import { prismaclient } from "../../client/db";
import { User } from "@prisma/client";
interface GoogleUserInfo {
    iss?: string;
    sub?: string;
    azp?: string;
    aud?: string;
    iat?: string;
    exp?: string;
    email?: string;
    email_verified?: string;
    name?: string;
    picture?: string;
    given_name?: string;
    family_name?: string;
    locale?: string;
}

export const queries = {
    verifyGoogleToken: async (parent: any, { token }: { token: string }) => {
        // return token
        const googleToken = token;
        const googleAuthUrl = new URL("https://oauth2.googleapis.com/tokeninfo")
        googleAuthUrl.searchParams.set("id_token", googleToken)

        const { data } = await axios.get<GoogleUserInfo>(googleAuthUrl.toString(), {
            responseType: "json"
        })
        console.log(data)
        const isUserAlreadyAvailable = await prismaclient.user.findUnique({
            where:
            {
                email: data.email
            }
        })
        console.log(isUserAlreadyAvailable);

        if (!isUserAlreadyAvailable) {
            const createUser = await prismaclient.user.create({
                data:
                {
                    email: data.email!,
                    fname: data.given_name,
                    profileImg: data.picture!,



                }
            })
        }


        console.log("ysers is", isUserAlreadyAvailable);
        return ("hello")
    }


}

export const resolvers = { queries }