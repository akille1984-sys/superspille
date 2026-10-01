const STORAGE_KEY = 'superspilleCartV1';
const LAST_ORDER_KEY = 'superspilleLastReservationV1';
const PENDING_REQUEST_KEY = 'superspillePendingRequestV1';
const BACKEND_URL = 'https://script.google.com/macros/s/AKfycbzB2-bXat_HOvyat5eC8TLHL_zKz1iF4auoyTUoRW5QK7LziVDzZQnQVl29Tsv_mfZE/exec';

const SUPPORTS = [
  {code:'PIN', name:'Spilla', img:'assets/supports/PIN.webp', desc:'La classica: retro con spilla da balia. Affidabile, pungente, molto Pride.'},
  {code:'SPK', name:'Specchietto', img:'assets/supports/SPK.webp', desc:'Dietro c’è uno specchio. Per controllare il make-up, i capelli o la tenuta psicologica.'},
  {code:'PTC', name:'Portachiavi', img:'assets/supports/PTC.webp', desc:'Gancetto, catenella e anello. Per dare alle chiavi una personalità che non avevano chiesto.'},
  {code:'MGN', name:'Magnete', img:'assets/supports/MGN.webp', desc:'Retro magnetico. Frigo, lavagna o qualunque superficie pronta a sopportare il tuo splendore.'}
];

const FINISHES = [
  {code:'F01', name:'Trasparente', img:'assets/finishes/F01.webp', stock:500, desc:'Pulito, lucido, essenziale. Brilla senza fare troppo teatro. Quasi.'},
  {code:'F02', name:'Laser', img:'assets/finishes/F02.webp', stock:200, desc:'Olografico uniforme, con riflessi rainbow. La discrezione ha lasciato la chat.'},
  {code:'F03', name:'Sand Star', img:'assets/finishes/F03.webp', stock:50, desc:'Una pioggia fitta di micro stelline. Il firmamento, ma tascabile.'},
  {code:'F04', name:'Star', img:'assets/finishes/F04.webp', stock:300, desc:'Piccole stelle olografiche sparse sul design. Glitter con disciplina.'},
  {code:'F05', name:'Big Star', img:'assets/finishes/F05.webp', stock:67, desc:'Stelle grandi, ben visibili e incapaci di stare in secondo piano.'},
  {code:'F06', name:'Dot', img:'assets/finishes/F06.webp', stock:50, desc:'Effetto puntinato scintillante. Una micro discoteca da 57 mm.'},
  {code:'F07', name:'Heart', img:'assets/finishes/F07.webp', stock:300, desc:'Cuori olografici. Romanticismo, ma con un certo ego.'},
  {code:'F08', name:'Gem', img:'assets/finishes/F08.webp', stock:150, desc:'Effetto cristallino e sfaccettato. La spilla ha deciso di sentirsi preziosa.'},
  {code:'F09', name:'Snow', img:'assets/finishes/F09.webp', stock:70, desc:'Fiocchi di neve olografici. Del tutto stagionalmente inappropriati, quindi perfetti.'}
];

const CATEGORIES = [
  {name:'Toons & Co.', ids:[7,8,11,24,25,27,28,29,44,54,55,58]},
  {name:'Animalettə queer', ids:[2,3,12,34,37,46]},
  {name:'Hai 1 nuovo messaggio', ids:[10,13,16,20,22,31,38,43]},
  {name:'Divas', ids:[6,23,26,32,33,39,47]},
  {name:'The T* in Me', ids:[15,35,36,49,53,60]},
  {name:'You Better Work!', ids:[17,18,30,52,56,59]},
  {name:'Pride by Design', ids:[42,45,48]},
  {name:'Musicali', ids:[1,4,5,9,14,19,21,40,41,50,51,57,61,62,63,64], musical:true}
];

const DESIGN_NAMES = {
  "D1": "Antonella Vs Valeria",
  "D2": "AlphaMale",
  "D3": "Antifa Kitty Club",
  "D4": "Antonellina e La Borra",
  "D5": "Si può essere più stronzə?",
  "D6": "La Baffa",
  "D7": "Barbie professione disprezzo",
  "D8": "Tania magia di ew!",
  "D9": "Sgualdrinə",
  "D10": "Bene ma non…",
  "D11": "Oh Gurl…",
  "D12": "KamaQueer",
  "D13": "Basse aspettative",
  "D14": "Un oggetto fine…",
  "D15": "No community without T",
  "D16": "Contaci",
  "D17": "Not today Satan",
  "D18": "Judging you",
  "D19": "Mariagrazia is back",
  "D20": "F*ckin' fabulous",
  "D21": "Simona la falsa",
  "D22": "Il fastidio",
  "D23": "Porca figura",
  "D24": "Finokki in love",
  "D25": "Murakami chi?",
  "D26": "Lady Franca",
  "D27": "Trans Wrongs",
  "D28": "The Gender Bender",
  "D29": "Le goccine",
  "D30": "Oh, honey",
  "D31": "Io boh…",
  "D32": "Severa ma giusta",
  "D33": "Bitch face",
  "D34": "The pussy",
  "D35": "LGBT",
  "D36": "Liberation",
  "D37": "Micio Vs. Macho",
  "D38": "No Opinion",
  "D39": "Oral",
  "D40": "Bertonic",
  "D41": "Natale",
  "D42": "Free Free Palestine",
  "D43": "Piena",
  "D44": "Posi & Nega",
  "D45": "Pride",
  "D46": "QueerCat",
  "D47": "La Raffa",
  "D48": "Fasci appesi",
  "D49": "Trans Rights",
  "D50": "Winner",
  "D51": "Sashay away",
  "D52": "Meh!?",
  "D53": "Safe",
  "D54": "Sailor amə",
  "D55": "Sailorcommie",
  "D56": "Shock!",
  "D57": "Lo sponsor",
  "D58": "VCO Pride 2025",
  "D59": "No Darling",
  "D60": "No Visibility",
  "D61": "Natasha",
  "D62": "Antonella is back",
  "D63": "Lady Sciarelly",
  "D64": "La shfilada"
};

const DESIGNS = CATEGORIES.flatMap(c => c.ids.map(n => ({
  id:n,
  code:`D${n}`,
  name:DESIGN_NAMES[`D${n}`] || `Design ${n}`,
  category:c.name,
  musical:!!c.musical,
  img:`assets/designs_v8/D${n}.webp`
})));

const state = {
  step:1,
  support:null,
  design:null,
  finish:null,
  qty:1,
  category:CATEGORIES[0].name,
  cart:JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function showScreen(name){
  $$('.screen').forEach(x => x.classList.toggle('active', x.dataset.screen === name));
  window.scrollTo({top:0,behavior:'smooth'});
  if(name === 'cart') renderCart();
  if(name === 'checkout') renderCheckout();
  if(name === 'order-received') renderOrderReceived();
}

function goStep(step){
  state.step = step;
  $$('.step-panel').forEach(p => p.classList.toggle('active', +p.dataset.step === step));
  $$('.stepper button').forEach(b => b.classList.toggle('active', +b.dataset.goStep === step));
  if(step === 4) renderPreview();
  window.scrollTo({top:72,behavior:'smooth'});
}

function startBuilder(reset=true, category=null){
  if(reset){
    state.support=null;
    state.design=null;
    state.finish=null;
    state.qty=1;
  }
  if(category) state.category=category;
  showScreen('builder');
  renderAll();
  goStep(1);
}

function renderSupports(){
  $('#supportGrid').innerHTML = SUPPORTS.map(s => `
    <button class="choice-card ${state.support?.code===s.code?'selected':''}" data-support="${s.code}">
      <img src="${s.img}" alt="${escapeAttr(s.name)}">
      <div class="card-copy">
        <div class="card-title-row"><h3>${escapeHtml(s.name)}</h3></div>
        <p>${escapeHtml(s.desc)}</p>
      </div>
    </button>`).join('');

  $$('[data-support]').forEach(btn => btn.onclick = () => {
    state.support = SUPPORTS.find(s => s.code === btn.dataset.support);
    renderSupports();
    setTimeout(()=>goStep(2),120);
  });
}

function renderCategories(){
  const total = DESIGNS.length;
  const all = `<button data-category="Tutti" class="${state.category==='Tutti'?'active':''}">Tutti · ${total}</button>`;
  $('#categoryTabs').innerHTML = all + CATEGORIES.map(c => `
    <button data-category="${escapeAttr(c.name)}" class="${state.category===c.name?'active':''} ${c.musical?'musical-tab':''}">${c.musical?'♪ ':''}${escapeHtml(c.name)} · ${c.ids.length}</button>`).join('');
  $$('[data-category]').forEach(b => b.onclick = () => {
    state.category = b.dataset.category;
    renderCategories();
    renderDesigns();
  });
}

function renderDesigns(){
  const q = $('#designSearch').value.trim().toLowerCase();
  let list = DESIGNS.filter(d => state.category==='Tutti' || d.category===state.category);
  if(q) list = list.filter(d => d.name.toLowerCase().includes(q) || d.category.toLowerCase().includes(q));

  $('#designGrid').innerHTML = list.length ? list.map(d => `
    <button class="design-card ${d.musical?'musical-design':''} ${state.design?.id===d.id?'selected':''}" data-design="${d.id}" aria-label="${escapeAttr(d.name)}">
      <div class="design-image-wrap"><img src="${d.img}" loading="lazy" alt="${escapeAttr(d.name)}"></div>
      <div class="design-meta">
        <strong>${escapeHtml(d.name)}</strong>
        ${d.musical?'<span class="music-badge">♪ Musicale</span>':''}
      </div>
    </button>`).join('') : `<div class="no-results">Niente. Il vuoto cosmico. Prova un altro nome o una categoria diversa.</div>`;

  $$('[data-design]').forEach(btn => {
    const d = DESIGNS.find(x => x.id === +btn.dataset.design);
    btn.onclick = () => {
      hideDesignZoom();
      state.design = d;
      renderDesigns();
      setTimeout(()=>goStep(3),120);
    };

    if(window.matchMedia('(hover:hover) and (pointer:fine)').matches){
      btn.addEventListener('mouseenter', e => showDesignZoom(d,e));
      btn.addEventListener('mousemove', e => moveDesignZoom(e));
      btn.addEventListener('mouseleave', hideDesignZoom);
    }
  });
}

function getUsedStock(finishCode){
  return state.cart.filter(x => x.finish===finishCode).reduce((n,x)=>n+x.qty,0);
}

function getRemainingStock(finishCode){
  const f = FINISHES.find(x => x.code===finishCode);
  return Math.max(0, (f?.stock || 0) - getUsedStock(finishCode));
}

function stockLabel(n){
  if(n===0) return 'Esaurito. Tragedia olografica.';
  if(n<=25) return `⚠ Solo ${n} rimasti`;
  if(n<=75) return `${n} rimasti · niente panico, ma quasi`;
  return `${n} disponibili`;
}

function renderFinishes(){
  $('#finishGrid').innerHTML = FINISHES.map(f => {
    const remaining = getRemainingStock(f.code);
    return `
      <button class="finish-card ${remaining===0?'sold-out':''} ${state.finish?.code===f.code?'selected':''}" data-finish="${f.code}" ${remaining===0?'disabled':''}>
        <img src="${f.img}" loading="lazy" alt="Finish ${escapeAttr(f.name)}">
        <h3>${escapeHtml(f.name)}</h3>
        <p>${escapeHtml(f.desc)}</p>
        <span class="stock-badge ${remaining<=75?'low':''}">${stockLabel(remaining)}</span>
      </button>`;
  }).join('');

  $$('[data-finish]').forEach(btn => btn.onclick = () => {
    if(btn.disabled) return;
    state.finish = FINISHES.find(f => f.code === btn.dataset.finish);
    state.qty = 1;
    renderFinishes();
    setTimeout(()=>goStep(4),120);
  });
}

function renderPreview(){
  if(!state.support || !state.design || !state.finish){
    goStep(!state.support?1:!state.design?2:3);
    return;
  }
  const remaining = getRemainingStock(state.finish.code);
  state.qty = Math.max(1, Math.min(state.qty, Math.max(1, remaining)));

  $('#previewDesign').src = state.design.img;
  $('#previewDesign').alt = state.design.name;
  $('#previewFinish').src = state.finish.img;
  $('#previewFinish').dataset.finish = state.finish.code;
  $('#summarySupport').textContent = state.support.name;
  $('#summaryDesign').textContent = state.design.name + (state.design.musical ? ' ♪' : '');
  $('#summaryFinish').textContent = state.finish.name;
  $('#summaryStock').textContent = stockLabel(remaining);
  $('#summaryStock').classList.toggle('low', remaining<=75);
  $('#qtyValue').textContent = state.qty;
  $('#qtyPlus').disabled = state.qty >= remaining;
}

function renderAll(){
  renderSupports();
  renderCategories();
  renderDesigns();
  renderFinishes();
  updateCartCount();
}

function addToCart(){
  const remaining = getRemainingStock(state.finish.code);
  if(remaining<=0){
    toast('Quel finish è finito. Le stelle ci hanno abbandonato.');
    renderFinishes();
    return;
  }
  if(state.qty>remaining){
    state.qty=remaining;
    renderPreview();
    toast(`Ne restano ${remaining}: ho abbassato la quantità prima che scoppiasse una crisi diplomatica.`);
    return;
  }

  const key = `${state.support.code}-${state.design.code}-${state.finish.code}`;
  const existing = state.cart.find(x => x.key === key);
  if(existing) existing.qty += state.qty;
  else state.cart.push({key, support:state.support.code, design:state.design.code, finish:state.finish.code, qty:state.qty});

  persistCart();
  toast(`${state.design.name} è nella selezione. Ottima scelta. O comunque memorabile.`);
  showScreen('cart');
}

function persistCart(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
  updateCartCount();
  if($('.step-panel[data-step="3"]')?.classList.contains('active')) renderFinishes();
}

function updateCartCount(){
  $('#cartCount').textContent = state.cart.reduce((n,x)=>n+x.qty,0);
}

function renderCart(){
  const empty = state.cart.length === 0;
  $('#cartEmpty').hidden = !empty;
  $('#cartContent').hidden = empty;
  if(empty){
    updateCartCount();
    return;
  }

  $('#cartList').innerHTML = state.cart.map((item,i) => {
    const s = SUPPORTS.find(x=>x.code===item.support);
    const d = DESIGNS.find(x=>x.code===item.design);
    const f = FINISHES.find(x=>x.code===item.finish);
    if(!s || !d || !f) return '';
    return `<article class="cart-item">
      <div class="cart-thumb">
        <img src="${d.img}" alt="${escapeAttr(d.name)}">
        ${f.code!=='F01' ? `<img class="overlay" src="${f.img}" alt="">` : ''}
      </div>
      <div class="cart-copy"><strong>${escapeHtml(d.name)}${d.musical?' ♪':''}</strong><small>${escapeHtml(s.name)} · ${escapeHtml(f.name)}</small></div>
      <div class="qty-control"><button data-cart-minus="${i}" aria-label="Diminuisci">−</button><strong>${item.qty}</strong><button data-cart-plus="${i}" aria-label="Aumenta">+</button></div>
      <button class="remove" data-cart-remove="${i}" aria-label="Rimuovi">×</button>
    </article>`;
  }).join('');

  const pieces = state.cart.reduce((n,x)=>n+x.qty,0);
  $('#cartPieces').textContent = pieces;
  $$('[data-cart-minus]').forEach(b=>b.onclick=()=>changeCartQty(+b.dataset.cartMinus,-1));
  $$('[data-cart-plus]').forEach(b=>b.onclick=()=>changeCartQty(+b.dataset.cartPlus,1));
  $$('[data-cart-remove]').forEach(b=>b.onclick=()=>{state.cart.splice(+b.dataset.cartRemove,1);persistCart();renderCart();});
  updateCartCount();
}

function changeCartQty(i,delta){
  const item = state.cart[i];
  if(!item) return;
  if(delta>0 && getRemainingStock(item.finish)<=0){
    const f = FINISHES.find(x=>x.code===item.finish);
    toast(`${f?.name||'Questo finish'} è arrivato al limite. Nessun gadget oltre il bordo del burrone.`);
    return;
  }
  item.qty += delta;
  if(item.qty <= 0) state.cart.splice(i,1);
  persistCart();
  renderCart();
}


function cartPieces(){
  return state.cart.reduce((n,x)=>n+x.qty,0);
}

function itemDetails(item){
  return {
    support: SUPPORTS.find(x=>x.code===item.support),
    design: DESIGNS.find(x=>x.code===item.design),
    finish: FINISHES.find(x=>x.code===item.finish)
  };
}

function renderCheckout(){
  if(!state.cart.length){
    toast('Prima serve almeno un gadget. Anche la burocrazia ha dei prerequisiti.');
    showScreen('cart');
    return;
  }
  const pieces = cartPieces();
  $('#checkoutPieces').textContent = pieces;
  $('#checkoutItems').innerHTML = state.cart.map(item=>{
    const {support,design,finish}=itemDetails(item);
    if(!support||!design||!finish) return '';
    return `<article class="checkout-item">
      <div class="checkout-thumb"><img src="${design.img}" alt="${escapeAttr(design.name)}">${finish.code!=='F01'?`<img class="overlay" src="${finish.img}" alt="">`:''}</div>
      <div><strong>${escapeHtml(design.name)}${design.musical?' ♪':''}</strong><span>${escapeHtml(support.name)} · ${escapeHtml(finish.name)}</span></div>
      <b>× ${item.qty}</b>
    </article>`;
  }).join('');
  $('#checkoutError').hidden=true;
}

function validEmail(value){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function makeRequestId(){
  if(window.crypto?.randomUUID) return window.crypto.randomUUID();
  const rnd = Math.random().toString(36).slice(2);
  return `req-${Date.now()}-${rnd}`;
}

function checkoutError(msg){
  const el=$('#checkoutError');
  el.textContent=msg;
  el.hidden=false;
  el.scrollIntoView({behavior:'smooth',block:'center'});
}

function submissionSignature(name,email,items){
  return JSON.stringify({
    name:name.trim(),
    email:email.trim().toLowerCase(),
    items:items.map(x=>({support:x.support,design:x.design,finish:x.finish,qty:x.qty}))
  });
}

function getRequestIdFor(signature){
  try{
    const existing=JSON.parse(localStorage.getItem(PENDING_REQUEST_KEY)||'null');
    if(existing?.signature===signature && existing?.requestId) return existing.requestId;
  }catch(e){}
  const requestId=makeRequestId();
  localStorage.setItem(PENDING_REQUEST_KEY,JSON.stringify({requestId,signature,createdAt:new Date().toISOString()}));
  return requestId;
}

function readRequestStatusJsonp(requestId){
  return new Promise((resolve,reject)=>{
    const callbackName=`__superspille_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script=document.createElement('script');
    const cleanup=()=>{
      try{ delete window[callbackName]; }catch(e){ window[callbackName]=undefined; }
      script.remove();
    };
    const timer=setTimeout(()=>{
      cleanup();
      reject(new Error('Il backend non ha risposto in tempo.'));
    },10000);
    window[callbackName]=(data)=>{
      clearTimeout(timer);
      cleanup();
      resolve(data);
    };
    script.onerror=()=>{
      clearTimeout(timer);
      cleanup();
      reject(new Error('Non riesco a leggere la risposta del backend.'));
    };
    script.src=`${BACKEND_URL}?action=request&requestId=${encodeURIComponent(requestId)}&prefix=${encodeURIComponent(callbackName)}&_=${Date.now()}`;
    document.head.appendChild(script);
  });
}

function wait(ms){ return new Promise(resolve=>setTimeout(resolve,ms)); }

async function waitForRequestResult(requestId){
  let last=null;
  for(let attempt=0; attempt<14; attempt++){
    if(attempt) await wait(attempt<4 ? 500 : 900);
    last=await readRequestStatusJsonp(requestId);
    if(last && last.pending!==true) return last;
  }
  throw new Error('La richiesta potrebbe essere arrivata, ma non riesco ancora a verificarla. Non reinviarla: attendi un minuto e controlla la mail.');
}

async function submitCheckout(e){
  e.preventDefault();
  const name=$('#customerName').value.trim();
  const email=$('#customerEmail').value.trim();
  const email2=$('#customerEmailConfirm').value.trim();
  if(name.length<2) return checkoutError('Ci serve almeno qualcosa con cui chiamarti. Anche due lettere vanno benissimo.');
  if(!validEmail(email)) return checkoutError('Quella mail ci sembra sospetta. Controlla che abbia davvero intenzione di esistere.');
  if(email.toLowerCase()!==email2.toLowerCase()) return checkoutError('Le due email non coincidono. Meglio scoprirlo qui che davanti a un QR mai arrivato.');
  if(!$('#privacyCheck').checked) return checkoutError('Prima dobbiamo sapere che hai letto l’informativa privacy.');
  if(!$('#confirmationCheck').checked) return checkoutError('Manca la presa d’atto più importante: la seconda conferma è ciò che fa partire la produzione.');
  if(!state.cart.length) return checkoutError('La prenotazione è misteriosamente vuota. Anche noi siamo confusi.');

  const button=$('#checkoutSubmitBtn');
  const originalLabel=button.textContent;
  button.disabled=true;
  button.textContent='Invio in corso…';
  $('#checkoutError').hidden=true;

  const signature=submissionSignature(name,email,state.cart);
  const requestId=getRequestIdFor(signature);
  const payload={
    requestId,
    name,
    email,
    privacyAccepted:true,
    confirmationUnderstood:true,
    source:'web-1.0',
    items:state.cart.map(x=>({support:x.support,design:x.design,finish:x.finish,qty:x.qty}))
  };

  try{
    await fetch(BACKEND_URL,{
      method:'POST',
      mode:'no-cors',
      redirect:'follow',
      body:JSON.stringify(payload)
    });

    const result=await waitForRequestResult(requestId);
    if(!result?.ok) throw new Error(result?.error || 'Il backend non ha accettato la richiesta.');

    const order={
      code:result.code,
      name,email,
      createdAt:new Date().toISOString(),
      status:result.status,
      pieces:result.pieces,
      total:result.total,
      expiresAt:result.expiresAt,
      emailSent:result.emailSent!==false,
      duplicate:!!result.duplicate
    };
    localStorage.setItem(LAST_ORDER_KEY,JSON.stringify(order));
    localStorage.removeItem(PENDING_REQUEST_KEY);
    state.cart=[];
    persistCart();
    showScreen('order-received');
  }catch(err){
    console.error(err);
    const detail=String(err?.message||err);
    checkoutError(`Non siamo riusciti a verificare l’invio. La tua selezione è ancora qui. Se riprovi senza modificarla, useremo lo stesso identificatore e il backend non creerà un doppione. ${detail}`);
  }finally{
    button.disabled=false;
    button.textContent=originalLabel;
  }
}

function getLastOrder(){
  try{return JSON.parse(localStorage.getItem(LAST_ORDER_KEY)||'null')}catch(e){return null}
}

function renderOrderReceived(){
  const order=getLastOrder();
  if(!order){ showScreen('home'); return; }
  $('#receivedOrderCode').textContent=order.code;
  $('#emailOrderCode').textContent=order.code;
  $('#receivedEmail').textContent=order.email;
  const status=$('#emailDeliveryStatus');
  if(order.emailSent){
    status.innerHTML='<strong>La mail di conferma è partita.</strong><span>Se non la vedi entro qualche minuto, controlla anche Spam e Promozioni. Finché non premi il pulsante nella mail, i gadget non entrano in produzione.</span>';
  }else{
    status.innerHTML='<strong>La prenotazione è stata registrata, ma la mail non è partita.</strong><span>Conserva il codice prenotazione e non inviarne una seconda: lo staff potrà reinviare la conferma.</span>';
  }
}

function copyOrderCode(){
  const order=getLastOrder();
  if(!order) return;
  if(navigator.clipboard?.writeText){
    navigator.clipboard.writeText(order.code).then(()=>toast('Codice prenotazione copiato. Piccola efficienza, grande soddisfazione.'));
  } else toast(`Codice prenotazione: ${order.code}`);
}

function showDesignZoom(d,e){
  const z = $('#designHoverPreview');
  $('#hoverDesignImage').src = d.img;
  $('#hoverDesignName').textContent = d.name;
  $('#hoverDesignMusic').hidden = !d.musical;
  z.classList.add('show');
  moveDesignZoom(e);
}

function moveDesignZoom(e){
  const z = $('#designHoverPreview');
  if(!z.classList.contains('show')) return;
  const w=340, h=410, gap=22;
  let x=e.clientX+gap, y=e.clientY-h/2;
  if(x+w>window.innerWidth-12) x=e.clientX-w-gap;
  y=Math.max(12,Math.min(window.innerHeight-h-12,y));
  z.style.left=`${x}px`;
  z.style.top=`${y}px`;
}

function hideDesignZoom(){
  $('#designHoverPreview')?.classList.remove('show');
}

function toast(msg){
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toast.t);
  toast.t = setTimeout(()=>el.classList.remove('show'), 2400);
}

function escapeHtml(s){
  return String(s)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#039;');
}
function escapeAttr(s){ return escapeHtml(s); }

$('[data-action="start"]').onclick = ()=>startBuilder(true);
$$('[data-action="musicali"]').forEach(btn => btn.onclick = ()=>startBuilder(true,'Musicali'));
$$('[data-action="new-gadget"]').forEach(b=>b.onclick=()=>startBuilder(true));
$('#brandBtn').onclick = ()=>showScreen('home');
$('#reviewsBtn').onclick = ()=>showScreen('reviews');
$$('[data-action="reviews"]').forEach(b=>b.onclick=()=>showScreen('reviews'));
$$('[data-action="home"]').forEach(b=>b.onclick=()=>showScreen('home'));
$('#cartBtn').onclick = ()=>showScreen('cart');
$$('[data-go-step]').forEach(b=>b.onclick=()=>goStep(+b.dataset.goStep));
$('#designSearch').addEventListener('input', renderDesigns);
$('#qtyMinus').onclick = ()=>{ state.qty = Math.max(1, state.qty-1); renderPreview(); };
$('#qtyPlus').onclick = ()=>{
  const max = getRemainingStock(state.finish?.code);
  if(state.qty < max) state.qty++;
  else toast('Fine della scorta. Anche il glitter conosce dei limiti.');
  renderPreview();
};
$('#addToCartBtn').onclick = addToCart;
$('#checkoutBtn').onclick = ()=>showScreen('checkout');
$$('[data-action="back-cart"]').forEach(b=>b.onclick=()=>showScreen('cart'));
$('#checkoutForm').addEventListener('submit',submitCheckout);
$('#privacyBtn').onclick=()=>$('#privacyDialog').showModal();
$('#closePrivacy').onclick=()=>$('#privacyDialog').close();
$('#privacyOk').onclick=()=>$('#privacyDialog').close();
$('#copyOrderCode').onclick=copyOrderCode;

renderAll();
showScreen('home');
