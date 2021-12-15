import Link from "next/link";

const HomeComp = () => {
  return (
    <div>
      {/* main content */}
      <main className="main">
        {/* home */}
        <div className="home">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="home__content home__content--center">
                  <h1 className="home__title">
                    Crypto Kweens <br />{" "}
                    <span>
                      <b>NFT</b>
                    </span>{" "}
                    Marketplace
                  </h1>
                  <p className="home__text">
                    Discover, collect, and sell extraordinary digital art <br /> by female artists, creatives &amp;
                    entrepreneurs
                  </p>
                  <div className="home__btns">
                    <a className="home__btn">
                      <Link href={`/explore`}>Explore</Link>
                    </a>

                    <a href="signin.html" className="home__btn">
                      <Link href={`/mint`}>Create</Link>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end home */}
        <div className="container">
          {/* explore */}
          <section className="row row--grid">
            {/* title */}
            <div className="col-12">
              <div className="main__title main__title--center">
                <h2>Explore exclusive digital assets</h2>
              </div>
            </div>
            {/* end title */}
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              {/* card */}
              <div className="card">
                <a href="item2.html" className="card__cover">
                  <img src="/assets/img/art/art1.png" alt="img art" />
                </a>
                <h3 className="card__title">
                  <a>
                    <Link href={`/item`}>Ether in Air</Link>
                  </a>
                </h3>
                <div className="card__author">
                  <img src="/assets/img/avatars/avatar.jpg" alt="img art" />
                  <a href="author.html">@nickname</a>
                </div>
                <div className="card__info">
                  <div className="card__price">
                    <span>Reserve price</span>
                    <span>4.89 ETH</span>
                  </div>
                  <button className="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                    </svg>
                    <span>189</span>
                  </button>
                </div>
              </div>
              {/* end card */}
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              {/* carousel card */}
              <div className="card">
                <div className="card__cover">
                  <img src="/assets/img/art/art2.png" alt="img art" />
                </div>
                <h3 className="card__title">
                  <a>
                    <Link href={`/item`}>Ether in Air</Link>
                  </a>
                </h3>
                <div className="card__author card__author--verified">
                  <img src="/assets/img/avatars/avatar2.jpg" alt="img art" />
                  <a href="author.html">@johndoe</a>
                </div>
                <div className="card__info">
                  <div className="card__price">
                    <span>Reserve price</span>
                    <span>5.04 ETH</span>
                  </div>
                  <button className="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                    </svg>
                    <span />
                  </button>
                </div>
              </div>
              {/* end carousel card */}
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              {/* card */}
              <div className="card">
                <a href="item2.html" className="card__cover">
                  <img src="/assets/img/art/art3.png" alt="img art" />
                </a>
                <h3 className="card__title">
                  <a>
                    <Link href={`/item`}>Ether in Air</Link>
                  </a>
                </h3>
                <div className="card__author card__author--verified">
                  <img src="/assets/img/avatars/avatar3.jpg" alt="img art" />
                  <a href="author.html">@neo</a>
                </div>
                <div className="card__info">
                  <div className="card__price">
                    <span>Reserve price</span>
                    <span>2.61 ETH</span>
                  </div>
                  <button className="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                    </svg>
                    <span>702</span>
                  </button>
                </div>
              </div>
              {/* end card */}
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              {/* card */}
              <div className="card">
                <a href="#modal-asset" className="card__cover open-modal">
                  <img src="/assets/img/art/art4.png" alt="img art" />
                </a>
                <h3 className="card__title">
                  <a>
                    <Link href={`/item`}>Ether in Air</Link>
                  </a>
                </h3>
                <div className="card__author">
                  <img src="/assets/img/avatars/avatar4.jpg" alt="img art" />
                  <a href="author.html">@min1max</a>
                </div>
                <div className="card__info">
                  <div className="card__price">
                    <span>Reserve price</span>
                    <span>3.19 ETH</span>
                  </div>
                  <button className="card__likes card__likes--active" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                    </svg>
                    <span>37</span>
                  </button>
                </div>
              </div>
              {/* end card */}
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              {/* card */}
              <div className="card">
                <a href="item2.html" className="card__cover">
                  <img src="/assets/img/art/art5.png" alt="img art" />
                </a>
                <h3 className="card__title">
                  <a>
                    <Link href={`/item`}>Ether in Air</Link>
                  </a>
                </h3>
                <div className="card__author card__author--verified">
                  <img src="/assets/img/avatars/avatar5.jpg" alt="img art" />
                  <a href="author.html">@midinh</a>
                </div>
                <div className="card__info">
                  <div className="card__price">
                    <span>Reserve price</span>
                    <span>1.11 ETH</span>
                  </div>
                  <button className="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                    </svg>
                    <span>23</span>
                  </button>
                </div>
              </div>
              {/* end card */}
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              {/* card */}
              <div className="card">
                <a href="item2.html" className="card__cover">
                  <img src="/assets/img/art/art6.png" alt="img art" />
                </a>
                <h3 className="card__title">
                  <a>
                    <Link href={`/item`}>Ether in Air</Link>
                  </a>
                </h3>
                <div className="card__author card__author--verified">
                  <img src="/assets/img/avatars/avatar9.jpg" alt="img art" />
                  <a href="author.html">@nicky87</a>
                </div>
                <div className="card__info">
                  <div className="card__price">
                    <span>Reserve price</span>
                    <span>0.99 ETH</span>
                  </div>
                  <button className="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                    </svg>
                    <span>358</span>
                  </button>
                </div>
              </div>
              {/* end card */}
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              {/* video card */}
              <div className="card">
                <a href="item2.html" className="card__cover card__cover--video">
                  <img src="/assets/img/art/art7.png" alt="img art" />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21.53,7.15a1,1,0,0,0-1,0L17,8.89A3,3,0,0,0,14,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3h9a3,3,0,0,0,3-2.89l3.56,1.78A1,1,0,0,0,21,17a1,1,0,0,0,.53-.15A1,1,0,0,0,22,16V8A1,1,0,0,0,21.53,7.15ZM15,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8h9a1,1,0,0,1,1,1Zm5-.62-3-1.5V11.12l3-1.5Z" />
                  </svg>
                </a>
                <h3 className="card__title">
                  <a>
                    <Link href={`/item`}>Ether in Air</Link>
                  </a>
                </h3>
                <div className="card__author">
                  <img src="/assets/img/avatars/avatar10.jpg" alt="img art" />
                  <a href="author.html">@redalert</a>
                </div>
                <div className="card__info">
                  <div className="card__price">
                    <span>Reserve price</span>
                    <span>1.63 ETH</span>
                  </div>
                  <button className="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                    </svg>
                    <span>90</span>
                  </button>
                </div>
              </div>
              {/* end video card */}
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              {/* card */}
              <div className="card">
                <a href="item2.html" className="card__cover">
                  <img src="/assets/img/art/art8.png" alt="img art" />
                </a>
                <h3 className="card__title">
                  <a>
                    <Link href={`/item`}>Ether in Air</Link>
                  </a>
                </h3>
                <div className="card__author">
                  <img src="/assets/img/avatars/avatar11.jpg" alt="img art" />
                  <a href="author.html">@aaarthur</a>
                </div>
                <div className="card__info">
                  <div className="card__price">
                    <span>Reserve price</span>
                    <span>2.55 ETH</span>
                  </div>
                  <button className="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                    </svg>
                    <span>64</span>
                  </button>
                </div>
              </div>
              {/* end card */}
            </div>
            {/* collapse */}
            <div className="row row--grid collapse" id="collapsemore">
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                {/* card */}
                <div className="card">
                  <a href="item2.html" className="card__cover">
                    <img src="/assets/img/art/art1.png" alt="img art" />
                  </a>
                  <h3 className="card__title">
                    <a>
                      <Link href={`/item`}>Ether in Air</Link>
                    </a>
                  </h3>
                  <div className="card__author">
                    <img src="/assets/img/avatars/avatar.jpg" alt="img art" />
                    <a href="author.html">@nickname</a>
                  </div>
                  <div className="card__info">
                    <div className="card__price">
                      <span>Reserve price</span>
                      <span>4.89 ETH</span>
                    </div>
                    <button className="card__likes" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                      </svg>
                      <span>189</span>
                    </button>
                  </div>
                </div>
                {/* end card */}
              </div>
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                {/* card */}
                <div className="card">
                  <a href="item2.html" className="card__cover">
                    <img src="/assets/img/art/art2.png" alt="img art" />
                  </a>
                  <h3 className="card__title">
                    <a>
                      <Link href={`/item`}>Ether in Air</Link>
                    </a>
                  </h3>
                  <div className="card__author card__author--verified">
                    <img src="/assets/img/avatars/avatar2.jpg" alt="img art" />
                    <a href="author.html">@johndoe</a>
                  </div>
                  <div className="card__info">
                    <div className="card__price">
                      <span>Reserve price</span>
                      <span>5.04 ETH</span>
                    </div>
                    <button className="card__likes" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                      </svg>
                      <span />
                    </button>
                  </div>
                </div>
                {/* end card */}
              </div>
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                {/* card */}
                <div className="card">
                  <a href="item2.html" className="card__cover">
                    <img src="/assets/img/art/art3.png" alt="img art" />
                  </a>
                  <h3 className="card__title">
                    <a>
                      <Link href={`/item`}>Ether in Air</Link>
                    </a>
                  </h3>
                  <div className="card__author card__author--verified">
                    <img src="/assets/img/avatars/avatar3.jpg" alt="img art" />
                    <a href="author.html">@neo</a>
                  </div>
                  <div className="card__info">
                    <div className="card__price">
                      <span>Reserve price</span>
                      <span>2.61 ETH</span>
                    </div>
                    <button className="card__likes" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                      </svg>
                      <span>702</span>
                    </button>
                  </div>
                </div>
                {/* end card */}
              </div>
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                {/* card */}
                <div className="card">
                  <a href="#modal-asset" className="card__cover open-modal">
                    <img src="/assets/img/art/art4.png" alt="img art" />
                  </a>
                  <h3 className="card__title">
                    <a>
                      <Link href={`/item`}>Ether in Air</Link>
                    </a>
                  </h3>
                  <div className="card__author">
                    <img src="/assets/img/avatars/avatar4.jpg" alt="img art" />
                    <a href="author.html">@min1max</a>
                  </div>
                  <div className="card__info">
                    <div className="card__price">
                      <span>Reserve price</span>
                      <span>3.19 ETH</span>
                    </div>
                    <button className="card__likes card__likes--active" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                      </svg>
                      <span>37</span>
                    </button>
                  </div>
                </div>
                {/* end card */}
              </div>
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                {/* card */}
                <div className="card">
                  <a href="item2.html" className="card__cover">
                    <img src="/assets/img/art/art5.png" alt="img art" />
                  </a>
                  <h3 className="card__title">
                    <a>
                      <Link href={`/item`}>Ether in Air</Link>
                    </a>
                  </h3>
                  <div className="card__author card__author--verified">
                    <img src="/assets/mg/avatars/avatar5.jpg" alt="img art" />
                    <a href="author.html">@midinh</a>
                  </div>
                  <div className="card__info">
                    <div className="card__price">
                      <span>Reserve price</span>
                      <span>1.11 ETH</span>
                    </div>
                    <button className="card__likes" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                      </svg>
                      <span>23</span>
                    </button>
                  </div>
                </div>
                {/* end card */}
              </div>
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                {/* card */}
                <div className="card">
                  <a href="item2.html" className="card__cover">
                    <img src="/assets/img/art/art6.png" alt="img art" />
                  </a>
                  <h3 className="card__title">
                    <a>
                      <Link href={`/item`}>Ether in Air</Link>
                    </a>
                  </h3>
                  <div className="card__author card__author--verified">
                    <img src="/assets/img/avatars/avatar9.jpg" alt="img art" />
                    <a href="author.html">@nicky87</a>
                  </div>
                  <div className="card__info">
                    <div className="card__price">
                      <span>Reserve price</span>
                      <span>0.99 ETH</span>
                    </div>
                    <button className="card__likes" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                      </svg>
                      <span>358</span>
                    </button>
                  </div>
                </div>
                {/* end card */}
              </div>
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                {/* video card */}
                <div className="card">
                  <a href="item2.html" className="card__cover card__cover--video">
                    <img src="/assets/img/art/art7.png" alt="img art" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M21.53,7.15a1,1,0,0,0-1,0L17,8.89A3,3,0,0,0,14,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3h9a3,3,0,0,0,3-2.89l3.56,1.78A1,1,0,0,0,21,17a1,1,0,0,0,.53-.15A1,1,0,0,0,22,16V8A1,1,0,0,0,21.53,7.15ZM15,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8h9a1,1,0,0,1,1,1Zm5-.62-3-1.5V11.12l3-1.5Z" />
                    </svg>
                  </a>
                  <h3 className="card__title">
                    <a>
                      <Link href={`/item`}>Ether in Air</Link>
                    </a>
                  </h3>
                  <div className="card__author">
                    <img src="/assets/img/avatars/avatar10.jpg" alt="img art" />
                    <a href="author.html">@redalert</a>
                  </div>
                  <div className="card__info">
                    <div className="card__price">
                      <span>Reserve price</span>
                      <span>1.63 ETH</span>
                    </div>
                    <button className="card__likes" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                      </svg>
                      <span>90</span>
                    </button>
                  </div>
                </div>
                {/* end video card */}
              </div>
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                {/* card */}
                <div className="card">
                  <a href="item2.html" className="card__cover">
                    <img src="/assets/img/art/art8.png" alt="img art" />
                  </a>
                  <h3 className="card__title">
                    <a>
                      <Link href={`/item`}>Ether in Air</Link>
                    </a>
                  </h3>
                  <div className="card__author">
                    <img src="/assets/img/avatars/avatar11.jpg" alt="img art" />
                    <a href="author.html">@aaarthur</a>
                  </div>
                  <div className="card__info">
                    <div className="card__price">
                      <span>Reserve price</span>
                      <span>2.55 ETH</span>
                    </div>
                    <button className="card__likes" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                      </svg>
                      <span>64</span>
                    </button>
                  </div>
                </div>
                {/* end card */}
              </div>
            </div>
            <div className="col-12">
              <button
                className="main__load"
                type="button"
                data-toggle="collapse"
                data-target="#collapsemore"
                aria-expanded="false"
                aria-controls="collapsemore"
              >
                Load more
              </button>
            </div>
            {/* end collapse */}
          </section>
          {/* end explore */}
          {/* get started */}
          <div className="row row--grid">
            {/* title */}
            <div className="col-12">
              <div className="main__title">
                <h2>Get started creating &amp; selling your NFTs</h2>
              </div>
            </div>
            {/* end title */}
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="feature">
                <span className="feature__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z" />
                  </svg>
                </span>
                <h3 className="feature__title">Set up your wallet</h3>
                <p className="feature__text">
                  Once you’ve set up your wallet of choice, connect it to NFT marketplace by clicking this link. <br />
                  <a href="signin.html">Connect my wallet</a>.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="feature">
                <span className="feature__icon feature__icon--green">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M10,13H4a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,19H5V15H9ZM20,3H14a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,9H15V5h4Zm1,7H18V14a1,1,0,0,0-2,0v2H14a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V18h2a1,1,0,0,0,0-2ZM10,3H4A1,1,0,0,0,3,4v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,10,3ZM9,9H5V5H9Z" />
                  </svg>
                </span>
                <h3 className="feature__title">Create your collection</h3>
                <p className="feature__text">
                  Click Create and set up your collection. Add social links, a description, profile &amp; banner images,
                  and set a secondary sales fee.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="feature">
                <span className="feature__icon feature__icon--purple">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M22.71,6.29a1,1,0,0,0-1.42,0L20,7.59V2a1,1,0,0,0-2,0V7.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3A1,1,0,0,0,22.71,6.29ZM19,13a1,1,0,0,0-1,1v.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.7L9.41,11.12a2.85,2.85,0,0,0-3.93,0L4,12.6V7A1,1,0,0,1,5,6h8a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15.46,20Zm13-1a.89.89,0,0,1-.18.53L13.31,15l.7-.7a.77.77,0,0,1,1.1,0L18,17.21Z" />
                  </svg>
                </span>
                <h3 className="feature__title">Add your NFTs</h3>
                <p className="feature__text">
                  Upload your work, add a title and description, and customize your NFTs with properties, stats, and
                  unlockable content.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="feature feature--last">
                <span className="feature__icon feature__icon--red">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M15,12a1,1,0,1,0,1-1A1,1,0,0,0,15,12Zm6.71-.71-5-5A1,1,0,0,0,16,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3H16a1,1,0,0,0,.71-.29l5-5A1,1,0,0,0,21.71,11.29ZM15.59,16H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H15.59l4,4Z" />
                  </svg>
                </span>
                <h3 className="feature__title">List them for sale</h3>
                <p className="feature__text">
                  Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want
                  to sell your NFTs, and we help you sell them!
                </p>
              </div>
            </div>
          </div>
          {/* end get started */}

          {/* news */}
          <section className="row row--grid">
            {/* title */}
            <div className="col-12">
              <div className="main__title">
                <h2>Educational Content</h2>
                <a href="blog.html" className="main__link">
                  View more{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* end title */}
            {/* post */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="post">
                <a href="article.html" className="post__img">
                  <img src="/assets/img/posts/blog1.png" alt="img art" />
                </a>
                <div className="post__content">
                  {/* <a href="#" class="post__category">How To</a> */}
                  <h3 className="post__title">
                    <a href="article.html">How NFT Works</a>
                  </h3>
                  <div className="post__meta">
                    <span className="post__date">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                      </svg>{" "}
                      April 25, 2021
                    </span>
                    <span className="post__comments">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                      </svg>{" "}
                      119
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* end post */}
            {/* post */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="post">
                <a href="article.html" className="post__img">
                  <img src="/assets/img/posts/blog2.png" alt="img art" />
                </a>
                <div className="post__content">
                  {/* <a href="#" class="post__category">Video</a> */}
                  <h3 className="post__title">
                    <a href="article.html">Recording: Create Your Own NFT</a>
                  </h3>
                  <div className="post__meta">
                    <span className="post__date">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                      </svg>{" "}
                      April 24, 2021
                    </span>
                    <span className="post__comments">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                      </svg>{" "}
                      88
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* end post */}
            {/* post */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="post">
                <a href="article.html" className="post__img">
                  <img src="/assets/img/posts/blog4.png" alt="img art" />
                </a>
                <div className="post__content">
                  {/* <a href="#" class="post__category">Education</a> */}
                  <h3 className="post__title">
                    <a href="article.html">What Have NFTs Got to Do With Me Ebook</a>
                  </h3>
                  <div className="post__meta">
                    <span className="post__date">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                      </svg>{" "}
                      April 22, 2021
                    </span>
                    <span className="post__comments">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                      </svg>{" "}
                      54
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* end post */}
          </section>
          {/* end news */}
        </div>
      </main>
    </div>
  );
};

export default HomeComp;
