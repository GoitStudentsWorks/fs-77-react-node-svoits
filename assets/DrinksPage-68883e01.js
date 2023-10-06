import{G as _,s as i,t as m,F as $,d as v,e as D,f as S,r as p,c as y,h as C,i as P,k as T,j as t,l as I,m as z,b as F,a as L,u as A,C as B,L as E}from"./index-28ed5fc1.js";import{P as Q}from"./Paginator-cd777715.js";import{S as M,u as W}from"./useFilter-f63a1666.js";import{D as N}from"./stub-9e309606.js";import{P as R}from"./PageTitle-0fb5dd3e.js";import{C as V}from"./hero-img-desc-2x-354e6749.js";function q(e){return _({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(e)}const j=i(M)`
  & .Select__control {
    width: 100%;
    background-color: #161f37;
    border: none;
    border-radius: 40px;
    box-shadow: none;
    cursor: pointer;

    svg {
      transform: rotate(0deg);
      transition: transform ${m};
    }

    &.Select__control--menu-is-open {
      svg {
        transform: rotate(-180deg);
      }
    }
  }

  & .Select__value-container {
    padding: 17px 24px;
    padding-right: 0;

    @media screen and (min-width: 768px) {
      padding: 15px 24px;
      padding-right: 0;
    }
  }

  & .Select__indicator-separator {
    display: none;
  }

  & .Select__clear-indicator {
    display: none;
  }

  & .Select__indicator {
    color: #f3f3f3;
    padding: 17px 24px;
    padding-left: 8px;
    cursor: pointer;

    &:hover {
      color: #f3f3f3;
    }

    @media screen and (min-width: 768px) {
      padding: 18px 24px;
      padding-left: 8px;
    }
  }

  & .Select__input-container {
    color: #f3f3f3;
    margin: 0;
    padding: 0;

    &:hover {
      color: #f3f3f3;
    }

    @media screen and (min-width: 768px) {
      font-size: 17px;
    }
  }

  & .Select__input {
    line-height: 1.285 !important;

    @media screen and (min-width: 768px) {
      line-height: 1.56 !important;
    }
  }

  & .Select__placeholder,
  & .Select__single-value {
    color: #f3f3f3;
    line-height: 1.285;
    margin: 0;

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }

  & .Select__menu {
    margin: 0;
    margin-top: 4px;
    border-radius: 24px;
    background-color: ${({theme:e})=>e.selectDropdownBackground};
    overflow: hidden;
  }

  & .Select__menu-list {
    padding: 10px;
    border-radius: 24px;
    background-color: ${({theme:e})=>e.selectDropdownBackground};
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    max-height: 400px;
  }

  & .Select__option {
    padding: 4px 14px;
    border-radius: 20px;
    color: ${({theme:e})=>e.selectDropdownOptionText};
    transition:
      color ${m},
      background-color ${m};
    background-color: transparent;
    cursor: pointer;
    line-height: 1.285;

    &:hover,
    &:focus {
      color: ${({theme:e})=>e.mainText};
    }

    &:active {
      color: ${({theme:e})=>e.selectDropdownOptionTextActive};
      background-color: ${({theme:e})=>e.selectDropdownOptionBgActive};
    }

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }
`,G=i.span`
  position: absolute;
  top: 17px;
  right: 24px;
  pointer-events: none;
  color: ${({theme:e})=>e.mainText};
`,H=i.div`
  position: relative;
  width: 100%;
`,J=i($)`
  display: flex;
  color: #f3f3f3;
  align-items: center;
  margin-bottom: 40px;
  row-gap: 14px;
  flex-direction: column;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 8px;
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 680px;
    margin-top: 80px;
  }

  #categories {
    width: 100%;
  }

  #ingredients {
    width: 100%;
  }
`,K=i(v)`
  position: relative;
  background-color: transparent;
  width: 100%;
  padding: 17px 23px;
  border: none;
  border-radius: 40px;
  border: 1px solid ${({theme:e})=>e.inputBorder};
  color: ${({theme:e})=>e.mainText};
  line-height: 1.285;
  transition: border-color ${m};

  &:focus {
    outline: transparent;
    border-color: ${({theme:e})=>e.inputBorderFocus};
  }

  &::placeholder {
    color: ${({theme:e})=>e.mainText};
    line-height: 1.285;
  }

  @media screen and (min-width: 768px) {
    width: 264px;
    font-size: 17px;
    line-height: 1.56;
    padding: 14px 23px;
  }
`,U={searchQuery:"",categories:"",ingredients:""},X=D().shape({searchQuery:S(),categories:S(),ingredients:S()}),Y=({page:e,limit:o})=>{const[s,r]=p.useState(""),[a,g]=p.useState(""),[d,u]=p.useState(""),{categories:x,ingredients:f}=W(),l=y(),w=c=>{z(()=>r(c.searchQuery),300),g(c.categories),u(c.ingredients),r("")};p.useEffect(()=>{l(C()),l(P())},[l]),p.useEffect(()=>{l(T({query:s,category:a,ingredient:d,page:e,limit:o}))},[l,s,a,d,e,o]);const k=c=>{r(c.target.value)};return t.jsx(I,{initialValues:U,validationSchema:X,onSubmit:w,children:c=>t.jsxs(J,{onSubmit:c.handleSubmit,children:[t.jsxs(H,{children:[t.jsx(K,{name:"searchQuery",type:"text",value:s,placeholder:"Enter the text",onChange:k}),t.jsx(G,{children:t.jsx(q,{size:20})})]}),t.jsx(v,{name:"categories",children:({field:h,form:b})=>t.jsx(j,{classNamePrefix:"Select",closeMenuOnSelect:!0,isClearable:!0,options:[{value:"",label:"All categories"},...x.map(n=>({value:n,label:n}))],name:h.name,id:"categories",...h,value:a?{value:a,label:a}:{value:"",label:"All categories"},onChange:n=>{g(n?n.value:""),b.setFieldValue("categories",n?n.value:"")},placeholder:"All categories"})}),t.jsx(v,{name:"ingredients",children:({field:h,form:b})=>t.jsx(j,{classNamePrefix:"Select",closeMenuOnSelect:!0,isClearable:!0,options:[{value:"",label:"All ingredients"},...f.map(n=>({value:n.title,label:n.title}))],name:h.name,id:"ingredients",...h,value:d?{value:d,label:d}:{value:"",label:"All ingredients"},onChange:n=>{u(n?n.value:""),b.setFieldValue("ingredient",n?n.value:"")},placeholder:"Ingredients"})})]})})},Z=i.ul`
  margin-bottom: 40px;
  display: grid;
  grid-row-gap: 28px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 40px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 80px;
  }
`,O=i.li`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`,ee=i.img`
  width: 100%;
  height: 360px;
  border-radius: 8px;
  object-fit: ${({placeholder:e})=>e==="true"?"contain":"cover"};
  background-color: #161f37;
  padding: ${({placeholder:e})=>e==="true"?"28px":0};

  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`,te=i.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,ne=i.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  color: ${({theme:e})=>e.mainText};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,ie=i(F)`
  font-weight: 500;
  line-height: 1.285;
  color: ${({theme:e})=>e.subTitleText};
  transition: color ${m};

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.subTitleTextHover};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,re=({drinks:e})=>t.jsx(t.Fragment,{children:t.jsx(Z,{children:e.length>0?e.map(({_id:o,drink:s,drinkThumb:r})=>t.jsxs(O,{children:[t.jsx(ee,{src:r||N,placeholder:r?"false":"true"}),t.jsxs(te,{children:[t.jsx(ne,{children:s}),t.jsx(ie,{to:`/drinks/${o}`,children:"See more"})]})]},o)):e.length===0?t.jsx("p",{children:"Sorry. There are no cocktails ... 😭"}):null})}),ae=i.section`
  width: 100%;
  margin: 0;
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
    padding-bottom: 160px;
  }
`,oe=i.div`
  margin: 0 auto;
  padding-top: 91px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 204px;
  row-gap: 32px;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    width: 260px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 67px;
  }
`,se=i.p`
  font-weight: 500;
  line-height: 1.28;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.38;
  }
`,de=i.img`
  width: 100%;
  object-fit: contain;
`;function me(){const{width:e}=L(),{isLoading:o,drinks:s,error:r,total:a}=A(),[g,d]=p.useState(1),u=e<768?5:8,x=e<1440?10:9,f=Math.ceil(a/x),l=w=>{d(w)};return t.jsx(ae,{children:t.jsxs(B,{children:[t.jsx(R,{title:"Drinks"}),t.jsx(Y,{page:g,limit:x}),o&&t.jsx(E,{}),a>0&&!r&&t.jsx(re,{drinks:s}),r&&t.jsxs(oe,{children:[t.jsx(de,{src:V,alt:"Cocktail"}),t.jsx(se,{children:"Sorry. There are no cocktails ... 😭Please try again."})]}),f>1&&!r&&t.jsx(Q,{currentPage:g,drinksPerPage:x,totalDrinks:a,onPageChange:l,pageNumbersToShow:u})]})})}export{me as default};
