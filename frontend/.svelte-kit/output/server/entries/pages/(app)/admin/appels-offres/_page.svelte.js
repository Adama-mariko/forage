import "../../../../../chunks/index-server.js";
import { H as escape_html, a as derived, d as unsubscribe_stores, l as store_get, o as ensure_array_like, s as head } from "../../../../../chunks/dev.js";
import "../../../../../chunks/navigation.js";
import { t as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/toast.svelte.js";
import "../../../../../chunks/api.js";
import "../../../../../chunks/DownloadButton.js";
//#region src/routes/(app)/admin/appels-offres/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		const id = derived(() => store_get($$store_subs ??= {}, "$page", page).params.id);
		let data = null;
		let selectedOffreId = null;
		const selectedOffre = derived(() => data?.comparatif?.find((o) => o.offre_id === selectedOffreId) ?? null);
		derived(() => (selectedOffre(), false));
		head("qgs3t5", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Comparatif des offres — Admin</title>`);
			});
		});
		$$renderer.push(`<div class="max-w-5xl mx-auto px-4 py-6"><div class="flex items-center gap-3 mb-6"><button class="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all text-slate-600"><span class="material-symbols-outlined" style="font-size: 20px;">arrow_back</span></button> <div><h2 class="text-xl font-bold text-slate-900">Comparatif des offres</h2> <p class="text-sm text-slate-500">${escape_html(`Appel d'offre #${id()}`)}</p></div></div> `);
		{
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="space-y-4"><!--[-->`);
			const each_array = ensure_array_like([
				1,
				2,
				3
			]);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				each_array[$$index];
				$$renderer.push(`<div class="skeleton h-32 rounded-2xl"></div>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
export { _page as default };
