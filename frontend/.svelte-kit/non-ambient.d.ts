
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/(auth)" | "/(app)" | "/" | "/(app)/admin" | "/(app)/admin/appels-offres" | "/(app)/admin/appels-offres/new" | "/(app)/admin/appels-offres/[id]" | "/(app)/admin/appels-offres/[id]/comparatif" | "/(app)/admin/dashboard" | "/(app)/admin/demandes" | "/(app)/admin/demandes/[id]" | "/(app)/admin/demandes/[id]/offre-finale" | "/(app)/admin/messages" | "/(app)/admin/notifications" | "/(app)/admin/notifications/parametres" | "/(app)/admin/offres" | "/(app)/admin/profile" | "/(app)/admin/utilisateurs" | "/(app)/admin/utilisateurs/[id]" | "/(app)/client" | "/(app)/client/dashboard" | "/(app)/client/demandes" | "/(app)/client/demandes/new" | "/(app)/client/demandes/[id]" | "/(app)/client/messages" | "/(app)/client/notifications" | "/(app)/client/offres" | "/(app)/client/profile" | "/(app)/entreprise" | "/(app)/entreprise/appels-offres" | "/(app)/entreprise/appels-offres/[id]" | "/(app)/entreprise/dashboard" | "/(app)/entreprise/mes-offres" | "/(app)/entreprise/messages" | "/(app)/entreprise/notifications" | "/(app)/entreprise/profile" | "/(auth)/login" | "/(auth)/register-entreprise" | "/(auth)/register";
		RouteParams(): {
			"/(app)/admin/appels-offres/[id]": { id: string };
			"/(app)/admin/appels-offres/[id]/comparatif": { id: string };
			"/(app)/admin/demandes/[id]": { id: string };
			"/(app)/admin/demandes/[id]/offre-finale": { id: string };
			"/(app)/admin/utilisateurs/[id]": { id: string };
			"/(app)/client/demandes/[id]": { id: string };
			"/(app)/entreprise/appels-offres/[id]": { id: string }
		};
		LayoutParams(): {
			"/(auth)": Record<string, never>;
			"/(app)": { id?: string };
			"/": { id?: string };
			"/(app)/admin": { id?: string };
			"/(app)/admin/appels-offres": { id?: string };
			"/(app)/admin/appels-offres/new": Record<string, never>;
			"/(app)/admin/appels-offres/[id]": { id: string };
			"/(app)/admin/appels-offres/[id]/comparatif": { id: string };
			"/(app)/admin/dashboard": Record<string, never>;
			"/(app)/admin/demandes": { id?: string };
			"/(app)/admin/demandes/[id]": { id: string };
			"/(app)/admin/demandes/[id]/offre-finale": { id: string };
			"/(app)/admin/messages": Record<string, never>;
			"/(app)/admin/notifications": Record<string, never>;
			"/(app)/admin/notifications/parametres": Record<string, never>;
			"/(app)/admin/offres": Record<string, never>;
			"/(app)/admin/profile": Record<string, never>;
			"/(app)/admin/utilisateurs": { id?: string };
			"/(app)/admin/utilisateurs/[id]": { id: string };
			"/(app)/client": { id?: string };
			"/(app)/client/dashboard": Record<string, never>;
			"/(app)/client/demandes": { id?: string };
			"/(app)/client/demandes/new": Record<string, never>;
			"/(app)/client/demandes/[id]": { id: string };
			"/(app)/client/messages": Record<string, never>;
			"/(app)/client/notifications": Record<string, never>;
			"/(app)/client/offres": Record<string, never>;
			"/(app)/client/profile": Record<string, never>;
			"/(app)/entreprise": { id?: string };
			"/(app)/entreprise/appels-offres": { id?: string };
			"/(app)/entreprise/appels-offres/[id]": { id: string };
			"/(app)/entreprise/dashboard": Record<string, never>;
			"/(app)/entreprise/mes-offres": Record<string, never>;
			"/(app)/entreprise/messages": Record<string, never>;
			"/(app)/entreprise/notifications": Record<string, never>;
			"/(app)/entreprise/profile": Record<string, never>;
			"/(auth)/login": Record<string, never>;
			"/(auth)/register-entreprise": Record<string, never>;
			"/(auth)/register": Record<string, never>
		};
		Pathname(): "/" | "/admin/appels-offres" | "/admin/appels-offres/new" | `/admin/appels-offres/${string}/comparatif` & {} | "/admin/dashboard" | "/admin/demandes" | `/admin/demandes/${string}` & {} | `/admin/demandes/${string}/offre-finale` & {} | "/admin/messages" | "/admin/notifications" | "/admin/notifications/parametres" | "/admin/offres" | "/admin/profile" | "/admin/utilisateurs" | `/admin/utilisateurs/${string}` & {} | "/client/dashboard" | "/client/demandes" | "/client/demandes/new" | `/client/demandes/${string}` & {} | "/client/messages" | "/client/notifications" | "/client/offres" | "/client/profile" | "/entreprise/appels-offres" | `/entreprise/appels-offres/${string}` & {} | "/entreprise/dashboard" | "/entreprise/mes-offres" | "/entreprise/messages" | "/entreprise/notifications" | "/entreprise/profile" | "/login" | "/register-entreprise" | "/register";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/fonts/Satoshi_Complete/.DS_Store" | "/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Black.otf" | "/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-BlackItalic.otf" | "/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Bold.otf" | "/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-BoldItalic.otf" | "/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Italic.otf" | "/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Light.otf" | "/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-LightItalic.otf" | "/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Medium.otf" | "/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-MediumItalic.otf" | "/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Regular.otf" | "/fonts/Satoshi_Complete/Fonts/TTF/Satoshi-Variable.ttf" | "/fonts/Satoshi_Complete/Fonts/TTF/Satoshi-VariableItalic.ttf" | "/fonts/Satoshi_Complete/Fonts/WEB/README.md" | "/fonts/Satoshi_Complete/Fonts/WEB/css/satoshi.css" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Black.eot" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Black.ttf" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Black.woff" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Black.woff2" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-BlackItalic.eot" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-BlackItalic.ttf" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-BlackItalic.woff" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-BlackItalic.woff2" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Bold.eot" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Bold.ttf" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Bold.woff" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Bold.woff2" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-BoldItalic.eot" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-BoldItalic.ttf" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-BoldItalic.woff" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-BoldItalic.woff2" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Italic.eot" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Italic.ttf" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Italic.woff" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Italic.woff2" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Light.eot" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Light.ttf" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Light.woff" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Light.woff2" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-LightItalic.eot" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-LightItalic.ttf" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-LightItalic.woff" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-LightItalic.woff2" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Medium.eot" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Medium.ttf" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Medium.woff" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Medium.woff2" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-MediumItalic.eot" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-MediumItalic.ttf" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-MediumItalic.woff" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-MediumItalic.woff2" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Regular.eot" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Regular.ttf" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Regular.woff" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Regular.woff2" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Variable.eot" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Variable.ttf" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Variable.woff" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Variable.woff2" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-VariableItalic.eot" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-VariableItalic.ttf" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-VariableItalic.woff" | "/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-VariableItalic.woff2" | "/fonts/Satoshi_Complete/License/FFL.txt" | "/robots.txt" | string & {};
	}
}