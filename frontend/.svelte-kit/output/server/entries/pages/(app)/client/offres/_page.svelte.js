import "../../../../../chunks/index-server.js";
import { H as escape_html, o as ensure_array_like, s as head } from "../../../../../chunks/dev.js";
import "../../../../../chunks/navigation.js";
import "../../../../../chunks/toast.svelte.js";
import "../../../../../chunks/api.js";
import "../../../../../chunks/Badge.js";
//#region src/routes/(app)/client/offres/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let offres = [];
		head("1x4emf", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Mes offres — ForageCI</title>`);
			});
		});
		$$renderer.push(`<div class="mb-5 flex items-center justify-between"><div><h2 class="text-xl font-bold text-slate-900">Mes offres reçues</h2> <p class="text-sm text-slate-500 mt-0.5">Offres finales préparées pour vos demandes</p></div> `);
		if (offres.length > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<span class="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">${escape_html(offres.length)} offre${escape_html(offres.length > 1 ? "s" : "")}</span>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> `);
		{
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="space-y-2"><!--[-->`);
			const each_array = ensure_array_like([
				1,
				2,
				3
			]);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				each_array[$$index];
				$$renderer.push(`<div class="skeleton h-20 rounded-xl"></div>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { _page as default };
