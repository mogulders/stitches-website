import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__header">
          <p className="section-eyebrow">Our Story</p>
          <h2 className="section-title">Meet the Team Behind the Needle</h2>
        </div>

        <div className="about__grid">
          <div className="about__text-block">
            <p className="about__paragraph">
              Stitches Embroidery is owned and operated by Heidi Wright. Heidi's passion for golf and
              attention to detail grew into a 25-year career as a retail buyer specializing in golf,
              tennis, spa, and resort products for high-end resorts and country clubs. Through that
              experience, she developed a deep respect for people and a strong commitment to meeting
              the needs of guests and members. Her dedication to exceptional customer service inspired
              the creation of Stitches Embroidery, where outstanding service is paired with high-quality
              products and personalized customization. Heidi understands the value of your brand and is
              committed to helping it stand out.
            </p>
            <p className="about__paragraph">
              Marty Monaghan serves as our Sales Manager. He has been active in sales for over 50 years
              in several markets as well as being an avid golfer and billiards aficionado. Whether
              providing uniforms for your crew or fulfilling your retail needs, Heidi and Marty are
              focused on providing the much-needed customer service to allow your business to thrive
              and maximize profits.
            </p>
            <p className="about__paragraph">
              We are a local, north Phoenix based company that strives to keep costs down for clients
              by offering competitive prices, sourcing products locally, and hand-delivering goods
              whenever possible. We also provide the best application for each garment specializing in
              embroidery and direct-to-film transfers. We work with a talented graphic design artist who
              is able to bring ideas to life as well as a digitizer who is able to create dst and emb
              files for those that do not have current embroidery files. We aspire to make this process
              as easy as possible for you.
            </p>
            <div className="about__mission">
              <p className="about__mission-label">Mission Statement</p>
              <p className="about__mission-text">
                "To provide the highest quality embroidery and decoration along with exceptional customer
                service all while being incredibly transparent and honest."
              </p>
            </div>
          </div>

          <div className="about__visual">
            <img src="/SE_logo.PNG" alt="" className="about__logo-watermark" aria-hidden="true" />
            <div className="about__badge">
              <span className="about__badge-dot" />
              Female-Owned AZ Business
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
