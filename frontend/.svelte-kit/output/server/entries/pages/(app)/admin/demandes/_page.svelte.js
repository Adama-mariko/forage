import "../../../../../chunks/index-server.js";
import { H as escape_html, V as attr, o as ensure_array_like, s as head } from "../../../../../chunks/dev.js";
import "../../../../../chunks/api.js";
import "../../../../../chunks/Badge.js";
//#region src/routes/(app)/admin/demandes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let demandes = [];
		let filtreStatut = "";
		let filtreType = "";
		let filtreRegion = "";
		head("1syzv5t", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Gestion des demandes — Admin</title>`);
			});
		});
		$$renderer.push(`<div class="mb-5"><h2 class="text-xl font-bold text-slate-900">Gestion des demandes</h2> <p class="text-sm text-slate-500 mt-0.5">Vue centralisée — ${escape_html(demandes.length)} résultat${escape_html(demandes.length > 1 ? "s" : "")}</p></div> <div class="bg-white rounded-2xl border border-slate-100 p-4 mb-5"><div class="grid grid-cols-1 sm:grid-cols-3 gap-3"><div><label class="block text-xs font-medium text-slate-500 mb-1.5" for="filtreStatut">Statut</label> `);
		$$renderer.select({
			id: "filtreStatut",
			value: filtreStatut,
			class: "w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800"
		}, ($$renderer) => {
			$$renderer.option({ value: "" }, ($$renderer) => {
				$$renderer.push(`Tous les statuts`);
			});
			$$renderer.option({ value: "en_attente" }, ($$renderer) => {
				$$renderer.push(`En attente`);
			});
			$$renderer.option({ value: "validee" }, ($$renderer) => {
				$$renderer.push(`Validée`);
			});
			$$renderer.option({ value: "appel_offre_lance" }, ($$renderer) => {
				$$renderer.push(`AO lancé`);
			});
			$$renderer.option({ value: "offres_recues" }, ($$renderer) => {
				$$renderer.push(`Offres reçues`);
			});
			$$renderer.option({ value: "offre_envoyee" }, ($$renderer) => {
				$$renderer.push(`Offre envoyée`);
			});
			$$renderer.option({ value: "acceptee" }, ($$renderer) => {
				$$renderer.push(`Acceptée`);
			});
			$$renderer.option({ value: "refusee" }, ($$renderer) => {
				$$renderer.push(`Refusée`);
			});
		});
		$$renderer.push(`</div> <div><label class="block text-xs font-medium text-slate-500 mb-1.5" for="filtreType">Type de forage</label> `);
		$$renderer.select({
			id: "filtreType",
			value: filtreType,
			class: "w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800"
		}, ($$renderer) => {
			$$renderer.option({ value: "" }, ($$renderer) => {
				$$renderer.push(`Tous les types`);
			});
			$$renderer.option({ value: "eau" }, ($$renderer) => {
				$$renderer.push(`Eau`);
			});
			$$renderer.option({ value: "geotechnique" }, ($$renderer) => {
				$$renderer.push(`Géotechnique`);
			});
			$$renderer.option({ value: "petrolier" }, ($$renderer) => {
				$$renderer.push(`Pétrolier`);
			});
			$$renderer.option({ value: "autre" }, ($$renderer) => {
				$$renderer.push(`Autre`);
			});
		});
		$$renderer.push(`</div> <div><label class="block text-xs font-medium text-slate-500 mb-1.5" for="filtreRegion">Région</label> <div class="relative"><span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style="font-size: 16px;">search</span> <input id="filtreRegion" type="text"${attr("value", filtreRegion)} placeholder="Ex: Abidjan" class="w-full pl-8 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white text-sm"/></div></div></div></div> <div class="bg-white rounded-2xl border border-slate-100 overflow-hidden">`);
		{
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="p-5 space-y-3"><!--[-->`);
			const each_array = ensure_array_like([
				1,
				2,
				3,
				4
			]);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				each_array[$$index];
				$$renderer.push(`<div class="skeleton h-14 rounded-xl"></div>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div>`);
	});
}
//#endregion
export { _page as default };
