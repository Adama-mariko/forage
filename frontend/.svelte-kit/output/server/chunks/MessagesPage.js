import { n as onDestroy } from "./index-server.js";
import { n as attr_class, o as ensure_array_like, u as stringify } from "./dev.js";
import "./auth2.svelte.js";
import "./toast.svelte.js";
import "./api.js";
import "./messages.svelte.js";
//#region src/lib/components/ui/MessagesPage.svelte
function MessagesPage($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		onDestroy(() => {});
		$$renderer.push(`<div class="flex flex-col lg:flex-row gap-4 lg:gap-6 h-[calc(100vh-180px)]"><div${attr_class(`w-full lg:w-72 lg:shrink-0 bg-white rounded-2xl card-shadow overflow-hidden flex-col ${stringify("flex")}`)}><div class="px-4 py-3.5 border-b border-slate-100"><h3 class="font-display font-bold text-slate-900">Conversations</h3> <p class="text-xs text-slate-400 mt-0.5">Mise à jour automatique</p></div> <div class="flex-1 overflow-y-auto">`);
		{
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="p-4 space-y-2"><!--[-->`);
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
		$$renderer.push(`<!--]--></div></div> <div${attr_class(`flex-1 bg-white rounded-2xl card-shadow overflow-hidden flex-col ${stringify("hidden lg:flex")}`)}>`);
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<div class="flex-1 flex flex-col items-center justify-center text-slate-400"><div class="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-4"><span class="material-symbols-outlined text-brand-400" style="font-size: 32px;">chat</span></div> <p class="font-medium text-slate-500">Sélectionnez une conversation</p> <p class="text-sm mt-1">pour voir les messages</p></div>`);
		$$renderer.push(`<!--]--></div></div>`);
	});
}
//#endregion
export { MessagesPage as t };
