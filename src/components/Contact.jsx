export default function Contact() {
  return (
    <section className="section">
      <h2>Contact Us</h2>
      <p>📍 Visit us for pure and healthy food</p>
      <div className="map">
        <iframe
          title="Shuddhi Gram Nepal Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.715687615867!2d85.3054821!3d27.6814876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190007dd9c33%3A0x56dc45fd8a43e1f9!2sShuddhi%20Gram%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}