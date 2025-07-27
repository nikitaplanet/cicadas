import { s as script$4 } from './my-index-CkmmX3Pm.mjs';
import { s as script$1$1, a as script$5 } from './my-index-BsutT-eG.mjs';
import { s as script$3 } from './my-index-Mny1zT9a.mjs';
import { s as script$2 } from './my-index-CYk1sGx_.mjs';
import { style } from '@primeuix/styles/inlinemessage';
import { B as BaseStyle } from './server.mjs';
import { createElementBlock, openBlock, mergeProps, renderSlot, createCommentVNode, createBlock, resolveDynamicComponent } from 'vue';
import './my-index-Dt_hBL8H.mjs';
import '@primeuix/utils/object';
import '@primeuix/styled';
import '@primeuix/utils/dom';
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
    var props = _ref.props, instance = _ref.instance;
    return ["p-inlinemessage p-component p-inlinemessage-" + props.severity, {
      "p-inlinemessage-icon-only": !instance.$slots["default"]
    }];
  },
  icon: function icon(_ref2) {
    var props = _ref2.props;
    return ["p-inlinemessage-icon", props.icon];
  },
  text: "p-inlinemessage-text"
};
var InlineMessageStyle = BaseStyle.extend({
  name: "inlinemessage",
  style,
  classes
});
var script$1 = {
  name: "BaseInlineMessage",
  "extends": script$2,
  props: {
    severity: {
      type: String,
      "default": "error"
    },
    icon: {
      type: String,
      "default": void 0
    }
  },
  style: InlineMessageStyle,
  provide: function provide() {
    return {
      $pcInlineMessage: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "InlineMessage",
  "extends": script$1,
  inheritAttrs: false,
  timeout: null,
  data: function data() {
    return {
      visible: true
    };
  },
  mounted: function mounted() {
    var _this = this;
    if (!this.sticky) {
      setTimeout(function() {
        _this.visible = false;
      }, this.life);
    }
  },
  computed: {
    iconComponent: function iconComponent() {
      return {
        info: script$5,
        success: script$4,
        warn: script$1$1,
        error: script$3
      }[this.severity];
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "icon", {}, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.icon ? "span" : $options.iconComponent), mergeProps({
      "class": _ctx.cx("icon")
    }, _ctx.ptm("icon")), null, 16, ["class"]))];
  }), _ctx.$slots["default"] ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("text")
  }, _ctx.ptm("text")), [renderSlot(_ctx.$slots, "default")], 16)) : createCommentVNode("", true)], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=my-index-BtE0wG3Z.mjs.map
