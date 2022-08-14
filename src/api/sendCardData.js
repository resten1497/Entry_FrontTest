import axios from "axios";
import qs from "qs";

export default async function sendCardData(card) {
    return await axios.post(
        process.env.sendCardData,
        qs.stringify(card), {
            headers: { "content-type": "application/x-www-form-urlencoded" },
        }
    );
}