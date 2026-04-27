import { s as head } from "../../../../../chunks/dev.js";
import { t as NotificationsPage } from "../../../../../chunks/NotificationsPage.js";
//#region src/routes/(app)/client/notifications/+page.svelte
function _page($$renderer) {
	head("1py3h5s", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Notifications — ForageCI</title>`);
		});
	});
	NotificationsPage($$renderer, {});
}
//#endregion
export { _page as default };
