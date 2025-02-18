(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{6986:(e,t,o)=>{Promise.resolve().then(o.bind(o,256))},256:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>c});var l=o(5155),r=o(2115);let d=e=>{let{onAddTodo:t}=e,[o,d]=(0,r.useState)("");return(0,l.jsxs)("div",{className:"flex mb-4",children:[(0,l.jsx)("input",{type:"text",className:"flex-1 p-2 border rounded-l",placeholder:"Add a new todo...",value:o,onChange:e=>d(e.target.value),onKeyDown:e=>{"Enter"===e.key&&(t(o),d(""))}}),(0,l.jsx)("button",{className:"bg-blue-500 text-white px-4 rounded-r",onClick:()=>t(o),children:"Add"})]})},s=e=>{let{todos:t,onDelete:o}=e;return(0,l.jsx)("ul",{children:t.map(e=>(0,l.jsxs)("li",{className:"flex justify-between p-2 border-b",children:[(0,l.jsx)("span",{children:e.title}),(0,l.jsx)("button",{className:"text-red-500",onClick:()=>o(e.id),children:"Delete"})]},e.id))})};var a=o(2651);let n=e=>{let[t,o]=(0,r.useState)([]);(0,r.useEffect)(()=>{l()},[]);let l=async()=>{try{let e=await a.A.get("https://jsonplaceholder.typicode.com/todos?_limit=10");o(e.data)}catch(e){console.error("Error fetching todos:",e)}},d=async l=>{if(l.trim())try{let r=await a.A.post("https://jsonplaceholder.typicode.com/todos",{userId:e,title:l,completed:!1}),d=t.length>0?Math.max(...t.map(e=>e.id))+1:1;o([{...r.data,id:d},...t])}catch(e){console.error("Error adding todo:",e)}},s=async e=>{try{await a.A.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)),o(t.filter(t=>t.id!==e))}catch(e){console.error("Error deleting todo:",e)}};return{todos:t,addTodo:d,deleteTodo:s}},c=()=>{let{todos:e,addTodo:t,deleteTodo:o}=n(1);return(0,l.jsxs)("div",{className:"max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-white",children:[(0,l.jsx)("h1",{className:"text-2xl font-bold mb-4 text-center",children:"Todo App"}),(0,l.jsx)(d,{onAddTodo:t}),(0,l.jsx)(s,{todos:e,onDelete:o})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[651,441,517,358],()=>t(6986)),_N_E=e.O()}]);