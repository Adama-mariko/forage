import { s as head } from "../../../../../chunks/dev.js";
import { t as NotificationsPage } from "../../../../../chunks/NotificationsPage.js";
//#region src/routes/(app)/entreprise/notifications/+page.svelte
function _page($$renderer) {
	head("n5idp6", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Notifications — ForageCI</title>`);
		});
	});
	NotificationsPage($$renderer, {});
}
//#endregion
export { _page as default };
