import "./dev.js";
import { t as api } from "./api.js";
//#region src/lib/stores/messages.svelte.ts
var MessageStore = class {
	unreadCount = 0;
	unreadByDemande = {};
	async loadUnread() {
		try {
			const { auth } = await import("./auth.svelte.js");
			const role = auth.user?.role;
			const userId = auth.user?.id;
			if (!userId) return;
			let demandes = [];
			if (role === "client") demandes = (await api.get("/demandes")).data ?? [];
			else if (role === "entreprise") demandes = ((await api.get("/appels-offres")).data.data ?? []).map((ao) => ({ id: ao.demande?.id ?? ao.demandeId })).filter((d) => d.id);
			else if (role === "admin") demandes = (await api.get("/admin/demandes?limit=50")).data.data ?? [];
			const map = {};
			let total = 0;
			await Promise.all(demandes.slice(0, 15).map(async (d) => {
				try {
					const count = ((await api.get(`/demandes/${d.id}/messages`)).data ?? []).filter((m) => !m.lu && (m.receiverId === userId || m.receiver_id === userId)).length;
					if (count > 0) {
						map[d.id] = count;
						total += count;
					}
				} catch {}
			}));
			this.unreadByDemande = map;
			this.unreadCount = total;
		} catch {}
	}
	markDemandeRead(demandeId) {
		const count = this.unreadByDemande[demandeId] ?? 0;
		if (count > 0) {
			const updated = { ...this.unreadByDemande };
			delete updated[demandeId];
			this.unreadByDemande = updated;
			this.unreadCount = Math.max(0, this.unreadCount - count);
		}
	}
};
var msgStore = new MessageStore();
//#endregion
export { msgStore as t };
