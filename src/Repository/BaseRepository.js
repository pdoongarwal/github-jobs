import axios from "axios";

import Config from "../Config/Config";

const apiClient = axios.create({ baseURL: Config.apiUrl });

export default apiClient;
