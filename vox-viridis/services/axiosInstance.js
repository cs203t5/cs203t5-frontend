import axios from "axios";

const Instance = axios.create({
    baseURL: "https://voxviridis.ml/api/",
});

export default Instance;
