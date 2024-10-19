import axios from "axios";

export default axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
    headers: {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Authorization": "Basic MTExOTA0Nzk6NjAtZGF5ZnJlZXRyaWFs"
    }
})