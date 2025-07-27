import { D as buildAssetsURL } from '../nitro/nitro.mjs';
import { _ as _export_sfc, u as useHead, s as seoWording, A as AnimateOnScroll, k as TEXT_TYPE } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { c as campaignsWording } from './my-text-B14XsG8h.mjs';
import { a as MEDIA_DISPLAY_TYPE } from './my-media-CWK_KdC4.mjs';
import { N as NImageSwiper } from './my-NImageSwiper-C-fmQcg2.mjs';
import { _ as _sfc_main$1 } from './my-NVideo-B935zYVp.mjs';
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

const _imports_0 = "" + buildAssetsURL("my-bannerLine-CzjxDdA8.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const id = Number(route.params.id);
    const defaultData = {
      id: 0,
      isOngoing: false,
      title: "",
      detailTitle: "",
      img: "",
      year: "",
      region: "",
      issues: "",
      services: "",
      details: null
    };
    const data = campaignsWording.campaigns.find((item) => item.id === id) || defaultData;
    const infoList = computed(() => {
      if (!data || data.id === 0) return [];
      return [
        { name: "Year", value: data.year },
        { name: "Region", value: data.region },
        { name: "Issues", value: data.issues },
        { name: "Services", value: data.services }
      ];
    });
    useHead({
      title: () => `${(data == null ? void 0 : data.detailTitle) || "Campaign"} | Cicadas`,
      meta: [
        { property: "og:title", content: () => `${(data == null ? void 0 : data.detailTitle) || "Campaign"} | Cicadas` },
        { name: "description", content: () => (data == null ? void 0 : data.services) || "" },
        { property: "og:description", content: () => (data == null ? void 0 : data.services) || "" },
        { property: "og:image", content: () => (data == null ? void 0 : data.img) || "" },
        { property: "og:url", content: () => `${seoWording.domain}/campaigns/${id}` },
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: "Cicadas" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: () => `${(data == null ? void 0 : data.detailTitle) || "Campaign"} | Cicadas` },
        { name: "twitter:description", content: () => (data == null ? void 0 : data.services) || "" },
        { name: "twitter:image", content: () => (data == null ? void 0 : data.img) || "" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b, _c;
      const _directive_animateonscroll = AnimateOnScroll;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "w-full min-h-screen landing-bg pt-20 lg:pt-28" }, _attrs))} data-v-7e6d792a>`);
      if (((_a = unref(data)) == null ? void 0 : _a.id) !== 0) {
        _push(`<!--[--><h1 class="w-full px-6 text-center text-scale2XL lg:text-h1 font-h1 italic font-semibold" data-v-7e6d792a>${(_a2 = unref(data).detailTitle) != null ? _a2 : ""}</h1><div class="w-[100%] max-w-[1045px] px-6 mx-auto my-10 lg:my-[60px] flex justify-center transition-all duration-700" data-v-7e6d792a>`);
        if (unref(data).imageLinkOut) {
          _push(`<a${ssrRenderAttr("href", unref(data).imageLinkOut)} class="w-full hover:opacity-90 transition-all duration-300" target="_blank" data-v-7e6d792a><img${ssrRenderAttr("alt", unref(data).detailTitle)}${ssrRenderAttr("src", unref(data).img)} class="w-full clickCursor" data-v-7e6d792a></a>`);
        } else {
          _push(`<img${ssrRenderAttr("alt", unref(data).detailTitle)}${ssrRenderAttr("src", unref(data).img)} class="w-full" data-v-7e6d792a>`);
        }
        _push(`</div><img class="w-[95%] mx-auto" alt="line"${ssrRenderAttr("src", _imports_0)} data-v-7e6d792a><div class="w-[90%] mx-auto mt-[40px] lg:mt-[60px] flex flex-col gap-[40px] lg:gap-0 lg:grid lg:grid-cols-12" data-v-7e6d792a><div${ssrRenderAttrs(mergeProps({ class: "lg:col-span-3 flex flex-col gap-[13px] transition-all duration-700" }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true })))} data-v-7e6d792a><!--[-->`);
        ssrRenderList(infoList.value, (item) => {
          _push(`<div class="grid grid-cols-[70px_1fr] items-start" data-v-7e6d792a><div class="text-left text-scale2XS lg:text-labelSm text-sc font-semibold font-label italic" data-v-7e6d792a>${ssrInterpolate(item.name)}</div><div class="text-scaleXS lg:text-scaleSM font-body text-text-def font-medium" data-v-7e6d792a>${ssrInterpolate(item.value)}</div></div>`);
        });
        _push(`<!--]--></div><div class="hidden lg:block lg:col-span-1" data-v-7e6d792a></div><div class="lg:col-span-8 flex flex-col gap-10 lg:gap-[60px]" data-v-7e6d792a><!--[-->`);
        ssrRenderList((_b = unref(data).details) == null ? void 0 : _b.contentList, (item, index) => {
          var _a3;
          _push(`<div${ssrRenderAttrs(mergeProps({
            key: index,
            class: "transition-all duration-700"
          }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true })))} data-v-7e6d792a><h4 class="font-label text-body lg:text-scaleDef italic font-semibold text-text-def" data-v-7e6d792a>${ssrInterpolate(item.title)}</h4>`);
          if (item.textType === unref(TEXT_TYPE).PARAGRAPH) {
            _push(`<p class="font-body text-body lg:text-scaleDef font-medium mt-5 lg:mt-6" data-v-7e6d792a>${(_a3 = item.content) != null ? _a3 : ""}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (item.textType === unref(TEXT_TYPE).TEXT_LIST) {
            _push(`<div class="font-body text-body lg:text-scaleDef font-medium mt-[10px]" data-v-7e6d792a><ul class="flex flex-col list-[square] list-inside pl-3" data-v-7e6d792a><!--[-->`);
            ssrRenderList(item.list, (text, i) => {
              _push(`<li data-v-7e6d792a>${text != null ? text : ""}</li>`);
            });
            _push(`<!--]--></ul></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div><div class="w-full mt-20 flex flex-col gap-12 lg:gap-16" data-v-7e6d792a><!--[-->`);
        ssrRenderList((_c = unref(data).details) == null ? void 0 : _c.media, (item, i) => {
          _push(`<div${ssrRenderAttrs(mergeProps({
            key: i,
            class: "w-full transition-all duration-700"
          }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true })))} data-v-7e6d792a>`);
          if (item.mediaDisplayType === unref(MEDIA_DISPLAY_TYPE).COL) {
            _push(`<div class="w-[90%] mx-auto grid grid-cols-[4fr_8fr] gap-x-5 items-stretch" data-v-7e6d792a><!--[-->`);
            ssrRenderList(item.mediaList, (image, subIndex) => {
              _push(`<img${ssrRenderAttr("alt", `${subIndex}_image`)}${ssrRenderAttr("src", image.src)} class="h-full object-cover w-full" data-v-7e6d792a>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          if (item.mediaDisplayType === unref(MEDIA_DISPLAY_TYPE).VIDEO && item.url) {
            _push(`<div class="px-10" data-v-7e6d792a>`);
            _push(ssrRenderComponent(_sfc_main$1, {
              videoUrl: item.url,
              isShowControls: ""
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (item.mediaDisplayType === unref(MEDIA_DISPLAY_TYPE).SWIPER) {
            _push(ssrRenderComponent(NImageSwiper, {
              mediaList: item.mediaList
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div><!--]-->`);
      } else {
        _push(`<div class="w-[90%] mx-auto font-body text-body divide-text-ui-error font-medium" data-v-7e6d792a> Wrong page, please go back to campaign list page. </div>`);
      }
      _push(`</article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/campaigns/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7e6d792a"]]);

export { _id_ as default };
//# sourceMappingURL=my-_id_-Bi6TevmE.mjs.map
