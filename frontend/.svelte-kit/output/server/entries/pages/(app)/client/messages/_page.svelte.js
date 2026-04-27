import { s as head } from "../../../../../chunks/dev.js";
import { t as MessagesPage } from "../../../../../chunks/MessagesPage.js";
//#region src/routes/(app)/client/messages/+page.svelte
function _page($$renderer) {
	head("1wdba4q", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Messages — ForageCI</title>`);
		});
	});
	MessagesPage($$renderer, {});
}
//#endregion
export { _page as default };
