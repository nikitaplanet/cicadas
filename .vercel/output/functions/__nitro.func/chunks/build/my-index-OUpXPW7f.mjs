import { D as buildAssetsURL } from '../nitro/nitro.mjs';
import { defineComponent, mergeProps, unref, ref, watch, nextTick, withCtx, createVNode, withDirectives, createBlock, openBlock, reactive, createTextVNode, toDisplayString, Fragment, renderList, computed, resolveComponent, renderSlot, withAsyncContext, vShow, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrGetDirectiveProps, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { s as seoBanner } from './my-cicadas_banner-DnReMfVH.mjs';
import { _ as _export_sfc, d as useGetMediaQuery, u as useHead, s as seoWording, b as _sfc_main$8$1, T as TextMode, S as SectionContainer, A as AnimateOnScroll, g as __nuxt_component_0$1, C as CommonOverlay, f as _sfc_main$5$1 } from './server.mjs';
import { c as contentText, S as SectionNameTag, a as ScrollTrigger, _ as _sfc_main$n } from './my-ContentButton-BIEGqkNQ.mjs';
import { _ as _sfc_main$l } from './my-HeaderDescription-RFI0QBAK.mjs';
import { _ as _sfc_main$m } from './my-NVideo-B935zYVp.mjs';
import { gsap } from 'gsap';
import { useRouter } from 'vue-router';
import { u as useScrollAnime } from './my-useScrollAnime-BImYRP-9.mjs';
import script from './my-index-ktK80QTD.mjs';
import script$1 from './my-index-A2MCgZhY.mjs';
import script$3 from './my-index-CudRX9p9.mjs';
import script$2 from './my-index-glPOPk0k.mjs';
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
import './my-index-DwFlqrcW.mjs';
import './my-index-Dt_hBL8H.mjs';
import './my-index-CYk1sGx_.mjs';
import './my-index-CXLKGGen.mjs';
import '@primeuix/styles/accordion';
import './my-index-Df2j__e2.mjs';
import './my-index-CyO5k-KM.mjs';
import '@primeuix/styles/ripple';

var ScrollTriggerDirection = /* @__PURE__ */ ((ScrollTriggerDirection2) => {
  ScrollTriggerDirection2[ScrollTriggerDirection2["UP"] = 1] = "UP";
  ScrollTriggerDirection2[ScrollTriggerDirection2["DOWN"] = 2] = "DOWN";
  ScrollTriggerDirection2[ScrollTriggerDirection2["LEFT"] = 3] = "LEFT";
  ScrollTriggerDirection2[ScrollTriggerDirection2["RIGHT"] = 4] = "RIGHT";
  return ScrollTriggerDirection2;
})(ScrollTriggerDirection || {});
async function useFadeInOnScroll(el, trigger, options) {
  return;
}
const _imports_0$5 = "" + buildAssetsURL("my-1-BNz5Jfk7.svg");
const _imports_2$2 = "" + buildAssetsURL("my-1_feather-CBZK81Zl.svg");
const _imports_2$1 = "" + buildAssetsURL("my-1-BeZ0y2va.svg");
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "AboutUsSlide1",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "aboutUs-bg" }, _attrs))} data-v-fc88be26>`);
      _push(ssrRenderComponent(SectionContainer, {
        hasMinHeight: false,
        isAutoWidth: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full lg:w-[80vw] flex flex-col justify-center items-center pt-8" data-v-fc88be26${_scopeId}><div class="w-full" data-v-fc88be26${_scopeId}>`);
            _push2(ssrRenderComponent(SectionNameTag, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(contentText).aboutUs.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(contentText).aboutUs.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="w-full flex flex-row justify-center items-center gap-10 my-28" data-v-fc88be26${_scopeId}><img class="w-[90%] max-w-[550px]" alt="flower"${ssrRenderAttr("src", _imports_0$5)} data-v-fc88be26${_scopeId}><div class="flex flex-col relative" data-v-fc88be26${_scopeId}><img class="absolute bottom-auto top-[-135px] right-[-40%] w-32" alt="feather"${ssrRenderAttr("src", _imports_2$2)} data-v-fc88be26${_scopeId}><img class="w-full max-w-[320px] ml-4" alt="wording"${ssrRenderAttr("src", _imports_2$1)} data-v-fc88be26${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full lg:w-[80vw] flex flex-col justify-center items-center pt-8" }, [
                createVNode("div", { class: "w-full" }, [
                  createVNode(SectionNameTag, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(contentText).aboutUs.title), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "w-full flex flex-row justify-center items-center gap-10 my-28" }, [
                  createVNode("img", {
                    class: "w-[90%] max-w-[550px]",
                    alt: "flower",
                    src: _imports_0$5
                  }),
                  createVNode("div", { class: "flex flex-col relative" }, [
                    createVNode("img", {
                      class: "absolute bottom-auto top-[-135px] right-[-40%] w-32",
                      alt: "feather",
                      src: _imports_2$2
                    }),
                    createVNode("img", {
                      class: "w-full max-w-[320px] ml-4",
                      alt: "wording",
                      src: _imports_2$1
                    })
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
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/horizonSlide/AboutUsSlide1.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const AboutUsSlide1 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-fc88be26"]]);
const _imports_0$4 = "" + buildAssetsURL("my-2-DvrnLnW5.svg");
const _imports_3$2 = "" + buildAssetsURL("my-2-BdNfLJ6a.svg");
const _imports_5 = "" + buildAssetsURL("my-feather2-DiTK58RL.svg");
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "AboutUsSlide2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_animateonscroll = AnimateOnScroll;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "aboutUs-bg" }, _attrs))} data-v-7206b246>`);
      _push(ssrRenderComponent(SectionContainer, { hasMinHeight: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col justify-center items-center transition-all duration-500" }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true })))} data-v-7206b246${_scopeId}><div class="w-full flex flex-col lg:flex-row justify-center items-center gap-10" data-v-7206b246${_scopeId}><div class="flex flex-col" data-v-7206b246${_scopeId}><img alt="wording"${ssrRenderAttr("src", _imports_0$4)} data-v-7206b246${_scopeId}></div><div class="relative" data-v-7206b246${_scopeId}><img class="w-[90%] max-w-[480px] ml-24" alt="flower2"${ssrRenderAttr("src", _imports_3$2)} data-v-7206b246${_scopeId}><img class="absolute bottom-[-130px] right-[-100px] w-[80px]" alt="feather"${ssrRenderAttr("src", _imports_5)} data-v-7206b246${_scopeId}></div></div></div>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("div", { class: "w-full flex flex-col justify-center items-center transition-all duration-500" }, [
                createVNode("div", { class: "w-full flex flex-col lg:flex-row justify-center items-center gap-10" }, [
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("img", {
                      alt: "wording",
                      src: _imports_0$4
                    })
                  ]),
                  createVNode("div", { class: "relative" }, [
                    createVNode("img", {
                      class: "w-[90%] max-w-[480px] ml-24",
                      alt: "flower2",
                      src: _imports_3$2
                    }),
                    createVNode("img", {
                      class: "absolute bottom-[-130px] right-[-100px] w-[80px]",
                      alt: "feather",
                      src: _imports_5
                    })
                  ])
                ])
              ])), [
                [_directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true }]
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
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/horizonSlide/AboutUsSlide2.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const AboutUsSlide2 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-7206b246"]]);
const _imports_0$3 = "" + buildAssetsURL("my-3-aAAYAmQz.svg");
const _imports_6 = "" + buildAssetsURL("my-3-BkDf30C3.svg");
const _imports_8 = "" + buildAssetsURL("my-learnMore-1OIIerPp.svg");
const _imports_3$1 = "" + buildAssetsURL("my-learnMore_hover-6nmIIhWm.svg");
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "AboutUsSlide3",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_animateonscroll = AnimateOnScroll;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative aboutUs-bg" }, _attrs))} data-v-ae5f6780>`);
      _push(ssrRenderComponent(SectionContainer, { hasMinHeight: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col justify-center items-center transition-all duration-500" }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true })))} data-v-ae5f6780${_scopeId}><div class="w-full flex flex-col lg:flex-row justify-center items-center gap-10 my-28" data-v-ae5f6780${_scopeId}><div class="flex flex-col" data-v-ae5f6780${_scopeId}><img class="w-full min-w-[350px] max-w-[350px]" alt=""${ssrRenderAttr("src", _imports_0$3)} data-v-ae5f6780${_scopeId}></div><img class="w-[90%] max-w-[580px] pb-5 ml-24" alt="bird"${ssrRenderAttr("src", _imports_6)} data-v-ae5f6780${_scopeId}></div></div>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("div", { class: "w-full flex flex-col justify-center items-center transition-all duration-500" }, [
                createVNode("div", { class: "w-full flex flex-col lg:flex-row justify-center items-center gap-10 my-28" }, [
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("img", {
                      class: "w-full min-w-[350px] max-w-[350px]",
                      alt: "",
                      src: _imports_0$3
                    })
                  ]),
                  createVNode("img", {
                    class: "w-[90%] max-w-[580px] pb-5 ml-24",
                    alt: "bird",
                    src: _imports_6
                  })
                ])
              ])), [
                [_directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true }]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5$1, {
        class: "group absolute bottom-[120px] right-[130px] w-[130px] h-[25px]",
        to: "/about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full relative" data-v-ae5f6780${_scopeId}><img class="absolute top-0 left-0 cursor-pointer opacity-100 group-hover:opacity-0 transition-opacity duration-300" alt="feather"${ssrRenderAttr("src", _imports_8)} data-v-ae5f6780${_scopeId}><img class="absolute top-0 left-0 w-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300" alt="feather"${ssrRenderAttr("src", _imports_3$1)} data-v-ae5f6780${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full relative" }, [
                createVNode("img", {
                  class: "absolute top-0 left-0 cursor-pointer opacity-100 group-hover:opacity-0 transition-opacity duration-300",
                  alt: "feather",
                  src: _imports_8
                }),
                createVNode("img", {
                  class: "absolute top-0 left-0 w-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  alt: "feather",
                  src: _imports_3$1
                })
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
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/horizonSlide/AboutUsSlide3.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const AboutUsSlide3 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-ae5f6780"]]);
const _sfc_main$h = {
  __name: "HomeAboutHorizonScrollCard",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1551897b><section class="section -b -horizon" data-v-1551897b><div class="section__horizon" data-v-1551897b><div class="section__horizon-block pl-[100px]" data-v-1551897b>`);
      _push(ssrRenderComponent(AboutUsSlide1, null, null, _parent));
      _push(`</div><div class="section__horizon-block" data-v-1551897b>`);
      _push(ssrRenderComponent(AboutUsSlide2, null, null, _parent));
      _push(`</div><div class="section__horizon-block pl-[100px] pr-[300px]" data-v-1551897b>`);
      _push(ssrRenderComponent(AboutUsSlide3, null, null, _parent));
      _push(`</div></div></section></div>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/horizonSlide/HomeAboutHorizonScrollCard.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const HomeAboutHorizonScrollCard = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-1551897b"]]);
const _imports_0$2 = "" + buildAssetsURL("my-LogoIcon-DhMMSI58.svg");
const _sfc_main$g = {
  __name: "LandingSection",
  __ssrInlineRender: true,
  setup(__props) {
    const main = ref(null);
    const logo = ref(null);
    const headerText = ref(null);
    const headerDesc = ref(null);
    const logoM = ref(null);
    const headerTextM = ref(null);
    const headerDescM = ref(null);
    const { isMobile } = useGetMediaQuery();
    watch(isMobile, initAnimate);
    function initAnimate() {
      if (isMobile.value) {
        nextTick(() => {
          useFadeInOnScroll(logoM.value, main.value, {
            direction: ScrollTriggerDirection.DOWN
          });
          useFadeInOnScroll(headerTextM.value.$el, main.value, {
            direction: ScrollTriggerDirection.LEFT
          });
          useFadeInOnScroll(headerDescM.value.$el, main.value, {
            direction: ScrollTriggerDirection.RIGHT
          });
        });
      } else {
        nextTick(() => {
          useFadeInOnScroll(logo.value, main.value, {
            direction: ScrollTriggerDirection.DOWN
          });
          useFadeInOnScroll(headerText.value.$el, main.value, {
            direction: ScrollTriggerDirection.LEFT
          });
          useFadeInOnScroll(headerDesc.value.$el, main.value, {
            direction: ScrollTriggerDirection.RIGHT
          });
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "main",
        ref: main,
        class: "w-full overflow-hidden bg-[linear-gradient(180deg,var(--sc-color-border-primary,#DD5621)_75.98%,rgba(221,86,33,0)_100%)] lg:bg-[linear-gradient(180deg,var(--Border-primary,#dd5621)_38.08%,rgba(221,86,33,0)_100%)]"
      }, _attrs))}><div class="w-full px-6 lg:px-10 m-auto"><div class="w-full h-screen relative"><div class="hidden lg:block"><div class="w-full h-full absolute left-0 top-0 flex align-center justify-center"><img class="block w-1/2 lg:w-9/12 max-w-[450px]" alt="LogoIcon"${ssrRenderAttr("src", _imports_0$2)}></div><div class="w-full h-full grid grid-cols-1 pt-20 lg:pt-10 absolute lg:grid-cols-12"><div class="col-span-1 md:col-span-8">`);
      _push(ssrRenderComponent(_sfc_main$8$1, {
        ref_key: "headerText",
        ref: headerText,
        mode: unref(TextMode).light
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<span${_scopeId}>${(_a = unref(contentText).landing.headerTitle) != null ? _a : ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: unref(contentText).landing.headerTitle
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-start pb-[60px] col-span-1 md:pt-0 md:col-span-4 md:items-start lg:pb-24">`);
      _push(ssrRenderComponent(_sfc_main$l, {
        ref_key: "headerDesc",
        ref: headerDesc,
        mode: unref(TextMode).light,
        isHome: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<span${_scopeId}>${(_a = unref(contentText).landing.headerDescription) != null ? _a : ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: unref(contentText).landing.headerDescription
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="w-full h-full flex flex-col justify-between pt-20 lg:hidden relative"><div class="">`);
      _push(ssrRenderComponent(_sfc_main$8$1, {
        ref_key: "headerTextM",
        ref: headerTextM,
        mode: unref(TextMode).light
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<span${_scopeId}>${(_a = unref(contentText).landing.headerTitle) != null ? _a : ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: unref(contentText).landing.headerTitle
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 flex items-center justify-center my-10"><img class="block xs:w-1/2 w-[60%] max-w-[450px]" alt="LogoIcon"${ssrRenderAttr("src", _imports_0$2)}></div><div class="flex-1">`);
      _push(ssrRenderComponent(_sfc_main$l, {
        ref_key: "headerDescM",
        ref: headerDescM,
        mode: unref(TextMode).light,
        isHome: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<span${_scopeId}>${(_a = unref(contentText).landing.headerDescription) != null ? _a : ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: unref(contentText).landing.headerDescription
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/LandingSection.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-medium text-body lg:text-scaleMD font-body" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/text/SectionTitle.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const SectionTitle = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$e = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-text-def font-medium text-body lg:text-scaleMD font-body" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/text/SectionDescription.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const SectionDescription = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Section1",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_animateonscroll = AnimateOnScroll;
      _push(ssrRenderComponent(SectionContainer, mergeProps({
        hasMinHeight: false,
        class: "lg:pb-20"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col lg:gap-5 xl:gap-10 lg:grid lg:grid-cols-12 pt-[60px] lg:pt-[150px] xl:pt-[200px] transition-all duration-700" }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true })))}${_scopeId}><div class="px-0 col-span-6 xl:col-span-5 xl:px-12 flex flex-col justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(SectionTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a;
                if (_push3) {
                  _push3(`<span${_scopeId2}>${(_a = unref(contentText).section1.title) != null ? _a : ""}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      innerHTML: unref(contentText).section1.title
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionDescription, { class: "mt-5 lg:mt-10" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a;
                if (_push3) {
                  _push3(`<span${_scopeId2}>${(_a = unref(contentText).section1.description) != null ? _a : ""}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      innerHTML: unref(contentText).section1.description
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-[60px] lg:mt-0 col-span-6 xl:col-span-7"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$m, {
              isAutoPlay: "",
              isShowLinkOutside: "",
              videoUrl: "https://player.vimeo.com/video/1059379503"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("div", { class: "w-full flex flex-col lg:gap-5 xl:gap-10 lg:grid lg:grid-cols-12 pt-[60px] lg:pt-[150px] xl:pt-[200px] transition-all duration-700" }, [
                createVNode("div", { class: "px-0 col-span-6 xl:col-span-5 xl:px-12 flex flex-col justify-center" }, [
                  createVNode(SectionTitle, null, {
                    default: withCtx(() => [
                      createVNode("span", {
                        innerHTML: unref(contentText).section1.title
                      }, null, 8, ["innerHTML"])
                    ]),
                    _: 1
                  }),
                  createVNode(SectionDescription, { class: "mt-5 lg:mt-10" }, {
                    default: withCtx(() => [
                      createVNode("span", {
                        innerHTML: unref(contentText).section1.description
                      }, null, 8, ["innerHTML"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "mt-[60px] lg:mt-0 col-span-6 xl:col-span-7" }, [
                  createVNode(_sfc_main$m, {
                    isAutoPlay: "",
                    isShowLinkOutside: "",
                    videoUrl: "https://player.vimeo.com/video/1059379503"
                  })
                ])
              ])), [
                [_directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true }]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/Section1.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Section2",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    const sectionRef = ref();
    const textBlockRef = ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:px-10" }, _attrs))} data-v-c2f9d47d>`);
      _push(ssrRenderComponent(SectionContainer, {
        ref_key: "sectionRef",
        ref: sectionRef,
        hasMinHeight: false,
        class: "max-w-[1000px] 2xl:max-w-[1200px] h-screen text-scaleXL md:text-scale2XL 2xl:text-h2 font-semibold font-h2sans flex items-center justify-center overflow-hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<div data-v-c2f9d47d${_scopeId}><span class="line" data-v-c2f9d47d${_scopeId}>${(_a = unref(contentText).section2.title1) != null ? _a : ""}</span></div>`);
          } else {
            return [
              createVNode("div", {
                ref_key: "textBlockRef",
                ref: textBlockRef
              }, [
                createVNode("span", {
                  innerHTML: unref(contentText).section2.title1,
                  class: "line"
                }, null, 8, ["innerHTML"])
              ], 512)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/Section2.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Section2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-c2f9d47d"]]);
const _imports_0$1 = "" + buildAssetsURL("my-1-BxwoZKW1.png");
const _imports_1$2 = "" + buildAssetsURL("my-2-v1UdauaP.png");
const _imports_2 = "" + buildAssetsURL("my-3-C0ETqJXw.png");
const _imports_3 = "" + buildAssetsURL("my-4-CiTks2fH.png");
const _imports_4$1 = "" + buildAssetsURL("my-learnMore-BFg0YFSJ.svg");
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "HoverTextBox",
  __ssrInlineRender: true,
  props: {
    title: { default: "" },
    description: { default: "" },
    link: { default: "" },
    isActive: { type: Boolean, default: false },
    isButton: { type: Boolean, default: false },
    align: { default: "left" },
    defaultColor: { default: "text-text-archive-supportive2" }
  },
  emits: ["click", "clickArrow"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useRouter();
    const isActiveBox = computed(() => {
      return props.isActive;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between flex-row gap-6 group cursor-pointer" }, _attrs))}><div class="flex flex-col items-start gap-4 lg:gap-6"><button class="${ssrRenderClass([{
        [props.defaultColor]: !isActiveBox.value,
        "text-text-def": isActiveBox.value,
        "text-left": _ctx.align === "left",
        "text-right": _ctx.align === "right"
      }, "hidden lg:block w-full italic font-semibold text-scaleLG lg:text-h1 font-h1 group-hover:text-text-def transition ease-in-out"])}" type="button">${ssrInterpolate(_ctx.title)}</button><button class="${ssrRenderClass([{
        [props.defaultColor]: !isActiveBox.value,
        "text-text-def": isActiveBox.value,
        "text-left": _ctx.align === "left",
        "text-right": _ctx.align === "right"
      }, "block lg:hidden w-full italic font-semibold text-scaleLG lg:text-h1 font-h1 group-hover:text-text-def transition ease-in-out"])}" type="button">${ssrInterpolate(_ctx.title)}</button><div class="hidden lg:block"><button class="${ssrRenderClass([{
        "inline-block translate-y-1": isActiveBox.value,
        hidden: !isActiveBox.value,
        "text-left": _ctx.align === "left",
        "text-right": _ctx.align === "right"
      }, "w-full text-body lg:text-body18 font-body text-text-def font-semibold transition ease-linear lg:group-hover:inline-block"])}" type="button">${ssrInterpolate(_ctx.description)} <div class="flex flex-row justify-end items-center mt-4"><img alt="learnMore"${ssrRenderAttr("src", _imports_4$1)}></div></button></div></div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/molecules/HoverTextBox.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "OurWorks",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const { isMobile } = useGetMediaQuery();
    const selectedContent = ref(isMobile.value ? 1 : 0);
    const showImage = ref(0);
    const hoverImage = ref(0);
    const currentImage = ref(1);
    const isShowCommon = ref(false);
    let timer;
    const initTimer = () => {
      timer = setInterval();
    };
    const handleClick = (id) => {
      selectedContent.value = id;
      showImage.value = id;
      hoverImage.value = id;
      if (id === 4) {
        isShowCommon.value = true;
      }
    };
    const handleCloseCommon = () => {
      isShowCommon.value = false;
    };
    const list = reactive([...contentText.ourWorks.list]);
    const currentDescription = computed(() => {
      const current = list.find((item) => item.id === selectedContent.value);
      return (current == null ? void 0 : current.description) || "";
    });
    const handleClickMore = () => {
      if (selectedContent.value === 4) {
        isShowCommon.value = true;
      } else {
        const current = list.find((item) => item.id === selectedContent.value);
        router.push((current == null ? void 0 : current.link) || "");
      }
    };
    const handleMouseOver = (item) => {
      hoverImage.value = item.id;
      clearInterval(timer);
      currentImage.value = item.id;
    };
    const handleMouseLeave = () => {
      hoverImage.value = showImage.value;
      initTimer();
    };
    useScrollAnime();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="section3-bg py-10 md:py-28" data-v-985f5406>`);
      _push(ssrRenderComponent(SectionContainer, { hasMinHeight: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full grid grid-cols-1 xl:grid-cols-12 scroll-fade" data-v-985f5406${_scopeId}><div class="col-span-1 xl:col-span-5 flex flex-col" data-v-985f5406${_scopeId}>`);
            _push2(ssrRenderComponent(SectionNameTag, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Our Works`);
                } else {
                  return [
                    createTextVNode("Our Works")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="relative py-4 lg:p-4 xl:p-16 mt-3" data-v-985f5406${_scopeId}><div class="${ssrRenderClass({
              "inline-block opacity-100": hoverImage.value === 1 || currentImage.value === 1,
              "hidden opacity-0": hoverImage.value !== 1 && currentImage.value !== 1
            })}" data-v-985f5406${_scopeId}><img alt="1"${ssrRenderAttr("src", _imports_0$1)} data-v-985f5406${_scopeId}></div><div class="${ssrRenderClass({
              "inline-block opacity-100": hoverImage.value === 2 || currentImage.value === 2,
              "hidden opacity-0": hoverImage.value !== 2 && currentImage.value !== 2
            })}" data-v-985f5406${_scopeId}><img alt="2"${ssrRenderAttr("src", _imports_1$2)} data-v-985f5406${_scopeId}></div><div class="${ssrRenderClass({
              "inline-block opacity-100": hoverImage.value === 3 || currentImage.value === 3,
              "hidden opacity-0": hoverImage.value !== 3 && currentImage.value !== 3
            })}" data-v-985f5406${_scopeId}><img alt="3"${ssrRenderAttr("src", _imports_2)} data-v-985f5406${_scopeId}></div><div class="${ssrRenderClass({
              "inline-block opacity-100": hoverImage.value === 4 || currentImage.value === 4,
              "hidden opacity-0": hoverImage.value !== 4 && currentImage.value !== 4
            })}" data-v-985f5406${_scopeId}><img alt="4"${ssrRenderAttr("src", _imports_3)} data-v-985f5406${_scopeId}></div></div></div><div class="clickCursor col-span-1 flex flex-col lg:px-5 gap-3 xl:p-10 xl:gap-10 mt-5 xl:mt-7 xl:col-span-7" data-v-985f5406${_scopeId}><!--[-->`);
            ssrRenderList(list, (item) => {
              _push2(ssrRenderComponent(_sfc_main$b, {
                onClick: ($event) => handleClick(item.id),
                onMouseleave: handleMouseLeave,
                onMouseover: ($event) => handleMouseOver(item),
                description: item.description,
                isActive: selectedContent.value === item.id,
                isButton: item.id === 4,
                key: item.title,
                link: item.link,
                title: item.title
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--><div class="block lg:hidden text-body font-body font-semibold mt-2" data-v-985f5406${_scopeId}>${ssrInterpolate(currentDescription.value)}</div><div class="flex lg:hidden w-full items-center justify-end mt-2" data-v-985f5406${_scopeId}><button type="button" data-v-985f5406${_scopeId}><img alt="learnMore"${ssrRenderAttr("src", _imports_4$1)} data-v-985f5406${_scopeId}></button></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full grid grid-cols-1 xl:grid-cols-12 scroll-fade" }, [
                createVNode("div", { class: "col-span-1 xl:col-span-5 flex flex-col" }, [
                  createVNode(SectionNameTag, null, {
                    default: withCtx(() => [
                      createTextVNode("Our Works")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "relative py-4 lg:p-4 xl:p-16 mt-3" }, [
                    createVNode("div", {
                      class: {
                        "inline-block opacity-100": hoverImage.value === 1 || currentImage.value === 1,
                        "hidden opacity-0": hoverImage.value !== 1 && currentImage.value !== 1
                      }
                    }, [
                      createVNode("img", {
                        alt: "1",
                        src: _imports_0$1
                      })
                    ], 2),
                    createVNode("div", {
                      class: {
                        "inline-block opacity-100": hoverImage.value === 2 || currentImage.value === 2,
                        "hidden opacity-0": hoverImage.value !== 2 && currentImage.value !== 2
                      }
                    }, [
                      createVNode("img", {
                        alt: "2",
                        src: _imports_1$2
                      })
                    ], 2),
                    createVNode("div", {
                      class: {
                        "inline-block opacity-100": hoverImage.value === 3 || currentImage.value === 3,
                        "hidden opacity-0": hoverImage.value !== 3 && currentImage.value !== 3
                      }
                    }, [
                      createVNode("img", {
                        alt: "3",
                        src: _imports_2
                      })
                    ], 2),
                    createVNode("div", {
                      class: {
                        "inline-block opacity-100": hoverImage.value === 4 || currentImage.value === 4,
                        "hidden opacity-0": hoverImage.value !== 4 && currentImage.value !== 4
                      }
                    }, [
                      createVNode("img", {
                        alt: "4",
                        src: _imports_3
                      })
                    ], 2)
                  ])
                ]),
                createVNode("div", { class: "clickCursor col-span-1 flex flex-col lg:px-5 gap-3 xl:p-10 xl:gap-10 mt-5 xl:mt-7 xl:col-span-7" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(list, (item) => {
                    return openBlock(), createBlock(_sfc_main$b, {
                      onClick: ($event) => handleClick(item.id),
                      onMouseleave: handleMouseLeave,
                      onMouseover: ($event) => handleMouseOver(item),
                      description: item.description,
                      isActive: selectedContent.value === item.id,
                      isButton: item.id === 4,
                      key: item.title,
                      link: item.link,
                      title: item.title
                    }, null, 8, ["onClick", "onMouseover", "description", "isActive", "isButton", "link", "title"]);
                  }), 128)),
                  createVNode("div", { class: "block lg:hidden text-body font-body font-semibold mt-2" }, toDisplayString(currentDescription.value), 1),
                  createVNode("div", { class: "flex lg:hidden w-full items-center justify-end mt-2" }, [
                    createVNode("button", {
                      onClick: handleClickMore,
                      type: "button"
                    }, [
                      createVNode("img", {
                        alt: "learnMore",
                        src: _imports_4$1
                      })
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
      if (isShowCommon.value) {
        _push(ssrRenderComponent(CommonOverlay, { onCloseCommon: handleCloseCommon }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/OurWorks.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const OurWorks = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-985f5406"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "PartnerSwiper",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    reactive([...contentText.sliderSection.contentList]);
    ref(null);
    [__temp, __restore] = withAsyncContext(async () => (async () => {
      return [];
    })()), __temp = await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-8bc0cc4a>`);
      _push(ssrRenderComponent(_component_ClientOnly, {
        fallback: "Loading...",
        "fallback-tag": "div"
      }, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/sliderSection/PartnerSwiper.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const PartnerSwiper = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-8bc0cc4a"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "SliderSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sliderSection w-full lg:pt-16 pb-24 px-6 md:pb-32" }, _attrs))}>`);
      _push(ssrRenderComponent(PartnerSwiper, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/SliderSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ServiceFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDesktop } = useGetMediaQuery();
    const textAry = reactive(
      contentText.issuesWeTackle.contentTextList.map((item, index2) => ({
        ...item,
        id: index2,
        isActive: !isDesktop.value ? index2 === 0 : false
      }))
    );
    const selectedContent = ref(textAry[0]);
    const handleClickItem = (item) => {
      if (isDesktop.value) {
        return;
      }
      textAry.forEach((i) => {
        i.isActive = i.id === item.id;
      });
      selectedContent.value = item;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      const _directive_animateonscroll = AnimateOnScroll;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "issues-bg py-24 lg:pt-32 lg:pb-36" }, _attrs))} data-v-49b7ae22>`);
      _push(ssrRenderComponent(SectionContainer, { hasMinHeight: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col justify-center items-center transition-all duration-700" }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true })))} data-v-49b7ae22${_scopeId}><div class="w-full" data-v-49b7ae22${_scopeId}>`);
            _push2(ssrRenderComponent(SectionNameTag, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(contentText).issuesWeTackle.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(contentText).issuesWeTackle.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("div", { class: "w-full flex flex-col justify-center items-center transition-all duration-700" }, [
                createVNode("div", { class: "w-full" }, [
                  createVNode(SectionNameTag, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(contentText).issuesWeTackle.title), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_ClientOnly, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "w-full flex flex-col gap-5 items-start mt-14 lg:pl-[15%] lg:justify-center" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(textAry, (item) => {
                        return openBlock(), createBlock(_sfc_main$n, {
                          onClick: ($event) => handleClickItem(item),
                          content: item.content,
                          isActive: item.isActive,
                          key: item.title,
                          title: item.title,
                          defaultColorType: "blue"
                        }, null, 8, ["onClick", "content", "isActive", "title"]);
                      }), 128))
                    ])
                  ]),
                  _: 1
                })
              ])), [
                [_directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true }]
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/ServiceFeatures.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ServiceFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-49b7ae22"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "QAccordion",
  __ssrInlineRender: true,
  setup(__props) {
    const accordionPT = {
      root: { class: "w-full flex flex-col gap-5 border-none" }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(script), mergeProps({
        pt: accordionPT,
        unstyled: "",
        value: "0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/accordion/QAccordion.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("my-open-C-VT9HBn.svg");
const _imports_1$1 = "data:image/svg+xml,%3csvg%20width='49'%20height='49'%20viewBox='0%200%2049%2049'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='icon-accordion'%3e%3cpath%20id='Vector'%20d='M36.4461%2023.9453C36.2535%2022.9662%2036.0095%2022.4825%2035.7419%2022.2076C35.2406%2021.6901%2034.7393%2021.5166%2034.2409%2021.5019C33.3397%2021.474%2032.4473%2021.7636%2031.5447%2021.7371C30.0275%2021.6945%2028.528%2022.2032%2027.0108%2022.184C25.8641%2022.1693%2024.7276%2022.5148%2023.5839%2022.6516C22.9311%2022.7295%2022.2828%2022.8691%2021.6242%2022.8C20.8597%2022.7192%2020.104%2022.972%2019.344%2023.0867C18.3502%2023.2367%2017.3563%2023.3734%2016.364%2023.5527C15.9303%2023.6307%2015.4996%2023.7439%2015.0629%2023.7453C14.6145%2023.7453%2014.1691%2023.8188%2013.7177%2023.7497C13.2105%2023.6733%2012.7107%2023.9967%2012.1947%2023.6307C12.0991%2023.5616%2012.0109%2023.7527%2012.0006%2024.1923C11.9918%2024.5701%2012.0785%2024.7715%2012.1491%2024.8773C12.3417%2025.1655%2012.5284%2025.5389%2012.7136%2025.927C12.8077%2026.124%2012.9003%2026.249%2013.0018%2026.3181C13.5031%2026.6592%2014.003%2026.6915%2014.4969%2026.6915C15.2011%2026.69%2015.9009%2026.5474%2016.6007%2026.3813C16.9035%2026.3093%2017.2108%2026.6062%2017.5107%2026.4607C17.6063%2026.4136%2017.7033%2026.371%2017.8003%2026.3739C18.2076%2026.3857%2018.6192%2026.5033%2019.0235%2026.421C19.7409%2026.2769%2020.4686%2026.5401%2021.1831%2026.3592C21.2081%2026.3534%2021.2331%2026.349%2021.2566%2026.3651C21.7874%2026.7136%2022.3078%2026.4695%2022.8253%2026.3857C23.5662%2026.2666%2024.3101%2026.1814%2025.0481%2025.9755C25.2128%2025.93%2025.3848%2026.2431%2025.5392%2026.0887C25.9096%2025.7153%2026.3007%2025.8785%2026.6785%2025.7506C27.4886%2025.4786%2028.3133%2025.6756%2029.1292%2025.583C29.2763%2025.5668%2029.4233%2025.4683%2029.5703%2025.5419C29.7776%2025.6462%2029.9746%2025.5918%2030.1716%2025.4404C30.2495%2025.3801%2030.3348%2025.4022%2030.4156%2025.4051C30.7655%2025.4169%2031.1169%2025.5036%2031.4638%2025.4331C31.8696%2025.3493%2032.2812%2025.536%2032.687%2025.4698C33.0045%2025.4184%2033.325%2025.5036%2033.644%2025.5316C34.0351%2025.5668%2034.4232%2025.4331%2034.8128%2025.3728C35.1877%2025.3154%2035.5626%2025.2596%2035.9874%2025.1949C36.1109%2025.3801%2036.2491%2024.9464%2036.4109%2024.8876C36.5579%2024.8347%2036.5579%2024.498%2036.4491%2023.9438L36.4461%2023.9453Z'%20fill='%23DD5621'/%3e%3c/g%3e%3c/svg%3e";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "QAccordionItem",
  __ssrInlineRender: true,
  props: {
    id: { default: 0 },
    title: { default: "" },
    content: { default: "" }
  },
  setup(__props) {
    const accordionPanelPT = {
      root: { class: "w-full p-3 lg:p-5 border-svg-mask" }
    };
    const accordionHeaderPT = {
      root: { class: "w-full pl-3 flex justify-between items-center text-scaleMD lg:text-h4 font-h4 font-semibold text-left" },
      toggleicon: { class: "w-5 h-5" }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(script$1), mergeProps({
        pt: accordionPanelPT,
        value: _ctx.id,
        unstyled: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(script$2), {
              pt: accordionHeaderPT,
              unstyled: ""
            }, {
              toggleicon: withCtx((data, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img style="${ssrRenderStyle(!data.active ? null : { display: "none" })}" class="p-3" alt="Open"${ssrRenderAttr("src", _imports_0)} data-v-ed55207a${_scopeId2}><img style="${ssrRenderStyle(data.active ? null : { display: "none" })}" alt="Open"${ssrRenderAttr("src", _imports_1$1)} data-v-ed55207a${_scopeId2}>`);
                } else {
                  return [
                    withDirectives(createVNode("img", {
                      class: "p-3",
                      alt: "Open",
                      src: _imports_0
                    }, null, 512), [
                      [vShow, !data.active]
                    ]),
                    withDirectives(createVNode("img", {
                      alt: "Open",
                      src: _imports_1$1
                    }, null, 512), [
                      [vShow, data.active]
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.title)} `);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.title) + " ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(script$3), {
              class: "font-semibold",
              unstyled: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="m-0 mt-2 pl-3" data-v-ed55207a${_scopeId2}>`);
                  if (_ctx.content) {
                    _push3(`<div class="grid grid-cols-5" data-v-ed55207a${_scopeId2}><p class="col-span-4 font-body text-body lg:text-body18 font-medium" data-v-ed55207a${_scopeId2}>${ssrInterpolate(_ctx.content)}</p><span class="col-span-1" data-v-ed55207a${_scopeId2}></span></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "m-0 mt-2 pl-3" }, [
                      _ctx.content ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "grid grid-cols-5"
                      }, [
                        createVNode("p", { class: "col-span-4 font-body text-body lg:text-body18 font-medium" }, toDisplayString(_ctx.content), 1),
                        createVNode("span", { class: "col-span-1" })
                      ])) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "default", {}, void 0, true)
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(script$2), {
                pt: accordionHeaderPT,
                unstyled: ""
              }, {
                toggleicon: withCtx((data) => [
                  withDirectives(createVNode("img", {
                    class: "p-3",
                    alt: "Open",
                    src: _imports_0
                  }, null, 512), [
                    [vShow, !data.active]
                  ]),
                  withDirectives(createVNode("img", {
                    alt: "Open",
                    src: _imports_1$1
                  }, null, 512), [
                    [vShow, data.active]
                  ])
                ]),
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.title) + " ", 1)
                ]),
                _: 1
              }),
              createVNode(unref(script$3), {
                class: "font-semibold",
                unstyled: ""
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "m-0 mt-2 pl-3" }, [
                    _ctx.content ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "grid grid-cols-5"
                    }, [
                      createVNode("p", { class: "col-span-4 font-body text-body lg:text-body18 font-medium" }, toDisplayString(_ctx.content), 1),
                      createVNode("span", { class: "col-span-1" })
                    ])) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/accordion/QAccordionItem.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const QAccordionItem = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-ed55207a"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Questions",
  __ssrInlineRender: true,
  setup(__props) {
    const qaList = reactive(contentText.qa.qaList.map((item, index2) => ({ ...item, id: index2, isActive: index2 === 0 })));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      const _directive_animateonscroll = AnimateOnScroll;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-32 pb-36" }, _attrs))}>`);
      _push(ssrRenderComponent(SectionContainer, { hasMinHeight: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full grid grid-cols-1 lg:grid-cols-12"${_scopeId}><div class="w-full col-span-1 lg:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(SectionNameTag, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(contentText).qa.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(contentText).qa.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${ssrRenderAttrs(mergeProps({ class: "col-span-1 mt-8 lg:mt-0 lg:col-span-8 w-full flex flex-col justify-center items-start gap-5 transition-all duration-700" }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true })))}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full grid grid-cols-1 lg:grid-cols-12" }, [
                createVNode("div", { class: "w-full col-span-1 lg:col-span-4" }, [
                  createVNode(SectionNameTag, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(contentText).qa.title), 1)
                    ]),
                    _: 1
                  })
                ]),
                withDirectives((openBlock(), createBlock("div", { class: "col-span-1 mt-8 lg:mt-0 lg:col-span-8 w-full flex flex-col justify-center items-start gap-5 transition-all duration-700" }, [
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$6, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(qaList, (item) => {
                            return openBlock(), createBlock(QAccordionItem, {
                              content: item.content,
                              id: item.id,
                              key: `toggle_${item.id}`,
                              title: item.title
                            }, null, 8, ["content", "id", "title"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])), [
                  [_directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true }]
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/Questions.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _imports_1 = "" + buildAssetsURL("my-1_m-DH1ZOD1j.svg");
const _imports_4 = "" + buildAssetsURL("my-2_m-CphjhLOx.svg");
const _imports_7 = "" + buildAssetsURL("my-3_m-T7C7ZL_A.svg");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AboutUsMobile",
  __ssrInlineRender: true,
  setup(__props) {
    useScrollAnime();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "aboutUs-bg px-6 py-[120px] flex flex-col gap-[100px]" }, _attrs))} data-v-f8699d4f><div class="w-full" data-v-f8699d4f>`);
      _push(ssrRenderComponent(SectionNameTag, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(contentText).aboutUs.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(contentText).aboutUs.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col items-center justify-start gap-[60px] scroll-fade" data-v-f8699d4f><img class="w-full max-w-[515px]" alt="flower"${ssrRenderAttr("src", _imports_0$5)} data-v-f8699d4f><img class="w-11/12 max-w-[400px]" alt="word"${ssrRenderAttr("src", _imports_1)} data-v-f8699d4f><div class="w-full flex flex-row items-center justify-end" data-v-f8699d4f><img alt="feather"${ssrRenderAttr("src", _imports_2$2)} data-v-f8699d4f></div></div><div class="flex flex-col items-center justify-start gap-[60px] scroll-fade" data-v-f8699d4f><img class="w-11/12 max-w-[515px]" alt="flower"${ssrRenderAttr("src", _imports_3$2)} data-v-f8699d4f><img class="w-11/12 max-w-[400px]" alt="word"${ssrRenderAttr("src", _imports_4)} data-v-f8699d4f><div class="w-full flex flex-row items-center justify-start mt-8" data-v-f8699d4f><img alt="feather"${ssrRenderAttr("src", _imports_5)} data-v-f8699d4f></div></div><div class="flex flex-col items-center justify-start gap-[60px] scroll-fade" data-v-f8699d4f><img class="w-[85%] max-w-[515px]" alt="flower"${ssrRenderAttr("src", _imports_6)} data-v-f8699d4f><img class="w-11/12 max-w-[400px]" alt="word"${ssrRenderAttr("src", _imports_7)} data-v-f8699d4f>`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "w-full flex flex-row items-center justify-center mt-8",
        to: "/about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img alt="feather"${ssrRenderAttr("src", _imports_8)} data-v-f8699d4f${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                alt: "feather",
                src: _imports_8
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/horizonSlide/AboutUsMobile.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const AboutUsMobile = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f8699d4f"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HeadingHomeMade",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const root = ref();
    __expose({ root });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h2${ssrRenderAttrs(mergeProps({ class: "heading-home-made-text font-superhighlight text-scale3XL md:text-superhighlight xl:text-superhighlightSuper text-text-primary whitespace-nowrap" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</h2>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/text/HeadingHomeMade.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "TextSlide",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6c9deea2><section class="section -b -horizon" data-v-6c9deea2><div class="section__horizon" data-v-6c9deea2><div class="section__horizon-block px-[200px]" data-v-6c9deea2>`);
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(contentText).sliderSection.header)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(contentText).sliderSection.header), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/horizonSlide/TextSlide.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TextSlide = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6c9deea2"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDesktop } = useGetMediaQuery();
    useHead({
      link: [{ rel: "canonical", href: `${seoWording.domain}` }]
    });
    useHead({
      title: () => seoWording.home.title,
      meta: [
        { name: "description", content: () => seoWording.home.description },
        { property: "og:title", content: () => seoWording.home.metaTitle },
        { property: "og:description", content: () => seoWording.home.metaDescription },
        { property: "og:image", content: () => seoBanner },
        { property: "og:url", content: () => seoWording.domain },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: seoWording.siteName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: () => seoWording.home.metaTitle },
        { name: "twitter:description", content: () => seoWording.home.description },
        { name: "twitter:image", content: () => seoBanner }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "homePage w-full min-h-screen bg-surface-def" }, _attrs))} data-v-45de5740>`);
      _push(ssrRenderComponent(_sfc_main$g, { ref: "landing" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(ssrRenderComponent(Section2, null, null, _parent));
      _push(`<div class="section-gradient3" data-v-45de5740></div>`);
      _push(ssrRenderComponent(OurWorks, null, null, _parent));
      _push(`<div class="section-gradient4" data-v-45de5740></div>`);
      if (unref(isDesktop)) {
        _push(ssrRenderComponent(HomeAboutHorizonScrollCard, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(isDesktop)) {
        _push(`<div class="w-full" data-v-45de5740>`);
        _push(ssrRenderComponent(AboutUsMobile, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="section-gradient5" data-v-45de5740></div>`);
      _push(ssrRenderComponent(TextSlide, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(`<div class="section-gradient6" data-v-45de5740></div>`);
      _push(ssrRenderComponent(ServiceFeatures, null, null, _parent));
      _push(`<div class="section-gradient7" data-v-45de5740></div>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-45de5740"]]);

export { index as default };
//# sourceMappingURL=my-index-OUpXPW7f.mjs.map
