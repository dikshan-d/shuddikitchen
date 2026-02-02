
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      {/* Home Section */}
    
      <section className="home">
      <img src="/shuddi.png" alt="Shuddhi's Ayurvedic Kitchen " className="home-logo" />
      <div className="home-txt">
        <h1>WELCOME TO SHUDDI'S AYUVEDIC KITCHEN</h1>

      </div>  
      
      
       </section>
       {/* Flavors Section*/}
       <section>
        <div className="flavors">
          <div className="flavors-left">
            <h2>FLAVORS<br />OF SHUDDI'S</h2>
            <p>
              Rooted in Ayurveda, crafted with care.
              Shuddi Gram brings you authentic flavors made from pure, natural ingredients for mindful eating.
            </p>
          </div>
          <div className="flavors-right">
            <div className="flavor-card">
              <img src="appetizers.png" alt="Appetizers"/>
              <span>Millet Based Food</span>
            </div>
            <div className="flavor-card">
              <img src="Salad.png" alt="salad"/>
              <span>Healthy Salad</span>

            </div>
            
            <div className="flavor-card">
              <img src="tea.jpg" alt="tea"/>
              <span>Ayruvedic Tea</span>

            </div>
            

          </div>
          
          


        </div>
       </section>
       


  </>
    

  );
}