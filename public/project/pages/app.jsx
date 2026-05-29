/* global React */
// Shared page app shell — loads tweaks panel, theme/type state, renders the page component

function SPApp({ pageComponent, activeNav }) {
  const PageComp = window[pageComponent];
  const { TweaksPanel, useTweaks, TweakSection, TweakRadio } = window;

  const [tweaks, setTweak] = useTweaks(/*EDITMODE-BEGIN*/{
    "themeKey": "classic",
    "typeKey": "acidGaraHelv"
  }/*EDITMODE-END*/);

  const themeKeys = Object.keys(window.SP_THEMES);
  const typeKeys = Object.keys(window.SP_TYPE);

  return (
    <>
      <PageComp themeKey={tweaks.themeKey} typeKey={tweaks.typeKey} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Color theme" />
        <TweakRadio
          label="Palette"
          value={tweaks.themeKey}
          options={themeKeys.map(k => ({ value: k, label: window.SP_THEMES[k].name }))}
          onChange={v => setTweak('themeKey', v)}
        />
        <div style={{ display:'flex', gap:6, margin:'8px 10px 14px' }}>
          {window.SP_THEMES[tweaks.themeKey].pastels.map((c,i) => (
            <div key={i} style={{ width:22, height:22, borderRadius:6, background:c, border:'1px solid rgba(0,0,0,0.2)' }}></div>
          ))}
          <div style={{ width:22, height:22, borderRadius:6, background:window.SP_THEMES[tweaks.themeKey].popA, border:'1px solid rgba(0,0,0,0.2)' }}></div>
          <div style={{ width:22, height:22, borderRadius:6, background:window.SP_THEMES[tweaks.themeKey].popB, border:'1px solid rgba(0,0,0,0.2)' }}></div>
        </div>

        <TweakSection label="Typography pairing" />
        <TweakRadio
          label="Fonts"
          value={tweaks.typeKey}
          options={typeKeys.map(k => ({ value: k, label: window.SP_TYPE[k].name }))}
          onChange={v => setTweak('typeKey', v)}
        />
      </TweaksPanel>
    </>
  );
}

window.SPApp = SPApp;
