import "./dev.js";
//#region src/lib/stores/auth.svelte.ts
var AuthStore = class {
	user = null;
	token = null;
	loading = false;
	init() {
		if (typeof localStorage === "undefined") return;
		const stored = localStorage.getItem("auth");
		if (stored) try {
			const parsed = JSON.parse(stored);
			this.user = parsed.user;
			this.token = parsed.token;
		} catch {}
	}
	login(u, t) {
		this.user = u;
		this.token = t;
		if (typeof localStorage !== "undefined") localStorage.setItem("auth", JSON.stringify({
			user: u,
			token: t
		}));
	}
	logout() {
		this.user = null;
		this.token = null;
		if (typeof localStorage !== "undefined") localStorage.removeItem("auth");
	}
	getToken() {
		return this.token;
	}
	getUser() {
		return this.user;
	}
	isAuthenticated() {
		return !!this.token && !!this.user;
	}
};
var auth = new AuthStore();
//#endregion
export { auth as t };
