import React from 'react'

const Header = () => {
  return (
    <div className="Header" style={{width:"100%", height: 91, paddingLeft: 0, paddingRight: 175, paddingTop:25, justifyContent: 'center', alignItems: 'flex-start', position:'relative', gap: 684, display: 'inline-flex', overflow:"hidden"}}>
      <div style={{width: 2180.81, height: 983.01, left: 1891.31, top: -200, position: 'absolute', transform: 'rotate(150.06deg)', transformOrigin: '0 0', background: 'linear-gradient(180deg, #7A3199 0%, #161033 100%)'}}></div>
      <div className="Logo" style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', position:'relative'}}>Logo</div>
      <div className="Frame1" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 107, display: 'inline-flex'}}>
        <a className="About" href="#about" style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word',  position:'relative', }}>About</a>
        <a className="Pricing" href='' style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word',  position:'relative', }}>Pricing</a>
        <a className="Review" href='' style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word',  position:'relative',}}>Review</a>
      </div>
    </div>
  )
}

export default Header;
