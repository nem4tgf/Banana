import logo from './logo.svg';
import './App.css';
import Product from './product';
import './style.css'

function App() {
  return (
  <div>
   <h1>Product</h1>
       <div className="App">
        <Product
          img="https://scontent.xx.fbcdn.net/v/t39.30808-6/396719544_902016151657610_2035066709036702823_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEeFTlfz2aBRJRjve4s9nmhD8cSknIyVgkPxxKScjJWCXfULIhyMIRnRMIaCLLeziWn5NM7kwqXlX471z_MwOm8&_nc_ohc=TTzFa7hxtZMAX_QA80T&_nc_ht=scontent.fhan3-3.fna&oh=00_AfDSNMHrMH2pMjioPKGyFRl73tkb_mM4jPlgm4PylOsNRw&oe=6553E607&_nc_fr=fhan3c03"
          name="New Figure"
          desc="The new product of bi ya"
          price="$200"/>
          
        
        
        <Product 
        img="https://product.hstatic.net/1000231532/product/shop_gunpla_ban_gundam_aerial_rebuild_hg_gia_re_182470e75dbc468dbb3e7652233ec83d_master.jpg"
          name="New Gunpla"
          desc="The new product of Bandai"
          price="$200"/>
          
          

          <Product
          img="https://www.torontogundam.ca/cdn/shop/products/Metalbuild-DragonScaleGurenType-08ElementsSeitenCodeGeassLelouchoftheRebellionR2-09_1210x1800_0d4a2f17-1416-454a-b052-491ef88fc5c8_1024x1024.webp?v=1681959531"
          name="New GunplaCG"
          desc="The new product of Bandai"
          price="$200"/>
          
          
      </div>
  </div>
  );
}

export default App;