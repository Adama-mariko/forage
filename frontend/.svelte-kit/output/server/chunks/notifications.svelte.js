import "./dev.js";
import { t as api } from "./api.js";
//#region src/lib/stores/notifications.svelte.ts
var NotificationStore = class {
	count = 0;
	items = [];
	async load() {
		try {
			const res = await api.get("/account/notifications");
			this.items = res.data.slice(0, 50);
			this.count = this.items.filter((n) => !n.lu).length;
		} catch {}
	}
	async markRead(id) {
		try {
			await api.patch(`/account/notifications/${id}/read`);
			this.items = this.items.map((n) => n.id === id ? {
				...n,
				lu: true
			} : n);
			this.count = this.items.filter((n) => !n.lu).length;
		} catch {}
	}
	async markAllRead() {
		try {
			await api.patch("/account/notifications/read-all");
			this.items = this.items.map((n) => ({
				...n,
				lu: true
			}));
			this.count = 0;
		} catch {}
	}
};
var notifStore = new NotificationStore();
//#endregion
export { notifStore as t };
