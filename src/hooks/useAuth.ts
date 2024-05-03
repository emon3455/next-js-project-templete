import { getTokenCookies } from "@/Global/(cockies)/getCoockies";

const getUser = async () => {
    try {
        const token = await getTokenCookies();
        if (token) {
            return token.user || {};
        }
    } catch (error) {
        console.error("Error parsing authToken:", error);
    }
    return {};
}

export default getUser;
