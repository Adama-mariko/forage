import { s as head } from "../../../../../chunks/dev.js";
import { t as MessagesPage } from "../../../../../chunks/MessagesPage.js";
//#region src/routes/(app)/admin/messages/+page.svelte
function _page($$renderer) {
	head("1piug90", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Messages — Admin</title>`);
		});
	});
	MessagesPage($$renderer, {});
}
//#endregion
export { _page as default };
