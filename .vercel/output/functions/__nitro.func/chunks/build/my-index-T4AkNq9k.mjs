import { D as buildAssetsURL } from '../nitro/nitro.mjs';
import { defineComponent, ref, mergeProps, reactive, withCtx, createVNode, createBlock, createCommentVNode, openBlock, createTextVNode, Fragment, renderList, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0$2 } from './my-listLine-BMIIhQ5E.mjs';
import { _ as _export_sfc, u as useHead, s as seoWording, l as useRouter, S as SectionContainer, b as _sfc_main$8, T as TextMode } from './server.mjs';
import { _ as _sfc_main$3 } from './my-HeaderDescription-RFI0QBAK.mjs';
import { c as campaignsWording } from './my-text-B14XsG8h.mjs';
import { s as seoBanner } from './my-cicadas_banner-DnReMfVH.mjs';
import { u as useScrollAnime } from './my-useScrollAnime-BImYRP-9.mjs';
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
import 'vue-router';
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
import './my-media-CWK_KdC4.mjs';

const _imports_0$1 = "" + buildAssetsURL("my-scrollDown-BP1p1Ocr.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LandingSection",
  __ssrInlineRender: true,
  setup(__props) {
    const main = ref(null);
    const headerText = ref(null);
    const headerDesc = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "main",
        ref: main,
        class: "w-full h-screen landing-bg"
      }, _attrs))} data-v-c4f01f0c><div class="w-full px-6 lg:px-8 h-screen m-auto flex flex-col gap-10 lg:gap-3 lg:grid lg:grid-cols-12 pt-24 lg:pt-40 relative" data-v-c4f01f0c><div class="lg:col-span-6" data-v-c4f01f0c>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        ref_key: "headerText",
        ref: headerText,
        mode: unref(TextMode).dark,
        class: "relative"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<span data-v-c4f01f0c${_scopeId}>${(_a = unref(campaignsWording).landing.headerTitle) != null ? _a : ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: unref(campaignsWording).landing.headerTitle
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="lg:col-span-6" data-v-c4f01f0c>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        ref_key: "headerDesc",
        ref: headerDesc,
        isItalic: false,
        mode: unref(TextMode).dark
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<span data-v-c4f01f0c${_scopeId}>${(_a = unref(campaignsWording).landing.description) != null ? _a : ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: unref(campaignsWording).landing.description
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="absolute right-0 bottom-32" type="button" data-v-c4f01f0c><img class="slideDownRepeat" alt="ScrollDown"${ssrRenderAttr("src", _imports_0$1)} data-v-c4f01f0c></button></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/campaigns/LandingSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const LandingSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c4f01f0c"]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20width='10'%20height='12'%20viewBox='0%200%2010%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='.indicator'%3e%3cpath%20id='Vector'%20d='M4.57715%2011.1582C4.54793%2011.2218%204.57843%2011.1559%204.58398%2011.1445C4.58949%2011.1332%204.60325%2011.1048%204.62305%2011.0693C4.62464%2011.0665%204.62821%2011.0595%204.63379%2011.0498C4.60252%2011.1074%204.58074%2011.1504%204.57715%2011.1582ZM6.7793%202.30078L7.05078%202.79492C8.43857%205.29854%208.92622%207.37466%207.77344%209.17871L7.76953%209.18555L7.76563%209.19141C7.55755%209.52431%207.34909%209.9282%207.21973%2010.1621C7.21767%2010.1658%207.21494%2010.1692%207.21289%2010.1729C6.99886%2010.1297%206.78561%2010.1122%206.57129%2010.1201C6.52168%2010.122%206.47362%2010.1259%206.42773%2010.1299C6.40595%2010.1193%206.38492%2010.1066%206.3623%2010.0967C6.05879%209.96326%205.73296%209.91783%205.41504%209.95801C5.25781%209.97791%205.11988%2010.0167%205.00488%2010.0596C4.92491%2010.0387%204.84818%2010.0174%204.77441%2010L4.65625%209.97266L4.53516%209.96289L4.34375%209.94141C4.16011%209.91429%203.9987%209.8704%203.86133%209.81445L3.74023%209.76562L3.6123%209.73633L3.3418%209.66895C3.26084%209.64611%203.18792%209.62292%203.12012%209.59668L3.10645%209.59082C3.09929%209.58595%203.08768%209.57851%203.07227%209.56641C3.04109%209.54191%203.00707%209.5118%202.96484%209.47266L2.80859%209.32227L2.79492%209.30859L2.56348%209.08301C2.56936%208.89073%202.54355%208.69895%202.48242%208.51758C2.41705%208.32368%202.29809%208.09472%202.09082%207.88965C2.02573%207.82527%201.94006%207.75609%201.83789%207.68945L2.30859%206.29297L2.5918%206.24707L2.7207%205.28516C2.75467%205.24653%202.80515%205.19436%202.87598%205.12793C3.12877%204.89086%203.50046%204.61005%203.95898%204.29492C4.42267%203.97625%204.87345%203.68981%205.33984%203.37988C5.64605%203.1764%205.99578%202.93964%206.29102%202.70117L6.56445%202.46289L6.56836%202.45996C6.63812%202.39312%206.70406%202.33122%206.76562%202.27246C6.77044%202.28184%206.77451%202.29154%206.7793%202.30078ZM0.71875%209.27246C0.688181%209.21431%200.660805%209.1543%200.634766%209.09277C0.717039%209.09277%200.804496%209.09277%200.897461%209.09277L0.71875%209.27246Z'%20fill='%23DD5621'%20stroke='%23DD5621'%20stroke-width='3.16'/%3e%3c/g%3e%3c/svg%3e";
const _imports_1 = "" + buildAssetsURL("my-learnmore-BYjE0Htx.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CampaignSection",
  __ssrInlineRender: true,
  props: {
    id: { default: 1 },
    isOngoing: { type: Boolean, default: false },
    title: { default: "" },
    year: { default: "" },
    region: { default: "" },
    issues: { default: "" },
    services: { default: "" },
    img: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const infos = reactive([
      { title: "Year", content: props.year },
      { title: "Region", content: props.region },
      { title: "Issues", content: props.issues },
      { title: "Services", content: props.services }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-10 lg:py-20" }, _attrs))}>`);
      _push(ssrRenderComponent(SectionContainer, { hasMinHeight: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}><div class="w-full grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-12"${_scopeId}><div class="flex flex-col gap-3"${_scopeId}>`);
            if (_ctx.isOngoing) {
              _push2(`<div class="flex flex-row gap-[10px] text-text-primary text-labelLg font-label italic font-semibold"${_scopeId}><img alt="isOngoing"${ssrRenderAttr("src", _imports_0)}${_scopeId}> Ongoing </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h2 class="italic font-semibold text-scaleXL lg:text-h2 font-h2"${_scopeId}>${(_a = _ctx.title) != null ? _a : ""}</h2></div><div class="w-full grid grid-cols-1 gap-7 lg:gap-16"${_scopeId}><div class="grid grid-cols-1 gap-5"${_scopeId}><!--[-->`);
            ssrRenderList(infos, (item) => {
              _push2(`<div class="grid grid-cols-[65px_1fr] gap-10"${_scopeId}><div class="w-[65px] italic text-labelSm lg:text-labelMd font-semibold font-label pt-[1px] lg:pt-[5px]"${_scopeId}>${ssrInterpolate(item.title)}</div><div class="flex-grow text-scaleSM lg:text-scaleMD font-body font-medium"${_scopeId}>${ssrInterpolate(item.content)}</div></div>`);
            });
            _push2(`<!--]--></div><div class="clickCursor bg-cover bg-center transition-transform duration-500 ease-in-out overflow-hidden relative group"${_scopeId}><img${ssrRenderAttr("src", _ctx.img)} class="transition-transform duration-500 ease-in-out lg:group-hover:scale-105" alt="img"${_scopeId}><img class="hidden lg:inline-block absolute right-6 bottom-5 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100" alt="learn more"${ssrRenderAttr("src", _imports_1)}${_scopeId}><div class="flex lg:hidden justify-end items-center mt-7"${_scopeId}><img alt="learn more"${ssrRenderAttr("src", _imports_1)}${_scopeId}></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode("div", { class: "w-full grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-12" }, [
                  createVNode("div", { class: "flex flex-col gap-3" }, [
                    _ctx.isOngoing ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-row gap-[10px] text-text-primary text-labelLg font-label italic font-semibold"
                    }, [
                      createVNode("img", {
                        alt: "isOngoing",
                        src: _imports_0
                      }),
                      createTextVNode(" Ongoing ")
                    ])) : createCommentVNode("", true),
                    createVNode("h2", {
                      innerHTML: _ctx.title,
                      class: "italic font-semibold text-scaleXL lg:text-h2 font-h2"
                    }, null, 8, ["innerHTML"])
                  ]),
                  createVNode("div", { class: "w-full grid grid-cols-1 gap-7 lg:gap-16" }, [
                    createVNode("div", { class: "grid grid-cols-1 gap-5" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(infos, (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.title,
                          class: "grid grid-cols-[65px_1fr] gap-10"
                        }, [
                          createVNode("div", { class: "w-[65px] italic text-labelSm lg:text-labelMd font-semibold font-label pt-[1px] lg:pt-[5px]" }, toDisplayString(item.title), 1),
                          createVNode("div", { class: "flex-grow text-scaleSM lg:text-scaleMD font-body font-medium" }, toDisplayString(item.content), 1)
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "clickCursor bg-cover bg-center transition-transform duration-500 ease-in-out overflow-hidden relative group" }, [
                      createVNode("img", {
                        src: _ctx.img,
                        class: "transition-transform duration-500 ease-in-out lg:group-hover:scale-105",
                        alt: "img"
                      }, null, 8, ["src"]),
                      createVNode("img", {
                        class: "hidden lg:inline-block absolute right-6 bottom-5 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100",
                        alt: "learn more",
                        src: _imports_1
                      }),
                      createVNode("div", { class: "flex lg:hidden justify-end items-center mt-7" }, [
                        createVNode("img", {
                          alt: "learn more",
                          src: _imports_1
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/campaigns/CampaignSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [{ rel: "canonical", href: `https://singingcicadas.com/campaigns` }]
    });
    useHead({
      title: () => seoWording.campaignList.title,
      meta: [
        { name: "description", content: () => seoWording.campaignList.description },
        { property: "og:title", content: () => seoWording.campaignList.metaTitle },
        { property: "og:description", content: () => seoWording.campaignList.metaDescription },
        { property: "og:image", content: () => seoBanner },
        { property: "og:url", content: () => `https://singingcicadas.com/campaigns` },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: seoWording.siteName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: () => seoWording.campaignList.metaTitle },
        { name: "twitter:description", content: () => seoWording.campaignList.description },
        { name: "twitter:image", content: () => seoBanner }
      ]
    });
    const router = useRouter();
    const campaigns = ref(campaignsWording.campaigns);
    const handleClickCampaign = (id) => {
      router.push(`/campaigns/${id}`);
    };
    useScrollAnime();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full min-h-screen bg-surface-def" }, _attrs))} data-v-a1dad6ff>`);
      _push(ssrRenderComponent(LandingSection, null, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(campaigns.value, (item, index2) => {
        _push(`<!--[-->`);
        if (index2 !== 0) {
          _push(`<div class="scroll-fade" data-v-a1dad6ff>`);
          _push(ssrRenderComponent(_sfc_main$1, {
            onClick: ($event) => handleClickCampaign(item.id),
            id: item.id,
            img: item.img,
            isOngoing: item.isOngoing,
            issues: item.issues,
            region: item.region,
            services: item.services,
            title: item.title,
            year: item.year,
            class: "cursor-pointer"
          }, null, _parent));
          if (index2 !== campaigns.value.length - 1) {
            _push(`<img class="w-full px-8" alt="line"${ssrRenderAttr("src", _imports_0$2)} data-v-a1dad6ff>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_sfc_main$1, {
            onClick: ($event) => handleClickCampaign(item.id),
            id: item.id,
            img: item.img,
            isOngoing: item.isOngoing,
            issues: item.issues,
            region: item.region,
            services: item.services,
            title: item.title,
            year: item.year,
            class: "cursor-pointer"
          }, null, _parent));
          if (index2 !== campaigns.value.length - 1) {
            _push(`<img class="w-full px-8" alt="line"${ssrRenderAttr("src", _imports_0$2)} data-v-a1dad6ff>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/campaigns/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a1dad6ff"]]);

export { index as default };
//# sourceMappingURL=my-index-T4AkNq9k.mjs.map
