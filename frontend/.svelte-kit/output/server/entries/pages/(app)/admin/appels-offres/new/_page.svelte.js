import "../../../../../../chunks/index-server.js";
import { H as escape_html, V as attr, a as derived, d as unsubscribe_stores, l as store_get, o as ensure_array_like, s as head } from "../../../../../../chunks/dev.js";
import "../../../../../../chunks/navigation.js";
import { t as page } from "../../../../../../chunks/stores.js";
import "../../../../../../chunks/toast.svelte.js";
import "../../../../../../chunks/api.js";
//#region src/routes/(app)/admin/appels-offres/new/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		derived(() => Number(store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("demandeId")));
		let selectedIds = [];
		let delaiReponse = "";
		head("uam7mo", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Lancer un appel d'offre — Admin</title>`);
			});
		});
		$$renderer.push(`<div class="max-w-3xl mx-auto"><div class="flex items-center gap-3 mb-6"><button class="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all text-slate-600"><span class="material-symbols-outlined" style="font-size: 20px;">arrow_back</span></button> <div class="flex-1"><h2 class="text-xl font-bold text-slate-900">${escape_html("Appel d'offre")}</h2> <p class="text-sm text-slate-500">Lancer un appel d'offre</p></div> <button class="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all shadow-sm"><span class="material-symbols-outlined icon-filled" style="font-size: 18px;">campaign</span> Lancer l'appel d'offre</button></div> <div class="bg-white rounded-2xl border border-slate-100 p-8 text-center text-slate-400">`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<span class="material-symbols-outlined" style="font-size: 48px;">campaign</span> <p class="text-slate-600 font-medium mt-3">Prêt à lancer l'appel d'offre</p> <p class="text-sm mt-1">Cliquez sur le bouton en haut à droite pour configurer et lancer</p>`);
		$$renderer.push(`<!--]--></div></div> `);
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<div class="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm flex items-center justify-center p-6"><div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] overflow-y-auto animate-fade-in-up"><div class="flex items-center justify-between px-6 py-4 border-b border-slate-100 sticky top-0 bg-white"><div><h3 class="text-lg font-bold text-slate-900">Lancer un appel d'offre</h3> <p class="text-xs text-slate-500 mt-0.5">${escape_html("")}</p></div> <button class="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-all text-slate-500"><span class="material-symbols-outlined" style="font-size: 20px;">close</span></button></div> <form class="p-6 space-y-5"><div><label class="block text-sm font-medium text-slate-700 mb-1.5" for="delai">Date limite de réponse *</label> <input id="delai" type="datetime-local"${attr("value", delaiReponse)} required="" class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm"/></div> <div><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-slate-700">Entreprises à inviter *</label> `);
		if (selectedIds.length > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<span class="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">${escape_html(selectedIds.length)} sélectionnée(s)</span>`);
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
				$$renderer.push(`<div class="skeleton h-12 rounded-xl"></div>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div> <div class="flex gap-3 pt-2"><button type="button" class="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-all">Annuler</button> <button type="submit"${attr("disabled", selectedIds.length === 0, true)} class="flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all disabled:opacity-60 flex items-center justify-center gap-2">`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<span class="material-symbols-outlined icon-filled" style="font-size: 18px;">campaign</span>`);
		$$renderer.push(`<!--]--> Lancer (${escape_html(selectedIds.length)})</button></div></form></div></div>`);
		$$renderer.push(`<!--]-->`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
export { _page as default };
