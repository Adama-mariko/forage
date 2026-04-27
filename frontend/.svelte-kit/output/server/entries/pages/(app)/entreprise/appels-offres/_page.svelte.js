import { n as onDestroy } from "../../../../../chunks/index-server.js";
import { o as ensure_array_like, s as head } from "../../../../../chunks/dev.js";
import "../../../../../chunks/api.js";
import "../../../../../chunks/Badge.js";
//#region src/routes/(app)/entreprise/appels-offres/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let timer;
		onDestroy(() => clearInterval(timer));
		head("d4xd4r", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Appels d'offres — ForageCI</title>`);
			});
		});
		$$renderer.push(`<div class="mb-5"><h2 class="text-xl font-bold text-slate-900">Appels d'offres reçus</h2> <p class="text-sm text-slate-500 mt-0.5">Invitations à soumettre une offre</p></div> <div class="bg-white rounded-2xl border border-slate-100 overflow-hidden">`);
		{
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="p-5 space-y-3"><!--[-->`);
			const each_array = ensure_array_like([
				1,
				2,
				3
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
