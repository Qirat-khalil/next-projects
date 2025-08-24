import FirstSection from "./component/firstSection/FirstSection";
import Thirdsec from "./component/thirdsec/Thirdsec";
import Forth from "./component/forthsec/Forth";
import Cards from "./component/cardsection/Cards";
import Firstprod from "./component/firstprod/Firstprod";
import Products from "./component/productdata/Products";   
import Secondsec from "./component/secondSec/Secondsec";


export default function Home() {
  return (
    <>
      <FirstSection />
      <Firstprod />
      {/* <Cards title="Our Products" data={Products} /> */}
      <Secondsec />
      <Thirdsec />
      <Forth />
    </>
  );
}
