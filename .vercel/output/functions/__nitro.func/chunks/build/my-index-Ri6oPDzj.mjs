import { uuid } from '@primeuix/utils';
import { s as script$2 } from './my-index-C6ju-SZT.mjs';
import { style } from '@primeuix/styles/radiobuttongroup';
import { B as BaseStyle } from './server.mjs';
import { createElementBlock, openBlock, mergeProps, renderSlot } from 'vue';
import './my-index-CYk1sGx_.mjs';
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
import '@primeuix/styles/base';
import 'animejs';
import '@ambitiondev/cookiebot-common';
import '@unhead/addons';
import '@unhead/schema-org/vue';
import '@primeuix/utils/uuid';
import 'lodash/throttle.js';
import 'dayjs';

var classes = {
  root: "p-radiobutton-group p-component"
};
var RadioButtonGroupStyle = BaseStyle.extend({
  name: "radiobuttongroup",
  style,
  classes
});
var script$1 = {
  name: "BaseRadioButtonGroup",
  "extends": script$2,
  style: RadioButtonGroupStyle,
  provide: function provide() {
    return {
      $pcRadioButtonGroup: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "RadioButtonGroup",
  "extends": script$1,
  inheritAttrs: false,
  data: function data() {
    return {
      groupName: this.name
    };
  },
  watch: {
    name: function name(newValue) {
      this.groupName = newValue || uuid("radiobutton-group-");
    }
  },
  mounted: function mounted() {
    this.groupName = this.groupName || uuid("radiobutton-group-");
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=my-index-Ri6oPDzj.mjs.map
