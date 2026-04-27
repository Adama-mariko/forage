import "../../../../../../chunks/index-server.js";
import { H as escape_html, V as attr, a as derived, d as unsubscribe_stores, l as store_get, o as ensure_array_like, s as head } from "../../../../../../chunks/dev.js";
import "../../../../../../chunks/navigation.js";
import { t as page } from "../../../../../../chunks/stores.js";
import "../../../../../../chunks/toast.svelte.js";
import "../../../../../../chunks/api.js";
import "../../../../../../chunks/DownloadButton.js";
import "../../../../../../chunks/Badge.js";
//#region src/routes/(app)/admin/demandes/[id]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let demande = null;
		let acting = false;
		const id = derived(() => store_get($$store_subs ??= {}, "$page", page).params.id);
		[
			{
				statut: "en_attente",
				label: "Reçue",
				icon: "inbox"
			},
			{
				statut: "validee",
				label: "Validée",
				icon: "verified"
			},
			{
				statut: "appel_offre_lance",
				label: "AO lancé",
				icon: "campaign"
			},
			{
				statut: "offres_recues",
				label: "Offres reçues",
				icon: "inbox"
			},
			{
				statut: "offre_envoyee",
				label: "Offre envoyée",
				icon: "send"
			},
			{
				statut: "acceptee",
				label: "Acceptée",
				icon: "check_circle"
			},
			{
				statut: "cloturee",
				label: "Clôturée",
				icon: "lock"
			}
		].map((s) => s.statut);
		derived(() => 0);
		head("pn1okp", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Demande #${escape_html(id())} — Admin</title>`);
			});
		});
		$$renderer.push(`<div class="max-w-4xl mx-auto"><div class="flex items-center gap-3 mb-6"><button class="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all text-slate-600"><span class="material-symbols-outlined" style="font-size: 20px;">arrow_back</span></button> <div class="flex-1 min-w-0"><div class="flex items-center gap-2 flex-wrap"><h2 class="text-xl font-bold text-slate-900">${escape_html(`Demande #${id()}`)}</h2> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> `);
		if (demande?.statut === "en_attente") {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="flex gap-2 shrink-0"><button${attr("disabled", acting, true)} class="px-4 py-2 rounded-xl border border-red-200 text-red-600 font-semibold text-sm hover:bg-red-50 transition-all disabled:opacity-60">Rejeter</button> <button${attr("disabled", acting, true)} class="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all disabled:opacity-60 flex items-center gap-2">`);
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> Valider</button></div>`);
		} else if (demande?.statut === "acceptee") {
			$$renderer.push("<!--[1-->");
			$$renderer.push(`<button${attr("disabled", acting, true)} class="px-4 py-2 rounded-xl bg-slate-700 text-white font-semibold text-sm hover:bg-slate-800 transition-all disabled:opacity-60 flex items-center gap-2 shrink-0">`);
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> <span class="material-symbols-outlined icon-filled" style="font-size: 16px;">lock</span> Clôturer le dossier</button>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> `);
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
