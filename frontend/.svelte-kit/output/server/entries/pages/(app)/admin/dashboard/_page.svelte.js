import { n as onDestroy } from "../../../../../chunks/index-server.js";
import { H as escape_html, a as derived, n as attr_class, o as ensure_array_like, r as attr_style, s as head, u as stringify } from "../../../../../chunks/dev.js";
import { t as auth } from "../../../../../chunks/auth2.svelte.js";
import "../../../../../chunks/api.js";
import "../../../../../chunks/StatCard.js";
import "../../../../../chunks/Badge.js";
//#region src/lib/components/ui/DemandMap.svelte
function DemandMap($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { points = [] } = $$props;
		let map;
		onDestroy(() => map?.remove());
		$$renderer.push(`<div class="w-full h-full"></div>`);
	});
}
//#endregion
//#region src/routes/(app)/admin/dashboard/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let pendingEntreprises = [];
		let allDemandes = [];
		let periode = "mois";
		const mapPoints = derived(() => allDemandes.filter((d) => d.localisationLat && d.localisationLng).map((d) => {
			console.log("Map point:", d.id, d.localisationLat, d.localisationLng, d.localisationAdresse);
			return {
				id: d.id,
				lat: Number(d.localisationLat),
				lng: Number(d.localisationLng),
				adresse: d.localisationAdresse ?? "",
				statut: d.statut ?? "",
				typeForage: d.typeForage ?? ""
			};
		}));
		head("nlizuu", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Tableau de bord — Admin ForageCI</title>`);
			});
		});
		$$renderer.push(`<div class="mb-6 flex items-start lg:items-center justify-between flex-wrap gap-3"><div class="min-w-0 flex-1"><h2 class="font-display font-black text-2xl lg:text-3xl tracking-tight text-slate-900 wrap-break-word">Bonjour, <span class="italic font-light" style="font-family: 'Instrument Serif', 'Satoshi', serif; color: #b35d2e">${escape_html(auth.user?.fullName?.split(" ")[0] ?? "Admin")}</span>.</h2> <p class="text-sm text-slate-500 mt-1">Vue d'ensemble de la plateforme.</p></div> <div class="flex items-center gap-2 flex-wrap"><div class="flex gap-1 bg-slate-100 rounded-xl p-1"><!--[-->`);
		const each_array = ensure_array_like([
			["semaine", "Sem."],
			["mois", "Mois"],
			["annee", "An."]
		]);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let [val, label] = each_array[$$index];
			$$renderer.push(`<button${attr_class(`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${stringify(periode === val ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700")}`)}>${escape_html(label)}</button>`);
		}
		$$renderer.push(`<!--]--></div> <a href="/admin/demandes" class="flex items-center gap-2 px-4 lg:px-5 py-2.5 lg:py-3 rounded-xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 transition-all shadow-sm whitespace-nowrap"><span class="material-symbols-outlined icon-filled" style="font-size: 18px;">assignment</span> <span class="hidden sm:inline">Gérer les demandes</span> <span class="sm:hidden">Gérer</span></a></div></div> `);
		{
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6"><!--[-->`);
			const each_array_1 = ensure_array_like([
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8
			]);
			for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
				each_array_1[$$index_1];
				$$renderer.push(`<div class="skeleton h-24 rounded-2xl"></div>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--> <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5"><div class="lg:col-span-2 bg-white rounded-2xl border border-slate-100 overflow-hidden"><div class="px-5 py-4 border-b border-slate-100 flex items-center justify-between"><h3 class="font-display font-bold text-slate-900">Demandes récentes</h3> <a href="/admin/demandes" class="text-sm text-brand-600 hover:text-brand-700 font-semibold">Voir tout</a></div> `);
		{
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="p-5 space-y-2"><!--[-->`);
			const each_array_2 = ensure_array_like([
				1,
				2,
				3
			]);
			for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
				each_array_2[$$index_2];
				$$renderer.push(`<div class="skeleton h-12 rounded-xl"></div>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div> <div class="bg-white rounded-2xl border border-slate-100 overflow-hidden"><div class="px-5 py-4 border-b border-slate-100 flex items-center justify-between"><h3 class="font-display font-bold text-slate-900">Validation entreprises</h3> `);
		if (pendingEntreprises.length > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<span class="text-xs px-2.5 py-1 rounded-full font-semibold border" style="background-color: #fbf3ec; color: #743820; border-color: #e9c2a3">${escape_html(pendingEntreprises.length)} en attente</span>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> `);
		{
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="p-5 space-y-2"><!--[-->`);
			const each_array_4 = ensure_array_like([
				1,
				2,
				3
			]);
			for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
				each_array_4[$$index_4];
				$$renderer.push(`<div class="skeleton h-14 rounded-xl"></div>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-5"><div class="lg:col-span-2 bg-white rounded-2xl border border-slate-100 overflow-hidden"><div class="px-5 py-4 border-b border-slate-100 flex items-center justify-between flex-wrap gap-2"><div><h3 class="font-display font-bold text-slate-900">Répartition géographique</h3> <p class="text-xs text-slate-400 mt-0.5">${escape_html(mapPoints().length)} chantier${escape_html(mapPoints().length > 1 ? "s" : "")} localisé${escape_html(mapPoints().length > 1 ? "s" : "")}</p></div> <div class="flex flex-wrap items-center gap-x-3 gap-y-1"><!--[-->`);
		const each_array_6 = ensure_array_like([
			{
				color: "#f59e0b",
				label: "En attente"
			},
			{
				color: "#3b82f6",
				label: "Validée"
			},
			{
				color: "#6366f1",
				label: "AO lancé"
			},
			{
				color: "#06b6d4",
				label: "Offre envoyée"
			},
			{
				color: "#10b981",
				label: "Acceptée"
			},
			{
				color: "#ef4444",
				label: "Refusée"
			}
		]);
		for (let $$index_6 = 0, $$length = each_array_6.length; $$index_6 < $$length; $$index_6++) {
			let leg = each_array_6[$$index_6];
			$$renderer.push(`<div class="flex items-center gap-1"><div class="w-2.5 h-2.5 rounded-full shrink-0"${attr_style(`background:${stringify(leg.color)}`)}></div> <span class="text-xs text-slate-500">${escape_html(leg.label)}</span></div>`);
		}
		$$renderer.push(`<!--]--></div></div> <div style="height: 380px;" class="relative">`);
		if (mapPoints().length > 0) {
			$$renderer.push("<!--[0-->");
			DemandMap($$renderer, { points: mapPoints() });
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-slate-50"><div class="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-3 shadow-sm"><span class="material-symbols-outlined text-slate-400" style="font-size: 28px;">map</span></div> <p class="text-sm font-medium text-slate-500">Aucune demande géolocalisée</p> <p class="text-xs text-slate-400 mt-1 text-center max-w-xs">Les demandes avec coordonnées GPS (saisies via la carte) apparaîtront ici</p></div>`);
		}
		$$renderer.push(`<!--]--></div></div> <div class="bg-white rounded-2xl border border-slate-100 overflow-hidden"><div class="px-5 py-4 border-b border-slate-100"><h3 class="font-display font-bold text-slate-900">Par type de forage</h3> <p class="text-xs text-slate-400 mt-0.5">Répartition des demandes</p></div> `);
		{
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="p-5 space-y-3"><!--[-->`);
			const each_array_7 = ensure_array_like([
				1,
				2,
				3,
				4
			]);
			for (let $$index_7 = 0, $$length = each_array_7.length; $$index_7 < $$length; $$index_7++) {
				each_array_7[$$index_7];
				$$renderer.push(`<div class="skeleton h-10 rounded-xl"></div>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div></div>`);
	});
}
//#endregion
export { _page as default };
