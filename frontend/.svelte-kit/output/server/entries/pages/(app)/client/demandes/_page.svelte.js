import "../../../../../chunks/index-server.js";
import { H as escape_html, n as attr_class, o as ensure_array_like, s as head, u as stringify } from "../../../../../chunks/dev.js";
import "../../../../../chunks/navigation.js";
import "../../../../../chunks/api.js";
import "../../../../../chunks/Badge.js";
//#region src/routes/(app)/client/demandes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let filtreStatut = "";
		const statuts = [
			{
				value: "",
				label: "Toutes"
			},
			{
				value: "en_attente",
				label: "En attente"
			},
			{
				value: "validee",
				label: "Validée"
			},
			{
				value: "appel_offre_lance",
				label: "AO lancé"
			},
			{
				value: "offre_envoyee",
				label: "Offre reçue"
			},
			{
				value: "acceptee",
				label: "Acceptée"
			},
			{
				value: "refusee",
				label: "Refusée"
			}
		];
		head("2dofdh", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Mes demandes — ForageCI</title>`);
			});
		});
		$$renderer.push(`<div class="flex items-start lg:items-center justify-between mb-5 flex-wrap gap-3"><div class="min-w-0 flex-1"><h2 class="font-display font-black text-2xl lg:text-3xl tracking-tight text-slate-900">Mes <span class="italic font-light" style="font-family: 'Instrument Serif', 'Satoshi', serif; color: #b35d2e">demandes</span>.</h2> <p class="text-sm text-slate-500 mt-1">Historique de toutes vos demandes de forage.</p></div> <button class="flex items-center gap-2 px-4 lg:px-5 py-2.5 lg:py-3 rounded-xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 transition-all shadow-sm whitespace-nowrap"><span class="material-symbols-outlined icon-filled" style="font-size: 18px;">add</span> <span class="hidden sm:inline">Nouvelle demande</span> <span class="sm:hidden">Nouvelle</span></button></div> <div class="flex gap-2 flex-wrap mb-4"><!--[-->`);
		const each_array = ensure_array_like(statuts);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let s = each_array[$$index];
			$$renderer.push(`<button${attr_class(`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all border ${stringify(filtreStatut === s.value ? "bg-brand-600 text-white border-brand-600" : "bg-white text-slate-600 border-slate-200 hover:border-slate-300")}`)}>${escape_html(s.label)}</button>`);
		}
		$$renderer.push(`<!--]--></div> <div class="bg-white rounded-2xl border border-slate-100 overflow-hidden">`);
		{
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="p-5 space-y-3"><!--[-->`);
			const each_array_1 = ensure_array_like([
				1,
				2,
				3,
				4
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
