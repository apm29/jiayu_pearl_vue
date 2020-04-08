import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import zhHans from 'vuetify/es5/locale/zh-Hans';
// import {preset} from 'vue-cli-plugin-vuetify-preset-fortnightly/preset'
import { preset } from 'vue-cli-plugin-vuetify-preset-crane/preset'

Vue.use(Vuetify);

export default new Vuetify({
    preset,
    theme: {
        options: {
            customProperties: true,
        },
        // themes: {
        //     light: {
        //         primary: "#4caf50",
        //         secondary: "#009688",
        //         accent: "#ffeb3b",
        //         error: "#f44336",
        //         warning: "#ff5722",
        //         info: "#03a9f4",
        //         success: "#8bc34a"
        //     },
        //     dark: {
        //         primary: '#D3C3BC',
        //         secondary: '#BFADA5',
        //         accent: '#D8EBF1',
        //         info: '#5B5C79'
        //     }
        // },
    },
    lang: {
        locales: {zhHans},
        current: 'zh-Hans',
    },
});
