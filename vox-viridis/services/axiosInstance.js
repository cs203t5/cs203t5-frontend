import axios from "axios";

const Instance = axios.create({
    baseURL: "http://13.212.138.130/api/",
});

export default Instance;
