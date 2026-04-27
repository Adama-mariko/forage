import { t as auth } from "./auth2.svelte.js";
import { t as goto } from "./client.js";
import "./navigation.js";
import { t as toast } from "./toast.svelte.js";
import axios from "axios";
var api = axios.create({
	baseURL: "http://localhost:3333/api/v1",
	headers: { "Content-Type": "application/json" }
});
api.interceptors.request.use((config) => {
	const token = auth.getToken();
	if (token) config.headers.Authorization = `Bearer ${token}`;
	return config;
});
api.interceptors.response.use((res) => res, (err) => {
	const status = err.response?.status;
	const message = err.response?.data?.message ?? "Une erreur est survenue";
	const url = err.config?.url ?? "";
	if (status === 401) {
		if (!url.includes("notifications") && !url.includes("messages")) {
			auth.logout();
			goto("/login");
			toast.error("Session expirée", "Veuillez vous reconnecter.");
		}
	} else if (status === 403) {
		if (!url.includes("notifications")) toast.error("Accès refusé", message);
	} else if (status === 422) {} else if (status >= 500) toast.error("Erreur serveur", "Veuillez réessayer plus tard.");
	return Promise.reject(err);
});
//#endregion
export { api as t };
