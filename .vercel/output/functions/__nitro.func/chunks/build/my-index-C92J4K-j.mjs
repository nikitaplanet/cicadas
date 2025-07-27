import { uuid } from '@primeuix/utils';
import script$2 from './my-index-BiSk7g2m.mjs';
import { B as BaseStyle, D as DynamicDialogEventBus } from './server.mjs';
import { s as script$3 } from './my-index-CYk1sGx_.mjs';
import { resolveComponent, createElementBlock, openBlock, Fragment, renderList, createBlock, mergeProps, createSlots, withCtx, resolveDynamicComponent } from 'vue';
import '@primeuix/utils/dom';
import '@primeuix/utils/zindex';
import './my-index-CfpI_q4o.mjs';
import './my-index-Dt_hBL8H.mjs';
import '@primeuix/utils/object';
import './my-index-KbucNpbb.mjs';
import './my-index-xUQb1b7d.mjs';
import './my-index-Cp-85ssE.mjs';
import '@primeuix/styles/badge';
import '@primeuix/styled';
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
import './my-index-CyO5k-KM.mjs';
import '@primeuix/styles/ripple';
import '@primeuix/styles/button';
import './my-index-I1UHud6h.mjs';
import './my-index-D21vFaAL.mjs';
import './my-index-Din928lO.mjs';
import '@primeuix/styles/dialog';

var DynamicDialogStyle = BaseStyle.extend({
  name: "dynamicdialog"
});
var script$1 = {
  name: "BaseDynamicDialog",
  "extends": script$3,
  props: {},
  style: DynamicDialogStyle,
  provide: function provide() {
    return {
      $pcDynamicDialog: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "DynamicDialog",
  "extends": script$1,
  inheritAttrs: false,
  data: function data() {
    return {
      instanceMap: {}
    };
  },
  openListener: null,
  closeListener: null,
  currentInstance: null,
  mounted: function mounted() {
    var _this = this;
    this.openListener = function(_ref) {
      var instance = _ref.instance;
      var key = uuid() + "_dynamic_dialog";
      instance.visible = true;
      instance.key = key;
      _this.instanceMap[key] = instance;
    };
    this.closeListener = function(_ref2) {
      var instance = _ref2.instance, params = _ref2.params;
      var key = instance.key;
      var currentInstance = _this.instanceMap[key];
      if (currentInstance) {
        currentInstance.visible = false;
        currentInstance.options.onClose && currentInstance.options.onClose({
          data: params,
          type: "config-close"
        });
        _this.currentInstance = currentInstance;
      }
    };
    DynamicDialogEventBus.on("open", this.openListener);
    DynamicDialogEventBus.on("close", this.closeListener);
  },
  beforeUnmount: function beforeUnmount() {
    DynamicDialogEventBus.off("open", this.openListener);
    DynamicDialogEventBus.off("close", this.closeListener);
  },
  methods: {
    onDialogHide: function onDialogHide(instance) {
      !this.currentInstance && instance.options.onClose && instance.options.onClose({
        type: "dialog-close"
      });
    },
    onDialogAfterHide: function onDialogAfterHide(instance) {
      this.currentInstance && delete this.currentInstance;
      this.currentInstance = null;
      delete this.instanceMap[instance.key];
    },
    getTemplateItems: function getTemplateItems(template) {
      return Array.isArray(template) ? template : [template];
    }
  },
  components: {
    DDialog: script$2
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DDialog = resolveComponent("DDialog");
  return openBlock(true), createElementBlock(Fragment, null, renderList($data.instanceMap, function(instance, key) {
    return openBlock(), createBlock(_component_DDialog, mergeProps({
      key,
      visible: instance.visible,
      "onUpdate:visible": function onUpdateVisible($event) {
        return instance.visible = $event;
      },
      _instance: instance
    }, {
      ref_for: true
    }, instance.options.props, {
      onHide: function onHide($event) {
        return $options.onDialogHide(instance);
      },
      onAfterHide: function onAfterHide($event) {
        return $options.onDialogAfterHide(instance);
      }
    }), createSlots({
      "default": withCtx(function() {
        return [(openBlock(), createBlock(resolveDynamicComponent(instance.content), mergeProps({
          ref_for: true
        }, instance.options.emits), null, 16))];
      }),
      _: 2
    }, [instance.options.templates && instance.options.templates.header ? {
      name: "header",
      fn: withCtx(function() {
        return [(openBlock(true), createElementBlock(Fragment, null, renderList($options.getTemplateItems(instance.options.templates.header), function(header, index) {
          return openBlock(), createBlock(resolveDynamicComponent(header), mergeProps({
            key: index + "_header"
          }, {
            ref_for: true
          }, instance.options.emits), null, 16);
        }), 128))];
      }),
      key: "0"
    } : void 0, instance.options.templates && instance.options.templates.footer ? {
      name: "footer",
      fn: withCtx(function() {
        return [(openBlock(true), createElementBlock(Fragment, null, renderList($options.getTemplateItems(instance.options.templates.footer), function(footer, index) {
          return openBlock(), createBlock(resolveDynamicComponent(footer), mergeProps({
            key: index + "_footer"
          }, {
            ref_for: true
          }, instance.options.emits), null, 16);
        }), 128))];
      }),
      key: "1"
    } : void 0]), 1040, ["visible", "onUpdate:visible", "_instance", "onHide", "onAfterHide"]);
  }), 128);
}
script.render = render;

export { script as default };
//# sourceMappingURL=my-index-C92J4K-j.mjs.map
