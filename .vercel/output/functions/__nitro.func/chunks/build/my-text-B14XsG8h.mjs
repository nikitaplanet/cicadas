import { D as buildAssetsURL } from '../nitro/nitro.mjs';
import { M as MEDIA_TYPE, a as MEDIA_DISPLAY_TYPE } from './my-media-CWK_KdC4.mjs';
import { k as TEXT_TYPE } from './server.mjs';

const c1 = "" + buildAssetsURL("my-campaign1-B_HvR1bt.jpg");
const c2 = "" + buildAssetsURL("my-campaign2-Dmt16zAq.jpg");
const c3 = "" + buildAssetsURL("my-campaign3-CqTnWItQ.jpg");
const c4 = "" + buildAssetsURL("my-campaign4-mTKc45fl.jpg");
const c5 = "" + buildAssetsURL("my-campaign5-BDAVpTAY.jpg");
const c1_1 = "" + buildAssetsURL("my-1-CLs6rcVx.jpg");
const c1_2 = "" + buildAssetsURL("my-2-DTqBCYxA.jpg");
const c1_swiper1 = "" + buildAssetsURL("my-swiper1-CaxdVKee.jpg");
const c1_swiper2 = "" + buildAssetsURL("my-swiper2-BhP6HShX.jpg");
const c1_swiper3 = "" + buildAssetsURL("my-swiper3-DlavYL_e.jpg");
const c1_swiper4 = "" + buildAssetsURL("my-swiper4-D6ZYWX_F.jpg");
const c2_swiper1 = "" + buildAssetsURL("my-swiper1-D7z-qroK.jpg");
const c2_swiper2 = "" + buildAssetsURL("my-swiper2-D6tFbAvi.jpg");
const c2_swiper3 = "" + buildAssetsURL("my-swiper3-mAgBcdGe.jpg");
const c2_swiper4 = "" + buildAssetsURL("my-swiper4-B5xjxu4e.jpg");
const c2_swiper5 = "" + buildAssetsURL("my-swiper5-E5IwcdbQ.jpg");
const c3_swiper1 = "" + buildAssetsURL("my-swiper1-DrqbK8Uq.jpg");
const c3_swiper2 = "" + buildAssetsURL("my-swiper2-CdjkvGxJ.jpg");
const c3_swiper3 = "" + buildAssetsURL("my-swiper3-DCSVbM8l.jpg");
const c3_swiper4 = "" + buildAssetsURL("my-swiper4-DMTuySU1.jpg");
const c3_swiper5 = "" + buildAssetsURL("my-swiper5-BNpRfWog.jpg");
const c3_swiper6 = "" + buildAssetsURL("my-swiper6-CoekJpo-.jpg");
const c3_swiper7 = "" + buildAssetsURL("my-swiper7-BAHSEynj.jpg");
const c4_swiper1 = "" + buildAssetsURL("my-swiper1-DhyLcF6Q.jpg");
const c4_swiper2 = "" + buildAssetsURL("my-swiper2-BVd7LH7m.jpg");
const c4_swiper3 = "" + buildAssetsURL("my-swiper3-D3PXNBQV.jpg");
const c4_swiper4 = "" + buildAssetsURL("my-swiper4-nWOas7v-.jpg");
const c4_swiper5 = "" + buildAssetsURL("my-swiper5-Bf5Qmaie.jpg");
const c5_1 = "" + buildAssetsURL("my-1-B8MqzUQQ.jpg");
const c5_2 = "" + buildAssetsURL("my-2-EIopywss.jpg");
const c5_swiper1 = "" + buildAssetsURL("my-swiper1-BoQq4PzN.jpg");
const c5_swiper2 = "" + buildAssetsURL("my-swiper2-B31hbE0b.jpg");
const c5_swiper3 = "" + buildAssetsURL("my-swiper3-CHNf_bxn.jpg");
const c5_swiper4 = "" + buildAssetsURL("my-swiper4-DLTD4mlN.jpg");
const c5_swiper5 = "" + buildAssetsURL("my-swiper5-CPyHt47I.jpg");
const campaignsWording = {
  landing: {
    headerTitle: "Campaigns",
    description: "Our campaigns begin with deep listening and rigorous research to understand the issue and the motivations of the people we aim to reach. These insights shape strategic, emotionally resonant campaigns that drive people beyond awareness and into meaningful action."
  },
  campaigns: [
    {
      id: 1,
      isOngoing: true,
      title: `Strength Project`,
      detailTitle: `Strength Project`,
      img: c1,
      imageLinkOut: "",
      year: "2025",
      region: "Hong Kong",
      issues: "Youth",
      services: "Qualitative Research, Survey Build and Analysis, Social Media Data Analysis, Communication Strategy Development, Creative Design and Production",
      details: {
        contentList: [
          {
            textType: TEXT_TYPE.PARAGRAPH,
            title: "Objective",
            content: "To create a space for 18\u201324-year-olds to explore their unique character strengths, derive meaning from their lived experiences and find their purposeful place within their community.",
            list: []
          },
          {
            textType: TEXT_TYPE.PARAGRAPH,
            title: "Audience",
            content: "Hong Kong youth aged 18\u201324 from diverse backgrounds, navigating the transition from secondary school to university or from university into society.",
            list: []
          },
          {
            textType: TEXT_TYPE.PARAGRAPH,
            title: "Strategy",
            content: "The campaign centers around a 30-minute hybrid participatory documentary, supported by an extensive, in-development distribution and impact campaign designed to reach Hong Kong youth and foster engagement.",
            list: []
          }
        ],
        media: [
          {
            mediaDisplayType: MEDIA_DISPLAY_TYPE.COL,
            mediaType: MEDIA_TYPE.IMAGE,
            mediaList: [
              {
                key: "c1_1",
                src: c1_1
              },
              {
                key: "c1_2",
                src: c1_2
              }
            ],
            url: ""
            // for video
          },
          {
            mediaDisplayType: MEDIA_DISPLAY_TYPE.SWIPER,
            mediaType: MEDIA_TYPE.IMAGE,
            mediaList: [
              {
                key: "c1_swiper1",
                src: c1_swiper1
              },
              {
                key: "c1_swiper2",
                src: c1_swiper2
              },
              {
                key: "c1_swiper3",
                src: c1_swiper3
              },
              {
                key: "c1_swiper4",
                src: c1_swiper4
              },
              {
                key: "c1_swiper5",
                // for loop
                src: c1_swiper3
              }
            ],
            url: ""
          }
        ]
      }
    },
    {
      id: 2,
      isOngoing: false,
      title: `Creativity is`,
      detailTitle: `Creativity is`,
      img: c2,
      imageLinkOut: "",
      year: "2017-2020",
      region: "Hong Kong",
      issues: "Youth",
      services: "Qualitative Research, Social Media Data Analysis, Communication Strategy Development, Creative Design and Production, Strategic Partnership Engagement, Creative Facilitation, Youth Engagement",
      details: {
        contentList: [
          {
            textType: TEXT_TYPE.PARAGRAPH,
            title: "Objective",
            content: "Empower Hong Kong youth by fostering their creativity and sense of agency in response to growing concerns about mental health statistics among students.",
            list: []
          },
          {
            textType: TEXT_TYPE.PARAGRAPH,
            title: "Audience",
            content: "Youth aged 18\u201324 and community collaborators across the field who also work with youth",
            list: []
          },
          {
            textType: TEXT_TYPE.PARAGRAPH,
            title: "Strategy",
            content: "Creative productions of films, games, events and publications were developed to stimulate self-exploration among youth. These productions were complemented by community workshops that encouraged group dialogues and facilitated story-sharing, along with a robust social media presence that amplified the voices of young people. Strategic partnerships with over 100 organizations --ranging from practitioners to influencers, expanded audience reach by tapping into diverse access points.",
            list: []
          },
          {
            textType: TEXT_TYPE.PARAGRAPH,
            title: "Distribution",
            content: "We launched a short documentary as the centerpiece for community, corporate and school screenings, supported by six interactive workshop formats designed to deepen dialogue and engagement. For broader reach, we partnered with CNEX\u2014the largest Chinese-language documentary platform\u2014for distribution across their extensive network.<br/><br/>To sustain momentum, we built a strong social media presence and maintained a blog to grow our audience. In the following years, we introduced new centerpiece projects, including Create Your Own\u2014an award-winning interactive web game recognized by W3 and the Design for Asia Awards\u2014and Journey In, an innovative storytelling board game that continued to spark meaningful conversation and connection.",
            list: []
          },
          {
            textType: TEXT_TYPE.TEXT_LIST,
            title: "Outcome & Impact",
            content: "",
            list: [
              "110 community screenings across Hong Kong, Taiwan and China.",
              "50+ event partner organizations.",
              "Over 40,000 engaged with the interactive web documentary.",
              '200 participants experienced the "Journey In" board game.',
              "Invited to prestigious events such as TEDx in multiple cities.",
              "Cultivated a social media following of 8,000+."
            ]
          }
        ],
        media: [
          {
            mediaDisplayType: MEDIA_DISPLAY_TYPE.VIDEO,
            mediaType: MEDIA_TYPE.VIMEO,
            mediaList: [],
            url: "https://player.vimeo.com/video/1089965527"
          },
          {
            mediaDisplayType: MEDIA_DISPLAY_TYPE.SWIPER,
            mediaType: MEDIA_TYPE.IMAGE,
            mediaList: [
              {
                key: "c2_swiper1",
                src: c2_swiper1
              },
              {
                key: "c2_swiper2",
                src: c2_swiper2
              },
              {
                key: "c2_swiper3",
                src: c2_swiper3
              },
              {
                key: "c2_swiper4",
                src: c2_swiper4
              },
              {
                key: "c2_swiper5",
                src: c2_swiper5
              }
            ],
            url: ""
          }
        ]
      }
    },
    {
      id: 3,
      isOngoing: false,
      title: `Resource Mobilization for Women\u2019s Funds`,
      detailTitle: `Resource Mobilization for Women\u2019s Funds`,
      img: c3,
      imageLinkOut: "",
      year: "2025",
      region: "South Korea and Hong Kong",
      issues: "Gender equality",
      services: "Social Media Data Analysis, Communication Strategy Development, Creative Design and Production",
      details: {
        contentList: [
          {
            textType: TEXT_TYPE.PARAGRAPH,
            title: "Objective",
            content: "Support women\u2019s funds to expand their donor bases by engaging corporate sectors and professional women.",
            list: []
          },
          {
            textType: TEXT_TYPE.PARAGRAPH,
            title: "Audience",
            content: "ESG professionals and women corporate executives were identified as potential stakeholders through audience insights analysis.",
            list: []
          },
          {
            textType: TEXT_TYPE.PARAGRAPH,
            title: "Strategy",
            content: "To reach ESG professionals, we created an ESG strategy with tailored corporate partnership packages\u2014brought to life through impactful brochures, compelling donor stories, a targeted webpage and a strategic LinkedIn outreach campaign.<br/><br/>To reach women corporate executives, we conducted in-depth audience analysis and created assets to appeal to their values and emotions.",
            list: []
          },
          {
            textType: TEXT_TYPE.PARAGRAPH,
            title: "Distribution",
            content: "A LinkedIn campaign\u2014combining organic posts and paid ads\u2014drives target audience to a dedicated webpage featuring a call to action tailored specifically to their interests and needs.",
            list: []
          }
        ],
        media: [
          {
            mediaDisplayType: MEDIA_DISPLAY_TYPE.SWIPER,
            mediaType: MEDIA_TYPE.IMAGE,
            mediaList: [
              {
                key: "c3_swiper1",
                src: c3_swiper1
              },
              {
                key: "c3_swiper2",
                src: c3_swiper2
              },
              {
                key: "c3_swiper3",
                src: c3_swiper3
              },
              {
                key: "c3_swiper4",
                src: c3_swiper4
              },
              {
                key: "c3_swiper5",
                src: c3_swiper5
              },
              {
                key: "c3_swiper6",
                src: c3_swiper6
              },
              {
                key: "c3_swiper7",
                src: c3_swiper7
              }
            ],
            url: ""
          }
        ]
      }
    },
    {
      id: 4,
      isOngoing: false,
      title: `MADE: meet me at the end of the assembly line`,
      detailTitle: `MADE: meet me at the end of the assembly line`,
      img: c5,
      imageLinkOut: "https://madevr.com/",
      year: "2021",
      region: "North America & Europe",
      issues: "Living wage for factory workers",
      services: "Strategy Development, Stakeholder and Partnership Engagement, Creative Design and Production, Media Distribution",
      details: {
        contentList: [
          {
            textType: TEXT_TYPE.PARAGRAPH,
            title: "Objective",
            content: 'Call for urgent wage reform in supply chains of electronic goods through the VR documentary "MADE: meet me at the end of the assembly line".',
            list: []
          },
          {
            textType: TEXT_TYPE.PARAGRAPH,
            title: "Audience",
            content: "North American and European adults, aged 18\u201345, smartphone users with an interest in ethical consumption.",
            list: []
          },
          {
            textType: TEXT_TYPE.PARAGRAPH,
            title: "Strategy",
            content: "Through a choose-your-own-adventure experience, viewers form a personal connection with an Apple factory worker, gaining insight into her daily life, family and inner thoughts.<br/><br/>At the end of the journey, viewers are invited to take action by sending a letter to tech companies with factories in China, advocating for a living wage for workers.<br/><br/>We developed this call to action in collaboration with Xiaowu, the Apple factory worker at the center of the film. While Xiaowu is overworked, she believes calls to limit working hours are misguided if wages are not increased, leading to a call for living wage.",
            list: []
          },
          {
            textType: TEXT_TYPE.PARAGRAPH,
            title: "Distribution",
            content: "The documentary premiered at the Games for Change Festival in New York and was nominated for the Most Significant Impact Award. It also exhibited at Eaton Hotel Hong Kong, Space4 in the UK and Nowhere Bookstore in Taipei. The experience was later made available via the Google Play store and the project's <a class='underline underline-offset-4' href='https://madevr.com/' target='_blank'>dedicated website.</a>",
            list: []
          }
        ],
        media: [
          {
            mediaDisplayType: MEDIA_DISPLAY_TYPE.COL,
            mediaType: MEDIA_TYPE.IMAGE,
            mediaList: [
              {
                key: "c5_1",
                src: c5_1
              },
              {
                key: "c5_2",
                src: c5_2
              }
            ],
            url: ""
            // for video
          },
          {
            mediaDisplayType: MEDIA_DISPLAY_TYPE.SWIPER,
            mediaType: MEDIA_TYPE.IMAGE,
            mediaList: [
              {
                key: "c5_swiper1",
                src: c5_swiper1
              },
              {
                key: "c5_swiper2",
                src: c5_swiper2
              },
              {
                key: "c5_swiper3",
                src: c5_swiper3
              },
              {
                key: "c5_swiper4",
                src: c5_swiper4
              },
              {
                key: "c5_swiper5",
                src: c5_swiper5
              }
            ],
            url: ""
          }
        ]
      }
    },
    {
      id: 5,
      isOngoing: false,
      title: `Knock. Stop Domestic Violence`,
      detailTitle: `Knock. Stop Domestic Violence`,
      img: c4,
      imageLinkOut: "",
      year: "2013",
      region: "China",
      issues: "Domestic Violence",
      services: "Strategy Development, Stakeholder and Partnership Engagement, Creative Design and Production, Media Distribution",
      details: {
        contentList: [
          {
            textType: TEXT_TYPE.PARAGRAPH,
            title: "Objective",
            content: "In collaboration with UN Women China, raise awareness about domestic violence in China and empower neighbors to intervene when they suspect abuse.",
            list: []
          },
          {
            textType: TEXT_TYPE.PARAGRAPH,
            title: "Audience",
            content: "Adults throughout China.",
            list: []
          },
          {
            textType: TEXT_TYPE.PARAGRAPH,
            title: "Strategy",
            content: "In 2013, launched a nationwide public service campaign encouraging neighbors to \u201Cknock\u201D as an intervention tactic, offering pretexts to disrupt suspected violence.<br/><br/>In 2015, after the first domestic violence law was passed, we renewed the campaign, urging bystanders to call the police.",
            list: []
          },
          {
            textType: TEXT_TYPE.PARAGRAPH,
            title: "Distribution",
            content: "Extensive dissemination of PSAs on television, digital platforms and public spaces garnered 9.6 million views, driving a national conversation around domestic violence.",
            list: []
          },
          {
            textType: TEXT_TYPE.PARAGRAPH,
            title: "Outcome & Impact",
            content: "With the support of media and women's organizations, the campaign sparked a national conversation on domestic violence and promoted the 2015 passing of China\u2019s first domestic violence law.",
            list: []
          }
        ],
        media: [
          {
            mediaDisplayType: MEDIA_DISPLAY_TYPE.SWIPER,
            mediaType: MEDIA_TYPE.IMAGE,
            mediaList: [
              {
                key: "c4_swiper1",
                src: c4_swiper1
              },
              {
                key: "c4_swiper2",
                src: c4_swiper2
              },
              {
                key: "c4_swiper3",
                src: c4_swiper3
              },
              {
                key: "c4_swiper4",
                src: c4_swiper4
              },
              {
                key: "c4_swiper5",
                src: c4_swiper5
              }
            ],
            url: ""
          }
        ]
      }
    }
  ]
};

export { campaignsWording as c };
//# sourceMappingURL=my-text-B14XsG8h.mjs.map
