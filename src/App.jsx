import { TiTick } from "react-icons/ti"
import { RxCross2 } from "react-icons/rx";
import Post from "./Post";


function App() {

   const icontick=<TiTick />
   const iconcross=<RxCross2 />
  

  return (
    <section id="pricing">
      
      <div className="row">
        <Post
          name="FREE"
          icontick={icontick}
          iconcross={iconcross}
          head="$0/month"
          p1={<>{icontick} Single User</>}
          p2="50GB Storage"
          p3="Unlimited Public Projects"
          p4="Community Access"
          p5="Unlimited Private Projects"
          p6="Dedicated Phone Support"
          p7="Free Subdomain"
          p8="Monthly Status Report"
          className="pricing-column col-lg-4 col-md-6 post1">
        </Post>

        <Post
          name="PLUS"
          p1="5 User"
          p2="50GB Storage"
          p3="Unlimited Public Projects"
          p4="Community Access"
          p5="Unlimited Private Projects"
          p6="Dedicated Phone Support"
          p7="Free Subdomain"
          p8="Monthly Status Report"
          head="$9/month"
          className="pricing-column col-lg-4 col-md-6 post1">
        </Post>

        <Post
          name="PRO"
          p1={<>{icontick} Single User</>}
          p2={<>{icontick}"50GB Storage"</>}
          p3={<>{icontick}"Unlimited Public Projects"</>}
          p4={<>{icontick}"Community Access"</>}
          p5={<>{icontick}"Unlimited Private Projects"</>}
          p6={<>{icontick}"Dedicated Phone Support"</>}
          p7={<>{icontick}"Free Subdomain"</>}
          p8={<>{icontick}"Monthly Status Report"</>}
          head={<>{icontick}"$49/month"</>}
          className="pricing-column col-lg-4 post1">
        </Post>
      </div>
   </section>
  );
}

export default App;
