import "./index-server.js";
import { o as ensure_array_like } from "./dev.js";
import "./auth2.svelte.js";
import "./toast.svelte.js";
import "./api.js";
//#region src/lib/components/ui/ProfilePage.svelte
function ProfilePage($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<div class="max-w-3xl mx-auto"><div class="mb-8"><h2 class="font-display font-black text-2xl lg:text-3xl tracking-tight text-slate-900">Mon <span class="italic font-light" style="font-family: 'Instrument Serif', 'Satoshi', serif; color: #b35d2e">profil</span>.</h2> <p class="text-sm text-slate-500 mt-1">Gérez vos informations personnelles et vos préférences.</p></div> `);
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
				$$renderer.push(`<div class="skeleton h-24 rounded-2xl"></div>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div>`);
	});
}
//#endregion
export { ProfilePage as t };
