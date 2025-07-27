import { s as script$2 } from './my-index-CYk1sGx_.mjs';
import { style } from '@primeuix/styles/floatlabel';
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
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-floatlabel", {
      "p-floatlabel-over": props.variant === "over",
      "p-floatlabel-on": props.variant === "on",
      "p-floatlabel-in": props.variant === "in"
    }];
  }
};
var FloatLabelStyle = BaseStyle.extend({
  name: "floatlabel",
  style,
  classes
});
var script$1 = {
  name: "BaseFloatLabel",
  "extends": script$2,
  props: {
    variant: {
      type: String,
      "default": "over"
    }
  },
  style: FloatLabelStyle,
  provide: function provide() {
    return {
      $pcFloatLabel: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "FloatLabel",
  "extends": script$1,
  inheritAttrs: false
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=my-index-cyWhnktc.mjs.map
