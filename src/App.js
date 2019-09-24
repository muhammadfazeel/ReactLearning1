import React from "react";
import "./App.css";
import Datainfo from "./Data/data";
import MapJsx from "./components/mapfunction";
//import Component from "./components/component1";
//import TimeDay from "./components/component2";
import Contact from "./components/contact";

function App() {
  const products = [
    {
      id: 1,
      name: "Alpha"
    },
    {
      id: 2,
      name: "Beta"
    },
    {
      id: 3,
      name: "Gema"
    }
  ];
  
  // const productData = products.map(proitem => (
  //   <MapJsx key={proitem.id} product={proitem} />
  // ));
  // console.log(productData);
  return (
    <div className="card-group">
      <Contact
        contact={{
          name: "Abdul Wahab",
          imgUrl:
            "https://scontent.fisb6-1.fna.fbcdn.net/v/t1.0-9/36003211_2183328325232492_8170190423164190720_n.jpg?_nc_cat=103&_nc_oc=AQnK-rYEGA6KVi3rzbZjFYtMxpnsMtaeCWSUG18gyh3D6Yrsith8Qzr7OFx_ldEet_0&_nc_ht=scontent.fisb6-1.fna&oh=0918378ffc8e28ce6002e41aac07a4d4&oe=5E3740B2",
          phone: "0342-9876541",
          email: "wahab@gmail.com"
        }}
      />
      <Contact
        contact={{
          name: "Zohaib Shafiq",
          imgUrl:
            "https://scontent.fisb6-1.fna.fbcdn.net/v/t1.0-9/14937366_1010209059106895_781709503922283075_n.jpg?_nc_cat=102&_nc_oc=AQnxtFWkh3ktwO2v9p046kI8aZijEoNulj3fzHWFfpyRCDPAVuwO6SbXy634X7jejgY&_nc_ht=scontent.fisb6-1.fna&oh=1b4407de13b26f6e769a435dd293e5c4&oe=5DF6F859",
          phone: "0342-4521456",
          email: "Zohaib@gmail.com"
        }}
      />
      <Contact
        contact={{
          name: "Adeel Sarwar",
          imgUrl:
            "https://scontent.fisb6-1.fna.fbcdn.net/v/t1.0-9/54279232_2400618553315954_7358950136937971712_n.jpg?_nc_cat=101&_nc_oc=AQnWkOGZuWSHaFOflQXrWgi4x4HwQ9TTNfbGfB5ld_eMiDUCrfmJT5juR8ywNYDSe2g&_nc_ht=scontent.fisb6-1.fna&oh=7cc0e2a1ca5be02c6f413c9687b8af31&oe=5E341CA7",
          phone: "03245495146",
          email: "Adeel@gmail.com"
        }}
      />
      <Contact
        contact={{
          name: "Jamal Khan Tanoli",
          imgUrl:
            "https://scontent.fisb6-1.fna.fbcdn.net/v/t1.0-9/54435562_2273501912920529_3382929392966565888_n.jpg?_nc_cat=108&_nc_oc=AQnqmRkyINJxr_6nTurI1URuG6rcojgaFiGtTBhz1zDMGEpW9xdFpISmcIvJ1lbGOAA&_nc_ht=scontent.fisb6-1.fna&oh=6e01203009205912aae7429ca2ac2f18&oe=5DF2697B",
          phone: "0342-5495747",
          email: "jimikhan@gmail.com"
        }}
      />
      {/* {productData} */}
    </div>
  );
}

export default App;
