import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;
type RouteParams = {  };
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/" | "/(app)/admin/appels-offres" | "/(app)/admin/appels-offres/[id]/comparatif" | "/(app)/admin/appels-offres/new" | "/(app)/admin/dashboard" | "/(app)/admin/demandes" | "/(app)/admin/demandes/[id]" | "/(app)/admin/demandes/[id]/offre-finale" | "/(app)/admin/messages" | "/(app)/admin/notifications" | "/(app)/admin/notifications/parametres" | "/(app)/admin/offres" | "/(app)/admin/profile" | "/(app)/admin/utilisateurs" | "/(app)/admin/utilisateurs/[id]" | "/(app)/client/dashboard" | "/(app)/client/demandes" | "/(app)/client/demandes/[id]" | "/(app)/client/demandes/new" | "/(app)/client/messages" | "/(app)/client/notifications" | "/(app)/client/offres" | "/(app)/client/profile" | "/(app)/entreprise/appels-offres" | "/(app)/entreprise/appels-offres/[id]" | "/(app)/entreprise/dashboard" | "/(app)/entreprise/mes-offres" | "/(app)/entreprise/messages" | "/(app)/entreprise/notifications" | "/(app)/entreprise/profile" | "/(auth)/login" | "/(auth)/register" | "/(auth)/register-entreprise" | null
type LayoutParams = RouteParams & { id?: string }
type LayoutParentData = EnsureDefined<{}>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type PageProps = { params: RouteParams; data: PageData }
export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;
export type LayoutProps = { params: LayoutParams; data: LayoutData; children: import("svelte").Snippet }