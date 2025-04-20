import axios from "axios";

const API_BASE = "https://modding-backend.onrender.com/api";

export default API_BASE;


export const getMods = () => axios.get(`${API_BASE}/mods`);
export const getMod = (id) => axios.get(`${API_BASE}/mods/${id}`);
export const addMod = (data) => axios.post(`${API_BASE}/mods`, data);
