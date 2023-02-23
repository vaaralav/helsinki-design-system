"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[795],{79060:function(e,t,c){c.r(t),c.d(t,{CheckboxDefaultExample:function(){return m},CheckboxExample:function(){return u},CheckboxGroupExample:function(){return f},IndeterminateExample:function(){return y},_frontmatter:function(){return C},default:function(){return T}});var o=c(63366),a=c(4942),n=c(67294),r=c(64983),i=c(99086),l=c(18835),h=c(61909),k=c(9460),d=c(10882),s=c(1076),b=["components"];function p(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,o)}return c}function x(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?p(Object(c),!0).forEach((function(t){(0,a.Z)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):p(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}var u=function(){var e=n.useState({"checkbox-checked":!0,"checkbox-checked-disabled":!0}),t=e[0],c=e[1],o=function(e){var o;c(x(x({},t),{},((o={})[e.target.id]=e.target.checked,o)))};return(0,r.kt)(n.Fragment,null,(0,r.kt)(i.C,{label:"Label",id:"checkbox-unchecked",checked:t["checkbox-unchecked"],onChange:o,mdxType:"Checkbox"}),(0,r.kt)(i.C,{label:"Label",id:"checkbox-checked",checked:t["checkbox-checked"],onChange:o,mdxType:"Checkbox"}),(0,r.kt)(i.C,{label:"Label",id:"checkbox-disabled",checked:t["checkbox-disabled"],onChange:o,disabled:!0,mdxType:"Checkbox"}),(0,r.kt)(i.C,{label:"Label",id:"checkbox-checked-disabled",checked:t["checkbox-checked-disabled"],onChange:o,disabled:!0,mdxType:"Checkbox"}),(0,r.kt)(i.C,{label:"Label",id:"checkbox-unchecked-error-text",checked:t["checkbox-unchecked-error-text"],onChange:o,errorText:"Error text",mdxType:"Checkbox"}),(0,r.kt)(i.C,{label:"Label",id:"checkbox-unchecked-helper-text",checked:t["checkbox-unchecked-helper-text"],onChange:o,helperText:"Assistive text",mdxType:"Checkbox"}),(0,r.kt)(i.C,{label:"label",id:"checkbox-with-tooltip",tooltipText:"tooltip text",tooltipLabel:"tooltip text aria label",tooltipButtonLabel:"tooltip button aria label",checked:t["checkbox-with-tooltip"],onChange:o,mdxType:"Checkbox"}))},m=function(){var e=n.useState({"checkbox-checked-2":!0,"checkbox-checked-disabled-2":!0}),t=e[0],c=e[1],o=function(e){var o;c(x(x({},t),{},((o={})[e.target.id]=e.target.checked,o)))};return(0,r.kt)(n.Fragment,null,(0,r.kt)(i.C,{label:"Label",id:"checkbox-unchecked-2",checked:t["checkbox-unchecked-2"],onChange:o,mdxType:"Checkbox"}),(0,r.kt)(i.C,{label:"Label",id:"checkbox-checked-2",checked:t["checkbox-checked-2"],onChange:o,mdxType:"Checkbox"}),(0,r.kt)(i.C,{label:"Label",id:"checkbox-disabled-2",checked:t["checkbox-disabled-2"],onChange:o,disabled:!0,mdxType:"Checkbox"}),(0,r.kt)(i.C,{label:"Label",id:"checkbox-checked-disabled-2",checked:t["checkbox-checked-disabled-2"],onChange:o,disabled:!0,mdxType:"Checkbox"}))},f=function(){var e=n.useState({"v-checkbox1":!0,"v-checkbox2":!0}),t=e[0],c=e[1],o=function(e){var o;c(x(x({},t),{},((o={})[e.target.name]=e.target.checked,o)))};return(0,r.kt)(l.S,{label:"Checkbox group",mdxType:"SelectionGroup"},(0,r.kt)(i.C,{id:"v-checkbox1",name:"v-checkbox1",label:"Option",checked:t["v-checkbox1"],onChange:o,mdxType:"Checkbox"}),(0,r.kt)(i.C,{id:"v-checkbox2",name:"v-checkbox2",label:"Option",checked:t["v-checkbox2"],onChange:o,mdxType:"Checkbox"}),(0,r.kt)(i.C,{id:"v-checkbox3",name:"v-checkbox3",label:"Option",checked:t["v-checkbox3"],onChange:o,mdxType:"Checkbox"}),(0,r.kt)(i.C,{id:"v-checkbox4",name:"v-checkbox4",label:"Option",checked:t["v-checkbox4"],onChange:o,mdxType:"Checkbox"}))},y=function(){var e=0,t=1,c=2,o={controllerCheckbox:c,checkbox1:e,checkbox2:e,checkbox3:t,checkbox4:e,checkbox5:t},a=(0,n.useReducer)((function(o,a){switch(a.type){case"check":var n;return"controllerCheckbox"===a.payload?{controllerCheckbox:e,checkbox1:e,checkbox2:e,checkbox3:e,checkbox4:e,checkbox5:e}:x(x({},o),{},((n={})[a.payload]=e,n.controllerCheckbox=function(t){var c=0;return Object.keys(t).forEach((function(o){"controllerCheckbox"!==o&&t[o]===e&&(c+=1)})),4===c}(o)?e:c,n));case"uncheck":var r;return"controllerCheckbox"===a.payload?{controllerCheckbox:t,checkbox1:t,checkbox2:t,checkbox3:t,checkbox4:t,checkbox5:t}:x(x({},o),{},((r={})[a.payload]=t,r.controllerCheckbox=function(t){var c=0;return Object.keys(t).forEach((function(o){"controllerCheckbox"!==o&&t[o]===e&&(c+=1)})),1===c}(o)?t:c,r));default:throw new Error}}),o),l=a[0],k=a[1];return(0,r.kt)(h.F,{heading:"Group label *",mdxType:"Fieldset"},(0,r.kt)(i.C,{"aria-controls":"checkbox1 checkbox2 checkbox3 checkbox4 checkbox5",id:"controllerCheckbox",label:"Label",indeterminate:l.controllerCheckbox===c,checked:l.controllerCheckbox===e,style:{marginTop:"var(--spacing-xs)"},onChange:function(){l.controllerCheckbox===t||l.controllerCheckbox===c?k({type:"check",payload:"controllerCheckbox"}):k({type:"uncheck",payload:"controllerCheckbox"})},mdxType:"Checkbox"}),(0,r.kt)("ul",{style:{marginLeft:"var(--spacing-s)",paddingInlineStart:"0"}},Object.entries(l).map((function(c){return"controllerCheckbox"===c[0]?null:(0,r.kt)("li",{key:c[0],style:{marginTop:"var(--spacing-s)",listStyle:"none"}},(0,r.kt)(i.C,{id:c[0],key:c[0],label:"Label",checked:c[1]===e,onChange:function(){c[1]===t?k({type:"check",payload:c[0]}):k({type:"uncheck",payload:c[0]})},mdxType:"Checkbox"}))}))))},C={slug:"/components/checkbox",title:"Checkbox",navTitle:"Checkbox"},g={CheckboxExample:u,CheckboxDefaultExample:m,CheckboxGroupExample:f,IndeterminateExample:y,_frontmatter:C},v=function(e){var t=e.children,c=e.pageContext;return(0,r.kt)(d.default,{pageContext:c},t)};function T(e){var t=e.components,c=(0,o.Z)(e,b);return(0,r.kt)(v,Object.assign({},g,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usage",style:{position:"relative"}},"Usage",(0,r.kt)("a",{parentName:"h2",href:"#usage","aria-label":"usage permalink",className:"header-anchor after"},(0,r.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,r.kt)("h3",{id:"example",style:{position:"relative"}},"Example",(0,r.kt)("a",{parentName:"h3",href:"#example","aria-label":"example permalink",className:"header-anchor after"},(0,r.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,r.kt)(k.ZP,{mdxType:"PlaygroundPreview"},(0,r.kt)(u,{mdxType:"CheckboxExample"})),(0,r.kt)("h3",{id:"principles",style:{position:"relative"}},"Principles",(0,r.kt)("a",{parentName:"h3",href:"#principles","aria-label":"principles permalink",className:"header-anchor after"},(0,r.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the user can only select one option from a list, use ",(0,r.kt)(s.Z,{href:"/components/radio-button",mdxType:"InternalLink"},"radio buttons")," instead."),(0,r.kt)("li",{parentName:"ul"},"Checkbox label should always clearly describe what will happen if the specific option is chosen. A good practice is to keep labels a maximum of three words long."),(0,r.kt)("li",{parentName:"ul"},"Checkboxes work independently from each other. This means that checking one option should never affect other checkboxes."),(0,r.kt)("li",{parentName:"ul"},"If Checkboxes are related to each other, use ",(0,r.kt)(s.Z,{href:"/components/selection-group",mdxType:"InternalLink"},"HDS Selection group")," to achieve that."),(0,r.kt)("li",{parentName:"ul"},"Checkboxes should not have any immediate effects. The checkbox selection takes effect when the user presses a submit button (e.g. in a form). If you need the selection to have an immediate effect, use ",(0,r.kt)(s.Z,{href:"/components/toggle-button",mdxType:"InternalLink"},"HDS Toggle button component")," instead. Also see ",(0,r.kt)(s.Z,{href:"/foundation/guidelines/checkbox-radiobutton-toggle",mdxType:"InternalLink"},"guidelines for choosing between radio buttons, checkboxes and toggles.")),(0,r.kt)("li",{parentName:"ul"},"Checkbox can be provided with additional tooltip. Tooltip information should be considered as extra information. You can find more information about Tooltips how they are used from the ",(0,r.kt)(s.Z,{href:"/components/tooltip",mdxType:"InternalLink"},"Tooltip documentation page"),".")),(0,r.kt)("h3",{id:"variations",style:{position:"relative"}},"Variations",(0,r.kt)("a",{parentName:"h3",href:"#variations","aria-label":"variations permalink",className:"header-anchor after"},(0,r.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,r.kt)("h4",{id:"default",style:{position:"relative"}},"Default",(0,r.kt)("a",{parentName:"h4",href:"#default","aria-label":"default permalink",className:"header-anchor after"},(0,r.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,r.kt)(k.ZP,{mdxType:"PlaygroundPreview"},(0,r.kt)(m,{mdxType:"CheckboxDefaultExample"})),(0,r.kt)("h4",{id:"checkbox-group",style:{position:"relative"}},"Checkbox group",(0,r.kt)("a",{parentName:"h4",href:"#checkbox-group","aria-label":"checkbox group permalink",className:"header-anchor after"},(0,r.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,r.kt)("p",null,"Related checkboxes can be grouped together with the Selection group component. See ",(0,r.kt)(s.Z,{href:"components/selection-group",mdxType:"InternalLink"},"HDS Selection group page")," for full documentation."),(0,r.kt)(k.ZP,{mdxType:"PlaygroundPreview"},(0,r.kt)(f,{mdxType:"CheckboxGroupExample"})),(0,r.kt)("h4",{id:"indeterminate",style:{position:"relative"}},"Indeterminate",(0,r.kt)("a",{parentName:"h4",href:"#indeterminate","aria-label":"indeterminate permalink",className:"header-anchor after"},(0,r.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,r.kt)("p",null,'Checkboxes also have a "mixed" state that is called an indeterminate state. This state is meant to be between the checked and unchecked states. While not very common, the usual use case for the indeterminate state is nested checkboxes. The parent checkbox can be in the indeterminate state when only part of the children checkboxes are checked.'),(0,r.kt)("p",null,"Note! You will always have to use JavaScript to set a checkbox to the indeterminate state. Currently, it cannot be done through HTML. The HDS React component will do this part automatically when the ",(0,r.kt)("inlineCode",{parentName:"p"},"indeterminate")," property is given."),(0,r.kt)(k.ZP,{mdxType:"PlaygroundPreview"},(0,r.kt)(y,{mdxType:"IndeterminateExample"})))}T.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-components-checkbox-index-mdx-d9c9796c086f33e3ac03.js.map