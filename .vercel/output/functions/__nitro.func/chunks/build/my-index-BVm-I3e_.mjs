import { $dt } from '@primeuix/styled';
import { setCSSProperty } from '@primeuix/utils/dom';
import { s as script$2 } from './my-index-CYk1sGx_.mjs';
import { style } from '@primeuix/styles/imagecompare';
import { B as BaseStyle } from './server.mjs';
import { createElementBlock, openBlock, mergeProps, renderSlot, createElementVNode } from 'vue';
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
  root: "p-imagecompare",
  slider: "p-imagecompare-slider"
};
var ImageCompareStyle = BaseStyle.extend({
  name: "imagecompare",
  style,
  classes
});
var script$1 = {
  name: "BaseImageCompare",
  "extends": script$2,
  props: {
    tabindex: {
      type: Number,
      "default": 0
    },
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    }
  },
  style: ImageCompareStyle,
  provide: function provide() {
    return {
      $pcImageCompare: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "ImageCompare",
  "extends": script$1,
  methods: {
    onSlide: function onSlide(event) {
      var value = event.target.value;
      var image = event.target.previousElementSibling;
      setCSSProperty(image, $dt("imagecompare.scope.x").name, "".concat(value, "%"));
    }
  }
};
var _hoisted_1 = ["aria-labelledby", "aria-label"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "left"), renderSlot(_ctx.$slots, "right"), createElementVNode("input", mergeProps({
    type: "range",
    min: "0",
    max: "100",
    value: "50",
    onInput: _cache[0] || (_cache[0] = function() {
      return $options.onSlide && $options.onSlide.apply($options, arguments);
    }),
    "class": _ctx.cx("slider")
  }, _ctx.ptm("slider")), null, 16)], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=my-index-BVm-I3e_.mjs.map
