/// <reference types="vite/client" />
import type {ComposerTranslation, I18n} from "vue-i18n";

declare module '@vue/runtime-core' {

    interface ComponentCustomProperties {
        $t: ComposerTranslation;
        $i18n: I18n;
    }
}
