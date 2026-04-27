import "../../../../../chunks/index-server.js";
import { H as escape_html, a as derived, o as ensure_array_like, s as head } from "../../../../../chunks/dev.js";
import { t as auth } from "../../../../../chunks/auth2.svelte.js";
import "../../../../../chunks/navigation.js";
import "../../../../../chunks/api.js";
import { t as StatCard } from "../../../../../chunks/StatCard.js";
import "../../../../../chunks/Badge.js";
//#region src/routes/(app)/entreprise/dashboard/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let appelsOffres = [];
		let mesOffres = [];
		const stats = derived(() => () => ({
			total: appelsOffres.length,
			ouverts: appelsOffres.filter((a) => !a.compte_a_rebours?.expire).length,
			soumises: mesOffres.filter((o) => o.statut === "soumise").length,
			retenues: mesOffres.filter((o) => o.statut === "retenue").length
		}));
		head("656n7y", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Tableau de bord — ForageCI</title>`);
			});
		});
		$$renderer.push(`<div class="mb-6 flex items-start lg:items-center justify-between flex-wrap gap-3"><div class="min-w-0 flex-1"><h2 class="font-display font-black text-2xl lg:text-3xl tracking-tight text-slate-900 wrap-break-word">Bonjour, <span class="italic font-light" style="font-family: 'Instrument Serif', 'Satoshi', serif; color: #b35d2e">${escape_html(auth.user?.fullName?.split(" ")[0] ?? "bienvenue")}</span>.</h2> <p class="text-sm text-slate-500 mt-1">Gérez vos appels d'offres et suivez vos soumissions.</p></div> <a href="/entreprise/appels-offres" class="flex items-center gap-2 px-4 lg:px-5 py-2.5 lg:py-3 rounded-xl text-white font-semibold text-sm transition-all shadow-sm hover:opacity-90 whitespace-nowrap" style="background-color: #b35d2e"><span class="material-symbols-outlined icon-filled" style="font-size: 18px;">campaign</span> <span class="hidden sm:inline">Voir les appels d'offres</span> <span class="sm:hidden">Appels d'offres</span></a></div> <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">`);
		StatCard($$renderer, {
			title: "Appels d'offres",
			value: stats()().total,
			icon: "campaign",
			color: "blue"
		});
		$$renderer.push(`<!----> `);
		StatCard($$renderer, {
			title: "En cours",
			value: stats()().ouverts,
			icon: "lock_open",
			color: "purple"
		});
		$$renderer.push(`<!----> `);
		StatCard($$renderer, {
			title: "Offres soumises",
			value: stats()().soumises,
			icon: "send",
			color: "orange"
		});
		$$renderer.push(`<!----> `);
		StatCard($$renderer, {
			title: "Offres retenues",
			value: stats()().retenues,
			icon: "star",
			color: "green"
		});
		$$renderer.push(`<!----></div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-5"><div class="bg-white rounded-2xl border border-slate-100"><div class="px-5 py-4 border-b border-slate-100 flex items-center justify-between"><h3 class="font-display font-bold text-slate-900">Appels d'offres reçus</h3> <a href="/entreprise/appels-offres" class="text-sm font-semibold transition-colors hover:opacity-80" style="color: #b35d2e">Voir tout</a></div> `);
		{
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="p-5 space-y-2"><!--[-->`);
			const each_array = ensure_array_like([
				1,
				2,
				3
			]);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				each_array[$$index];
				$$renderer.push(`<div class="skeleton h-12 rounded-xl"></div>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div> <div class="bg-white rounded-2xl border border-slate-100"><div class="px-5 py-4 border-b border-slate-100 flex items-center justify-between"><h3 class="font-display font-bold text-slate-900">Mes offres soumises</h3> <a href="/entreprise/mes-offres" class="text-sm text-brand-600 hover:text-brand-700 font-semibold">Voir tout</a></div> `);
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
		$$renderer.push(`<!--]--></div></div>`);
	});
}
//#endregion
export { _page as default };
