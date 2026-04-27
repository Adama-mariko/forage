import { H as escape_html, V as attr, n as attr_class, o as ensure_array_like, s as head, u as stringify } from "../../../../chunks/dev.js";
import "../../../../chunks/navigation.js";
import "../../../../chunks/toast.svelte.js";
import "../../../../chunks/api.js";
//#region src/routes/(auth)/register-entreprise/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let email = "";
		let telephone = "";
		let password = "";
		let passwordConfirmation = "";
		let raisonSociale = "";
		let rccm = "";
		let domaines = [];
		let zonesGeographiques = "";
		let loading = false;
		let errors = {};
		const domainesOptions = [
			{
				value: "eau",
				label: "Forage eau",
				icon: "water_drop"
			},
			{
				value: "geotechnique",
				label: "Géotechnique",
				icon: "terrain"
			},
			{
				value: "petrolier",
				label: "Pétrolier",
				icon: "oil_barrel"
			},
			{
				value: "autre",
				label: "Autre",
				icon: "more_horiz"
			}
		];
		head("1p4nebs", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Inscription Entreprise — ForageCI</title>`);
			});
		});
		$$renderer.push(`<div class="lg:hidden flex items-center gap-2.5 mb-10"><div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background-color: #1e3fff"><span class="material-symbols-outlined text-white icon-filled" style="font-size: 20px;">water_drop</span></div> <span class="font-display font-black text-xl tracking-tight text-slate-900">ForageCI</span></div> <div class="mb-8"><h2 class="font-display font-black text-4xl tracking-tight leading-[1.05] text-slate-900">Espace <span style="color: #b35d2e">prestataire</span>.</h2> <p class="text-slate-500 mt-3 text-base">Votre compte sera activé après validation par notre équipe.</p></div> <form class="space-y-4"><div><label class="block text-sm font-medium text-slate-700 mb-1.5">Raison sociale *</label> <div class="relative"><span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" style="font-size: 20px;">business</span> <input type="text"${attr("value", raisonSociale)} placeholder="Forage Pro SARL" required=""${attr_class("w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm transition-all", void 0, { "border-red-400": errors.raisonSociale })}/></div> `);
		if (errors.raisonSociale) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-red-500 text-xs mt-1">${escape_html(errors.raisonSociale)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <div class="grid grid-cols-2 gap-3"><div><label class="block text-sm font-medium text-slate-700 mb-1.5">Email *</label> <div class="relative"><span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" style="font-size: 20px;">mail</span> <input type="email"${attr("value", email)} placeholder="contact@..." required=""${attr_class("w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm transition-all", void 0, { "border-red-400": errors.email })}/></div> `);
		if (errors.email) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-red-500 text-xs mt-1">${escape_html(errors.email)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <div><label class="block text-sm font-medium text-slate-700 mb-1.5">Téléphone *</label> <div class="relative"><span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" style="font-size: 20px;">phone</span> <input type="tel"${attr("value", telephone)} placeholder="0700000000" required=""${attr_class("w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm transition-all", void 0, { "border-red-400": errors.telephone })}/></div> `);
		if (errors.telephone) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-red-500 text-xs mt-1">${escape_html(errors.telephone)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></div> <div><label class="block text-sm font-medium text-slate-700 mb-1.5">RCCM (optionnel)</label> <div class="relative"><span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" style="font-size: 20px;">badge</span> <input type="text"${attr("value", rccm)} placeholder="RC/ABJ/2024/001" class="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm transition-all"/></div></div> <div><label class="block text-sm font-medium text-slate-700 mb-2">Domaines d'intervention *</label> <div class="grid grid-cols-2 gap-2"><!--[-->`);
		const each_array = ensure_array_like(domainesOptions);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let opt = each_array[$$index];
			$$renderer.push(`<button type="button"${attr_class(`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all ${stringify(domaines.includes(opt.value) ? "border-blue-500 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-600 hover:border-blue-300")}`)}><span class="material-symbols-outlined icon-filled" style="font-size: 18px;">${escape_html(opt.icon)}</span> ${escape_html(opt.label)} `);
			if (domaines.includes(opt.value)) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="material-symbols-outlined ml-auto text-blue-500 icon-filled" style="font-size: 16px;">check_circle</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></button>`);
		}
		$$renderer.push(`<!--]--></div> `);
		if (errors.domaines) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-red-500 text-xs mt-1">${escape_html(errors.domaines)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <div><label class="block text-sm font-medium text-slate-700 mb-1.5">Zones géographiques * <span class="text-slate-400 font-normal">(séparées par virgule)</span></label> <div class="relative"><span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" style="font-size: 20px;">location_on</span> <input type="text"${attr("value", zonesGeographiques)} placeholder="Abidjan, Bouaké, Yamoussoukro"${attr_class("w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm transition-all", void 0, { "border-red-400": errors.zonesGeographiques })}/></div> `);
		if (errors.zonesGeographiques) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-red-500 text-xs mt-1">${escape_html(errors.zonesGeographiques)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <div class="grid grid-cols-2 gap-3"><div><label class="block text-sm font-medium text-slate-700 mb-1.5">Mot de passe *</label> <div class="relative"><span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" style="font-size: 20px;">lock</span> <input${attr("type", "password")}${attr("value", password)} placeholder="Min. 6 car." required=""${attr_class("w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 bg-white text-sm transition-all", void 0, { "border-red-400": errors.password })}/> <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"><span class="material-symbols-outlined" style="font-size: 18px;">${escape_html("visibility")}</span></button></div> `);
		if (errors.password) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-red-500 text-xs mt-1">${escape_html(errors.password)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <div><label class="block text-sm font-medium text-slate-700 mb-1.5">Confirmation *</label> <div class="relative"><span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" style="font-size: 20px;">lock_reset</span> <input${attr("type", "password")}${attr("value", passwordConfirmation)} placeholder="••••••" required=""${attr_class("w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm transition-all", void 0, { "border-red-400": errors.passwordConfirmation })}/></div></div></div> <button type="submit"${attr("disabled", loading, true)} class="w-full py-4 rounded-2xl text-white font-semibold text-sm shadow-xl hover:scale-[1.01] transition-all disabled:opacity-60 flex items-center justify-center gap-2" style="background-color: #b35d2e">`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<span class="material-symbols-outlined icon-filled" style="font-size: 18px;">arrow_forward</span> Soumettre la demande`);
		$$renderer.push(`<!--]--></button></form> <p class="mt-5 text-center text-sm text-slate-500">Déjà un compte ? <a href="/login" class="text-brand-600 font-semibold hover:text-brand-700">Se connecter</a></p>`);
	});
}
//#endregion
export { _page as default };
