
//components
import Header from './header/Header';
import Frame3 from './frame3/Frame3';
import Frame2 from './frame2/Frame2';
import Frame78 from './frame78/Frame78';
import Frame86 from './frame86/Frame86';
import Frame87 from './frame87/Frame87';


function App() {
  return (
            <div className="App" style={{width:"100%", height:"auto", overflow:"hidden"}}>
               <Header />
                <br />
                <Frame3 />
                <img style={{width: 440, height: 340, left: 1070, top: 620, position: 'absolute', opacity:'20%'}} src="https://s3-alpha-sig.figma.com/img/9738/ac24/05c02e5064e082adad00c1c5678eea17?Expires=1688947200&Signature=jDzWJNYsRJ6twCK-18W-QT49s2jOZn8GR5GLcMIAAHyPmiEE5LV5GlRm9A7anyVeP9EAp5~n~zzUw-5jkkOBHe3UsPu4kMwVhFTMvR~CawdGBGx-Q9dGiUR13qLXb24wnffmh8s-oufaJsx91OTFLIYPCaYcB0VbSIwctqfvlXkmvPwxPi-iCRGurEHm1gB3YY8uKjU3MSQ0Ro~RXgUyNzVrKXTvU711RRfY8LQebKGOCc1Lsf5JuIfzpaDovH7-tVaDLfTkgcxj1aB5h72YxyAPQETI-33~xMmwDdpUSZXwfqm2hdAO4IpCFABN7QgC8Z2EB9vf2D5uy3mXIIX6MA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                <Frame2 />
                <br />
                <Frame78 />
                <br />
                <Frame86 />
                <br />
                <Frame87 />
            </div>
  );
}

export default App;
