import { cn } from '@primeuix/utils';
import { s as script$2 } from './my-index-CYk1sGx_.mjs';
import { style } from '@primeuix/styles/skeleton';
import { B as BaseStyle } from './server.mjs';
import { createElementBlock, openBlock, mergeProps } from 'vue';
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

var inlineStyles = {
  root: {
    position: "relative"
  }
};
var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-skeleton p-component", {
      "p-skeleton-circle": props.shape === "circle",
      "p-skeleton-animation-none": props.animation === "none"
    }];
  }
};
var SkeletonStyle = BaseStyle.extend({
  name: "skeleton",
  style,
  classes,
  inlineStyles
});
var script$1 = {
  name: "BaseSkeleton",
  "extends": script$2,
  props: {
    shape: {
      type: String,
      "default": "rectangle"
    },
    size: {
      type: String,
      "default": null
    },
    width: {
      type: String,
      "default": "100%"
    },
    height: {
      type: String,
      "default": "1rem"
    },
    borderRadius: {
      type: String,
      "default": null
    },
    animation: {
      type: String,
      "default": "wave"
    }
  },
  style: SkeletonStyle,
  provide: function provide() {
    return {
      $pcSkeleton: this,
      $parentInstance: this
    };
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var script = {
  name: "Skeleton",
  "extends": script$1,
  inheritAttrs: false,
  computed: {
    containerStyle: function containerStyle() {
      if (this.size) return {
        width: this.size,
        height: this.size,
        borderRadius: this.borderRadius
      };
      else return {
        width: this.width,
        height: this.height,
        borderRadius: this.borderRadius
      };
    },
    dataP: function dataP() {
      return cn(_defineProperty({}, this.shape, this.shape));
    }
  }
};
var _hoisted_1 = ["data-p"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    style: [_ctx.sx("root"), $options.containerStyle],
    "aria-hidden": "true"
  }, _ctx.ptmi("root"), {
    "data-p": $options.dataP
  }), null, 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=my-index-ymNNo4mB.mjs.map
