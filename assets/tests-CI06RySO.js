import"./modulepreload-polyfill-B5Qt9EMX.js";const d=new URLSearchParams(window.location.search),s=d.get("t");console.log("Lade test:"+s);async function i(){const e="data/"+s+".json";console.log(e);try{const t=await fetch(e);if(!t.ok)throw new Error(`Response status: ${t.status}`);return await t.json()}catch(t){console.error(t.message),window.location.href="/"}}let a=[];async function l(){if(a=await i(),!a)return;const e=document.getElementById("test");a.forEach(({text:t,punkte:n},o)=>{const r=document.createElement("tr");r.innerHTML=`
      <td>${o+1}) ${t}</td>
      ${n.map(c=>`<td><input type="radio" name="q${o}" value="${c}"></td>`).join("")}
    `,e.appendChild(r)})}const m=document.getElementById("test");a.forEach((e,t)=>{const n=document.createElement("tr");n.innerHTML=`
        <td>${t+1}) ${e}</td>
        ${[2,1,-1,-2].map(o=>`<td><input type="radio" name="q${t}" value="${o}"></td>`).join("")}
      `,m.appendChild(n)});l();
