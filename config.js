const API="https://zojsascliwlqgxcrqqlo.supabase.co/functions/v1";
const money=c=>"$"+(c/100).toFixed(2);
const when=t=>t?new Date(t).toLocaleString("en-US",{timeZone:"America/New_York",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})+" ET":"";
async function api(fn,opt){const r=await fetch(API+"/"+fn,opt);return [r.status,await r.json()];}
const post=(fn,b)=>api(fn,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(b)});
