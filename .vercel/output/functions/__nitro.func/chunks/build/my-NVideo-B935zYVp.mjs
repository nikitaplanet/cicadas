import { u as useHead, _ as _export_sfc, g as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ShimmerLoad",
  __ssrInlineRender: true,
  props: {
    className: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["shimmer", _ctx.className]
      }, _attrs))} data-v-c135ea01></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/loading/ShimmerLoad.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ShimmerLoad = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c135ea01"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NVideo",
  __ssrInlineRender: true,
  props: {
    videoUrl: { default: "" },
    isAutoPlay: { type: Boolean, default: false },
    isShowControls: { type: Boolean, default: false },
    isMuted: { type: Boolean, default: true },
    isShowLinkOutside: { type: Boolean, default: false }
  },
  setup(__props) {
    useHead({
      script: [
        {
          src: "https://player.vimeo.com/api/player.js",
          defer: true
        }
      ]
    });
    const props = __props;
    const isLoaded = ref(false);
    computed(() => {
      let controlPath = "&background=1&controls=0";
      if (props.isShowControls) {
        controlPath = `&controls=1`;
      }
      const autoPlay = props.isAutoPlay ? 1 : 0;
      const muted = props.isMuted ? 1 : 0;
      return `${props.videoUrl}?autoplay=${autoPlay}&muted=${muted}&title=1&byline=0&portrait=0${controlPath}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full aspect-video" }, _attrs))}>`);
      _push(ssrRenderComponent(ShimmerLoad, {
        style: !isLoaded.value ? null : { display: "none" },
        className: "w-full aspect-video"
      }, null, _parent));
      _push(`<div style="${ssrRenderStyle([
        isLoaded.value ? null : { display: "none" },
        { "padding": "56.25% 0 0 0", "position": "relative" }
      ])}">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/videoSec/NVideo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=my-NVideo-B935zYVp.mjs.map
