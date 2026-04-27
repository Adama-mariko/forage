import "../../../../../../chunks/index-server.js";
import { a as derived, d as unsubscribe_stores, l as store_get, o as ensure_array_like, s as head } from "../../../../../../chunks/dev.js";
import "../../../../../../chunks/navigation.js";
import { t as page } from "../../../../../../chunks/stores.js";
import "../../../../../../chunks/toast.svelte.js";
import "../../../../../../chunks/api.js";
//#region src/routes/(app)/admin/utilisateurs/[id]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		derived(() => store_get($$store_subs ??= {}, "$page", page).params.id);
		let user = null;
		derived(() => user?.entreprise_profile ?? null);
		head("ij19ms", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Détail utilisateur — Admin</title>`);
			});
		});
		$$renderer.push(`<div class="max-w-4xl mx-auto"><div class="flex items-start gap-3 mb-6"><button class="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all text-slate-600 shrink-0"><span class="material-symbols-outlined" style="font-size: 20px;">arrow_back</span></button> <div class="flex-1 min-w-0"><h2 class="font-display font-black text-2xl lg:text-3xl tracking-tight text-slate-900 wrap-break-word">`);
		$$renderer.push("<!--[0-->");
		$$renderer.push(`Chargement…`);
		$$renderer.push(`<!--]--></h2> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></div> `);
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
