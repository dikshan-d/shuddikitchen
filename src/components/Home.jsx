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
              Best
            </p>
          </div>


        </div>
       </section>
       


  </>
    

  );
}