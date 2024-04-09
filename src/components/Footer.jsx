const Footer = () => {
  return (
    <div className="  ">
      <section class="subscribe">
        <div class="container">
          <div class="subscribe_con">
            <header class="pricing__dearder">
              <h1 class="head-title subscribe_title">
                Sign up for new Besnik content, updates, surveys & offers.
              </h1>
            </header>

            <div class="subscribe_email_con">
              <input
                type="text"
                placeholder="enter your email here"
                class="subscribe_input"
              />
              <i class="bi bi-envelope-fill"></i>
              <button class="btn subscribe_btn">subscribe</button>
            </div>
          </div>
        </div>
      </section>

      <section class="footer">
        <div class="container">
          <div class="footer__con">
            <div class="footer__one">
              <div class="logo__section">
                <i class="bi bi-sunrise-fill"></i>
                <h3 class="logo">Besnic.</h3>
              </div>
              <p class="peragraph-tag">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                molestias sed minima accusantium illo atque quas adipisci.
              </p>
              <div class="footer__follow__section">
                <div class="footer_socal">
                  <i class="bi bi-facebook"></i>
                </div>
                <div class="footer_socal">
                  <i class="bi bi-instagram"></i>
                </div>
                <div class="footer_socal">
                  <i class="bi bi-twitter"></i>
                </div>
                <div class="footer_socal">
                  <i class="bi bi-linkedin"></i>
                </div>
              </div>
            </div>

            <div class="footer__work_list">
              <h3 class="footer_title">solution</h3>
              <ul class="footer__ul">
                <li class="footer__li peragraph-tag">SEO sercice</li>
                <li class="footer__li peragraph-tag">Socal Media</li>
                <li class="footer__li peragraph-tag">pay-per-click</li>
                <li class="footer__li peragraph-tag">pay-per-click</li>
                <li class="footer__li peragraph-tag">web analytics</li>
                <li class="footer__li peragraph-tag">web development</li>
              </ul>
            </div>

            <div class="footer__work_list">
              <h3 class="footer_title">solution</h3>
              <ul class="footer__ul">
                <li class="footer__li peragraph-tag">virtual marketing</li>
                <li class="footer__li peragraph-tag">email marketing</li>
                <li class="footer__li peragraph-tag">knowledge analytics</li>
                <li class="footer__li peragraph-tag">kiword analytics</li>
                <li class="footer__li peragraph-tag">careear</li>
                <li class="footer__li peragraph-tag">web analytics</li>
                <li class="footer__li peragraph-tag">blog development</li>
              </ul>
            </div>

            <div class="footer__work_list">
              <h3 class="footer_title">solution</h3>
              <ul class="footer__ul">
                <li class="footer__li peragraph-tag">consumer</li>
                <li class="footer__li peragraph-tag">leadirshop</li>
                <li class="footer__li peragraph-tag">content management</li>
                <li class="footer__li peragraph-tag">login</li>
                <li class="footer__li peragraph-tag">pay-per-click</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="container">
          <div class="f_org">
            <p class="peragraph-tag">
              all rights &copy; reserved by your father. 2022
            </p>
            <p class="peragraph-tag">
              <span>privacy & policy</span>
              ||
              <span>tearm and conditions</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
