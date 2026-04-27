import "../../../../../chunks/index-server.js";
import { H as escape_html, V as attr, a as derived, o as ensure_array_like, s as head, u as stringify } from "../../../../../chunks/dev.js";
import { t as auth } from "../../../../../chunks/auth2.svelte.js";
import "../../../../../chunks/navigation.js";
import "../../../../../chunks/api.js";
import { t as StatCard } from "../../../../../chunks/StatCard.js";
import "../../../../../chunks/Badge.js";
//#region src/routes/(app)/client/dashboard/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let demandes = [];
		const stats = derived(() => () => ({
			total: demandes.length,
			enAttente: demandes.filter((d) => d.statut === "en_attente").length,
			enCours: demandes.filter((d) => [
				"validee",
				"appel_offre_lance",
				"offres_recues",
				"offre_envoyee"
			].includes(d.statut)).length,
			offresRecues: demandes.filter((d) => [
				"offre_envoyee",
				"acceptee",
				"refusee"
			].includes(d.statut)).length,
			aTraiter: demandes.filter((d) => d.statut === "offre_envoyee").length,
			acceptees: demandes.filter((d) => d.statut === "acceptee").length,
			refusees: demandes.filter((d) => d.statut === "refusee").length,
			cloturees: demandes.filter((d) => d.statut === "cloturee").length
		}));
		const demandesUrgentes = derived(() => demandes.filter((d) => d.statut === "offre_envoyee"));
		head("17c8kyk", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Tableau de bord — ForageCI</title>`);
			});
		});
		$$renderer.push(`<div class="mb-6 flex items-start lg:items-center justify-between flex-wrap gap-3"><div class="min-w-0 flex-1"><h2 class="font-display font-black text-2xl lg:text-3xl tracking-tight text-slate-900 wrap-break-word">Bonjour, <span class="italic font-light" style="font-family: 'Instrument Serif', 'Satoshi', serif; color: #b35d2e">${escape_html(auth.user?.fullName?.split(" ")[0] ?? "bienvenue")}</span>.</h2> <p class="text-sm text-slate-500 mt-1">Voici l'état de vos demandes de forage.</p></div> <button class="flex items-center gap-2 px-4 lg:px-5 py-2.5 lg:py-3 rounded-xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 transition-all shadow-sm whitespace-nowrap"><span class="material-symbols-outlined icon-filled" style="font-size: 18px;">add</span> <span class="hidden sm:inline">Nouvelle demande</span> <span class="sm:hidden">Nouvelle</span></button></div> `);
		if (demandesUrgentes().length > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="mb-5 p-5 rounded-2xl border" style="background-color: #fbf3ec; border-color: #e9c2a3"><div class="flex items-start gap-3"><span class="material-symbols-outlined icon-filled shrink-0 mt-0.5" style="font-size: 22px; color: #b35d2e">mark_email_read</span> <div class="flex-1"><p class="font-display font-bold text-base" style="color: #743820">${escape_html(demandesUrgentes().length === 1 ? "Une offre attend votre décision" : `${demandesUrgentes().length} offres attendent votre décision`)}</p> <p class="text-xs mt-1" style="color: #944923">Vous avez reçu une offre finale. Acceptez ou refusez depuis la page de la demande.</p> <div class="flex flex-wrap gap-2 mt-3"><!--[-->`);
			const each_array = ensure_array_like(demandesUrgentes());
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let d = each_array[$$index];
				$$renderer.push(`<a${attr("href", `/client/demandes/${stringify(d.id)}`)} class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-xs font-semibold transition-all hover:opacity-90" style="background-color: #b35d2e"><span class="material-symbols-outlined icon-filled" style="font-size: 14px;">water_drop</span> ${escape_html(d.localisationAdresse?.split(",")[0] ?? `Demande #${d.id}`)} <span class="material-symbols-outlined" style="font-size: 14px;">chevron_right</span></a>`);
			}
			$$renderer.push(`<!--]--></div></div></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3">`);
		StatCard($$renderer, {
			title: "Total",
			value: stats()().total,
			icon: "folder_open",
			color: "blue"
		});
		$$renderer.push(`<!----> `);
		StatCard($$renderer, {
			title: "En attente",
			value: stats()().enAttente,
			icon: "hourglass_empty",
			color: "orange"
		});
		$$renderer.push(`<!----> `);
		StatCard($$renderer, {
			title: "En cours",
			value: stats()().enCours,
			icon: "autorenew",
			color: "purple"
		});
		$$renderer.push(`<!----> `);
		StatCard($$renderer, {
			title: "Offres reçues",
			value: stats()().offresRecues,
			icon: "mark_email_read",
			color: "cyan",
			subtitle: stats()().aTraiter > 0 ? `${stats()().aTraiter} à traiter` : "Toutes traitées"
		});
		$$renderer.push(`<!----></div> <div class="grid grid-cols-3 gap-3 mb-6">`);
		StatCard($$renderer, {
			title: "Acceptées",
			value: stats()().acceptees,
			icon: "check_circle",
			color: "green"
		});
		$$renderer.push(`<!----> `);
		StatCard($$renderer, {
			title: "Refusées",
			value: stats()().refusees,
			icon: "cancel",
			color: "red"
		});
		$$renderer.push(`<!----> `);
		StatCard($$renderer, {
			title: "Clôturées",
			value: stats()().cloturees,
			icon: "lock",
			color: "blue"
		});
		$$renderer.push(`<!----></div> <div class="bg-white rounded-2xl border border-slate-100"><div class="px-5 py-4 border-b border-slate-100 flex items-center justify-between"><h3 class="font-display font-bold text-slate-900">Historique des demandes</h3> <a href="/client/demandes" class="text-sm text-brand-600 hover:text-brand-700 font-semibold">Voir tout</a></div> `);
		{
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="p-5 space-y-3"><!--[-->`);
			const each_array_1 = ensure_array_like([
				1,
				2,
				3
			]);
			for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
				each_array_1[$$index_1];
				$$renderer.push(`<div class="skeleton h-14 rounded-xl"></div>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div>`);
	});
}
//#endregion
export { _page as default };
