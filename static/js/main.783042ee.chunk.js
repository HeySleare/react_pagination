(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),i=t(4),r=t(1),l=t.n(r);t(10);var s=t(2),o=t.n(s),j=t(0),d=function(e){for(var a=e.items,t=e.itemPerPage,c=e.pagiPage,n=e.setPagiPage,i=a.length/t,r=[],l=0;l<i;l++){for(var s=[],d=l*t;d<(l+1)*t&&d<a.length;d++)s.push(a[d]);r[l]=s}var h=r.map((function(e,a){return a+1}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:1===c}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===c,onClick:function(){return 1!==c&&n(c-1)},children:"\xab"})}),h.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:c===e}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#1",onClick:function(){return c!==e&&n(e)},children:e})},e)})),Object(j.jsx)("li",{className:o()("page-item",{disabled:c===h.length}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":c===h.length,onClick:function(){return c!==h.length&&n(c+1)},children:"\xbb"})})]}),Object(j.jsx)("ul",{children:r[c-1].map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})},h=function(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}(1,42).map((function(e){return"Item ".concat(e)})),g=function(){var e=l.a.useState(5),a=Object(i.a)(e,2),t=a[0],c=a[1],n=l.a.useState(1),r=Object(i.a)(n,2),s=r[0],o=r[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(t*s-t+1," - ").concat(t*s<=h.length?t*s:h.length," of ").concat(h.length,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:t,onChange:function(e){c(+e.target.value),o(1)},children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{items:h,itemPerPage:t,pagiPage:s,setPagiPage:o})]})};n.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.783042ee.chunk.js.map