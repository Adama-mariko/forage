import "../../../../../../chunks/index-server.js";
import { H as escape_html, a as derived, d as unsubscribe_stores, l as store_get, o as ensure_array_like, s as head } from "../../../../../../chunks/dev.js";
import "../../../../../../chunks/navigation.js";
import { t as page } from "../../../../../../chunks/stores.js";
import "../../../../../../chunks/toast.svelte.js";
import "../../../../../../chunks/api.js";
import "../../../../../../chunks/DownloadButton.js";
import "../../../../../../chunks/Badge.js";
//#region src/routes/(app)/entreprise/appels-offres/[id]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		const id = derived(() => store_get($$store_subs ??= {}, "$page", page).params.id);
		let ao = null;
		const titreDemande = derived(() => ao?.demande?.localisationAdresse ?? ao?.demande?.localisation_adresse ?? `AO #${id()}`);
		head("790pab", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Appel d'offre #${escape_html(id())} — ForageCI</title>`);
			});
		});
		$$renderer.push(`<div class="max-w-3xl mx-auto"><div class="flex items-center justify-between gap-3 mb-6"><div class="flex items-center gap-3"><button class="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all text-slate-600"><span class="material-symbols-outlined" style="font-size: 20px;">arrow_back</span></button> <div><h2 class="text-xl font-bold text-slate-900">${escape_html(titreDemande())}</h2> <p class="text-sm text-slate-500">Appel d'offre — ${escape_html(ao?.demande?.typeForage ?? ao?.demande?.type_forage ?? "")}</p></div></div> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> `);
		{
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="space-y-4"><!--[-->`);
			const each_array = ensure_array_like([1, 2]);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				each_array[$$index];
				$$renderer.push(`<div class="skeleton h-32 rounded-2xl"></div>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
export { _page as default };
