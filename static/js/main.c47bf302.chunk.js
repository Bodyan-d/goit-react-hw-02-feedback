(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(3),r=n.n(s),o=(n(13),n(4)),i=n(5),j=n(6),l=n(8),b=n(7),d=(n(14),n(0));function u(e){var t=e.options,n=e.onLeaveFeedback,c=Object.keys(t);function a(e){return e?e[0].toUpperCase()+e.slice(1):e}return Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:n,children:a(c[0])})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:n,children:a(c[1])})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:n,children:a(c[2])})})]})}function h(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,s=e.positivePercentage;return Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:["Good:",Object(d.jsx)("span",{children:t})]}),Object(d.jsxs)("li",{children:["Neutral:",Object(d.jsx)("span",{children:n})]}),Object(d.jsxs)("li",{children:["Bad:",Object(d.jsx)("span",{children:c})]}),Object(d.jsxs)("li",{children:["Total:",Object(d.jsx)("span",{children:a})]}),Object(d.jsxs)("li",{children:["Positive Feedback:",Object(d.jsxs)("span",{children:[s,"%"]})]})]})}function O(e){var t=e.message;return Object(d.jsx)("h3",{children:t})}var x=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e.isEmpty=function(t){return Object.values(t).some((function(e){return 0!==e}))?Object(d.jsx)(h,{good:e.state.good,neutral:e.state.neutral,bad:e.state.bad,total:e.countTotalFeedback(),positivePercentage:e.countPositiveFeedbackPercentage()}):Object(d.jsx)(O,{message:"No feedback given"})},e.onLeaveFeedback=function(t){var n=t.target;e.setState((function(e){return Object(o.a)({},n.textContent.toLowerCase(),e[n.textContent.toLowerCase()]+1)}))},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{children:"Pleas leave feedback"}),Object(d.jsx)(u,{options:this.state,onLeaveFeedback:this.onLeaveFeedback}),Object(d.jsx)("h2",{children:"Statistics"}),this.isEmpty(this.state)]})}}]),n}(c.Component);r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c47bf302.chunk.js.map