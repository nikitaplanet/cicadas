import { D as buildAssetsURL } from '../nitro/nitro.mjs';
import { defineComponent, mergeProps, reactive, withCtx, unref, createVNode, withDirectives, createBlock, openBlock, Fragment, renderList, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHead, s as seoWording, _ as _export_sfc, S as SectionContainer, A as AnimateOnScroll, b as _sfc_main$8, T as TextMode } from './server.mjs';
import { _ as _sfc_main$6 } from './my-HeaderDescription-RFI0QBAK.mjs';
import { N as NImageSwiper } from './my-NImageSwiper-C-fmQcg2.mjs';
import { s as seoBanner } from './my-cicadas_banner-DnReMfVH.mjs';
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

const _imports_0$1 = "" + buildAssetsURL("my-scrollDown-dbbGbmtY.svg");
const workshopsWording = {
  landing: {
    headerTitle: "Workshops",
    description: "We offer hands-on workshops on Narrative Change and Campaign Design to strengthen your team\u2019s ability to effectively drive change. We can also devise custom sessions based on your needs."
  },
  logoSection: {
    title: "Our<br/>Approach",
    description: "From a half-day fundamentals session to an intensive 3-day process, each workshop is customized to reflect your team\u2019s goals, values, and strategic context. Our longer engagements incorporate full organizational or campaign planning processes to ensure learning translates into action. We\u2019re happy to provide a sample workshop rundown upon request.",
    logoList: {
      1: "Digital-era audience analysis and campaigning tools",
      2: "Identifying Target Audience and their<br>Needs",
      3: "Building Audience Personas",
      4: "Narrative change theory",
      5: "Values-based communication",
      6: "Co-creation and participatory methods",
      7: "Design-thinking",
      8: "Resource Mapping",
      9: "Campaign Planning"
    }
  },
  quoteList: [
    {
      id: 1,
      title: null,
      logoSrc: null,
      content: `Singing Cicadas\u2019 team \u2026shared with us an approach to narrative building. The guided step by step process broadened our understanding and the hands on approach nudged us to use the framework and built relatability. A powerful engagement which will help us build our communications work more effectively.<br/><br/>- Lead of Programmes, a women's fund from South Asia`
    }
  ]
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
      }, _attrs))} data-v-b100f693><div class="w-full px-6 lg:px-8 h-screen m-auto flex flex-col gap-10 lg:gap-3 lg:grid lg:grid-cols-12 pt-24 lg:pt-40 relative" data-v-b100f693><div class="col-span-6" data-v-b100f693>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        ref_key: "headerText",
        ref: headerText,
        mode: unref(TextMode).dark,
        class: "relative"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<span data-v-b100f693${_scopeId}>${(_a = unref(workshopsWording).landing.headerTitle) != null ? _a : ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: unref(workshopsWording).landing.headerTitle
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-6" data-v-b100f693>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        ref_key: "headerDesc",
        ref: headerDesc,
        isItalic: false,
        mode: unref(TextMode).dark
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<span data-v-b100f693${_scopeId}>${(_a = unref(workshopsWording).landing.description) != null ? _a : ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: unref(workshopsWording).landing.description
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="absolute right-0 bottom-32" type="button" data-v-b100f693><img class="slideDownRepeat" alt="ScrollDown"${ssrRenderAttr("src", _imports_0$1)} data-v-b100f693></button></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/workshops/LandingSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const LandingSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-b100f693"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "LogoImage",
  __ssrInlineRender: true,
  props: {
    logoSrc: { default: "" },
    logoAlt: { default: "" },
    description: { default: "" },
    isHide: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["w-full flex flex-col items-center justify-start gap-0 md:gap-5", { "hidden md:block md:opacity-0": _ctx.isHide }]
      }, _attrs))}><img${ssrRenderAttr("alt", _ctx.logoAlt)}${ssrRenderAttr("src", _ctx.logoSrc)} class="px-5 max-w-72 aspect-1/1"><p class="text-center italic font-label text-body md:text-labelLg font-semibold">${(_a = _ctx.description) != null ? _a : ""}</p></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/workshops/LogoImage.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const LogoImage1 = "" + buildAssetsURL("my-1-HBYzKxMw.svg");
const LogoImage4 = "" + buildAssetsURL("my-4-C8KyU4aD.svg");
const LogoImage5 = "" + buildAssetsURL("my-5-CWCDSfKt.svg");
const LogoImage6 = "" + buildAssetsURL("my-6-C3KuBpEl.svg");
const LogoImage7 = "" + buildAssetsURL("my-7-Uh4Mp5l0.svg");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LogoSection",
  __ssrInlineRender: true,
  setup(__props) {
    const row1 = reactive([
      {
        img: LogoImage1,
        alt: "1",
        description: workshopsWording.logoSection.logoList[1],
        isHide: false
      },
      {
        img: LogoImage4,
        alt: "4",
        description: workshopsWording.logoSection.logoList[4],
        isHide: false
      }
    ]);
    const row2 = reactive([
      {
        img: LogoImage5,
        alt: "5",
        description: workshopsWording.logoSection.logoList[5],
        isHide: false
      },
      {
        img: LogoImage7,
        alt: "7",
        description: workshopsWording.logoSection.logoList[7],
        isHide: false
      },
      {
        img: LogoImage6,
        alt: "6",
        description: workshopsWording.logoSection.logoList[6],
        isHide: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_animateonscroll = AnimateOnScroll;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-10 pb-24 md:pb-36" }, _attrs))}>`);
      _push(ssrRenderComponent(SectionContainer, { hasMinHeight: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-2 gap-5 transition-all duration-500" }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true })))}${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$8, {
              ref: "headerText",
              mode: unref(TextMode).dark,
              class: "relative"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a;
                if (_push3) {
                  _push3(`<span${_scopeId2}>${(_a = unref(workshopsWording).logoSection.title) != null ? _a : ""}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      innerHTML: unref(workshopsWording).logoSection.title
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              ref: "headerDesc",
              isItalic: false,
              mode: unref(TextMode).dark
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a;
                if (_push3) {
                  _push3(`<span${_scopeId2}>${(_a = unref(workshopsWording).logoSection.description) != null ? _a : ""}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      innerHTML: unref(workshopsWording).logoSection.description
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 gap-12 mt-20"${_scopeId}><div class="flex flex-col md:flex-row justify-center gap-20"${_scopeId}><div${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:flex-row justify-center gap-20 ransition-all duration-500" }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true })))}${_scopeId}><!--[-->`);
            ssrRenderList(row1, (item, index) => {
              _push2(ssrRenderComponent(_sfc_main$4, {
                description: item.description,
                isHide: item.isHide,
                key: `logo_${index}_${item.description}`,
                logoAlt: item.alt,
                logoSrc: item.img
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 gap-20 md:grid-cols-3 transition-all duration-500" }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true })))}${_scopeId}><!--[-->`);
            ssrRenderList(row2, (item, index) => {
              _push2(ssrRenderComponent(_sfc_main$4, {
                description: item.description,
                isHide: item.isHide,
                key: `logo_${index}_${item.description}`,
                logoAlt: item.alt,
                logoSrc: item.img
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-5 transition-all duration-500" }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$8, {
                    ref: "headerText",
                    mode: unref(TextMode).dark,
                    class: "relative"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", {
                        innerHTML: unref(workshopsWording).logoSection.title
                      }, null, 8, ["innerHTML"])
                    ]),
                    _: 1
                  }, 8, ["mode"])
                ]),
                createVNode("div", null, [
                  createVNode(_sfc_main$6, {
                    ref: "headerDesc",
                    isItalic: false,
                    mode: unref(TextMode).dark
                  }, {
                    default: withCtx(() => [
                      createVNode("span", {
                        innerHTML: unref(workshopsWording).logoSection.description
                      }, null, 8, ["innerHTML"])
                    ]),
                    _: 1
                  }, 8, ["mode"])
                ])
              ])), [
                [_directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true }]
              ]),
              createVNode("div", { class: "grid grid-cols-1 gap-12 mt-20" }, [
                createVNode("div", { class: "flex flex-col md:flex-row justify-center gap-20" }, [
                  withDirectives((openBlock(), createBlock("div", { class: "flex flex-col md:flex-row justify-center gap-20 ransition-all duration-500" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(row1, (item, index) => {
                      return openBlock(), createBlock(_sfc_main$4, {
                        description: item.description,
                        isHide: item.isHide,
                        key: `logo_${index}_${item.description}`,
                        logoAlt: item.alt,
                        logoSrc: item.img
                      }, null, 8, ["description", "isHide", "logoAlt", "logoSrc"]);
                    }), 128))
                  ])), [
                    [_directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true }]
                  ])
                ]),
                withDirectives((openBlock(), createBlock("div", { class: "grid grid-cols-1 gap-20 md:grid-cols-3 transition-all duration-500" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(row2, (item, index) => {
                    return openBlock(), createBlock(_sfc_main$4, {
                      description: item.description,
                      isHide: item.isHide,
                      key: `logo_${index}_${item.description}`,
                      logoAlt: item.alt,
                      logoSrc: item.img
                    }, null, 8, ["description", "isHide", "logoAlt", "logoSrc"]);
                  }), 128))
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/workshops/LogoSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Photo1 = "" + buildAssetsURL("my-1-BY4NThK9.jpg");
const Photo2 = "" + buildAssetsURL("my-2-BoX4EGgz.jpg");
const Photo3 = "" + buildAssetsURL("my-3-B71o1y5e.jpg");
const Photo4 = "" + buildAssetsURL("my-4-CHtNitjb.jpg");
const Photo5 = "" + buildAssetsURL("my-5-caVu-a_z.jpg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "WorkshopsSwiper",
  __ssrInlineRender: true,
  setup(__props) {
    const imgs = reactive([
      {
        key: "1",
        src: Photo1
      },
      {
        key: "2",
        src: Photo2
      },
      {
        key: "3",
        src: Photo3
      },
      {
        key: "4",
        src: Photo4
      },
      {
        key: "5",
        src: Photo5
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_animateonscroll = AnimateOnScroll;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full m-auto md:w-full transition-all duration-700" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true })))}>`);
      _push(ssrRenderComponent(NImageSwiper, { mediaList: imgs }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/workshops/WorkshopsSwiper.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("my-quote-BDscUvvG.svg");
const _imports_1 = "" + buildAssetsURL("my-quote_m-D7PTwglc.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex items-center justify-center pt-12 pb-28 px-6 md:px-8" }, _attrs))}><img class="hidden md:block" alt="quote"${ssrRenderAttr("src", _imports_0)}><img class="w-full block md:hidden" alt="quote"${ssrRenderAttr("src", _imports_1)}></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/workshops/QuoteSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const QuoteSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "workshops",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [{ rel: "canonical", href: `${seoWording.domain}/workshops` }]
    });
    useHead({
      title: () => seoWording.workshops.title,
      meta: [
        { name: "description", content: () => seoWording.workshops.description },
        { property: "og:title", content: () => seoWording.workshops.metaTitle },
        { property: "og:description", content: () => seoWording.workshops.metaDescription },
        { property: "og:image", content: () => seoBanner },
        { property: "og:url", content: () => `${seoWording.domain}/workshops` },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: seoWording.siteName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: () => seoWording.workshops.metaTitle },
        { name: "twitter:description", content: () => seoWording.workshops.description },
        { name: "twitter:image", content: () => seoBanner }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full min-h-screen bg-surface-def" }, _attrs))}>`);
      _push(ssrRenderComponent(LandingSection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(QuoteSection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/workshops.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=my-workshops-BItDH1G3.mjs.map
