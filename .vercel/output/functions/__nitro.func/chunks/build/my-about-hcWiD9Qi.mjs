import { D as buildAssetsURL } from '../nitro/nitro.mjs';
import { defineComponent, mergeProps, unref, ref, withCtx, createTextVNode, toDisplayString, withDirectives, createVNode, createBlock, openBlock, reactive, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, d as useGetMediaQuery, u as useHead, S as SectionContainer, A as AnimateOnScroll, b as _sfc_main$8$1, T as TextMode } from './server.mjs';
import { _ as _sfc_main$d } from './my-HeaderDescription-RFI0QBAK.mjs';
import { gsap } from 'gsap';
import { S as SectionNameTag, a as ScrollTrigger, c as contentText, _ as _sfc_main$e } from './my-ContentButton-BIEGqkNQ.mjs';
import { u as useScrollAnime } from './my-useScrollAnime-BImYRP-9.mjs';
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

const _imports_0$7 = "" + buildAssetsURL("my-scrollDown-B2a7nua8.svg");
const Chloe = "" + buildAssetsURL("my-Chloe-D_6QoaKd.svg");
const Hanna = "" + buildAssetsURL("my-Hanna-D_quXhjG.svg");
const Json = "" + buildAssetsURL("my-Json-BtWD2w8O.svg");
const Marias = "" + buildAssetsURL("my-Marias-Bvp55HAK.svg");
const Tylor = "" + buildAssetsURL("my-Tylor-BEnUqOum.svg");
const _imports_0$6 = "" + buildAssetsURL("my-sharon-CuHBZi3V.svg");
const _imports_4$1 = "" + buildAssetsURL("my-sharon_m-DXP3eF9x.svg");
const _imports_1$7 = "" + buildAssetsURL("my-hanyan-DuZclB6M.svg");
const _imports_2$4 = "" + buildAssetsURL("my-hanna-rX-gPR9v.svg");
var OUR_TEAM_INFO = /* @__PURE__ */ ((OUR_TEAM_INFO2) => {
  OUR_TEAM_INFO2[OUR_TEAM_INFO2["SHARON"] = 1] = "SHARON";
  OUR_TEAM_INFO2[OUR_TEAM_INFO2["HANYAN"] = 2] = "HANYAN";
  OUR_TEAM_INFO2[OUR_TEAM_INFO2["HANNA"] = 3] = "HANNA";
  return OUR_TEAM_INFO2;
})(OUR_TEAM_INFO || {});
const aboutWording = {
  landing: {
    headerTitle: "About Us",
    description: "At Singing Cicadas, we believe in the power of storytelling to shape narratives and behavior. As a dedicated social impact agency, we partner with you to design and deliver transformative campaigns using our insight-driven storytelling approach."
  },
  wordFadeAnimation: {
    title1: "Another world is not only possible, she is on her way.",
    title2: "&nbsp;On a quiet day, I can hear her breathing.<br>",
    naming: "- Arundhati Roy"
  },
  ourTeam: {
    title: "Our Team",
    ourTeamList: [
      {
        id: OUR_TEAM_INFO.SHARON,
        img: _imports_0$6,
        imgMobile: _imports_4$1,
        name: "Sharon Yeung",
        description: "I\u2019m a multimedia storyteller and community builder based in Hong Kong, who loves creating engaging narratives across diverse platforms. From films and web games to VR and interactive experiences, I\u2019m passionate about inspiring and connecting communities. I\u2019ve had the opportunity for training with organizations like Sundance, and Berlinale, which really honed my skills as a storyteller and producer. I\u2019m committed to creating independent documentaries that explore complex subjects and diverse perspectives."
      },
      {
        id: OUR_TEAM_INFO.HANYAN,
        img: _imports_1$7,
        imgMobile: _imports_1$7,
        name: "Han Yan Yuen",
        description: "I am an impact strategist based in Taipei/ Hong Kong. I founded an NGO in Asia and was the Director of Communications at a global NGO. I\u2019ve worked with complex audiences in Asia across a mosaic of cultures, languages and digital access levels. By tailoring strategies to each unique context, I deliver impactful campaigns to address a broad range of social issues. I was recognized by UN Women China as the Women of the Year in Media in 2011."
      },
      {
        id: OUR_TEAM_INFO.HANNA,
        img: _imports_2$4,
        imgMobile: _imports_2$4,
        name: "Hanna Shin",
        description: "I am an experienced campaign strategist with a strong background in corporate social responsibility and human rights in Korea. I specialize in strategic planning and stakeholder engagement, and have worked with international organizations including the British Council, M\xE9decins Sans Fronti\xE8res and Amnesty International."
      }
    ],
    sharon: {
      name: "Sharon",
      content: "Hi, I\u2019m Sharon Yeung. I am a multimedia storyteller and community builder! I\u2018ve produced campaigns with films, web games, VR, board games, and interactive workshops. I\u2019ve trained as a storyteller and producer at Sundance, Berlinale, DocNYC and more for my independent documentaries."
    },
    hanyan: {
      name: "Hanyan",
      content: "Hi, I\u2019m Han Yan Yuen.  I am an impact strategist. I headed a communications team at a global NGO in Asia, working with complex audience insights to produce impactful campaigns across Asia addressing issues such as freedom of expression and gender equality."
    }
  },
  workWith: {
    title: "The Creatives we work with",
    nameList: [
      {
        id: 1,
        name: "Chloe Shih",
        city: "Taipei",
        img: Chloe
      },
      {
        id: 2,
        name: "Hanna Shin",
        city: "Seoul",
        img: Hanna
      },
      {
        id: 3,
        name: "Json Liu",
        city: "Seoul",
        img: Json
      },
      {
        id: 4,
        name: "Marias Fang",
        city: "Tokyo",
        img: Marias
      },
      {
        id: 5,
        name: "Tylor Meng",
        city: "New York",
        img: Tylor
      }
    ]
  },
  ourStory: {
    title: "Our Story"
  },
  issuesWeTackle: {
    title: "Issues we tackle",
    issueList: [
      {
        id: 0,
        title: "Climate Change",
        description: ""
      },
      {
        id: 1,
        title: "Youth",
        description: ""
      },
      {
        id: 2,
        title: "Heritage Preservation",
        description: ""
      },
      {
        id: 3,
        title: "Migration & Refugees",
        description: ""
      },
      {
        id: 4,
        title: "Gender based violence",
        description: ""
      }
    ]
  }
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
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
      }, _attrs))} data-v-aad08f89><div class="w-full px-6 lg:px-8 h-screen m-auto flex flex-col gap-10 lg:gap-3 lg:grid lg:grid-cols-12 pt-24 lg:pt-40 relative" data-v-aad08f89><div class="col-span-6" data-v-aad08f89>`);
      _push(ssrRenderComponent(_sfc_main$8$1, {
        ref_key: "headerText",
        ref: headerText,
        mode: unref(TextMode).dark,
        class: "relative"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<span data-v-aad08f89${_scopeId}>${(_a = unref(aboutWording).landing.headerTitle) != null ? _a : ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: unref(aboutWording).landing.headerTitle
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-6" data-v-aad08f89>`);
      _push(ssrRenderComponent(_sfc_main$d, {
        ref_key: "headerDesc",
        ref: headerDesc,
        isItalic: false,
        mode: unref(TextMode).dark
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<span data-v-aad08f89${_scopeId}>${(_a = unref(aboutWording).landing.description) != null ? _a : ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: unref(aboutWording).landing.description
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="absolute right-0 bottom-32" type="button" data-v-aad08f89><img class="slideDownRepeat" alt="ScrollDown"${ssrRenderAttr("src", _imports_0$7)} data-v-aad08f89></button></div></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/about/LandingSection.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const LandingSection = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-aad08f89"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "WordFadeInSection",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    const sectionRef = ref();
    const textBlockRef = ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(SectionContainer, mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        hasMinHeight: false,
        class: "max-w-[1000px] 2xl:max-w-[1200px] h-screen text-scaleXL md:text-scale2XL 2xl:text-h2 italic font-semibold font-h2 flex items-center justify-center overflow-hidden"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c;
          if (_push2) {
            _push2(`<div data-v-d9b2e315${_scopeId}><span class="line" data-v-d9b2e315${_scopeId}>${(_a = unref(aboutWording).wordFadeAnimation.title1) != null ? _a : ""}</span><span class="line" data-v-d9b2e315${_scopeId}><span data-v-d9b2e315${_scopeId}>${(_b = unref(aboutWording).wordFadeAnimation.title2) != null ? _b : ""}</span><span class="inline-block text-scaleLG mt-10 2xl:text-scale1XL" data-v-d9b2e315${_scopeId}>${(_c = unref(aboutWording).wordFadeAnimation.naming) != null ? _c : ""}</span></span></div>`);
          } else {
            return [
              createVNode("div", {
                ref_key: "textBlockRef",
                ref: textBlockRef
              }, [
                createVNode("span", {
                  innerHTML: unref(aboutWording).wordFadeAnimation.title1,
                  class: "line"
                }, null, 8, ["innerHTML"]),
                createVNode("span", { class: "line" }, [
                  createVNode("span", {
                    innerHTML: unref(aboutWording).wordFadeAnimation.title2
                  }, null, 8, ["innerHTML"]),
                  createVNode("span", {
                    innerHTML: unref(aboutWording).wordFadeAnimation.naming,
                    class: "inline-block text-scaleLG mt-10 2xl:text-scale1XL"
                  }, null, 8, ["innerHTML"])
                ])
              ], 512)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/about/WordFadeInSection.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const WordFadeInSection = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-d9b2e315"]]);
const _imports_3$1 = "" + buildAssetsURL("my-clickUsButton-CUOhyO-j.svg");
const _imports_5 = "" + buildAssetsURL("my-hanyan_m-DMOCom8F.svg");
const _imports_6$1 = "" + buildAssetsURL("my-hanna_m-ChjqRciY.svg");
const _imports_0$5 = "" + buildAssetsURL("my-close-B6_-AV1V.svg");
const _imports_1$6 = "" + buildAssetsURL("my-ourTeamInfoBg-T1AHnyml.svg");
const _imports_2$3 = "" + buildAssetsURL("my-ourTeamInfoBg_wMedium-CHmA0Ha8.svg");
const _imports_3 = "" + buildAssetsURL("my-ourTeamInfoBg_wLong-BDLTLRKs.svg");
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "OurTeamInfoOverlay",
  __ssrInlineRender: true,
  props: {
    id: { default: OUR_TEAM_INFO.SHARON }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const profileInfo = reactive(aboutWording.ourTeam.ourTeamList.find((item) => item.id === props.id) || aboutWording.ourTeam.ourTeamList[0]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-84df9a7a><div class="ourTeamOverlay w-screen h-screen hidden lg:flex flex-col justify-center items-center fixed top-0 left-0 z-30 pt-14 pb-24 px-10" data-v-84df9a7a><div class="w-full max-w-[1300px] flex justify-end items-center" data-v-84df9a7a><button class="w-11 h-11 flex justify-end items-start" type="button" data-v-84df9a7a><img class="w-6 h-6" alt="Close"${ssrRenderAttr("src", _imports_0$5)} data-v-84df9a7a></button></div><div class="w-full max-w-[1300px] gap-8 flex flex-col md:flex-row justify-center items-center" data-v-84df9a7a><div class="${ssrRenderClass([{
        "max-w-[426px]": profileInfo.id === unref(OUR_TEAM_INFO).SHARON,
        "max-w-[404px]": profileInfo.id === unref(OUR_TEAM_INFO).HANYAN,
        "max-w-[344px]": profileInfo.id === unref(OUR_TEAM_INFO).HANNA
      }, "flex-shrink-0 w-[35%]"])}" data-v-84df9a7a><img${ssrRenderAttr("alt", profileInfo.name)}${ssrRenderAttr("src", profileInfo.img)} class="w-full h-auto" data-v-84df9a7a></div><div class="relative w-full h-[580px] lg:h-[430px]" data-v-84df9a7a><img class="object-fit w-full h-full block lg:hidden" alt="bg"${ssrRenderAttr("src", _imports_1$6)} data-v-84df9a7a><img class="object-fit w-full h-full hidden lg:block xl:hidden" alt="bg"${ssrRenderAttr("src", _imports_2$3)} data-v-84df9a7a><img class="object-fit w-full h-full hidden lg:hidden xl:block" alt="bg"${ssrRenderAttr("src", _imports_3)} data-v-84df9a7a><div class="absolute w-full h-full top-0 left-0 px-20 pt-48 lg:px-20 lg:pt-32 xl:pt-36" data-v-84df9a7a><p class="font-semibold text-h4 font-h4 mb-4" data-v-84df9a7a>${ssrInterpolate(profileInfo.name)}</p><p class="font-body text-body font-medium" data-v-84df9a7a>${ssrInterpolate(profileInfo.description)}</p></div></div></div></div><div class="ourTeamOverlay w-full h-screen flex flex-col lg:hidden fixed top-0 left-0 z-30" data-v-84df9a7a><div class="w-full h-[84px] flex justify-end items-center px-10 pt-10" data-v-84df9a7a><button class="w-11 h-11 flex justify-end items-start" type="button" data-v-84df9a7a><img class="w-[30px] h-[30px]" alt="Close"${ssrRenderAttr("src", _imports_0$5)} data-v-84df9a7a></button></div><div class="flex justify-center items-center px-6 h-[268px]" data-v-84df9a7a><img${ssrRenderAttr("alt", profileInfo.name)}${ssrRenderAttr("src", profileInfo.imgMobile)} class="w-full max-h-[268px] h-auto" data-v-84df9a7a></div><div class="ourTeamOverlay__content__mobile bg-cover flex-grow px-6 pb-10 pt-5" data-v-84df9a7a><div class="relative w-full h-full bg-surface-tertiary px-4 py-10 rounded-xl" data-v-84df9a7a><div class="ourTeamOverlay__content__scroll w-full h-full overflow-y-auto overscroll-contain" data-v-84df9a7a><div class="text-scaleLG font-h4 font-semibold" data-v-84df9a7a>${ssrInterpolate(profileInfo.name)}</div><div class="mt-5 text-body font-body font-medium" data-v-84df9a7a>${ssrInterpolate(profileInfo.description)}</div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/about/OurTeamInfoOverlay.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const OurTeamInfoOverlay = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-84df9a7a"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "OurTeam",
  __ssrInlineRender: true,
  setup(__props) {
    const currentOverlay = ref(0);
    const isShowOverlay = ref(false);
    function showOverlay(id) {
      currentOverlay.value = id;
      isShowOverlay.value = true;
    }
    function handleClose() {
      isShowOverlay.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_animateonscroll = AnimateOnScroll;
      _push(`<!--[--><div class="py-20 md:pt-[160px] md:pb-[100px]">`);
      _push(ssrRenderComponent(SectionContainer, { hasMinHeight: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({ class: "hidden lg:flex w-full flex-col justify-center items-center transition-all duration-700" }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true })))}${_scopeId}><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(SectionNameTag, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(aboutWording).ourTeam.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(aboutWording).ourTeam.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="w-full flex flex-col justify-center items-center mt-8"${_scopeId}><div class="w-full max-w-[1100px] flex flex-row justify-center items-start"${_scopeId}><button class="clickCursor mr-[-50px] transition-all duration-300 hover:opacity-80" type="button"${_scopeId}><img alt="Sharon"${ssrRenderAttr("src", _imports_0$6)}${_scopeId}></button><button class="clickCursor transition-all duration-300 hover:opacity-80" type="button"${_scopeId}><div class="w-full m-16"${_scopeId}></div><img alt="Hanyan"${ssrRenderAttr("src", _imports_1$7)}${_scopeId}></button><button class="clickCursor ml-[-25px] transition-all duration-300 hover:opacity-80" type="button"${_scopeId}><img alt="Hanna"${ssrRenderAttr("src", _imports_2$4)}${_scopeId}></button></div><div${_scopeId}><img class="w-[250px] mt-10" alt="hoverUs"${ssrRenderAttr("src", _imports_3$1)}${_scopeId}></div></div></div><div class="w-full block lg:hidden"${_scopeId}><div class="w-full flex items-center justify-start"${_scopeId}>`);
            _push2(ssrRenderComponent(SectionNameTag, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(aboutWording).ourTeam.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(aboutWording).ourTeam.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="w-full flex flex-col justify-center items-center gap-20 mt-[60px]"${_scopeId}><button class="w-[90%] max-w-[444px] xs:max-w-[286px] transition-all duration-300 hover:opacity-80" type="button"${_scopeId}><img class="w-full" alt="Sharon"${ssrRenderAttr("src", _imports_4$1)}${_scopeId}></button><button class="w-[90%] max-w-[444px] xs:max-w-[286px] transition-all duration-300 hover:opacity-80" type="button"${_scopeId}><img class="w-full" alt="Hanyan"${ssrRenderAttr("src", _imports_5)}${_scopeId}></button><button class="w-[90%] max-w-[444px] xs:max-w-[286px] transition-all duration-300 hover:opacity-80" type="button"${_scopeId}><img class="w-full" alt="Hanna"${ssrRenderAttr("src", _imports_6$1)}${_scopeId}></button></div></div>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("div", { class: "hidden lg:flex w-full flex-col justify-center items-center transition-all duration-700" }, [
                createVNode("div", { class: "w-full" }, [
                  createVNode(SectionNameTag, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(aboutWording).ourTeam.title), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "w-full flex flex-col justify-center items-center mt-8" }, [
                  createVNode("div", { class: "w-full max-w-[1100px] flex flex-row justify-center items-start" }, [
                    createVNode("button", {
                      onClick: ($event) => showOverlay(unref(OUR_TEAM_INFO).SHARON),
                      class: "clickCursor mr-[-50px] transition-all duration-300 hover:opacity-80",
                      type: "button"
                    }, [
                      createVNode("img", {
                        alt: "Sharon",
                        src: _imports_0$6
                      })
                    ], 8, ["onClick"]),
                    createVNode("button", {
                      onClick: ($event) => showOverlay(unref(OUR_TEAM_INFO).HANYAN),
                      class: "clickCursor transition-all duration-300 hover:opacity-80",
                      type: "button"
                    }, [
                      createVNode("div", { class: "w-full m-16" }),
                      createVNode("img", {
                        alt: "Hanyan",
                        src: _imports_1$7
                      })
                    ], 8, ["onClick"]),
                    createVNode("button", {
                      onClick: ($event) => showOverlay(unref(OUR_TEAM_INFO).HANNA),
                      class: "clickCursor ml-[-25px] transition-all duration-300 hover:opacity-80",
                      type: "button"
                    }, [
                      createVNode("img", {
                        alt: "Hanna",
                        src: _imports_2$4
                      })
                    ], 8, ["onClick"])
                  ]),
                  createVNode("div", null, [
                    createVNode("img", {
                      class: "w-[250px] mt-10",
                      alt: "hoverUs",
                      src: _imports_3$1
                    })
                  ])
                ])
              ])), [
                [_directive_animateonscroll, { enterClass: "fadein", leaveClass: "fadeout", once: true }]
              ]),
              createVNode("div", { class: "w-full block lg:hidden" }, [
                createVNode("div", { class: "w-full flex items-center justify-start" }, [
                  createVNode(SectionNameTag, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(aboutWording).ourTeam.title), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "w-full flex flex-col justify-center items-center gap-20 mt-[60px]" }, [
                  createVNode("button", {
                    onClick: ($event) => showOverlay(unref(OUR_TEAM_INFO).SHARON),
                    class: "w-[90%] max-w-[444px] xs:max-w-[286px] transition-all duration-300 hover:opacity-80",
                    type: "button"
                  }, [
                    createVNode("img", {
                      class: "w-full",
                      alt: "Sharon",
                      src: _imports_4$1
                    })
                  ], 8, ["onClick"]),
                  createVNode("button", {
                    onClick: ($event) => showOverlay(unref(OUR_TEAM_INFO).HANYAN),
                    class: "w-[90%] max-w-[444px] xs:max-w-[286px] transition-all duration-300 hover:opacity-80",
                    type: "button"
                  }, [
                    createVNode("img", {
                      class: "w-full",
                      alt: "Hanyan",
                      src: _imports_5
                    })
                  ], 8, ["onClick"]),
                  createVNode("button", {
                    onClick: ($event) => showOverlay(unref(OUR_TEAM_INFO).HANNA),
                    class: "w-[90%] max-w-[444px] xs:max-w-[286px] transition-all duration-300 hover:opacity-80",
                    type: "button"
                  }, [
                    createVNode("img", {
                      class: "w-full",
                      alt: "Hanna",
                      src: _imports_6$1
                    })
                  ], 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (isShowOverlay.value) {
        _push(ssrRenderComponent(OurTeamInfoOverlay, {
          onClose: handleClose,
          id: currentOverlay.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/about/OurTeam.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ServiceWeOfferSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDesktop } = useGetMediaQuery();
    const textAry = reactive(
      contentText.issuesWeTackle.contentTextList.map((item, index) => ({ ...item, id: index, isActive: !isDesktop.value ? index === 0 : false }))
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "service-bg pt-32 pb-36" }, _attrs))} data-v-b8e227cb>`);
      _push(ssrRenderComponent(SectionContainer, { hasMinHeight: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex flex-col justify-center items-center" data-v-b8e227cb${_scopeId}><div class="w-full" data-v-b8e227cb${_scopeId}>`);
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
            _push2(`</div><div class="w-full flex flex-col gap-5 items-start mt-14 lg:pl-[15%] lg:justify-center" data-v-b8e227cb${_scopeId}><!--[-->`);
            ssrRenderList(textAry, (item) => {
              _push2(ssrRenderComponent(_sfc_main$e, {
                onClick: ($event) => handleClickItem(item),
                content: item.content,
                isActive: item.isActive,
                key: item.title,
                title: item.title,
                defaultColorType: "violet"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex flex-col justify-center items-center" }, [
                createVNode("div", { class: "w-full" }, [
                  createVNode(SectionNameTag, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(contentText).issuesWeTackle.title), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "w-full flex flex-col gap-5 items-start mt-14 lg:pl-[15%] lg:justify-center" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(textAry, (item) => {
                    return openBlock(), createBlock(_sfc_main$e, {
                      onClick: ($event) => handleClickItem(item),
                      content: item.content,
                      isActive: item.isActive,
                      key: item.title,
                      title: item.title,
                      defaultColorType: "violet"
                    }, null, 8, ["onClick", "content", "isActive", "title"]);
                  }), 128))
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/about/ServiceWeOfferSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const ServiceWeOfferSection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-b8e227cb"]]);
const _imports_0$4 = "" + buildAssetsURL("my-1-CqMQfAkC.svg");
const _imports_1$5 = "" + buildAssetsURL("my-word1_m-CKaDKu8q.svg");
const _imports_1$4 = "" + buildAssetsURL("my-feather-BLI0xjVN.svg");
const _imports_0$3 = "" + buildAssetsURL("my-2-C87IuaLi.svg");
const _imports_4 = "" + buildAssetsURL("my-word2_m-CaangYwP.svg");
const _imports_1$3 = "" + buildAssetsURL("my-feather2-D7HMX2pa.svg");
const _imports_6 = "" + buildAssetsURL("my-word3_m-DcuDvCAx.svg");
const _imports_0$2 = "" + buildAssetsURL("my-3-WOpBMscI.svg");
const _imports_8 = "" + buildAssetsURL("my-word4_m-DAw-SlAi.svg");
const _imports_0$1 = "" + buildAssetsURL("my-4-jwltOEYW.svg");
const _imports_1$2 = "" + buildAssetsURL("my-feather4-rJFAnDUW.svg");
const _imports_11 = "" + buildAssetsURL("my-word5_m-D2bX9_X8.svg");
const _imports_0 = "" + buildAssetsURL("my-5-BW8nn6NH.svg");
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "OurStoryMobile",
  __ssrInlineRender: true,
  setup(__props) {
    useScrollAnime();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "aboutUs-bg px-6 py-[120px] flex flex-col gap-[100px]" }, _attrs))} data-v-f78f7a5f><div class="w-full" data-v-f78f7a5f>`);
      _push(ssrRenderComponent(SectionNameTag, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(aboutWording).ourStory.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(aboutWording).ourStory.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col items-center justify-start gap-[60px] scroll-fade" data-v-f78f7a5f><img class="w-full max-w-[500px]" alt="flower"${ssrRenderAttr("src", _imports_0$4)} data-v-f78f7a5f><img class="w-full max-w-[500px] px-2" alt="flower"${ssrRenderAttr("src", _imports_1$5)} data-v-f78f7a5f><div class="w-full flex flex-row items-center justify-end" data-v-f78f7a5f><img class="w-[120px]" alt="feather"${ssrRenderAttr("src", _imports_1$4)} data-v-f78f7a5f></div></div><div class="flex flex-col items-center justify-start gap-[60px] scroll-fade" data-v-f78f7a5f><img class="w-full max-w-[500px]" alt="flower"${ssrRenderAttr("src", _imports_0$3)} data-v-f78f7a5f><img class="w-full max-w-[500px]" alt="flower"${ssrRenderAttr("src", _imports_4)} data-v-f78f7a5f><div class="w-full flex flex-row items-center justify-start pl-10" data-v-f78f7a5f><img class="w-[120px]" alt="feather"${ssrRenderAttr("src", _imports_1$3)} data-v-f78f7a5f></div></div><div class="flex flex-col items-center justify-start gap-[60px] scroll-fade" data-v-f78f7a5f><img class="w-full max-w-[500px] px-3" alt="flower"${ssrRenderAttr("src", _imports_6)} data-v-f78f7a5f><img class="w-[90%] max-w-[430px]" alt="flower"${ssrRenderAttr("src", _imports_0$2)} data-v-f78f7a5f></div><div class="flex flex-col items-center justify-start gap-[60px] scroll-fade" data-v-f78f7a5f><img class="w-full max-w-[500px]" alt="flower"${ssrRenderAttr("src", _imports_8)} data-v-f78f7a5f><img class="w-[75%] max-w-[400px]" alt="flower"${ssrRenderAttr("src", _imports_0$1)} data-v-f78f7a5f><div class="w-full flex flex-row items-center justify-start pl-10" data-v-f78f7a5f><img class="w-[120px]" alt="feather"${ssrRenderAttr("src", _imports_1$2)} data-v-f78f7a5f></div></div><div class="flex flex-col items-center justify-start gap-[60px] scroll-fade" data-v-f78f7a5f><img class="w-[90%] max-w-[450px]" alt="flower"${ssrRenderAttr("src", _imports_11)} data-v-f78f7a5f><img class="w-[90%] max-w-[430px]" alt="flower"${ssrRenderAttr("src", _imports_0)} data-v-f78f7a5f></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/about/horizonSlide/OurStoryMobile.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const OurStoryMobile = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-f78f7a5f"]]);
const _imports_2$2 = "" + buildAssetsURL("my-word1-CfzvoNNw.svg");
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "OurStorySlide1",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "aboutUs-bg pt-32 pb-32" }, _attrs))} data-v-dcc614cf>`);
      _push(ssrRenderComponent(SectionContainer, { hasMinHeight: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex flex-col justify-center items-center pt-8" data-v-dcc614cf${_scopeId}><div class="w-full" data-v-dcc614cf${_scopeId}>`);
            _push2(ssrRenderComponent(SectionNameTag, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(aboutWording).ourStory.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(aboutWording).ourStory.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="w-full flex flex-col lg:flex-row justify-center items-center gap-10 mt-28 pl-[100px]" data-v-dcc614cf${_scopeId}><img class="w-[90%] max-w-[480px]" alt="flower"${ssrRenderAttr("src", _imports_0$4)} data-v-dcc614cf${_scopeId}><div class="flex flex-col relative" data-v-dcc614cf${_scopeId}><img class="absolute bottom-[-135px] lg:bottom-auto lg:top-[-135px] right-[-40%] xs:right-[-30px] lg:right-[-110px] w-32" alt="feather"${ssrRenderAttr("src", _imports_1$4)} data-v-dcc614cf${_scopeId}><img class="w-full max-w-[350px] ml-24" alt="wording"${ssrRenderAttr("src", _imports_2$2)} data-v-dcc614cf${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex flex-col justify-center items-center pt-8" }, [
                createVNode("div", { class: "w-full" }, [
                  createVNode(SectionNameTag, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(aboutWording).ourStory.title), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "w-full flex flex-col lg:flex-row justify-center items-center gap-10 mt-28 pl-[100px]" }, [
                  createVNode("img", {
                    class: "w-[90%] max-w-[480px]",
                    alt: "flower",
                    src: _imports_0$4
                  }),
                  createVNode("div", { class: "flex flex-col relative" }, [
                    createVNode("img", {
                      class: "absolute bottom-[-135px] lg:bottom-auto lg:top-[-135px] right-[-40%] xs:right-[-30px] lg:right-[-110px] w-32",
                      alt: "feather",
                      src: _imports_1$4
                    }),
                    createVNode("img", {
                      class: "w-full max-w-[350px] ml-24",
                      alt: "wording",
                      src: _imports_2$2
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/about/horizonSlide/OurStorySlide1.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const OurStorySlide1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-dcc614cf"]]);
const _imports_2$1 = "" + buildAssetsURL("my-word2-BAphPBhl.svg");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "OurStorySlide2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "aboutUs-bg" }, _attrs))} data-v-97be51e9>`);
      _push(ssrRenderComponent(SectionContainer, { hasMinHeight: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex flex-col justify-center items-center pt-8" data-v-97be51e9${_scopeId}><div class="w-full flex flex-col lg:flex-row justify-center items-center gap-10" data-v-97be51e9${_scopeId}><img class="w-[90%] max-w-[450px]" alt="flower"${ssrRenderAttr("src", _imports_0$3)} data-v-97be51e9${_scopeId}><div class="flex flex-col relative" data-v-97be51e9${_scopeId}><img class="absolute bottom-[-135px] lg:bottom-[-110px] right-[-40%] xs:right-[-30px] lg:right-[-130px] w-32" alt="feather"${ssrRenderAttr("src", _imports_1$3)} data-v-97be51e9${_scopeId}><img class="w-full max-w-[350px] ml-24" alt="wording"${ssrRenderAttr("src", _imports_2$1)} data-v-97be51e9${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex flex-col justify-center items-center pt-8" }, [
                createVNode("div", { class: "w-full flex flex-col lg:flex-row justify-center items-center gap-10" }, [
                  createVNode("img", {
                    class: "w-[90%] max-w-[450px]",
                    alt: "flower",
                    src: _imports_0$3
                  }),
                  createVNode("div", { class: "flex flex-col relative" }, [
                    createVNode("img", {
                      class: "absolute bottom-[-135px] lg:bottom-[-110px] right-[-40%] xs:right-[-30px] lg:right-[-130px] w-32",
                      alt: "feather",
                      src: _imports_1$3
                    }),
                    createVNode("img", {
                      class: "w-full max-w-[350px] ml-24",
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/about/horizonSlide/OurStorySlide2.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const OurStorySlide2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-97be51e9"]]);
const _imports_1$1 = "" + buildAssetsURL("my-word3-EsnRQFTI.svg");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "OurStorySlide3",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "aboutUs-bg" }, _attrs))} data-v-206888cf>`);
      _push(ssrRenderComponent(SectionContainer, { hasMinHeight: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex flex-col justify-center items-center pt-8" data-v-206888cf${_scopeId}><div class="w-full flex flex-col lg:flex-row justify-center items-center gap-10" data-v-206888cf${_scopeId}><img class="w-[90%] max-w-[450px]" alt="flower"${ssrRenderAttr("src", _imports_0$2)} data-v-206888cf${_scopeId}><div class="flex flex-col relative" data-v-206888cf${_scopeId}><img class="w-full max-w-[350px] ml-24" alt="wording"${ssrRenderAttr("src", _imports_1$1)} data-v-206888cf${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex flex-col justify-center items-center pt-8" }, [
                createVNode("div", { class: "w-full flex flex-col lg:flex-row justify-center items-center gap-10" }, [
                  createVNode("img", {
                    class: "w-[90%] max-w-[450px]",
                    alt: "flower",
                    src: _imports_0$2
                  }),
                  createVNode("div", { class: "flex flex-col relative" }, [
                    createVNode("img", {
                      class: "w-full max-w-[350px] ml-24",
                      alt: "wording",
                      src: _imports_1$1
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/about/horizonSlide/OurStorySlide3.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const OurStorySlide3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-206888cf"]]);
const _imports_2 = "" + buildAssetsURL("my-word4-BYi-l5uB.svg");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "OurStorySlide4",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "aboutUs-bg" }, _attrs))} data-v-a0ad3c84>`);
      _push(ssrRenderComponent(SectionContainer, { hasMinHeight: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex flex-col justify-center items-center pt-8" data-v-a0ad3c84${_scopeId}><div class="w-full flex flex-col lg:flex-row justify-center items-center gap-10" data-v-a0ad3c84${_scopeId}><img class="w-[90%] max-w-[350px]" alt="flower"${ssrRenderAttr("src", _imports_0$1)} data-v-a0ad3c84${_scopeId}><div class="flex flex-col relative" data-v-a0ad3c84${_scopeId}><img class="absolute bottom-[-135px] lg:top-[-180px] right-[-40%] xs:right-[-30px] lg:right-[-130px] w-32" alt="feather"${ssrRenderAttr("src", _imports_1$2)} data-v-a0ad3c84${_scopeId}><img class="w-full max-w-[350px] ml-24" alt="wording"${ssrRenderAttr("src", _imports_2)} data-v-a0ad3c84${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex flex-col justify-center items-center pt-8" }, [
                createVNode("div", { class: "w-full flex flex-col lg:flex-row justify-center items-center gap-10" }, [
                  createVNode("img", {
                    class: "w-[90%] max-w-[350px]",
                    alt: "flower",
                    src: _imports_0$1
                  }),
                  createVNode("div", { class: "flex flex-col relative" }, [
                    createVNode("img", {
                      class: "absolute bottom-[-135px] lg:top-[-180px] right-[-40%] xs:right-[-30px] lg:right-[-130px] w-32",
                      alt: "feather",
                      src: _imports_1$2
                    }),
                    createVNode("img", {
                      class: "w-full max-w-[350px] ml-24",
                      alt: "wording",
                      src: _imports_2
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/about/horizonSlide/OurStorySlide4.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const OurStorySlide4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a0ad3c84"]]);
const _imports_1 = "" + buildAssetsURL("my-word5-Bf9-Navh.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "OurStorySlide5",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "aboutUs-bg" }, _attrs))} data-v-e1497b49>`);
      _push(ssrRenderComponent(SectionContainer, { hasMinHeight: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex flex-col justify-center items-center pt-8" data-v-e1497b49${_scopeId}><div class="w-full flex flex-col lg:flex-row justify-center items-center gap-10" data-v-e1497b49${_scopeId}><img class="w-[90%] max-w-[360px]" alt="flower"${ssrRenderAttr("src", _imports_0)} data-v-e1497b49${_scopeId}><div class="flex flex-col relative" data-v-e1497b49${_scopeId}><img class="w-full max-w-[350px] ml-24" alt="wording"${ssrRenderAttr("src", _imports_1)} data-v-e1497b49${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex flex-col justify-center items-center pt-8" }, [
                createVNode("div", { class: "w-full flex flex-col lg:flex-row justify-center items-center gap-10" }, [
                  createVNode("img", {
                    class: "w-[90%] max-w-[360px]",
                    alt: "flower",
                    src: _imports_0
                  }),
                  createVNode("div", { class: "flex flex-col relative" }, [
                    createVNode("img", {
                      class: "w-full max-w-[350px] ml-24",
                      alt: "wording",
                      src: _imports_1
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/about/horizonSlide/OurStorySlide5.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const OurStorySlide5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e1497b49"]]);
const _sfc_main$1 = {
  __name: "AboutHorizonScrollCard",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-985dfd15><section class="section -b -horizon" data-v-985dfd15><div class="section__horizon" data-v-985dfd15><div class="section__horizon-block" data-v-985dfd15>`);
      _push(ssrRenderComponent(OurStorySlide1, null, null, _parent));
      _push(`</div><div class="section__horizon-block pl-[160px]" data-v-985dfd15>`);
      _push(ssrRenderComponent(OurStorySlide2, null, null, _parent));
      _push(`</div><div class="section__horizon-block pl-[160px]" data-v-985dfd15>`);
      _push(ssrRenderComponent(OurStorySlide3, null, null, _parent));
      _push(`</div><div class="section__horizon-block pl-[160px]" data-v-985dfd15>`);
      _push(ssrRenderComponent(OurStorySlide4, null, null, _parent));
      _push(`</div><div class="section__horizon-block pl-[160px] pr-[350px]" data-v-985dfd15>`);
      _push(ssrRenderComponent(OurStorySlide5, null, null, _parent));
      _push(`</div></div></section></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/about/horizonSlide/AboutHorizonScrollCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AboutHorizonScrollCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-985dfd15"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDesktop } = useGetMediaQuery();
    useHead({
      title: "About | Cicadas",
      meta: [
        {
          name: "description",
          content: "At Singing Cicadas, we believe in the power of storytelling to shape narratives and behavior. As a dedicated social impact agency, we partner with you to design and deliver transformative campaigns using our insight-driven storytelling approach."
        },
        { property: "og:title", content: "About Singing Cicadas | Asia\u2019s Storytelling Experts for Change" },
        {
          property: "og:description",
          content: "We empower NGOs, ESG-driven businesses, and SDG-aligned initiatives  to fight climate change, gender equality, LGBTQ rights and other human rights issues through data-driven storytelling rooted in Asia and trusted globally."
        },
        { property: "og:image", content: seoBanner },
        { property: "og:url", content: "https://singingcicadas.com/about" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Cicadas" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "About Singing Cicadas | Asia\u2019s Storytelling Experts for Change" },
        {
          name: "twitter:description",
          content: "We empower NGOs, ESG-driven businesses, and SDG-aligned initiatives  to fight climate change, gender equality, LGBTQ rights and other human rights issues through data-driven storytelling rooted in Asia and trusted globally."
        },
        { name: "twitter:image", content: seoBanner }
      ],
      link: [{ rel: "canonical", href: "https://singingcicadas.com/about" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full min-h-screen bg-surface-def" }, _attrs))} data-v-60f5cf75>`);
      _push(ssrRenderComponent(LandingSection, null, null, _parent));
      _push(ssrRenderComponent(WordFadeInSection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(`<div class="section-gradient1" data-v-60f5cf75></div>`);
      if (unref(isDesktop)) {
        _push(ssrRenderComponent(AboutHorizonScrollCard, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(isDesktop)) {
        _push(`<div class="w-full" data-v-60f5cf75>`);
        _push(ssrRenderComponent(OurStoryMobile, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="section-gradient2" data-v-60f5cf75></div>`);
      _push(ssrRenderComponent(ServiceWeOfferSection, null, null, _parent));
      _push(`<div class="section-gradient3" data-v-60f5cf75></div><div class="section-gradient4" data-v-60f5cf75></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-60f5cf75"]]);

export { about as default };
//# sourceMappingURL=my-about-hcWiD9Qi.mjs.map
