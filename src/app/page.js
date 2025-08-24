import FirstSection from "./component/firstSection/FirstSection";
import Secondsec from "./component/secondsec/Secondsec";
import Thirdsec from "./component/thirdsec/Thirdsec";
import Forth from "./component/forthsec/Forth";
import Cards from "./component/cardsection/Cards";
import Firstprod from "./component/firstprod/Firstprod";
import Products from "./component/productdata/Products";   


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
