import { _ as _export_sfc, g as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, reactive, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NImageSwiper",
  __ssrInlineRender: true,
  props: {
    mediaList: { default: () => [] }
  },
  setup(__props) {
    reactive({
      320: {
        slidesPerView: 1
      },
      640: {
        slidesPerView: 1.5
      },
      1024: {
        slidesPerView: 1.5
      },
      1280: {
        slidesPerView: 2.5
      },
      1920: {
        slidesPerView: 2.5
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full m-auto px-6 lg:px-0" }, _attrs))} data-v-bf66fe6c>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/swiper/NImageSwiper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NImageSwiper = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bf66fe6c"]]);

export { NImageSwiper as N };
//# sourceMappingURL=my-NImageSwiper-C-fmQcg2.mjs.map
