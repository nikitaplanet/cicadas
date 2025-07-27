import { u as useHead, s as seoWording, f as _sfc_main$5, A as AnimateOnScroll, e as useNuxtApp } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, computed, toValue, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { s as studioWording, L as LandingSection } from './my-LandingSection-B4H7WF-M.mjs';
import { _ as _imports_0$1 } from './my-listLine-BMIIhQ5E.mjs';
import { M as MEDIA_TYPE } from './my-media-CWK_KdC4.mjs';
import { _ as _sfc_main$2 } from './my-NVideo-B935zYVp.mjs';
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
import '@primeuix/utils/eventbus';
import '@primeuix/styled';
import '@primeuix/utils';
import '@primeuix/utils/object';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import 'animejs';
import '@ambitiondev/cookiebot-common';
import '@unhead/addons';
import '@unhead/schema-org/vue';
import '@primeuix/utils/uuid';
import 'lodash/throttle.js';
import 'dayjs';
import './my-HeaderDescription-RFI0QBAK.mjs';

const _imports_0 = "data:image/svg+xml,%3csvg%20width='10'%20height='12'%20viewBox='0%200%2010%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='.indicator'%3e%3cpath%20id='Vector'%20d='M4.57715%2011.1582C4.54793%2011.2218%204.57843%2011.1559%204.58398%2011.1445C4.58949%2011.1332%204.60325%2011.1048%204.62305%2011.0693C4.62464%2011.0665%204.62821%2011.0595%204.63379%2011.0498C4.60252%2011.1074%204.58074%2011.1504%204.57715%2011.1582ZM6.7793%202.30078L7.05078%202.79492C8.43857%205.29854%208.92622%207.37466%207.77344%209.17871L7.76953%209.18555L7.76563%209.19141C7.55755%209.52431%207.34909%209.9282%207.21973%2010.1621C7.21767%2010.1658%207.21494%2010.1692%207.21289%2010.1729C6.99886%2010.1297%206.78561%2010.1122%206.57129%2010.1201C6.52168%2010.122%206.47362%2010.1259%206.42773%2010.1299C6.40595%2010.1193%206.38492%2010.1066%206.3623%2010.0967C6.05879%209.96326%205.73296%209.91783%205.41504%209.95801C5.25781%209.97791%205.11988%2010.0167%205.00488%2010.0596C4.92491%2010.0387%204.84818%2010.0174%204.77441%2010L4.65625%209.97266L4.53516%209.96289L4.34375%209.94141C4.16011%209.91429%203.9987%209.8704%203.86133%209.81445L3.74023%209.76562L3.6123%209.73633L3.3418%209.66895C3.26084%209.64611%203.18792%209.62292%203.12012%209.59668L3.10645%209.59082C3.09929%209.58595%203.08768%209.57851%203.07227%209.56641C3.04109%209.54191%203.00707%209.5118%202.96484%209.47266L2.80859%209.32227L2.79492%209.30859L2.56348%209.08301C2.56936%208.89073%202.54355%208.69895%202.48242%208.51758C2.41705%208.32368%202.29809%208.09472%202.09082%207.88965C2.02573%207.82527%201.94006%207.75609%201.83789%207.68945L2.30859%206.29297L2.5918%206.24707L2.7207%205.28516C2.75467%205.24653%202.80515%205.19436%202.87598%205.12793C3.12877%204.89086%203.50046%204.61005%203.95898%204.29492C4.42267%203.97625%204.87345%203.68981%205.33984%203.37988C5.64605%203.1764%205.99578%202.93964%206.29102%202.70117L6.56445%202.46289L6.56836%202.45996C6.63812%202.39312%206.70406%202.33122%206.76562%202.27246C6.77044%202.28184%206.77451%202.29154%206.7793%202.30078ZM0.71875%209.27246C0.688181%209.21431%200.660805%209.1543%200.634766%209.09277C0.717039%209.09277%200.804496%209.09277%200.897461%209.09277L0.71875%209.27246Z'%20fill='%23DD5621'%20stroke='%23DD5621'%20stroke-width='3.16'/%3e%3c/g%3e%3c/svg%3e";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "StudioDetailListCard",
  __ssrInlineRender: true,
  props: {
    studioData: { default: () => null },
    isShowLine: { type: Boolean, default: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      var _a, _b;
      _push(`<!--[-->`);
      if (_ctx.studioData) {
        _push(`<div class="w-full grid grid-cols-1 gap-5 lg:grid-cols-2 md:gap-12"><div class="flex flex-col justify-start items-start">`);
        if (_ctx.studioData.isOnGoing) {
          _push(`<div class="flex justify-start items-center mb-3"><img alt=""${ssrRenderAttr("src", _imports_0)}><span class="ml-2 text-text-primary font-label text-scaleDef italic font-semibold"> Ongoing </span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h2 class="italic font-semibold font-h2 text-scaleXL md:text-h2">${(_a2 = _ctx.studioData.title) != null ? _a2 : ""}</h2></div><div><p class="text-scaleSM font-body font-medium md:text-scaleMD">${(_b2 = _ctx.studioData.content) != null ? _b2 : ""}</p><div class="w-full mt-10">`);
        if (((_a = _ctx.studioData.media) == null ? void 0 : _a.type) === unref(MEDIA_TYPE).VIMEO) {
          _push(ssrRenderComponent(_sfc_main$2, {
            videoUrl: (_b = _ctx.studioData.media) == null ? void 0 : _b.src,
            isShowControls: ""
          }, null, _parent));
        } else {
          _push(`<img${ssrRenderAttr("alt", _ctx.studioData.title)}${ssrRenderAttr("src", _ctx.studioData.media.src)}>`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.isShowLine) {
        _push(`<img class="w-full py-10 lg:py-20" alt="line"${ssrRenderAttr("src", _imports_0$1)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/studio/detail/StudioDetailListCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useAnchorScroll = (options = {}) => {
  const toAnchorSurfaces = computed(() => {
    var _a2, _b2, _c;
    var _a, _b;
    const unwrappedOptions = toValue(options);
    return (_c = (_b2 = (_a2 = unwrappedOptions == null ? void 0 : unwrappedOptions.surfaces) != null ? _a2 : (_a = unwrappedOptions == null ? void 0 : unwrappedOptions.toAnchor) == null ? void 0 : _a.surfaces) != null ? _b2 : toValue((_b = useNuxtApp().$anchorScroll) == null ? void 0 : _b.defaults.surfaces)) != null ? _c : [];
  });
  const toAnchorScrollOptions = computed(() => {
    var _a2, _b2;
    var _a, _b, _c;
    const unwrappedOptions = toValue(options);
    return (_b2 = (_a2 = unwrappedOptions == null ? void 0 : unwrappedOptions.scrollOptions) != null ? _a2 : (_a = unwrappedOptions == null ? void 0 : unwrappedOptions.toAnchor) == null ? void 0 : _a.scrollOptions) != null ? _b2 : toValue((_c = (_b = useNuxtApp().$anchorScroll) == null ? void 0 : _b.defaults) == null ? void 0 : _c.toAnchor);
  });
  const toTopSurfaces = computed(() => {
    var _a2, _b2, _c;
    var _a, _b;
    const unwrappedOptions = toValue(options);
    return (_c = (_b2 = (_a2 = unwrappedOptions == null ? void 0 : unwrappedOptions.surfaces) != null ? _a2 : (_a = unwrappedOptions == null ? void 0 : unwrappedOptions.toTop) == null ? void 0 : _a.surfaces) != null ? _b2 : toValue((_b = useNuxtApp().$anchorScroll) == null ? void 0 : _b.defaults.surfaces)) != null ? _c : [];
  });
  const toTopScrollOptions = computed(() => {
    var _a2, _b2;
    var _a, _b, _c;
    const unwrappedOptions = toValue(options);
    return (_b2 = (_a2 = unwrappedOptions == null ? void 0 : unwrappedOptions.scrollOptions) != null ? _a2 : (_a = unwrappedOptions == null ? void 0 : unwrappedOptions.toTop) == null ? void 0 : _a.scrollOptions) != null ? _b2 : toValue((_c = (_b = useNuxtApp().$anchorScroll) == null ? void 0 : _b.defaults) == null ? void 0 : _c.toTop);
  });
  return {
    scrollToAnchor(target) {
      var _a;
      const maybeElement = toValue(target);
      let anchorElement = null;
      if (typeof maybeElement === "string") {
        anchorElement = (void 0).getElementById(maybeElement.replace(/^#/, ""));
      } else if (maybeElement instanceof HTMLElement) {
        anchorElement = maybeElement;
      } else {
        const elementId = toValue(maybeElement.id);
        const elementSelector = toValue(maybeElement.sr);
        if (elementId) {
          anchorElement = (void 0).getElementById(elementId.replace(/^#/, ""));
        } else if (elementSelector) {
          try {
            anchorElement = (void 0).querySelector(elementSelector);
          } catch (error) {
            console.error("[useAnchorScroll]: While select element from document, next error occurred:", error);
          }
        } else {
          console.error(
            "[useAnchorScroll]: Wrong object provided to scrollToAnchor composable:",
            "either 'id' and 'sr' (selector) are not provided in object",
            maybeElement
          );
        }
      }
      if (!anchorElement)
        return false;
      const { top, left } = anchorElement.getBoundingClientRect();
      const { behavior, offsetLeft, offsetTop } = (_a = toValue(toAnchorScrollOptions)) != null ? _a : {};
      const scrollToAnchorOptions = {
        behavior,
        ...offsetLeft !== void 0 && { left: left + offsetLeft },
        ...offsetTop !== void 0 && { top: top + offsetTop }
      };
      for (const surface of toValue(toAnchorSurfaces))
        surface.scrollBy(scrollToAnchorOptions);
      return true;
    },
    scrollToTop() {
      var _a;
      const { behavior, offsetLeft, offsetTop } = (_a = toValue(toTopScrollOptions)) != null ? _a : {};
      const scrollToTopOptions = {
        behavior,
        left: offsetLeft,
        top: offsetTop
      };
      for (const surface of toValue(toTopSurfaces))
        surface.scrollTo(scrollToTopOptions);
    }
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useAnchorScroll({
      toAnchor: {
        scrollOptions: {
          behavior: "smooth",
          offsetTop: -100
        }
      }
    });
    const data = studioWording.studioInfo.find((item) => item.id === String(route.params.id));
    const detailData = ref(data);
    useHead({
      title: () => `${(detailData == null ? void 0 : detailData.value.title) || "Studio"} | Cicadas`,
      meta: [
        { property: "og:title", content: () => `${(detailData == null ? void 0 : detailData.value.title) || "Studio"} | Cicadas` },
        { name: "description", content: () => (detailData == null ? void 0 : detailData.value.detail.description) || "" },
        { property: "og:description", content: () => (detailData == null ? void 0 : detailData.value.detail.description) || "" },
        { property: "og:image", content: () => (data == null ? void 0 : data.img) || "" },
        { property: "og:url", content: () => `${seoWording.domain}/studio/${detailData == null ? void 0 : detailData.value.id}` },
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: "Cicadas" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: () => `${(detailData == null ? void 0 : detailData.value.title) || "Campaign"} | Cicadas` },
        { name: "twitter:description", content: () => (detailData == null ? void 0 : detailData.value.detail.description) || "" },
        { name: "twitter:image", content: () => (data == null ? void 0 : data.img) || "" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_animateonscroll = AnimateOnScroll;
      if (!detailData.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-screen text-center pt-32 pb-32 flex justify-center items-center px-6 text-sm text-link-primary md:px-10" }, _attrs))}> \u7121\u6B64\u9801\u8CC7\u8A0A `);
        _push(ssrRenderComponent(_sfc_main$5, {
          class: "ml-3",
          hasUnderline: "",
          to: "/studio"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u8FD4\u56DE\u5217\u8868`);
            } else {
              return [
                createTextVNode("\u8FD4\u56DE\u5217\u8868")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(LandingSection, {
          description: detailData.value.detail.description,
          title: detailData.value.title
        }, null, _parent));
        _push(`<div class="w-full pt-0 px-6 md:px-10"><!--[-->`);
        ssrRenderList(detailData.value.detail.list, (item, index) => {
          _push(`<!--[-->`);
          if (index !== 0) {
            _push(`<div${ssrRenderAttrs(mergeProps({
              id: item.id,
              key: item.id,
              class: "w-full transition-all duration-700"
            }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true })))}>`);
            _push(ssrRenderComponent(_sfc_main$1, {
              isShowLine: index !== detailData.value.detail.list.length - 1,
              studioData: item
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<div${ssrRenderAttr("id", item.id)} class="w-full">`);
            _push(ssrRenderComponent(_sfc_main$1, {
              isShowLine: index !== detailData.value.detail.list.length - 1,
              studioData: item
            }, null, _parent));
            _push(`</div>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div><!--]-->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/studio/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=my-_id_-Cs9JgoBk.mjs.map
