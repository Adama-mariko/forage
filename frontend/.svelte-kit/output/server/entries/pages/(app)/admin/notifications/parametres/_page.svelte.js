import "../../../../../../chunks/index-server.js";
import { a as derived, o as ensure_array_like, s as head } from "../../../../../../chunks/dev.js";
import "../../../../../../chunks/navigation.js";
import "../../../../../../chunks/toast.svelte.js";
import "../../../../../../chunks/api.js";
//#region src/routes/(app)/admin/notifications/parametres/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let settings = [];
		const meta = {
			nouvelle_demande: {
				label: "Nouvelle demande",
				description: "Quand un client soumet une nouvelle demande de forage.",
				icon: "assignment_add",
				group: "demande"
			},
			demande_validee: {
				label: "Demande validée",
				description: "Confirmation envoyée au client après validation de sa demande.",
				icon: "verified",
				group: "demande"
			},
			demande_rejetee: {
				label: "Demande rejetée",
				description: "Notification envoyée au client si sa demande est rejetée.",
				icon: "block",
				group: "demande"
			},
			appel_offre_lance: {
				label: "Appel d'offre lancé",
				description: "Notification aux entreprises invitées à soumettre une offre.",
				icon: "campaign",
				group: "offre"
			},
			offre_soumise: {
				label: "Offre soumise",
				description: "Confirmation envoyée à l'entreprise après soumission.",
				icon: "send",
				group: "offre"
			},
			offre_finale_envoyee: {
				label: "Offre finale envoyée",
				description: "Notification au client de la réception de l'offre finale.",
				icon: "mark_email_read",
				group: "offre"
			},
			offre_acceptee: {
				label: "Offre acceptée",
				description: "Notification à l'entreprise dont l'offre a été retenue.",
				icon: "check_circle",
				group: "offre"
			},
			offre_refusee: {
				label: "Offre refusée",
				description: "Notification aux entreprises non retenues.",
				icon: "cancel",
				group: "offre"
			},
			compte_valide: {
				label: "Compte entreprise validé",
				description: "Notification à l'entreprise après validation de son compte.",
				icon: "how_to_reg",
				group: "compte"
			},
			nouveau_message: {
				label: "Nouveau message",
				description: "Notification à chaque nouveau message reçu dans la messagerie.",
				icon: "chat_bubble",
				group: "message"
			}
		};
		derived(() => () => {
			const out = {
				demande: [],
				offre: [],
				compte: [],
				message: []
			};
			for (const s of settings) out[meta[s.type]?.group ?? "demande"].push(s);
			return out;
		});
		derived(() => () => ({
			total: settings.length,
			actifs: settings.filter((s) => s.actif).length,
			desactives: settings.filter((s) => !s.actif).length
		}));
		head("1u2wxkd", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Paramètres notifications — Admin</title>`);
			});
		});
		$$renderer.push(`<div class="max-w-4xl mx-auto"><div class="flex items-start gap-3 mb-6"><button class="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all text-slate-600 shrink-0"><span class="material-symbols-outlined" style="font-size: 20px;">arrow_back</span></button> <div class="flex-1 min-w-0"><h2 class="font-display font-black text-2xl lg:text-3xl tracking-tight text-slate-900 wrap-break-word">Paramètres des <span class="italic font-light" style="font-family: 'Instrument Serif', 'Satoshi', serif; color: #b35d2e">notifications</span>.</h2> <p class="text-sm text-slate-500 mt-1">Activez ou désactivez chaque type de notification globalement.</p></div></div> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		{
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="space-y-4"><!--[-->`);
			const each_array = ensure_array_like([
				1,
				2,
				3,
				4
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
export { _page as default };
