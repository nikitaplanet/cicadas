import { D as buildAssetsURL } from '../nitro/nitro.mjs';
import { defineComponent, ref, mergeProps, unref, resolveComponent, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { s as studioWording, L as LandingSection } from './my-LandingSection-B4H7WF-M.mjs';
import { u as useHead, s as seoWording, S as SectionContainer } from './server.mjs';
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
import './my-media-CWK_KdC4.mjs';
import './my-HeaderDescription-RFI0QBAK.mjs';
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

const _imports_0 = "" + buildAssetsURL("my-right-CaHqFNf-.svg");
const _imports_1 = "" + buildAssetsURL("my-learnmore-CeMjTT3V.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "StudioSection",
  __ssrInlineRender: true,
  props: {
    id: { default: "1" },
    title: { default: "" },
    img: { default: "" },
    align: { default: "left" },
    swiperClass: { default: "aspect-[banner]" },
    amount: { default: 0 },
    detailList: { default: [] }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-0 pb-0 2xl:mb-[-30px]" }, _attrs))}>`);
      _push(ssrRenderComponent(SectionContainer, { hasMinHeight: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full grid grid-cols-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_router_link, {
              to: `/studio/${_ctx.id}`,
              class: ["flex flex-col cursor-pointer", {
                "items-end justify-start": _ctx.align === "right"
              }]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full lg:max-w-[650px] flex justify-between items-start"${_scopeId2}><h2 class="italic font-semibold text-scaleXL lg:text-h2 font-h2 cursor-pointer"${_scopeId2}>${ssrInterpolate(_ctx.title)}</h2><img class="inline-block lg:hidden" alt="Right"${ssrRenderAttr("src", _imports_0)}${_scopeId2}></div><div class="w-full lg:w-[90%] mt-5 lg:mt-12 flex flex-col items-center"${_scopeId2}><span class="${ssrRenderClass([{ "justify-start": _ctx.align === "left", "justify-end": _ctx.align === "right" }, "w-full flex items-center"])}"${_scopeId2}><span class="overflow-hidden relative group"${_scopeId2}><img${ssrRenderAttr("alt", _ctx.title)}${ssrRenderAttr("src", _ctx.img)} class="clickCursor opacity-100 w-full lg:w-[650px] transition-transform duration-500 ease-in-out lg:group-hover:scale-105" loading="lazy"${_scopeId2}></span></span><div class="${ssrRenderClass([{ "justify-start": _ctx.align === "left", "justify-end": _ctx.align === "right" }, "w-full flex items-center"])}"${_scopeId2}><div class="w-full lg:w-[650px] flex flex-row justify-end mt-5"${_scopeId2}><img class="inline-block" alt="learn more"${ssrRenderAttr("src", _imports_1)}${_scopeId2}></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full lg:max-w-[650px] flex justify-between items-start" }, [
                      createVNode("h2", { class: "italic font-semibold text-scaleXL lg:text-h2 font-h2 cursor-pointer" }, toDisplayString(_ctx.title), 1),
                      createVNode("img", {
                        class: "inline-block lg:hidden",
                        alt: "Right",
                        src: _imports_0
                      })
                    ]),
                    createVNode("div", { class: "w-full lg:w-[90%] mt-5 lg:mt-12 flex flex-col items-center" }, [
                      createVNode("span", {
                        class: ["w-full flex items-center", { "justify-start": _ctx.align === "left", "justify-end": _ctx.align === "right" }]
                      }, [
                        createVNode("span", { class: "overflow-hidden relative group" }, [
                          createVNode("img", {
                            alt: _ctx.title,
                            src: _ctx.img,
                            class: "clickCursor opacity-100 w-full lg:w-[650px] transition-transform duration-500 ease-in-out lg:group-hover:scale-105",
                            loading: "lazy"
                          }, null, 8, ["alt", "src"])
                        ])
                      ], 2),
                      createVNode("div", {
                        class: ["w-full flex items-center", { "justify-start": _ctx.align === "left", "justify-end": _ctx.align === "right" }]
                      }, [
                        createVNode("div", { class: "w-full lg:w-[650px] flex flex-row justify-end mt-5" }, [
                          createVNode("img", {
                            class: "inline-block",
                            alt: "learn more",
                            src: _imports_1
                          })
                        ])
                      ], 2)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full grid grid-cols-1" }, [
                createVNode(_component_router_link, {
                  to: `/studio/${_ctx.id}`,
                  class: ["flex flex-col cursor-pointer", {
                    "items-end justify-start": _ctx.align === "right"
                  }]
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "w-full lg:max-w-[650px] flex justify-between items-start" }, [
                      createVNode("h2", { class: "italic font-semibold text-scaleXL lg:text-h2 font-h2 cursor-pointer" }, toDisplayString(_ctx.title), 1),
                      createVNode("img", {
                        class: "inline-block lg:hidden",
                        alt: "Right",
                        src: _imports_0
                      })
                    ]),
                    createVNode("div", { class: "w-full lg:w-[90%] mt-5 lg:mt-12 flex flex-col items-center" }, [
                      createVNode("span", {
                        class: ["w-full flex items-center", { "justify-start": _ctx.align === "left", "justify-end": _ctx.align === "right" }]
                      }, [
                        createVNode("span", { class: "overflow-hidden relative group" }, [
                          createVNode("img", {
                            alt: _ctx.title,
                            src: _ctx.img,
                            class: "clickCursor opacity-100 w-full lg:w-[650px] transition-transform duration-500 ease-in-out lg:group-hover:scale-105",
                            loading: "lazy"
                          }, null, 8, ["alt", "src"])
                        ])
                      ], 2),
                      createVNode("div", {
                        class: ["w-full flex items-center", { "justify-start": _ctx.align === "left", "justify-end": _ctx.align === "right" }]
                      }, [
                        createVNode("div", { class: "w-full lg:w-[650px] flex flex-row justify-end mt-5" }, [
                          createVNode("img", {
                            class: "inline-block",
                            alt: "learn more",
                            src: _imports_1
                          })
                        ])
                      ], 2)
                    ])
                  ]),
                  _: 1
                }, 8, ["to", "class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/studio/StudioSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const studioInfo = ref(studioWording.studioInfo);
    useHead({
      link: [{ rel: "canonical", href: `${seoWording.domain}/studio` }]
    });
    useHead({
      title: () => seoWording.studioList.title,
      meta: [
        { name: "description", content: () => seoWording.studioList.description },
        { property: "og:title", content: () => seoWording.studioList.metaTitle },
        { property: "og:description", content: () => seoWording.studioList.metaDescription },
        { property: "og:image", content: () => seoBanner },
        { property: "og:url", content: () => `${seoWording.domain}/studio` },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: seoWording.siteName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: () => seoWording.studioList.metaTitle },
        { name: "twitter:description", content: () => seoWording.studioList.description },
        { name: "twitter:image", content: () => seoBanner }
      ]
    });
    useScrollAnime();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full min-h-screen bg-surface-def" }, _attrs))}>`);
      _push(ssrRenderComponent(LandingSection, {
        description: unref(studioWording).landing.description,
        title: unref(studioWording).landing.headerTitle
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(studioInfo.value, (item, index) => {
        _push(`<div class="${ssrRenderClass([{ "pb-[120px]": index !== studioInfo.value.length - 1, "pb-[80px]": index === studioInfo.value.length - 1 }, "lg:pb-5"])}">`);
        if (index === 0) {
          _push(ssrRenderComponent(_sfc_main$1, {
            align: item.align,
            amount: item.detail.list.length,
            detailList: item.detail.list,
            id: item.id,
            img: item.img,
            swiperClass: item.swiperClass,
            title: item.listTitle
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (index !== 0) {
          _push(`<div class="flex flex-col scroll-fade">`);
          _push(ssrRenderComponent(_sfc_main$1, {
            align: item.align,
            amount: item.detail.list.length,
            detailList: item.detail.list,
            id: item.id,
            img: item.img,
            swiperClass: item.swiperClass,
            title: item.listTitle
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/studio/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=my-index-DvHZZK6t.mjs.map
