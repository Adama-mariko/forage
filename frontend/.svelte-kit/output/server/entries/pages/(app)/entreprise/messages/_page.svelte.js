import { s as head } from "../../../../../chunks/dev.js";
import { t as MessagesPage } from "../../../../../chunks/MessagesPage.js";
//#region src/routes/(app)/entreprise/messages/+page.svelte
function _page($$renderer) {
	head("10psvzg", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Messages — ForageCI</title>`);
		});
	});
	MessagesPage($$renderer, {});
}
//#endregion
export { _page as default };
