/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CONTACT_WEBHOOK: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
