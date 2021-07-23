import { Plugin } from 'vue';
declare const component: import("vue").DefineComponent<{
    code: {
        type: StringConstructor;
        required: true;
    };
    language: {
        type: StringConstructor;
        default: string;
    };
    autodetect: {
        type: BooleanConstructor;
        default: boolean;
    };
    ignoreIllegals: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    className: import("vue").ComputedRef<string>;
    highlightedCode: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    code?: unknown;
    language?: unknown;
    autodetect?: unknown;
    ignoreIllegals?: unknown;
} & {
    code: string;
    language: string;
    autodetect: boolean;
    ignoreIllegals: boolean;
} & {}>, {
    language: string;
    autodetect: boolean;
    ignoreIllegals: boolean;
}>;
declare const plugin: Plugin & {
    component: typeof component;
    HLJS_INSTANCE_KEY: Symbol;
};
export default plugin;
//# sourceMappingURL=vue.d.ts.map