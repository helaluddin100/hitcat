import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

function Rarity() {
  return (
    <>
      {/*-------------- video for change -------------------*/}

      <div className="hero">
        <div className="hero-content">
          <video autoPlay={"autoplay"} loop muted className="video-gifs">
            <source
              src="https://res.cloudinary.com/dfvlj1rc7/video/upload/v1649000890/Hit%20Cat%20/Comp_1_behtff.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {/* ==================worning================= */}

      <section>
        <div className="worning cpy-8">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-m-title md-none">
                  <img src="assets/img/worning.webp" alt="Warning" />
                </div>
                <div className="sec-title l-none">
                  <img src="assets/img/worning-title.webp" alt="Title" />
                </div>
              </div>
            </div>
            <div className="sec-inner cpt-5">
              <div className="row">
                <div className="col-lg-7 mb-4">
                  <div className="sec-inner-content ">
                    <p>
                      As a descendent of the Cats Clan with long history, you
                      must be thinking… How the heck did I make it here?
                    </p>
                    <p>
                      Many furballs and dust paws ago, HIT, short for Heightened
                      Intelligent Terrestrial, is the last of its kind left on a
                      distant planet out of the milky way. Being the last living
                      alien on the planet, HIT is more than a little lonely.
                      Until HIT spots Earth on a scanning mission. Smitten by
                      the planet’s beauty and the living creatures roaming it,
                      HIT decides to send probes with its DNA all over to Earth,
                      thus giving life to what we know today as Cats.
                    </p>
                    <p>
                      You’ve made it here, the first sign of HIT was seen not
                      long ago on the sub-reddit threads, remnants of HIT
                      itself, now turned into a special message of positivity
                      spread all around the web for Planet Earth. Why else do
                      you think cats are so loved throughout Earth’s history
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 mb-4">
                  <div className="inner-img">
                    <video
                      autoPlay={"autoplay"}
                      loop
                      muted
                      className="video-gifs"
                    >
                      <source
                        src="https://res.cloudinary.com/dfvlj1rc7/video/upload/v1649001024/Hit%20Cat%20/Comp_1_oarkey.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================worning================= */}
      {/* ================whait is hit============== */}
      <section>
        <div className="whait-is-hit cpb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-md-5">
                    <div className="hit-img">
                      <img src="assets/img/hit-min.webp" alt="Hit Min" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="hit-content">
                      <div className="hit-min-text">
                        <p>HIT? </p>
                        <p> H - Hang</p>
                        <p> I - In</p>
                        <p>T - There</p>
                      </div>
                      <div className="hit-des">
                        <p>
                          HIT? H - Hang I - In T - There Every once in a while,
                          you might be feeling down, defeated, overwhelmed by
                          the pace of life.
                        </p>
                        <p>
                          Cats are ultra sensitive and we feel everything. As an
                          able and loyal HIT-Cat descendent, we know throughout
                          history to hang in there and to stay united, even when
                          you’re all alone, hard times will pass.
                        </p>
                        <p>
                          Leaving behind the bad times and always striding
                          forward. No bs. No negativity. Always looking out for
                          each other. That’s what cats do.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================whait is hit end============== */}

      {/* =====================marque=================== */}
      <div className="animate-m">
        <div className="marque-inner">
          <div className="marque-A">
            <Marquee>
              HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
              HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
              HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT{" "}
              HIT CAT
            </Marquee>
          </div>

          <div className="marque-B">
            <Marquee direction="right">
              HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
              HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
              HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT{" "}
              HIT CAT
            </Marquee>
          </div>
        </div>
      </div>
      {/* ===============marque====================== */}
      {/* =============page ban========== */}
      <div className="page-banner cs-page-banner-1">
        <div className="banner-img">
          {/* <img src="https://res.cloudinary.com/dfvlj1rc7/video/upload/v1649000890/Hit%20Cat%20/Comp_1_behtff.mp4" alt="" /> */}
        </div>
      </div>
      {/* =============page ban========== */}

      {/* ==============rarity================ */}
      <section>
        <div className="rarity cpy-5">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <img src="assets/img/rarity.webp" alt="Rarity" />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="rarity-content ">
                  <p>
                    Ever wondered what’s in each HIT cat’s DNA? HIT cats have 7
                    different traits that make them unique you’ll find that the
                    rarity level of the traits will be displayed on the NFT
                    itself with the number of paws.
                    <br /> <br /> The higher the number of paw ranking, the more
                    paw-tastic the HIT Cat is! What’s there not to love? With
                    the &nbsp;
                    <a className="dev-link">
                      <Link to="/rarity">upfront rarity system</Link>
                    </a>
                    , gone are the days of using rarity tools to check the rank
                    m-m-meow, its encrypted into the DNA of every single cat.{" "}
                    <br /> <br /> Are you ready to step into the world of HIT
                    Cats?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rarity-icon-area">
            <img src="assets/img/rarity-icon.svg" alt="" />
          </div>
        </div>
      </section>

      {/* ==============rarity end================ */}
      {/* =================collection=============== */}
      <section>
        <div className="collection cpb-6">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <img
                  src="assets/img/collection-title.webp"
                  className="md-none"
                  alt="Title"
                />
                <img
                  src="assets/img/collection-m.webp"
                  alt="Collection"
                  className="l-none"
                />
                <h3 className="m-title">
                  The collection is structured as followed
                </h3>
              </div>
            </div>
            <div className="collection-table">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="table-responsive">
                    <table class="table table-bordered  table-striped table-color">
                      <thead class="thead-dar collection-tableh-head">
                        <tr>
                          <th scope="col">Tier</th>
                          <th scope="col">%quantity</th>
                          <th scope="col">Overall card power</th>
                        </tr>
                      </thead>
                      <tbody className="collection-table-body {">
                        <tr className="bg-a">
                          <td>Legendary</td>
                          <td>4.34%</td>
                          <td>18.5 - 20.5</td>
                        </tr>
                        <tr className="bg-b">
                          <td>Epic</td>
                          <td>10.70%</td>
                          <td>16.0 - 18.0</td>
                        </tr>
                        <tr
                          className="bg-a
                        "
                        >
                          <td>Rare</td>
                          <td>10.36%</td>
                          <td>15.5</td>
                        </tr>
                        <tr className="bg-b">
                          <td>Common</td>
                          <td>65.38%</td>
                          <td>7.0-15.0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="collection-content">
                  <h3 className="m-title">
                    And a group of Mythic cats, aka the OG11, to be hunted for.
                    <br /> <br /> The rarities will be in line with the
                    pawtility. Stay tuned. COMING SOON
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============collection=============== */}
      {/* ============gellory============== */}
      <section>
        <div className="gallery cpy-5">
          <div className="gallery-inner">
            <div className="section-title">
              <img src="assets/img/gelloery.webp" alt="Gallery" />
            </div>
            <div className="gallery-img mt-5 cs-page-banner-2">
              <video autoPlay={"autoplay"} className="w-100" loop muted>
                <source
                  src="https://res.cloudinary.com/dsyggvyrb/video/upload/v1649539308/video/Gallery_MP4_n0seos.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* =============gellory================== */}
      {/* ================team==================== */}
      <section>
        <div className="trait cpy-8">
          <div className="container">
            <div className="row">
              <div class="section-title">
                <img src="assets/img/team.webp" alt="Team" />
              </div>
              <div className="">
                <p className="centered-txt">
                  The team? <br /> We are just 4 street cats staying up all
                  night exploring how to combine art, music and anything
                  creative with community. We are pretty ambitious about
                  building an experience for every cat that comes on board. Join
                  us in our quest to spread paw-sitivity on a scale Planet Earth
                  has yet to see.
                  <br /> All catwalks of life are welcome here.
                </p>
              </div>
            </div>
            <div className="cat-list">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="cat-item">
                    <div className="cat-img">
                      <img src="assets/img/team-1.webp" alt="Team" />
                    </div>
                    <div className="team-info">
                      <div className="name">
                        <h3>Meow In There - Artist</h3>
                      </div>
                      <p>
                        Art Resident artist cat who have been practicing
                        multi-media arts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="cat-item">
                    <div className="cat-img">
                      <img src="assets/img/team-2.webp" alt="Team" />
                    </div>
                    <div className="team-info">
                      <div className="name">
                        <h3>Cat Gambit - Tech & Marketing</h3>
                      </div>
                      <p>
                        Night-mugging cat with years of marketing in the
                        creative industry
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="cat-item">
                    <div className="cat-img">
                      <img src="assets/img/team-3.webp" alt="Team" />
                    </div>
                    <div className="team-info">
                      <div className="name">
                        <h3>Sphynx - Business</h3>
                      </div>
                      <p>
                        Strategy and Business Highly focused and curious cat
                        with intensive track record in business management.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="cat-item">
                    <div className="cat-img">
                      <img src="assets/img/team-4.webp" alt="Team" />
                    </div>
                    <div className="team-info">
                      <div className="name">
                        <h3>Neko1 - Community</h3>
                      </div>
                      <p>
                        Friendly and committed cat who believes in
                        community-centric projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="trait-3">
            <img src="assets/img/item-3.webp" alt="Item" />
          </div>
          <div className="trait-1">
            <img src="assets/img/item-1.webp" alt="Item" />
          </div>
          <div className="trait-1-alt">
            <img src="assets/img/item-1-alt.webp" alt="Item" />
          </div>
        </div>
      </section>
      {/* =================speacial=============== */}
      <section>
        <div className="speacial">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <img
                  src="assets/img/spacial-section.webp"
                  className="md-none"
                  alt="Special"
                />
                <img
                  src="assets/img/spacial-section.webp"
                  className="l-none"
                  alt="Special"
                />
                <h3 className="l-title">
                  Rarest tiers only. <br /> How paw-some is that?
                </h3>
              </div>
            </div>
          </div>

          {/*-------------- video for change -------------------*/}
          <div className="hero">
            <div className="hero-content">
              <video autoPlay={"autoplay"} loop muted className="video-gifs">
                <source
                  src="https://res.cloudinary.com/dduk9n8q3/video/upload/v1649014167/Animated_Banner_GIF_2_urgflp.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* ============speacial=============== */}
      {/* ==============footer================= */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-content">
              <a href="./" className="logo-link">
                <img src="assets/img/logo.png" alt="Hit Cat" />
              </a>

              <div className="footer-social">
                <ul className="social-ul">
                  <li>
                    <a
                      href="https://twitter.com/hitcatsnft"
                      className="social-link"
                    >
                      <svg
                        width="39"
                        height="39"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.7363 0.691406C9.24392 0.691406 0.736328 9.199 0.736328 19.6914C0.736328 30.1838 9.24392 38.6914 19.7363 38.6914C30.2287 38.6914 38.7363 30.1838 38.7363 19.6914C38.7363 9.199 30.2287 0.691406 19.7363 0.691406ZM28.8674 15.0135C28.8801 15.2128 28.8801 15.4206 28.8801 15.6242C28.8801 21.8501 24.1386 29.0218 15.4741 29.0218C12.8022 29.0218 10.3254 28.2456 8.23878 26.9097C8.62048 26.9521 8.98521 26.9691 9.37539 26.9691C11.5807 26.9691 13.608 26.2227 15.2238 24.9588C13.1542 24.9164 11.4153 23.5593 10.8216 21.6932C11.5468 21.7992 12.1999 21.7992 12.9464 21.6084C11.8807 21.3919 10.9229 20.8131 10.2355 19.9704C9.54825 19.1277 9.17388 18.073 9.17606 16.9856V16.9262C9.7995 17.2782 10.5332 17.4945 11.3008 17.5242C10.6555 17.0942 10.1263 16.5115 9.7601 15.8279C9.3939 15.1443 9.20203 14.381 9.20151 13.6055C9.20151 12.7276 9.43052 11.926 9.84191 11.2305C11.0248 12.6866 12.5008 13.8775 14.174 14.7258C15.8473 15.5741 17.6803 16.0609 19.554 16.1544C18.8881 12.9523 21.2801 10.361 24.1555 10.361C25.5127 10.361 26.7341 10.9294 27.595 11.8454C28.6595 11.6461 29.6774 11.2474 30.585 10.7131C30.233 11.803 29.495 12.7233 28.5153 13.3044C29.4653 13.2026 30.3814 12.9396 31.2296 12.5706C30.5892 13.5122 29.7877 14.3477 28.8674 15.0135V15.0135Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <svg
                        width="40"
                        height="39"
                        viewBox="0 0 40 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M20.1345 38.6909C30.8187 38.6909 39.48 30.0296 39.48 19.3455C39.48 8.66125 30.8187 0 20.1345 0C9.45032 0 0.789062 8.66125 0.789062 19.3455C0.789062 30.0296 9.45032 38.6909 20.1345 38.6909ZM14.7129 6.24535C16.1156 6.18409 16.5645 6.16797 20.1344 6.16797H20.1311C23.706 6.16797 24.1516 6.18409 25.5559 6.24535C26.9552 6.30822 27.9122 6.52586 28.7509 6.84506C29.6289 7.16852 30.4242 7.67639 31.0809 8.33305C31.7501 8.97737 32.268 9.75691 32.5987 10.6174C32.9226 11.4364 33.1446 12.3746 33.2104 13.7466C33.2729 15.1233 33.2893 15.5618 33.2893 19.0649C33.2893 22.5681 33.2729 23.0066 33.2104 24.3817C33.1446 25.7552 32.9226 26.6919 32.5987 27.5125C32.2616 28.3604 31.8127 29.0794 31.0809 29.7968C30.4245 30.4531 29.6299 30.9609 28.7525 31.2848C27.9155 31.604 26.9569 31.82 25.5575 31.8845C24.1532 31.9458 23.7076 31.9619 20.1344 31.9619C16.5612 31.9619 16.1139 31.9458 14.7096 31.8845C13.3086 31.8217 12.3549 31.604 11.5163 31.2848C10.6514 30.9559 9.91797 30.5142 9.18787 29.7968C8.45613 29.0794 8.00722 28.3604 7.67013 27.5125C7.34454 26.6919 7.1242 25.7552 7.05842 24.3817C6.99594 23.0066 6.97949 22.5681 6.97949 19.0665C6.97949 15.5618 6.99594 15.1233 7.05842 13.7449C7.12255 12.3746 7.34454 11.4364 7.67013 10.6174C8.00082 9.75694 8.51874 8.97741 9.18787 8.33305C9.84478 7.67663 10.64 7.1688 11.5179 6.84506C12.3549 6.52586 13.3103 6.30984 14.7129 6.24535ZM20.136 8.49265H18.9554V8.48942C16.5036 8.49104 16.0334 8.50716 14.8198 8.56197C13.5372 8.62001 12.8416 8.82958 12.3779 9.00691C11.7629 9.24067 11.3255 9.51957 10.8651 9.97096C10.4047 10.4224 10.1186 10.8528 9.88015 11.4541C9.69927 11.9087 9.4855 12.5923 9.4263 13.8497C9.36382 15.2087 9.35066 15.615 9.35066 19.0585C9.35066 22.5036 9.36382 22.9115 9.4263 24.2705C9.48386 25.5279 9.69927 26.2115 9.8785 26.6645C10.0902 27.2249 10.4273 27.7318 10.8651 28.1476C11.2896 28.5758 11.8065 28.9052 12.3779 29.1117C12.8416 29.289 13.5372 29.4986 14.8198 29.5566C16.206 29.6179 16.6237 29.6324 20.136 29.6324C23.6484 29.6324 24.0644 29.6179 25.4506 29.5566C26.7349 29.4986 27.4321 29.289 27.8925 29.1117C28.5075 28.8779 28.9449 28.599 29.4053 28.1476C29.8428 27.7324 30.1794 27.2261 30.3903 26.6661C30.5695 26.2115 30.7849 25.5295 30.8425 24.2721C30.9066 22.9131 30.9198 22.5036 30.9198 19.0617C30.9198 15.6198 30.9066 15.212 30.8425 13.853C30.7849 12.5955 30.5712 11.912 30.3903 11.459C30.1519 10.856 29.8674 10.4272 29.407 9.9758C28.9465 9.52441 28.5075 9.2439 27.8941 9.01014C27.4304 8.83442 26.7332 8.62323 25.4506 8.5668C24.0644 8.50393 23.6484 8.49265 20.136 8.49265ZM26.5534 10.7514C26.7449 10.6736 26.9502 10.6335 27.1575 10.6335C27.5761 10.6335 27.9777 10.7966 28.2737 11.0868C28.5697 11.3771 28.7361 11.7707 28.7361 12.1812C28.7361 12.5916 28.5697 12.9853 28.2737 13.2755C27.9777 13.5658 27.5761 13.7288 27.1575 13.7288C26.9502 13.7288 26.7449 13.6888 26.5534 13.611C26.3619 13.5332 26.1878 13.4192 26.0412 13.2755C25.8947 13.1318 25.7784 12.9612 25.699 12.7734C25.6197 12.5857 25.5789 12.3844 25.5789 12.1812C25.5789 11.9779 25.6197 11.7767 25.699 11.5889C25.7784 11.4012 25.8947 11.2305 26.0412 11.0868C26.1878 10.9431 26.3619 10.8291 26.5534 10.7514ZM17.5182 12.9165C18.3501 12.5898 19.24 12.4286 20.136 12.4423C21.9096 12.4695 23.6011 13.1792 24.8455 14.4184C26.0899 15.6576 26.7873 17.3268 26.7873 19.0657C26.7873 20.8047 26.0899 22.4739 24.8455 23.7131C23.6011 24.9523 21.9096 25.662 20.136 25.6891C19.24 25.7029 18.3501 25.5417 17.5182 25.215C16.6863 24.8882 15.929 24.4026 15.2904 23.7862C14.6517 23.1698 14.1446 22.435 13.7984 21.6246C13.4522 20.8142 13.274 19.9443 13.274 19.0657C13.274 18.1871 13.4522 17.3173 13.7984 16.5069C14.1446 15.6965 14.6517 14.9617 15.2904 14.3453C15.929 13.7289 16.6863 13.2432 17.5182 12.9165ZM23.2371 16.0247C22.4146 15.2184 21.2992 14.7654 20.136 14.7654C18.9729 14.7654 17.8575 15.2184 17.035 16.0247C16.2126 16.831 15.7505 17.9246 15.7505 19.0649C15.7505 20.2052 16.2126 21.2988 17.035 22.1052C17.8575 22.9115 18.9729 23.3645 20.136 23.3645C21.2992 23.3645 22.4146 22.9115 23.2371 22.1052C24.0595 21.2988 24.5216 20.2052 24.5216 19.0649C24.5216 17.9246 24.0595 16.831 23.2371 16.0247Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" className="social-link">
                      <svg
                        width="39"
                        height="39"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.1543 38.1681C29.6936 38.1681 38.2384 29.6233 38.2384 19.084C38.2384 8.5448 29.6958 0 19.1543 0C8.61511 0 0.0703125 8.5448 0.0703125 19.084C0.0703125 29.6233 8.61511 38.1681 19.1543 38.1681ZM14.0268 25.9813C17.6919 25.9813 20.663 23.0102 20.663 19.3452C20.663 15.6801 17.6919 12.709 14.0268 12.709C10.3617 12.709 7.39062 15.6801 7.39062 19.3452C7.39062 23.0102 10.3617 25.9813 14.0268 25.9813ZM26.8567 19.3451C26.8567 23.0102 25.6683 25.9813 24.2023 25.9813C22.7362 25.9813 21.5478 23.0102 21.5478 19.3451C21.5478 15.6801 22.7362 12.709 24.2023 12.709C25.6683 12.709 26.8567 15.6801 26.8567 19.3451ZM29.0684 25.9813C29.8015 25.9813 30.3957 23.0102 30.3957 19.3452C30.3957 15.6801 29.8015 12.709 29.0684 12.709C28.3354 12.709 27.7412 15.6801 27.7412 19.3452C27.7412 23.0102 28.3354 25.9813 29.0684 25.9813Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li> */}
                </ul>
              </div>
              <p className="footer-des">
                Brought To You By
                <a href="https://www.nftconstructer.com/" className="dev-link">
                  <img
                    src="assets/img/creator.svg"
                    alt=""
                    className="nft-logo"
                  />
                  NFT Constructer
                </a>
              </p>
              <p className="footer-des">HITCats 2022. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
      {/* ==============footer end================= */}
      {/* =====================marque=================== */}
      <div className="animate-m">
        <div className="marque-inner">
          <div className="marque-A">
            <Marquee>
              HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
              HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
              HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT{" "}
              HIT CAT
            </Marquee>
          </div>

          <div className="marque-B">
            <Marquee direction="right">
              HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
              HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
              HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT{" "}
              HIT CAT
            </Marquee>
          </div>
        </div>
      </div>
      {/* ===============marque====================== */}
    </>
  );
}

export default Rarity;
