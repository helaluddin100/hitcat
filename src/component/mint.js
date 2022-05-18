import { useEffect, useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { useHistory, useLocation } from "react-router-dom";
function Mint() {
  // ==========================mint valu ==================
  const [walletConnected, setWalletConnected] = useState(false);

  const [totalMinted, setTotalMinted] = useState(0);
  const [value, setValue] = useState(1);
  const [pagelocation, setPageLocation] = useState(useLocation().pathname);
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

  // Fetch
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

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x27caC31B750990Eea77EE1bAc612F60590A0195c&apikey=P65RXADWW83PQUNRMN4K7H2NTK8RZ1XPYS"
  //     )
  //     .then(function (response) {
  //       setTotalMinted(response.data.result);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

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
      <div className=""></div>
      <div className="mint-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="mint-content">
                <div className="mint-title">
                  <img src="assets/img/mint-title.png" alt="" />
                </div>
                <h3 className="sm-title">
                  TOTAL MINTED: <span>0 / 5000</span>
                </h3>
                <p>0.05 ETH + GAS FEE</p>
                <p>MAX 20 HIT CAT PER TRANSACTION</p>

                <div className="mint-input-area">
                  <div className="mint-form">
                    <span
                      className="value-btn"
                      onClick={() => {
                        if (value > 1) {
                          setValue(value - 1);
                        }
                      }}
                    >
                      -
                    </span>
                    <div className="value-show">
                      <span>{value}</span>
                    </div>
                    <span
                      className="value-btn"
                      onClick={() => {
                        if (value < 20) {
                          setValue(value + 1);
                        }
                      }}
                    >
                      +
                    </span>
                  </div>

                  <div className="power-value">
                    <span
                      className="power-value-btn"
                      onClick={() => {
                        setValue(5);
                      }}
                    >
                      5
                    </span>
                    <span
                      className="power-value-btn"
                      onClick={() => {
                        setValue(10);
                      }}
                    >
                      10
                    </span>
                    <span
                      className="power-value-btn"
                      onClick={() => {
                        setValue(20);
                      }}
                    >
                      20
                    </span>
                  </div>
                </div>

                <div className="mint-btn">COMING SOON</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==============footer================= */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-content">
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
                <a href="https://www.nftconstructer.com/" className="dev-link">
                  <img
                    src="assets/img/creator.svg"
                    alt=""
                    className="nft-logo"
                  />
                  NFT Constructer
                </a>
              </p>
              <p className="footer-des">
                Cat Hit Club 2021. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
        <div className="mint-footer">
          <img src="assets/img/footer-one.png" className="mint-tow" alt="" />
          <img src="assets/img/footer-tow.png" className="mint-one" alt="" />
        </div>
      </div>
      {/* ==============footer end================= */}
    </>
  );
}
export default Mint;
