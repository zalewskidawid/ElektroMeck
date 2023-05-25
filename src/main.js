import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faBolt, faLightbulb, faChargingStation, faPlug,faCarBattery, faPlugCircleCheck, faPlugCircleXmark, faUser, faEye } from "@fortawesome/free-solid-svg-icons";
import { createApp } from 'vue'
import Particles from "vue3-particles";
import VueEasyLightbox from "vue-easy-lightbox";
import App from './App.vue'

library.add(faBars,faBolt, faLightbulb, faChargingStation, faPlug, faCarBattery, faPlugCircleCheck, faPlugCircleXmark, faUser, faFacebook, faEye)
library.add(faArrowDown)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(Particles, VueEasyLightbox).mount('#app')
