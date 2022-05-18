import { faqs, roadmaps } from "./data";
import { useEffect, useState } from "react";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import "aos/dist/aos.css";
import Web3 from "web3";
import Web3Modal from "web3modal";
import Marquee from "react-fast-marquee";
import { useHistory, useLocation } from "react-router-dom";

function Home() {
  AOS.init();
  const [navActive, setNavActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [faqIndex, setFaqIndex] = useState();
  const [pagelocation, setPageLocation] = useState(useLocation().pathname);

  const [activeIndex, setActiveIndex] = useState(1);
  // =====================scrill navber fiexd================
  // ===========================menu toggle===============
  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  console.log(activeIndex);

  // ==========================mint valu ==================
  const [walletConnected, setWalletConnected] = useState(false);

  const [totalMinted, setTotalMinted] = useState(0);
  const [value, setValue] = useState(1);

  // Contract Info
  const CONTRACT_ADDRESS = "0x3a3138E49ac51255eDcB9A3C5cFcf8206160a042";
  const CONTRACT_ABI = [];

  // Connect Wallet
  const connectWallet = async () => {
    if (Web3.givenProvider) {
      const providerOptions = {};

      const web3Modal = new Web3Modal({
        network: "mainnet",
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);

      web3.eth.net.getId();

      const addresses = await web3.eth.getAccounts();
      const address = addresses[0];

      const { ethereum } = window;

      const networkId = await ethereum.request({
        method: "net_version",
      });

      setWalletConnected(true);
    } else {
      window.open(
        `https://metamask.app.link/dapp/hit-cat.netlify.app${pagelocation}`
      );
    }
  };

  useEffect(async () => {
    if (Web3.givenProvider) {
      if (walletConnected) {
        const web3 = new Web3(Web3.givenProvider);
        await Web3.givenProvider.enable();

        const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

        contract.methods
          .totalSupply()
          .call()
          .then((response) => {
            setTotalMinted(response);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [walletConnected]);

  // Mint
  const mint = async () => {
    if (value > 0) {
      if (Web3.givenProvider) {
        connectWallet();

        const web3 = new Web3(Web3.givenProvider);
        await Web3.givenProvider.enable();

        const price = 0 * value;
        var tokens = web3.utils.toWei(price.toString(), "ether");
        var bntokens = web3.utils.toBN(tokens);

        const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

        const addresses = await web3.eth.getAccounts();
        const address = addresses[0];

        contract.methods
          .mint(value)
          .send({ gasLimit: "300000", from: address, value: bntokens })
          .then((nft) => {
            alert(
              "Congratulations you have successfully minted your Wlcked Shark! Check Opensea."
            );

            contract.methods
              .totalSupply()
              .call()
              .then((response) => {
                setTotalMinted(response);
              })
              .catch((err) => {
                console.log(err);
              });

            console.log(nft);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        window.open(
          `https://metamask.app.link/dapp/hit-cat.netlify.app${pagelocation}`
        );
      }
    } else {
      alert("Please choose quantity");
    }
  };
  return (
    <>
      <main>
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
        {/* ==============rarity================ */}
        <section>
          <div className="rarity about cpy-5">
            <div className="container">
              <div className="row">
                <div className="section-title">
                  <img src="assets/img/rarity.webp" alt="Rarity" />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="rarity-content">
                    <Swiper slidesPerView={1}>
                      <SwiperSlide>
                        <p>
                          Ever wondered what’s in each HIT cat’s DNA? HIT cats
                          have 7 different traits that make them unique you’ll
                          find that the rarity level of the traits will be
                          displayed on the NFT itself with the number of paws.
                        </p>
                      </SwiperSlide>

                      <SwiperSlide>
                        <p>
                          The higher the number of paw ranking, the more
                          paw-tastic the HIT Cat is! What’s there not to love?
                        </p>
                      </SwiperSlide>

                      <SwiperSlide>
                        <p>
                          With the upfront rarity system, gone are the days of
                          using rarity tools to check the rank m-m-meow, its
                          encrypted into the DNA of every single cat.
                        </p>
                      </SwiperSlide>
                      <SwiperSlide>
                        <p>Are you ready to step into the world of HIT Cats?</p>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
            <div className="rarity-icon-area">
              <img src="assets/img/rarity-icon.svg" alt="Rarity" />
            </div>
          </div>
        </section>
        {/* ==============rarity end================ */}
        {/* ===================tratis================= */}
        <section>
          <div className="tratis cpy-8">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="tratis-content">
                    <div className="tratis-content-inner">
                      <div className="sec-title">
                        <img src="assets/img/traitis.webp" alt="Traits" />
                      </div>
                      <div className="sec-content">
                        <h4>Know what you are collecting</h4>
                        <p>
                          We are going to share our traits and the rarity system
                          upfront.
                          <br /> <br />
                          There are 7 traits that contribute to the overall card
                          ‘pawer’.
                          <br /> <br />
                          We want to make it characteristic to trading card
                          style, thus, the rarity level of the traits will be
                          displayed on the card itself.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tratis-img">
                    <img src="assets/img/tratis.webp" alt="Traits" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =============tratis=============== */}
        {/* ===========================display=============== */}
        <section>
          <div className="display-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="display-img">
                    <img src="assets/img/display.webp" alt="Display" />
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="display-content">
                    <div className="display-content-inner">
                      <div className="sec-title">
                        <img src="assets/img/display-title.webp" alt="Title" />
                      </div>
                      <div className="sec-content">
                        <p>
                          Each trait has up to 5-paw ranking. To align with our
                          theme, stars are portrayed as cat footprints here.
                        </p>
                        <br />

                        <p>The higher the ranking, the rarer the trait is.</p>
                        <br />

                        <p>
                          An overall card power is the sum of all the rankings
                          of the traits.
                        </p>
                        <br />

                        <p>
                          (Behind the scene: As we aim to create a unique
                          experience for our collectors, this design is no
                          simple NFT collection where layers can just be
                          generated and combined. Our dev team faced several
                          technical challenges and burnt the midnight oils to
                          programme the tagging of traits to its respective
                          rank, and calculate the overall score. Kudos to our
                          developers!)
                        </p>
                        <br />
                        <p>Let’s deep dive into the traits!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================trait=================== */}
        <section>
          <div className="trait cpb-5">
            <div className="container">
              <div className="row">
                <div className="col-xl-8">
                  <div className="tratis-content">
                    <div className="tratis-content-inner">
                      <div className="sec-title md-none">
                        <img src="assets/img/trait.webp" alt="Trait" />
                      </div>
                      <div className="sec-title lg-none">
                        <img src="assets/img/trait.png" alt="Trait" />
                      </div>
                      <div className="sec-content">
                        <p>
                          Here we go with the first trait! Background comes in
                          basic RGB (red - green - blue) colors with a Epic
                          version of pink. The main collection has these 4
                          background colors in the following order of increasing
                          % appearance chance.
                        </p>
                        <br />
                        <p>
                          The 5-paw background color will come with 1/1 cards.
                          Stay tune!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cat-list md-none">
                <div className="grid-layer-5">
                  <div className="gird-item-5">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/26.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="gird-item-5">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/27.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="gird-item-5">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/21.png" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="gird-item-5">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/29.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="gird-item-5">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/cat-4.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cat-table md-none">
                <div className="table-responsive">
                  <table class="table table-bordered border-primary cat-table">
                    <tbody>
                      <tr>
                        <td>red</td>
                        <td>Green</td>
                        <td>Blue</td>
                        <td>pink</td>
                        <td>special</td>
                      </tr>
                      <tr>
                        <td>Warmth, empathy</td>
                        <td>Healing</td>
                        <td>Hope</td>
                        <td>Future Evolvement</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Common</td>
                        <td>Uncommon</td>
                        <td>Rare</td>
                        <td>epic</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="assets/img/rate-1.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                        <td>
                          <img
                            src="assets/img/rate-2.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                        <td>
                          <img
                            src="assets/img/rate-3.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>

                        <td>
                          <img
                            src="assets/img/rate-4.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                        <td>
                          <img
                            src="assets/img/rate-5.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mobile-item">
                <div className="row">
                  <Swiper slidesPerView={1}>
                    <SwiperSlide>
                      <div className="col-md-12 mb-4">
                        <div className="item-inner">
                          <div className="item-img">
                            <img
                              src="assets/img/19.webp"
                              alt="Image not found"
                            />
                          </div>
                          <div className="cat-des">
                            <div className="table-responsive">
                              <table class="table table-bordered border-primary cat-table">
                                <tbody>
                                  <tr>
                                    <td>red</td>
                                  </tr>
                                  <tr>
                                    <td>Warmth, empathy</td>
                                  </tr>
                                  <tr>
                                    <td>Common</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img
                                        src="assets/img/rate-1.webp"
                                        alt=""
                                        className="rate-img"
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="col-md-12 mb-4">
                        <div className="item-inner">
                          <div className="item-img">
                            <img
                              src="assets/img/20.webp"
                              alt="Image not found"
                            />
                          </div>
                          <div className="cat-des">
                            <div className="table-responsive">
                              <table class="table table-bordered border-primary cat-table">
                                <tbody>
                                  <tr>
                                    <td>Green</td>
                                  </tr>
                                  <tr>
                                    <td>Healing</td>
                                  </tr>
                                  <tr>
                                    <td>Uncommon</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img
                                        src="assets/img/rate-2.webp"
                                        alt="Rating"
                                        className="rate-img"
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="col-md-12 mb-4">
                        <div className="item-inner">
                          <div className="item-img">
                            <img
                              src="assets/img/21.png"
                              alt="Image not found"
                            />
                          </div>
                          <div className="cat-des">
                            <div className="table-responsive">
                              <table class="table table-bordered border-primary cat-table">
                                <tbody>
                                  <tr>
                                    <td>Blue</td>
                                  </tr>
                                  <tr>
                                    <td>Hope</td>
                                  </tr>
                                  <tr>
                                    <td>Rare</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img
                                        src="assets/img/rate-3.webp"
                                        alt="Rating"
                                        className="rate-img"
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="col-md-12 mb-4">
                        <div className="item-inner">
                          <div className="item-img">
                            <img
                              src="assets/img/22.webp"
                              alt="Image not found"
                            />
                          </div>
                          <div className="cat-des">
                            <div className="table-responsive">
                              <table class="table table-bordered border-primary cat-table">
                                <tbody>
                                  <tr>
                                    <td>pink</td>
                                  </tr>
                                  <tr>
                                    <td>Future Evolvement </td>
                                  </tr>
                                  <tr>
                                    <td>epic</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img
                                        src="assets/img/rate-4.webp"
                                        alt="Rating"
                                        className="rate-img"
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="col-md-12 mb-4">
                        <div className="item-inner">
                          <div className="item-img">
                            <img
                              src="assets/img//cat-4.webp"
                              alt="Image not found"
                            />
                          </div>
                          <div className="cat-des">
                            <div className="table-responsive">
                              <table class="table table-bordered border-primary cat-table">
                                <tbody>
                                  <tr>
                                    <td>special</td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img
                                        src="assets/img/rate-5.webp"
                                        alt="Rating"
                                        className="rate-img"
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>

            <div className="trait-img">
              <img src="assets/img/fur-1.webp" alt="Rating" />
            </div>
          </div>
        </section>

        {/* =================trait======================= */}
        {/* =====================marque=================== */}
        <div className="animate-m">
          <div className="marque-inner">
            <div className="marque-A">
              <Marquee>
                HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
                HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
                HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
                HIT CAT
              </Marquee>
            </div>

            <div className="marque-B">
              <Marquee direction="right">
                HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
                HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
                HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
                HIT CAT
              </Marquee>
            </div>
          </div>
        </div>
        {/* ===============marque====================== */}

        {/* ========================trait=================== */}
        <section>
          <div className="trait cpy-8">
            <div className="container">
              <div className="row">
                <div className="col-xl-8">
                  <div className="tratis-content">
                    <div className="tratis-content-inner">
                      <div className="sec-title">
                        <img src="assets/img/items.webp" alt="Items" />
                      </div>
                      <div className="sec-content">
                        <p>
                          The main collection comes with 3 basic types of items:
                          Stars, Bolts and Planets! Stars represent hope, Bolts
                          represent energy and Planets represent the universe.
                          Now you can guess where these cats might have come
                          from..
                        </p>
                        <p>
                          The 4-paw items will come with 1/1 cards. Stay tune!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cat-list md-none">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/cat-1.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/cat-2.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/cat-3.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/cat-4.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cat-table md-none">
                <div className="table-responsive">
                  <table class="table table-bordered border-primary cat-table">
                    <tbody>
                      <tr>
                        <td>Stars</td>
                        <td>Bolts</td>
                        <td>Planets</td>
                        <td>Special Items</td>
                      </tr>
                      <tr>
                        <td>Good things will come</td>
                        <td>Energy, Determination</td>
                        <td>Save the Universe</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Common</td>
                        <td>Uncommon</td>
                        <td>Rare</td>
                        <td>Special</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="assets/img/rate-1.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                        <td>
                          <img
                            src="assets/img/rate-2.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                        <td>
                          <img
                            src="assets/img/rate-3.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>

                        <td>
                          <img
                            src="assets/img/rate-4.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mobile-item">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div className="item-inner">
                      <div className="item-img">
                        <img
                          src="assets/img/cat-1.webp"
                          alt="Image not found"
                        />
                      </div>
                      <div className="cat-des">
                        <div className="table-responsive">
                          <table class="table table-bordered border-primary cat-table">
                            <tbody>
                              <tr>
                                <td>Stars</td>
                              </tr>
                              <tr>
                                <td>Good things will come </td>
                              </tr>
                              <tr>
                                <td>Common</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="assets/img/rate-1.webp"
                                    alt="Rating"
                                    className="rate-img"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <div className="item-inner">
                      <div className="item-img">
                        <img
                          src="assets/img/cat-2.webp"
                          alt="Image not found"
                        />
                      </div>
                      <div className="cat-des">
                        <div className="table-responsive">
                          <table class="table table-bordered border-primary cat-table">
                            <tbody>
                              <tr>
                                <td>Bolts</td>
                              </tr>
                              <tr>
                                <td>Energy Determination </td>
                              </tr>
                              <tr>
                                <td>Uncommon</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="assets/img/rate-2.webp"
                                    alt="Rating"
                                    className="rate-img"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <div className="item-inner">
                      <div className="item-img">
                        <img
                          src="assets/img/cat-3.webp"
                          alt="Image not found"
                        />
                      </div>
                      <div className="cat-des">
                        <div className="table-responsive">
                          <table class="table table-bordered border-primary cat-table">
                            <tbody>
                              <tr>
                                <td>Planets</td>
                              </tr>
                              <tr>
                                <td>Save the Universe </td>
                              </tr>
                              <tr>
                                <td>Rare</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="assets/img/rate-3.webp"
                                    alt="Rating"
                                    className="rate-img"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <div className="item-inner">
                      <div className="item-img">
                        <img src="assets/img/13.webp" alt="Image not found" />
                      </div>
                      <div className="cat-des">
                        <div className="table-responsive">
                          <table class="table table-bordered border-primary cat-table">
                            <tbody>
                              <tr>
                                <td>Special Items</td>
                              </tr>
                              <tr>
                                <td></td>
                              </tr>
                              <tr>
                                <td>special </td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="assets/img/rate-4.webp"
                                    alt="Rating"
                                    className="rate-img"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
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
        {/* ========================trait end=================== */}

        {/* ========================trait=================== */}
        <section>
          <div className="trait cpy-8">
            <div className="container">
              <div className="row">
                <div className="col-xl-8">
                  <div className="tratis-content">
                    <div className="tratis-content-inner">
                      <div className="sec-title">
                        <img src="assets/img/tribe.webp" alt="Tribe" />
                      </div>
                      <div className="sec-content">
                        <p>
                          The main collection comes with 3 basic types of tribes
                          - or breed, typically recognized via the cat’s head
                          shape. Warriors are here to save the day, Strategists
                          give you the directions and Elders are the wisest of
                          them all.
                        </p>
                        <br />
                        <p>
                          The 4-paw tribe will come with 1/1 cards. Stay tune!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cat-list md-none">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/head-1.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/head-2.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/head-3.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/special.png" alt="Cat" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cat-table md-none">
                <div className="table-responsive">
                  <table class="table table-bordered border-primary cat-table">
                    <tbody>
                      <tr>
                        <td>Warriors</td>
                        <td>Strategists</td>
                        <td>Elders</td>
                        <td>Special</td>
                      </tr>
                      <tr>
                        <td>Supportive, Helpful</td>
                        <td>Wisdom, Strategic</td>
                        <td>The wiset of them all</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Common</td>
                        <td>Uncommon</td>
                        <td>Rare</td>
                        <td>Special</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="assets/img/rate-1.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                        <td>
                          <img
                            src="assets/img/rate-2.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                        <td>
                          <img
                            src="assets/img/rate-3.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>

                        <td>
                          <img
                            src="assets/img/rate-4.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mobile-item">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div className="item-inner">
                      <div className="item-img">
                        <img src="assets/img/23.webp" alt="Image not found" />
                      </div>
                      <div className="cat-des">
                        <div className="table-responsive">
                          <table class="table table-bordered border-primary cat-table">
                            <tbody>
                              <tr>
                                <td>Warriors</td>
                              </tr>
                              <tr>
                                <td>Supportive, Helpful </td>
                              </tr>
                              <tr>
                                <td>Common</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="assets/img/rate-1.webp"
                                    alt="Rating"
                                    className="rate-img"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <div className="item-inner">
                      <div className="item-img">
                        <img
                          src="assets/img/head-2.webp"
                          alt="Image not found"
                        />
                      </div>
                      <div className="cat-des">
                        <div className="table-responsive">
                          <table class="table table-bordered border-primary cat-table">
                            <tbody>
                              <tr>
                                <td>Strategists</td>
                              </tr>
                              <tr>
                                <td>Wisdom, Strategic </td>
                              </tr>
                              <tr>
                                <td>Uncommon</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="assets/img/rate-2.webp"
                                    alt="Rating"
                                    className="rate-img"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <div className="item-inner">
                      <div className="item-img">
                        <img
                          src="assets/img/head-3.webp"
                          alt="Image not found"
                        />
                      </div>
                      <div className="cat-des">
                        <div className="table-responsive">
                          <table class="table table-bordered border-primary cat-table">
                            <tbody>
                              <tr>
                                <td>Elders</td>
                              </tr>
                              <tr>
                                <td>The wiset of them all </td>
                              </tr>
                              <tr>
                                <td>Rare</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="assets/img/rate-3.webp"
                                    alt="Rating"
                                    className="rate-img"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <div className="item-inner">
                      <div className="item-img">
                        <img
                          src="assets/img/cat-4.webp"
                          alt="Image not found"
                        />
                      </div>
                      <div className="cat-des">
                        <div className="table-responsive">
                          <table class="table table-bordered border-primary cat-table">
                            <tbody>
                              <tr>
                                <td>Special</td>
                              </tr>
                              <tr>
                                <td></td>
                              </tr>
                              <tr>
                                <td>Special</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="assets/img/rate-4.webp"
                                    alt="Rating"
                                    className="rate-img"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="traibe-1">
              <img src="assets/img/fur-1.webp" alt="Tribe" />
            </div>
            <div className="traibe-2">
              <img src="assets/img/fit-3.webp" alt="Tribe" />
            </div>
          </div>
        </section>
        {/* ========================trait end=================== */}
        {/* ============5 layer=================== */}

        {/* ============trait tribe=================== */}
        <section>
          <div className="trait cpy-8">
            <div className="container">
              <div className="row">
                <div className="col-xl-8">
                  <div className="tratis-content">
                    <div className="tratis-content-inner">
                      <div className="sec-title">
                        <img src="assets/img/face.webp" alt="Face" />
                      </div>
                      <div className="sec-content">
                        <p>
                          The main collection comes with 4 basic types of faces:
                          Hang In There, Determined, Champion and What’s Up! To
                          be honest, there is no particular reason why we want
                          What’s Up! face to be the rarest here, it just looks
                          rather unique.
                        </p>
                        <br />
                        <p>
                          The 5-paw face will come with 1/1 cards. Stay tune!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cat-list md-none">
                <div className="grid-layer-5">
                  <div className="gird-item-5">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/face-1.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="gird-item-5">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/face-2.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="gird-item-5">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/face-3.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="gird-item-5">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/face-4.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="gird-item-5">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/cat-4.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cat-table md-none">
                <div className="table-responsive">
                  <table class="table table-bordered border-primary cat-table">
                    <tbody>
                      <tr>
                        <td>Hang In There</td>
                        <td>Determined</td>
                        <td>Champion</td>
                        <td>What's up!</td>
                        <td>Special</td>
                      </tr>
                      <tr>
                        <td>The original hang in there</td>
                        <td>Determination</td>
                        <td>Let’s do this</td>
                        <td>What’s up!</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Common</td>
                        <td>Uncommon</td>
                        <td>Rare</td>
                        <td>Epic</td>
                        <td>Special</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="assets/img/rate-1.webp"
                            alt="Rate"
                            className="rate-img"
                          />
                        </td>
                        <td>
                          <img
                            src="assets/img/rate-2.webp"
                            alt="Rate"
                            className="rate-img"
                          />
                        </td>
                        <td>
                          <img
                            src="assets/img/rate-3.webp"
                            alt="Rate"
                            className="rate-img"
                          />
                        </td>

                        <td>
                          <img
                            src="assets/img/rate-4.webp"
                            alt="Rate"
                            className="rate-img"
                          />
                        </td>

                        <td>
                          <img
                            src="assets/img/rate-4.webp"
                            alt="Rating"
                            class="rate-img"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mobile-item">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div className="item-inner">
                      <div className="item-img">
                        <img
                          src="assets/img/face-1.webp"
                          alt="Image not found"
                        />
                      </div>
                      <div className="cat-des">
                        <div className="table-responsive">
                          <table class="table table-bordered border-primary cat-table">
                            <tbody>
                              <tr>
                                <td>Hang In there </td>
                              </tr>

                              <tr>
                                <td>The original Hang in there</td>
                              </tr>
                              <tr>
                                <td>Common</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="assets/img/rate-1.webp"
                                    alt="Rate"
                                    className="rate-img"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <div className="item-inner">
                      <div className="item-img">
                        <img src="assets/img/24.webp" alt="Image not found" />
                      </div>
                      <div className="cat-des">
                        <div className="table-responsive">
                          <table class="table table-bordered border-primary cat-table">
                            <tbody>
                              <tr>
                                <td>Determined</td>
                              </tr>
                              <tr>
                                <td>Determination</td>
                              </tr>
                              <tr>
                                <td>Uncommon</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="assets/img/rate-2.webp"
                                    alt="Rate"
                                    className="rate-img"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <div className="item-inner">
                      <div className="item-img">
                        <img
                          src="assets/img/face-3.webp"
                          alt="Image not found"
                        />
                      </div>
                      <div className="cat-des">
                        <div className="table-responsive">
                          <table class="table table-bordered border-primary cat-table">
                            <tbody>
                              <tr>
                                <td>Champions</td>
                              </tr>
                              <tr>
                                <td>Let’s do this </td>
                              </tr>
                              <tr>
                                <td>Rare</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="assets/img/rate-3.webp"
                                    alt=""
                                    className="rate-img"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <div className="item-inner">
                      <div className="item-img">
                        <img src="assets/img/25.webp" alt="Image not found" />
                      </div>
                      <div className="cat-des">
                        <div className="table-responsive">
                          <table class="table table-bordered border-primary cat-table">
                            <tbody>
                              <tr>
                                <td>What’s up! </td>
                              </tr>
                              <tr>
                                <td>What’s up! </td>
                              </tr>
                              <tr>
                                <td>epic </td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="assets/img/rate-4.webp"
                                    alt=""
                                    className="rate-img"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <div className="item-inner">
                      <div className="item-img">
                        <img src="assets/img/13.webp" alt="Image not found" />
                      </div>
                      <div className="cat-des">
                        <div className="table-responsive">
                          <table class="table table-bordered border-primary cat-table">
                            <tbody>
                              <tr>
                                <td>Special</td>
                              </tr>
                              <tr>
                                <td></td>
                              </tr>
                              <tr>
                                <td>Special</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="assets/img/rate-5.webp"
                                    alt=""
                                    className="rate-img"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================5 layer===================== */}
        {/* =====================marque=================== */}
        <div className="animate-m">
          <div className="marque-inner">
            <div className="marque-A">
              <Marquee>
                HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
                HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
                HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
                HIT CAT
              </Marquee>
            </div>

            <div className="marque-B">
              <Marquee direction="right">
                HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
                HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
                HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
                HIT CAT
              </Marquee>
            </div>
          </div>
        </div>
        {/* ===============marque====================== */}

        {/* ============9 layer=================== */}
        <section>
          <div className="trait cpy-8">
            <div className="container">
              <div className="row">
                <div className="col-xl-8">
                  <div className="tratis-content">
                    <div className="tratis-content-inner">
                      <div className="sec-title">
                        <img src="assets/img/fur.webp" alt="" />
                      </div>
                      <div className="sec-content">
                        <p>
                          The main collection comes with 4 basic types of fur
                          color. To spice things up, each fur color has a rarer
                          striped-version, earning half-a-star for the trait!
                        </p>
                        <p>
                          The 5-paw fur will come with 1/1 cards. Stay tune!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cat-list md-none align-center">
                <div className="grid-layer-9">
                  <div className="gird-item-9">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/1.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="gird-item-9">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/2.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="gird-item-9">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/3.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="gird-item-9">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/4.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="gird-item-9">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/5.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="gird-item-9">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/6.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="gird-item-9">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/7.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="gird-item-9">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/8.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="gird-item-9">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/13.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cat-table md-none">
                <div className="table-responsive">
                  <table class="table border-primary cat-table">
                    <tbody>
                      <tr>
                        <td>Bright Orange</td>
                        <td>
                          Bright orange <br /> W stripes
                        </td>
                        <td>White</td>
                        <td>White w Stripes</td>
                        <td>Black</td>
                        <td>Black w Stripes</td>
                        <td>Pink</td>
                        <td>Pink w stripes</td>
                        <td>Special</td>
                      </tr>
                      <tr className="un-grid">
                        <td colspan="2">Common </td>
                        <td colspan="2">Uncommon</td>
                        <td colspan="2">Rare</td>
                        <td colspan="2">epic</td>
                        <td colspan="2"></td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="assets/img/r-1.webp"
                            alt="Raiting"
                            className="rate-img"
                          />
                        </td>
                        <td>
                          <img
                            src="assets/img/r-1.5.webp"
                            alt="Raiting"
                            className="rate-img"
                          />
                        </td>
                        <td>
                          <img
                            src="assets/img/r-2.webp"
                            alt="Raiting"
                            className="rate-img"
                          />
                        </td>

                        <td>
                          <img
                            src="assets/img/r-2.5.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>

                        <td>
                          <img
                            src="assets/img/r-3.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                        <td>
                          <img
                            src="assets/img/r-3.5.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                        <td>
                          <img
                            src="assets/img/r-4.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                        <td>
                          <img
                            src="assets/img/r-4.5.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                        <td>
                          <img
                            src="assets/img/r-5.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="fur-a">
              <img src="assets/img/fur-1.webp" alt="" />
            </div>
            <div className="fur-b">
              <img src="assets/img/fur-2.webp" alt="" />
            </div>

            <div className="mobile-item">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="item-inner">
                    <div className="item-img">
                      <img src="assets/img/1.webp" alt="Image not found" />
                    </div>
                    <div className="cat-des">
                      <div className="table-responsive">
                        <table class="table table-bordered border-primary cat-table">
                          <tbody>
                            <tr>
                              <td>Bright Orange </td>
                            </tr>
                            <tr>
                              <td>Common </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/r-1.webp"
                                  alt="Rating"
                                  className="rate-img"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="item-inner">
                    <div className="item-img">
                      <img src="assets/img/2.webp" alt="Image not found" />
                    </div>
                    <div className="cat-des">
                      <div className="table-responsive">
                        <table class="table table-bordered border-primary cat-table">
                          <tbody>
                            <tr>
                              <td>Bright orange W stripes</td>
                            </tr>
                            <tr>
                              <td>common</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/r-1.5.webp"
                                  alt="Rating"
                                  className="rate-img"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="item-inner">
                    <div className="item-img">
                      <img src="assets/img/3.webp" alt="Image not found" />
                    </div>
                    <div className="cat-des">
                      <div className="table-responsive">
                        <table class="table table-bordered border-primary cat-table">
                          <tbody>
                            <tr>
                              <td>White</td>
                            </tr>
                            <tr>
                              <td>Uncommon</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/r-2.webp"
                                  alt="Rating"
                                  className="rate-img"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="item-inner">
                    <div className="item-img">
                      <img src="assets/img/4.webp" alt="Image not found" />
                    </div>
                    <div className="cat-des">
                      <div className="table-responsive">
                        <table class="table table-bordered border-primary cat-table">
                          <tbody>
                            <tr>
                              <td>White w Stripes </td>
                            </tr>
                            <tr>
                              <td>Uncommon</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/r-2.5.webp"
                                  alt="Rating"
                                  className="rate-img"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="item-inner">
                    <div className="item-img">
                      <img src="assets/img/5.webp" alt="Image not found" />
                    </div>
                    <div className="cat-des">
                      <div className="table-responsive">
                        <table class="table table-bordered border-primary cat-table">
                          <tbody>
                            <tr>
                              <td>Black</td>
                            </tr>
                            <tr>
                              <td>Rare</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/r-3.webp"
                                  alt="Rating"
                                  className="rate-img"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 mb-4">
                  <div className="item-inner">
                    <div className="item-img">
                      <img src="assets/img/6.webp" alt="Image not found" />
                    </div>
                    <div className="cat-des">
                      <div className="table-responsive">
                        <table class="table table-bordered border-primary cat-table">
                          <tbody>
                            <tr>
                              <td>Black w Stripes </td>
                            </tr>
                            <tr>
                              <td>Rare</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/r-3.5.webp"
                                  alt="Rating"
                                  className="rate-img"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 mb-4">
                  <div className="item-inner">
                    <div className="item-img">
                      <img src="assets/img/7.webp" alt="Image not found" />
                    </div>
                    <div className="cat-des">
                      <div className="table-responsive">
                        <table class="table table-bordered border-primary cat-table">
                          <tbody>
                            <tr>
                              <td>Pink</td>
                            </tr>
                            <tr>
                              <td>Epic</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/r-4.webp"
                                  alt="Rating"
                                  className="rate-img"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 mb-4">
                  <div className="item-inner">
                    <div className="item-img">
                      <img src="assets/img/8.webp" alt="Image not found" />
                    </div>
                    <div className="cat-des">
                      <div className="table-responsive">
                        <table class="table table-bordered border-primary cat-table">
                          <tbody>
                            <tr>
                              <td>Pink w stripes </td>
                            </tr>
                            <tr>
                              <td>Epic</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/r-4.5.webp"
                                  alt="Rating"
                                  className="rate-img"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 mb-4">
                  <div className="item-inner">
                    <div className="item-img">
                      <img src="assets/img/cat-4.webp" alt="Image not found" />
                    </div>
                    <div className="cat-des">
                      <div className="table-responsive">
                        <table class="table table-bordered border-primary cat-table">
                          <tbody>
                            <tr>
                              <td>Special</td>
                            </tr>
                            <tr>
                              <td></td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/r-5.webp"
                                  alt="Rating"
                                  className="rate-img"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================9 layer===================== */}
        {/* ========================trait=================== */}
        <section>
          <div className="trait cpy-8">
            <div className="container">
              <div className="row">
                <div className="col-xl-8">
                  <div className="tratis-content">
                    <div className="tratis-content-inner">
                      <div className="sec-title">
                        <img src="assets/img/stuid.png" alt="Trait-stuid" />
                      </div>
                      <div className="sec-content">
                        <p>
                          Cats be flexin’ their ‘token’ like a boss. The main
                          collection comes with 3 basic types of forehead stud:
                          Pearl, Gold and Ruby! <br /> The 5-paw stud will come
                          with 1/1 cards. Stay tune!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cat-list md-none">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/10.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/11.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/12.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/13.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cat-table md-none">
                <div className="table-responsive">
                  <table class="table table-bordered border-primary cat-table">
                    <tbody>
                      <tr>
                        <td>Pearl</td>
                        <td>Gold</td>
                        <td>Ruby</td>
                        <td>Special tems</td>
                      </tr>
                      <tr>
                        <td>Common</td>
                        <td>Uncommon</td>
                        <td>Rare</td>
                        <td>Ultra-Rare</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="assets/img/rate-1.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                        <td>
                          <img
                            src="assets/img/rate-2.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                        <td>
                          <img
                            src="assets/img/rate-3.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>

                        <td>
                          <img
                            src="assets/img/rate-4.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="stuid-a">
              <img src="assets/img/fit-3.webp" alt="Trait Stuid" />
            </div>
            <div className="stuid-b">
              <img src="assets/img/stuid-2.webp" alt="Trait Stuid" />
            </div>
            <div className="mobile-item">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="item-inner">
                    <div className="item-img">
                      <img src="assets/img/10.webp" alt="Image not found" />
                    </div>
                    <div className="cat-des">
                      <div className="table-responsive">
                        <table class="table table-bordered border-primary cat-table">
                          <tbody>
                            <tr>
                              <td>Pearl</td>
                            </tr>
                            <tr>
                              <td>Common</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/rate-1.webp"
                                  alt="Rating"
                                  className="rate-img"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="item-inner">
                    <div className="item-img">
                      <img src="assets/img/11.webp" alt="Image not found" />
                    </div>
                    <div className="cat-des">
                      <div className="table-responsive">
                        <table class="table table-bordered border-primary cat-table">
                          <tbody>
                            <tr>
                              <td>Gold</td>
                            </tr>
                            <tr>
                              <td>Uncommon</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/rate-2.webp"
                                  alt="Rating"
                                  className="rate-img"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="item-inner">
                    <div className="item-img">
                      <img src="assets/img/12.webp" alt="Image not found" />
                    </div>
                    <div className="cat-des">
                      <div className="table-responsive">
                        <table class="table table-bordered border-primary cat-table">
                          <tbody>
                            <tr>
                              <td>Ruby</td>
                            </tr>
                            <tr>
                              <td>Rare</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/rate-3.webp"
                                  alt="Rating"
                                  className="rate-img"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="item-inner">
                    <div className="item-img">
                      <img src="assets/img/13.webp" alt="Image not found" />
                    </div>
                    <div className="cat-des">
                      <div className="table-responsive">
                        <table class="table table-bordered border-primary cat-table">
                          <tbody>
                            <tr>
                              <td>Special tems</td>
                            </tr>
                            <tr>
                              <td>Ultra-Rare</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/rate-4.webp"
                                  alt="Rating"
                                  className="rate-img"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================trait end=================== */}

        {/* ============5 layer=================== */}
        <section>
          <div className="trait cpy-8">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="tratis-content">
                    <div className="tratis-content-inner">
                      <div className="sec-title">
                        <img src="assets/img/trait-fit.webp" alt="Trait fit" />
                      </div>
                      <div className="sec-content">
                        <p>
                          Last but not least, the cats can choose to stay true
                          to their fur coat or don space-themed fits. The 5-paw
                          face will come with 1/1 cards. What would you suggest?
                        </p>

                        <br />

                        <p>
                          Fret not, there is no bad fit, there is no bad trait,
                          and there is no bad card. The way we create the card
                          logic aims to offer something for all holders. As we
                          progress, more activities will be created along the
                          way.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cat-list md-none">
                <div className="grid-layer-5">
                  <div className="gird-item-5">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/14.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="gird-item-5">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/15.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="gird-item-5">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/16.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="gird-item-5">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/17.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                  <div className="gird-item-5">
                    <div className="cat-item">
                      <div className="cat-img">
                        <img src="assets/img/18.webp" alt="Cat" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cat-table md-none">
                <div className="table-responsive">
                  <table class="table table-bordered border-primary cat-table">
                    <tbody>
                      <tr>
                        <td>Original</td>
                        <td>Knight Suit</td>
                        <td>Royal Suit</td>
                        <td>Earth Savior Suit</td>
                        <td>Special</td>
                      </tr>
                      <tr>
                        <td>
                          Your daily mental <br /> health support
                        </td>
                        <td>Fight for mankind</td>
                        <td>Grow our future</td>
                        <td>Protect Mankind</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Common</td>
                        <td>Uncommon</td>
                        <td>Rare</td>
                        <td>epic</td>
                        <td>Special</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="assets/img/rate-1.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                        <td>
                          <img
                            src="assets/img/rate-2.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                        <td>
                          <img
                            src="assets/img/rate-3.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>

                        <td>
                          <img
                            src="assets/img/rate-4.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                        <td>
                          <img
                            src="assets/img/rate-5.webp"
                            alt="Rating"
                            className="rate-img"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="fit-3">
              <img src="assets/img/fit-3.webp" alt="Fit" />
            </div>

            <div className="mobile-item">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="item-inner">
                    <div className="item-img">
                      <img src="assets/img/14.webp" alt="Image not found" />
                    </div>
                    <div className="cat-des">
                      <div className="table-responsive">
                        <table class="table table-bordered border-primary cat-table">
                          <tbody>
                            <tr>
                              <td>Original</td>
                            </tr>
                            <tr>
                              <td>Your daily mental health support</td>
                            </tr>
                            <tr>
                              <td>Common</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/rate-1.webp"
                                  alt="Rating"
                                  className="rate-img"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="item-inner">
                    <div className="item-img">
                      <img src="assets/img/15.webp" alt="Image not found" />
                    </div>
                    <div className="cat-des">
                      <div className="table-responsive">
                        <table class="table table-bordered border-primary cat-table">
                          <tbody>
                            <tr>
                              <td>Knight Suit </td>
                            </tr>
                            <tr>
                              <td>Fight for mankind </td>
                            </tr>
                            <tr>
                              <td>Uncommon </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/rate-2.webp"
                                  alt="Rating"
                                  className="rate-img"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="item-inner">
                    <div className="item-img">
                      <img src="assets/img/16.webp" alt="Image not found" />
                    </div>
                    <div className="cat-des">
                      <div className="table-responsive">
                        <table class="table table-bordered border-primary cat-table">
                          <tbody>
                            <tr>
                              <td>Royal Suit </td>
                            </tr>
                            <tr>
                              <td>Grow our future </td>
                            </tr>
                            <tr>
                              <td>Rare</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/rate-3.webp"
                                  alt="Rating"
                                  className="rate-img"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="item-inner">
                    <div className="item-img">
                      <img src="assets/img/17.webp" alt="Image not found" />
                    </div>
                    <div className="cat-des">
                      <div className="table-responsive">
                        <table class="table table-bordered border-primary cat-table">
                          <tbody>
                            <tr>
                              <td>Earth Savior Suit </td>
                            </tr>
                            <tr>
                              <td>Protect Mankind </td>
                            </tr>
                            <tr>
                              <td>epic </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/rate-4.webp"
                                  alt="Rating"
                                  className="rate-img"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="item-inner">
                    <div className="item-img">
                      <img src="assets/img/13.webp" alt="Image not found" />
                    </div>
                    <div className="cat-des">
                      <div className="table-responsive">
                        <table class="table table-bordered border-primary cat-table">
                          <tbody>
                            <tr>
                              <td>Special</td>
                            </tr>
                            <tr>
                              <td></td>
                            </tr>
                            <tr>
                              <td>Special </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/rate-5.webp"
                                  alt="Rating"
                                  className="rate-img"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================  vide  =================== */}
        <div className="hero">
          <div className="hero-content">
            <video
              controls=""
              className="video-gifs"
              autoPlay={"autoplay"}
              loop
              muted
            >
              <source
                src="https://res.cloudinary.com/dduk9n8q3/video/upload/v1649014167/Animated_Banner_GIF_2_urgflp.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        {/* =====================5 layer===================== */}
        {/* ==============footer================= */}
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="footer-content">
                <a href="./" className="logo-link">
                  <img src="assets/img/logo.png" alt="HIt Cat" />
                </a>

                <div className="footer-social">
                  <ul className="social-ul">
                    <li>
                      <a
                        href="https://twitter.com/wickedsharkclub"
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
                      <a
                        href="https://www.instagram.com/wickedsharkclub"
                        className="social-link"
                      >
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
                    <li>
                      <a
                        href="https://opensea.io/collection/wicked-shark-club"
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
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M19.1543 38.1681C29.6936 38.1681 38.2384 29.6233 38.2384 19.084C38.2384 8.5448 29.6958 0 19.1543 0C8.61511 0 0.0703125 8.5448 0.0703125 19.084C0.0703125 29.6233 8.61511 38.1681 19.1543 38.1681ZM14.0268 25.9813C17.6919 25.9813 20.663 23.0102 20.663 19.3452C20.663 15.6801 17.6919 12.709 14.0268 12.709C10.3617 12.709 7.39062 15.6801 7.39062 19.3452C7.39062 23.0102 10.3617 25.9813 14.0268 25.9813ZM26.8567 19.3451C26.8567 23.0102 25.6683 25.9813 24.2023 25.9813C22.7362 25.9813 21.5478 23.0102 21.5478 19.3451C21.5478 15.6801 22.7362 12.709 24.2023 12.709C25.6683 12.709 26.8567 15.6801 26.8567 19.3451ZM29.0684 25.9813C29.8015 25.9813 30.3957 23.0102 30.3957 19.3452C30.3957 15.6801 29.8015 12.709 29.0684 12.709C28.3354 12.709 27.7412 15.6801 27.7412 19.3452C27.7412 23.0102 28.3354 25.9813 29.0684 25.9813Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="footer-des">
                  Brought To You By
                  <a
                    href="https://www.nftconstructer.com/"
                    className="dev-link"
                  >
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
                HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
                HIT CAT
              </Marquee>
            </div>

            <div className="marque-B">
              <Marquee direction="right">
                HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
                HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
                HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT HIT CAT
                HIT CAT
              </Marquee>
            </div>
          </div>
        </div>
        {/* ===============marque====================== */}
      </main>

      {/* <div className="bg-effect"></div> */}
    </>
  );
}
export default Home;
