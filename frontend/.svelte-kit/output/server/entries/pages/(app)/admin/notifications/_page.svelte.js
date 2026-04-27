import { s as head } from "../../../../../chunks/dev.js";
import { t as NotificationsPage } from "../../../../../chunks/NotificationsPage.js";
//#region src/routes/(app)/admin/notifications/+page.svelte
function _page($$renderer) {
	head("3fuive", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Notifications — Admin</title>`);
		});
	});
	NotificationsPage($$renderer, {});
}
//#endregion
export { _page as default };
