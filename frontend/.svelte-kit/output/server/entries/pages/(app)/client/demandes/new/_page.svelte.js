import { n as onDestroy } from "../../../../../../chunks/index-server.js";
import { H as escape_html, V as attr, i as bind_props, n as attr_class, s as head } from "../../../../../../chunks/dev.js";
import "../../../../../../chunks/navigation.js";
import "../../../../../../chunks/toast.svelte.js";
import "../../../../../../chunks/api.js";
import { t as FormPage } from "../../../../../../chunks/FormPage.js";
//#region src/lib/components/ui/MapPicker.svelte
function MapPicker($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { lat = null, lng = null, adresse = "" } = $$props;
		let map;
		let locating = false;
		onDestroy(() => {
			map?.remove();
		});
		$$renderer.push(`<div class="space-y-3"><div class="flex gap-2"><button type="button" class="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-600 text-white text-sm font-semibold shadow-md hover:bg-brand-700 transition-all"><span class="material-symbols-outlined icon-filled" style="font-size: 18px;">search</span> Rechercher une adresse</button> <button type="button"${attr("disabled", locating, true)} title="Ma position actuelle" class="px-4 py-3 rounded-xl bg-emerald-500 text-white text-sm font-semibold shadow-md hover:bg-emerald-600 transition-all disabled:opacity-60 flex items-center gap-2">`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<span class="material-symbols-outlined icon-filled" style="font-size: 18px;">my_location</span>`);
		$$renderer.push(`<!--]--> <span class="hidden sm:inline">Ma position</span></button></div> <div class="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md" style="height: 320px;"><div class="w-full h-full"></div> `);
		if (lat && lng) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="absolute bottom-3 left-3 z-[1000] bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-md border border-slate-100"><div class="flex items-center gap-1.5"><span class="material-symbols-outlined text-blue-500 icon-filled" style="font-size: 14px;">location_on</span> <span class="text-xs font-mono text-slate-700">${escape_html(lat.toFixed(5))}, ${escape_html(lng.toFixed(5))}</span></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="absolute top-3 right-3 z-[1000] bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-md border border-slate-100"><p class="text-xs text-slate-500">Cliquez sur la carte pour placer le marqueur</p></div></div></div> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			lat,
			lng,
			adresse
		});
	});
}
//#endregion
//#region src/routes/(app)/client/demandes/new/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let typeForage = "eau";
		let description = "";
		let localisationAdresse = "";
		let localisationLat = null;
		let localisationLng = null;
		let profondeurEstimee = "";
		let budgetMax = "";
		let delaiSouhaite = "";
		let loading = false;
		let errors = {};
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			head("ze3tz4", $$renderer, ($$renderer) => {
				$$renderer.title(($$renderer) => {
					$$renderer.push(`<title>Nouvelle demande — ForageCI</title>`);
				});
			});
			FormPage($$renderer, {
				maxWidth: "max-w-2xl",
				children: ($$renderer) => {
					$$renderer.push(`<div class="flex items-center gap-3 mb-6"><button class="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all"><span class="material-symbols-outlined" style="font-size: 20px;">arrow_back</span></button> <div><h2 class="text-xl font-bold text-slate-900">Nouvelle demande de forage</h2> <p class="text-sm text-slate-500">Votre budget reste strictement confidentiel</p></div></div> <form><div class="bg-white rounded-2xl border border-slate-100 p-6 space-y-6"><div><label class="block text-sm font-semibold text-slate-700 mb-2" for="typeForage"><span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-blue-500 icon-filled" style="font-size: 18px;">category</span> Type de forage *</span></label> <div class="relative">`);
					$$renderer.select({
						id: "typeForage",
						value: typeForage,
						class: "w-full appearance-none pl-4 pr-10 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-800 cursor-pointer"
					}, ($$renderer) => {
						$$renderer.option({ value: "eau" }, ($$renderer) => {
							$$renderer.push(`💧 Forage eau`);
						});
						$$renderer.option({ value: "geotechnique" }, ($$renderer) => {
							$$renderer.push(`🏔️ Géotechnique`);
						});
						$$renderer.option({ value: "petrolier" }, ($$renderer) => {
							$$renderer.push(`🛢️ Pétrolier`);
						});
						$$renderer.option({ value: "autre" }, ($$renderer) => {
							$$renderer.push(`⚙️ Autre`);
						});
					});
					$$renderer.push(` <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" style="font-size: 20px;">expand_more</span></div></div> <div class="border-t border-slate-100"></div> <div><label class="block text-sm font-semibold text-slate-700 mb-2" for="description"><span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-blue-500 icon-filled" style="font-size: 18px;">description</span> Description des besoins *</span></label> <textarea id="description" rows="4" required="" placeholder="Décrivez votre projet : usage prévu, contexte géologique si connu..."${attr_class("w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm resize-none transition-all", void 0, { "border-red-400": errors.description })}>`);
					const $$body = escape_html(description);
					if ($$body) $$renderer.push(`${$$body}`);
					$$renderer.push(`</textarea> `);
					if (errors.description) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<p class="text-red-500 text-xs mt-1">${escape_html(errors.description)}</p>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></div> <div class="border-t border-slate-100"></div> <div><div class="flex items-center justify-between mb-2"><span class="text-sm font-semibold text-slate-700 flex items-center gap-1.5"><span class="material-symbols-outlined text-blue-500 icon-filled" style="font-size: 18px;">location_on</span> Localisation du chantier *</span> <span class="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded-full">Carte interactive</span></div> <div class="relative mb-3"><span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" style="font-size: 20px;">edit_location</span> <input type="text"${attr("value", localisationAdresse)} placeholder="Ex: Cocody Riviera 3, Abidjan" required=""${attr_class("w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm transition-all", void 0, { "border-red-400": errors.localisationAdresse })}/></div> `);
					if (errors.localisationAdresse) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<p class="text-red-500 text-xs mb-2">${escape_html(errors.localisationAdresse)}</p>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--> `);
					MapPicker($$renderer, {
						get lat() {
							return localisationLat;
						},
						set lat($$value) {
							localisationLat = $$value;
							$$settled = false;
						},
						get lng() {
							return localisationLng;
						},
						set lng($$value) {
							localisationLng = $$value;
							$$settled = false;
						},
						get adresse() {
							return localisationAdresse;
						},
						set adresse($$value) {
							localisationAdresse = $$value;
							$$settled = false;
						}
					});
					$$renderer.push(`<!----> `);
					if (localisationLat && localisationLng) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<div class="mt-2 flex items-center gap-2 text-xs text-slate-500"><span class="material-symbols-outlined text-emerald-500 icon-filled" style="font-size: 14px;">gps_fixed</span> GPS : ${escape_html(localisationLat.toFixed(6))}, ${escape_html(localisationLng.toFixed(6))}</div>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></div> <div class="border-t border-slate-100"></div> <div class="grid grid-cols-2 gap-4"><div><label class="block text-sm font-semibold text-slate-700 mb-2" for="profondeur"><span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-blue-500 icon-filled" style="font-size: 18px;">straighten</span> Profondeur (m)</span></label> <input id="profondeur" type="number"${attr("value", profondeurEstimee)} placeholder="Ex: 50" min="1" class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm"/> <p class="text-xs text-slate-400 mt-1">Optionnel</p></div> <div><label class="block text-sm font-semibold text-slate-700 mb-2" for="delai"><span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-blue-500 icon-filled" style="font-size: 18px;">calendar_today</span> Délai souhaité</span></label> <input id="delai" type="date"${attr("value", delaiSouhaite)} class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm"/> <p class="text-xs text-slate-400 mt-1">Optionnel</p></div></div> <div class="border-t border-slate-100"></div> <div><label class="block text-sm font-semibold text-slate-700 mb-2" for="budget"><span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-blue-500 icon-filled" style="font-size: 18px;">payments</span> Budget maximum (FCFA) * <span class="ml-1 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">🔒 Confidentiel</span></span></label> <input id="budget" type="number"${attr("value", budgetMax)} placeholder="Ex: 5 000 000" required="" min="1"${attr_class("w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm transition-all", void 0, { "border-red-400": errors.budgetMax })}/> `);
					if (errors.budgetMax) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<p class="text-red-500 text-xs mt-1">${escape_html(errors.budgetMax)}</p>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></div> <div class="border-t border-slate-100"></div> <div><label class="block text-sm font-semibold text-slate-700 mb-2"><span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-blue-500 icon-filled" style="font-size: 18px;">attach_file</span> Documents joints <span class="text-xs text-slate-400 font-normal ml-1">Optionnel</span></span></label> <label class="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all group"><span class="material-symbols-outlined text-slate-400 group-hover:text-blue-400 mb-1" style="font-size: 24px;">cloud_upload</span> <span class="text-sm text-slate-500">Glissez ou <span class="text-blue-600 font-medium">parcourir</span></span> <input type="file" multiple="" class="hidden" accept=".pdf,.jpg,.jpeg,.png,.dwg,.dxf,.doc,.docx,.zip"/></label> `);
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></div> <div class="flex gap-3 pt-2"><button type="button" class="flex-1 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all">Annuler</button> <button type="submit"${attr("disabled", loading, true)} class="flex-1 py-3.5 rounded-xl gradient-blue text-white font-semibold text-sm shadow-lg shadow-blue-500/30 hover:scale-[1.01] transition-all disabled:opacity-60 flex items-center justify-center gap-2">`);
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<span class="material-symbols-outlined icon-filled" style="font-size: 18px;">send</span> Soumettre`);
					$$renderer.push(`<!--]--></button></div></div></form>`);
				},
				$$slots: { default: true }
			});
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
	});
}
//#endregion
export { _page as default };
