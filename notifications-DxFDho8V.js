import{T as u,g as y,U as $,W as I,S as h}from"./index-D1L3ngIk.js";import{C as A}from"./credit-card-OxhHh0ry.js";const l={API_URL:"https://api.callmebot.com/whatsapp.php",API_KEY:"",ADMIN_PHONE:"",ENABLED:!0,DEMO_MODE:!1};function m(){return localStorage.getItem("callmebot_apikey")||""}function f(){return localStorage.getItem("dt_whatsapp_admin")||l.ADMIN_PHONE}function w(t,e){localStorage.setItem("callmebot_apikey",t),localStorage.setItem("dt_whatsapp_admin",e),l.API_KEY=t,l.ADMIN_PHONE=e}function b(){return{apiKey:m(),adminPhone:f()}}async function i(t,e){const n=m();if(!n)return console.warn("[WhatsApp] API key not configured"),!1;const o=t.replace(/^\+?213/,"").replace(/^00/,"");if(!n)return console.log("%c [WhatsApp DEMO] ","background: #25D366; color: white; font-weight: bold;"),console.log(`To: +213${o}`),console.log(`Message: ${e}`),!0;try{const a=`${l.API_URL}?phone=213${o}&text=${encodeURIComponent(e)}&apikey=${n}`;return await fetch(a,{method:"GET",mode:"no-cors"}),console.log("[WhatsApp] Message sent to",o),!0}catch(a){return console.error("[WhatsApp] Failed:",a),!1}}async function O(t,e,n,o){const a=f();if(!a)return;const c=`
🛎️ *دار التجار - تاجر جديد!*

🏪 المتجر: ${t}
👤 المالك: ${e}
📍 الولاية: ${o}
📱 الهاتف: ${n}

📝 يرجى مراجعة واعتماد هذا التاجر من لوحة التحكم.
  `.trim();await i(a,c),g({type:"trader",title:"تاجر جديد مسجل",message:`تسجيل: ${t} - ${e} (${o})`,actionUrl:"/admin/traders"})}async function _(t,e,n,o,a){const c=f();if(!c)return;const d=`
💰 *دار التجار - دفع جديد!*

👤 العميل: ${t}
📱 الهاتف: ${e}
📋 الخطة: ${n}
💵 المبلغ: ${o}${a?`
💳 الطريقة: ${a}`:""}

📝 يرجى مراجعة وتأكيد الدفع من لوحة التحكم.
  `.trim();await i(c,d),g({type:"payment",title:"دفع جديد",message:`${t} - ${n} (${o})`,actionUrl:"/admin/payments"})}async function P(t,e,n){const o=f();if(!o)return;const a=`
📦 *دار التجار - طلب NFC جديد!*

👤 العميل: ${t}
📱 المنتج: ${e}
💵 المجموع: ${n} دج

📝 يرجى مراجعة الطلب من لوحة التحكم.
  `.trim();await i(o,a),g({type:"nfc",title:"طلب NFC جديد",message:`${t} - ${e} (${n} دج)`,actionUrl:"/admin/nfc-orders"})}async function C(t,e){const n=`
✅ *تم نشر تقييمك!*

أهلاً ${t}،

تم مراجعة واعتماد تقييمك على المنصة.
شكراً لمشاركتنا رأيك! ⭐

تقييمك يساعد التجار على تحسين خدماتهم.
  `.trim();await i(e,n)}async function E(t,e,n){const o=`
⚠️ *تحديث حول تقييمك*

أهلاً ${t}،

نأسف، لم يتم نشر تقييمك لأنه لا يتوافق مع معايير المنصة.

يمكنك إرسال تقييم جديد في أي وقت.

شكراً لتفهمك.
  `.trim();await i(e,o)}async function M(t,e,n){const o=window.location.origin,a=`
✅ *تم تأكيد اشتراكك!*

👤 ${t}
📋 الخطة: ${n}

اشتراكك الآن نشط ✅
يمكنك تسجيل الدخول لتصفح التجار:
${o}/#/profile

شكراً لثقتك بنا! 🎉
  `.trim();await i(e,a)}const s="dt_notifications",p=50;function r(){try{const t=localStorage.getItem(s);return t?JSON.parse(t):[]}catch{return[]}}function k(){return r().filter(t=>!t.read).length}function x(t){const e=r(),n=e.findIndex(o=>o.id===t);n!==-1&&(e[n].read=!0,localStorage.setItem(s,JSON.stringify(e)))}function D(){const t=r().map(e=>({...e,read:!0}));localStorage.setItem(s,JSON.stringify(t))}function T(t){const e=r().filter(n=>n.id!==t);localStorage.setItem(s,JSON.stringify(e))}function U(){localStorage.removeItem(s)}function g(t){const e=r(),n={...t,id:Date.now().toString(36)+Math.random().toString(36).substring(2,9),read:!1,timestamp:new Date().toISOString()};return e.unshift(n),e.length>p&&(e.length=p),localStorage.setItem(s,JSON.stringify(e)),n}const W={trader:h,payment:A,nfc:I,subscriber:$,review:y,system:u},R={trader:"text-blue-400 bg-blue-500/10",payment:"text-gold bg-gold/10",nfc:"text-green-400 bg-green-500/10",subscriber:"text-purple-400 bg-purple-500/10",review:"text-pink-400 bg-pink-500/10",system:"text-red-400 bg-red-500/10"};export{P as a,O as b,C as c,E as d,g as e,b as f,r as g,k as h,W as i,R as j,w as k,D as l,x as m,_ as n,T as o,U as p,M as q,i as s};
