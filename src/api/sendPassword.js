import axios from "axios";
import qs from "qs";
export default async function sendPassword(keys) {
    return axios.post(
        process.env.sendPassword,
        qs.stringify({ password: keys }), {
            headers: { "content-type": "application/x-www-form-urlencoded" },
        }
    );
}