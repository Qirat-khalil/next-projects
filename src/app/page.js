import Image from "next/image";
import Header from "./component/header/Header";
import FirstSection from "./component/firstSection/FirstSection";
import Secondsec from "./component/secondSec/Secondsec";
import Cards from "./component/cardsection/Cards";
import Thirdsec from "./component/thirdsec/Thirdsec";


export default function Home() {
  return (
  <>
 <FirstSection/>
 <Cards/>
 <Secondsec/>
 <Thirdsec/>
  </>
  );
}
