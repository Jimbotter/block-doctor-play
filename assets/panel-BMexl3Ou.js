function e(e){if(document.querySelector(`#dev-panel`))return;let t=document.createElement(`style`);t.textContent=`
/* 半透明，压在游戏画面上也能看清下面，需要用的时候移上去才实体化 */
#dev-panel {
  position: fixed; top: 8px; right: 8px; z-index: 9999; min-width: 186px;
  font: 12px/1.45 ui-monospace, SFMono-Regular, Consolas, monospace;
  color: #d9d9ea; background: rgba(12, 12, 22, 0.55);
  backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(120, 120, 170, 0.28); border-radius: 10px;
  touch-action: auto; -webkit-user-select: auto; user-select: auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  opacity: 0.55; transition: opacity 140ms ease, background 140ms ease;
}
#dev-panel.collapsed { opacity: 0.3; }
#dev-panel:hover, #dev-panel:focus-within {
  opacity: 1; background: rgba(12, 12, 22, 0.92);
}
#dev-panel header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 6px 10px; cursor: pointer; font-weight: 700; letter-spacing: 1px;
  color: #6ee7ff;
}
#dev-panel .body {
  padding: 8px; display: grid; gap: 6px; border-top: 1px solid #2a2a42;
}
#dev-panel.collapsed .body { display: none; }
#dev-panel .row { display: flex; gap: 6px; align-items: center; }
#dev-panel .label { color: #7d7d9c; white-space: nowrap; }
#dev-panel button {
  flex: 1; padding: 5px 6px; font: inherit; color: inherit; cursor: pointer;
  background: rgba(34, 34, 58, 0.8); border: 1px solid #3b3b5a;
  border-radius: 6px; white-space: nowrap;
}
#dev-panel button:hover { background: #2f2f50; }
#dev-panel button:active { transform: translateY(1px); }
#dev-panel input {
  width: 46px; padding: 4px; font: inherit; color: inherit; text-align: center;
  background: #16162a; border: 1px solid #3b3b5a; border-radius: 6px;
}
`,document.head.appendChild(t);let n=document.createElement(`div`);n.id=`dev-panel`,n.classList.add(`collapsed`),n.innerHTML=`
  <header><span>DEV 工具</span><span data-toggle>▾</span></header>
  <div class="body">
    <div class="row">
      <span class="label">关卡</span>
      <input data-level type="number" min="1" value="1" />
      <button data-go>跳转</button>
    </div>
    <div class="row">
      <button data-win>立即胜利</button>
      <button data-lose>立即失败</button>
    </div>
    <div class="row">
      <button data-result>立即进入结算页</button>
    </div>
    <div class="row">
      <button data-loading>重放 loading 页</button>
    </div>
    <div class="row">
      <button data-cheer>过关音：凯旋</button>
    </div>
    <div class="row">
      <button data-refill>补满道具</button>
      <button data-score>+1000 分</button>
    </div>
    <div class="row">
      <span class="label">彩虹块</span>
      <button data-wild-1>1 格</button>
      <button data-wild-2>2 格</button>
      <button data-wild-4>4 格</button>
    </div>
    <div class="row">
      <button data-bomb>常备炸弹：关</button>
      <button data-crate>摆一个纸箱</button>
    </div>
    <div class="row">
      <button data-clear>清空棋盘</button>
      <button data-boss>大魔王</button>
    </div>
    <div class="row">
      <button data-textures>美术资源：开</button>
    </div>
    <div class="row">
      <button data-backdrop>背景纹理：none</button>
    </div>
    <div class="row">
      <button data-daily>每日挑战</button>
      <button data-endless>无限关</button>
    </div>
    <div class="row">
      <button data-reset>清空通关进度</button>
    </div>
  </div>
`,document.body.appendChild(n);let r=n.querySelector(`[data-level]`),i=n.querySelector(`[data-toggle]`),a=(e,t)=>{n.querySelector(e).addEventListener(`click`,e=>{e.stopPropagation(),t()})};n.querySelector(`header`).addEventListener(`click`,()=>{let t=n.classList.toggle(`collapsed`);i.textContent=t?`▾`:`▴`,t||(r.value=String(e.currentLevel()))}),a(`[data-go]`,()=>{let t=Math.max(1,Number(r.value)||1);e.gotoLevel(t)}),a(`[data-win]`,()=>e.winNow()),a(`[data-lose]`,()=>e.loseNow()),a(`[data-result]`,()=>e.showResult()),a(`[data-loading]`,()=>e.showLoading());let o=n.querySelector(`[data-cheer]`);a(`[data-cheer]`,()=>{o.textContent=`过关音：${e.cycleCheerSound()}`}),a(`[data-refill]`,()=>e.refillTools());let s=n.querySelector(`[data-textures]`);a(`[data-textures]`,()=>{let t=e.toggleTextures();s.textContent=`美术资源：${t?`开`:`关`}`});let c=n.querySelector(`[data-backdrop]`);a(`[data-backdrop]`,()=>{c.textContent=`背景纹理：${e.cycleBackdrop()}`}),a(`[data-wild-1]`,()=>e.giveWild(`dot`)),a(`[data-wild-2]`,()=>e.giveWild(`h2`)),a(`[data-wild-4]`,()=>e.giveWild(`square2`));let l=n.querySelector(`[data-bomb]`);a(`[data-bomb]`,()=>{l.textContent=`常备炸弹：${e.toggleInfiniteBombs()?`开`:`关`}`}),a(`[data-crate]`,()=>e.spawnCrate()),a(`[data-score]`,()=>e.addScore(1e3)),a(`[data-clear]`,()=>e.clearBoard()),a(`[data-boss]`,()=>e.showBoss()),a(`[data-daily]`,()=>e.startDaily()),a(`[data-endless]`,()=>e.startEndless()),a(`[data-reset]`,()=>e.resetProgress())}export{e as mountDevPanel};