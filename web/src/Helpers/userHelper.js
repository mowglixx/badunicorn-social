import handleError from "../../../server/src/helpers/errorHandler"
import { APP_CONFIG } from "../App"

export const getUserProfile = async (userID) => {
    const profile = userID
        ? await (await fetch(`${APP_CONFIG.api_url}/profile`, {
        method: 'GET'
        }).json())
        : handleError(400, 'Profile Not found')
}