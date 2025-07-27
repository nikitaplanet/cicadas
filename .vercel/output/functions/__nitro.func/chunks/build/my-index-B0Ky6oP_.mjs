import { s as script$2 } from './my-index-CYk1sGx_.mjs';
import { B as BaseStyle } from './server.mjs';
import { createElementBlock, openBlock, mergeProps, renderSlot } from 'vue';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import '@primeuix/utils/object';
import '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@primevue/core/base/style';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/styles/base';
import 'animejs';
import '@ambitiondev/cookiebot-common';
import '@unhead/addons';
import '@unhead/schema-org/vue';
import '@primeuix/utils/uuid';
import 'lodash/throttle.js';
import 'dayjs';

var classes = {
  root: "p-steppanels"
};
var StepPanelsStyle = BaseStyle.extend({
  name: "steppanels",
  classes
});
var script$1 = {
  name: "BaseStepPanels",
  "extends": script$2,
  style: StepPanelsStyle,
  provide: function provide() {
    return {
      $pcStepPanels: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "StepPanels",
  "extends": script$1,
  inheritAttrs: false
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=my-index-B0Ky6oP_.mjs.map
