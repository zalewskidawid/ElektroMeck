import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown, faBolt, faLightbulb, faChargingStation, faPlug,faCarBattery, faPlugCircleCheck, faPlugCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { createApp } from 'vue'
import App from './App.vue'

library.add(faBars,faBolt, faLightbulb, faChargingStation, faPlug, faCarBattery, faPlugCircleCheck, faPlugCircleXmark)
library.add(faArrowDown)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
