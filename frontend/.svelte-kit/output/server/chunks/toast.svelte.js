import "./dev.js";
//#region src/lib/stores/toast.svelte.ts
var ToastStore = class {
	toasts = [];
	add(toast) {
		const id = Math.random().toString(36).slice(2);
		const duration = toast.duration ?? 4e3;
		this.toasts = [...this.toasts, {
			...toast,
			id
		}];
		if (duration > 0) setTimeout(() => this.remove(id), duration);
		return id;
	}
	remove(id) {
		this.toasts = this.toasts.filter((t) => t.id !== id);
	}
	success(title, message) {
		return this.add({
			type: "success",
			title,
			message
		});
	}
	error(title, message) {
		return this.add({
			type: "error",
			title,
			message,
			duration: 6e3
		});
	}
	warning(title, message) {
		return this.add({
			type: "warning",
			title,
			message
		});
	}
	info(title, message) {
		return this.add({
			type: "info",
			title,
			message
		});
	}
};
var toast = new ToastStore();
//#endregion
export { toast as t };
