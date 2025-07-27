import r from"./my-index-X8cE9Y4L.js";import{B as n,z as o,c as s,o as l,r as i,v as d,m as a}from"./my-entry-s94quDsK.js";import"./my-index-E03qySTw.js";import"./my-index-ZhWAdK_X.js";var p=`
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`,v={root:"p-overlaybadge"},m=n.extend({name:"overlaybadge",style:p,classes:v}),c={name:"OverlayBadge",extends:r,style:m,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},g={name:"OverlayBadge",extends:c,inheritAttrs:!1,components:{Badge:r}};function y(e,u,B,b,f,$){var t=o("Badge");return l(),s("div",a({class:e.cx("root")},e.ptmi("root")),[i(e.$slots,"default"),d(t,a(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}g.render=y;export{g as default};
