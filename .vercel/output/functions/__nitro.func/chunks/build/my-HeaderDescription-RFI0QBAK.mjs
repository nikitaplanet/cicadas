import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { T as TextMode } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HeaderDescription",
  __ssrInlineRender: true,
  props: {
    mode: { default: TextMode.dark },
    isItalic: { type: Boolean, default: false },
    isHome: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({
        class: ["font-body text-body md:text-scaleMD", {
          italic: _ctx.isItalic,
          "text-text-alternate": _ctx.mode === unref(TextMode).light,
          "text-text-def": _ctx.mode === unref(TextMode).dark,
          "text-scaleSM": !_ctx.isHome
        }]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/text/HeaderDescription.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=my-HeaderDescription-RFI0QBAK.mjs.map
