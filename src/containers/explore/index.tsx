import Link from 'next/link';

const ExploreComp = () => {
	return (
		<div>
			{/* main content */}
			<main className="main">
				<div className="container">
					<div className="row row--grid">
						{/* breadcrumb */}
						<div className="col-12">
							<ul className="breadcrumb">
								<li className="breadcrumb__item">
									<a href="index2.html">Home</a>
								</li>
								<li className="breadcrumb__item breadcrumb__item--active">Explore</li>
							</ul>
						</div>
						{/* end breadcrumb */}
						{/* title */}
						<div className="col-12">
							<div className="main__title main__title--page">
								<h1>Explore exclusive digital assets</h1>
							</div>
						</div>
						{/* end title */}
					</div>
					<div className="row">
						{/* sidebar */}
						<div className="col-12 col-xl-3 order-xl-2">
							<div className="filter-wrap">
								<button
									className="filter-wrap__btn"
									type="button"
									data-toggle="collapse"
									data-target="#collapseFilter"
									aria-expanded="false"
									aria-controls="collapseFilter"
								>
									Open filter
								</button>
								<div className="collapse filter-wrap__content" id="collapseFilter">
									{/* filter */}
									<div className="filter">
										<h4 className="filter__title">
											Filters <button type="button">Clear all</button>
										</h4>
										<div className="filter__group">
											<label className="filter__label">Keyword:</label>
											<input type="text" className="filter__input" placeholder="Keyword" />
										</div>
										<div className="filter__group">
											<label htmlFor="sort" className="filter__label">
												Sort by:
											</label>
											<div className="filter__select-wrap">
												<select name="sort" id="sort" className="filter__select">
													<option value={0}>Relevance</option>
													<option value={1}>Newest</option>
													<option value={2}>Oldest</option>
												</select>
											</div>
										</div>
										<div className="filter__group">
											<label className="filter__label">Category:</label>
											<ul className="filter__checkboxes">
												<li>
													<input id="type5" type="checkbox" name="type5" defaultChecked />
													<label htmlFor="type5">Art</label>
												</li>
												<li>
													<input id="type6" type="checkbox" name="type6" />
													<label htmlFor="type6">Photography</label>
												</li>
												<li>
													<input id="type7" type="checkbox" name="type7" defaultChecked />
													<label htmlFor="type7">Games</label>
												</li>
												<li>
													<input id="type8" type="checkbox" name="type8" defaultChecked />
													<label htmlFor="type8">Metaverses</label>
												</li>
												<li>
													<input id="type9" type="checkbox" name="type9" />
													<label htmlFor="type9">Music</label>
												</li>
												<li>
													<input id="type10" type="checkbox" name="type10" />
													<label htmlFor="type10">Domains</label>
												</li>
												<li>
													<input id="type11" type="checkbox" name="type11" />
													<label htmlFor="type11">Memes</label>
												</li>
											</ul>
										</div>
										<div className="filter__group">
											<button className="filter__btn" type="button">
												APPLY FILTER
											</button>
										</div>
									</div>
									{/* end filter */}
								</div>
							</div>
						</div>
						{/* end sidebar */}
						{/* content */}
						<div className="col-12 col-xl-9 order-xl-1">
							<div className="row row--grid">
								<div className="col-12 col-sm-6 col-lg-4">
									{/* card */}
									<div className="card">
										<a href="item2.html" className="card__cover">
											<img src="/assets/img/art/art1.png" alt />
										</a>
										<h3 className="card__title">
											<a>
												<Link href={`/item`}>Ether in Air</Link>
											</a>
										</h3>
										<div className="card__author">
											<img src="/assets/img/avatars/avatar.jpg" alt />
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
								<div className="col-12 col-sm-6 col-lg-4">
									{/* carousel card */}
									<div className="card">
										<a href="item2.html" className="card__cover">
											<img src="/assets/img/art/art2.png" alt />
										</a>
										<h3 className="card__title">
											<a>
												<Link href={`/item`}>Ether in Air</Link>
											</a>
										</h3>
										<div className="card__author card__author--verified">
											<img src="/assets/img/avatars/avatar2.jpg" alt />
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
								<div className="col-12 col-sm-6 col-lg-4">
									{/* card */}
									<div className="card">
										<a href="item2.html" className="card__cover">
											<img src="/assets/img/art/art3.png" alt />
											<span className="card__time">an hour left</span>
										</a>
										<h3 className="card__title">
											<a>
												<Link href={`/item`}>Ether in Air</Link>
											</a>
										</h3>
										<div className="card__author card__author--verified">
											<img src="/assets/img/avatars/avatar3.jpg" alt />
											<a href="author.html">@neo</a>
										</div>
										<div className="card__info">
											<div className="card__price">
												<span>Current price</span>
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
								<div className="col-12 col-sm-6 col-lg-4">
									{/* card */}
									<div className="card">
										<a href="#modal-asset" className="card__cover open-modal">
											<img src="/assets/img/art/art4.png" alt />
											<span className="card__time">15 minutes left</span>
										</a>
										<h3 className="card__title">
											<a>
												<Link href={`/item`}>Ether in Air</Link>
											</a>
										</h3>
										<div className="card__author">
											<img src="/assets/img/avatars/avatar4.jpg" alt />
											<a href="author.html">@min1max</a>
										</div>
										<div className="card__info">
											<div className="card__price">
												<span>Current price</span>
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
								<div className="col-12 col-sm-6 col-lg-4">
									{/* card */}
									<div className="card">
										<a href="item2.html" className="card__cover">
											<img src="/assets/img/art/art5.png" alt />
										</a>
										<h3 className="card__title">
											<a>
												<Link href={`/item`}>Ether in Air</Link>
											</a>
										</h3>
										<div className="card__author card__author--verified">
											<img src="/assets/img/avatars/avatar5.jpg" alt />
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
								<div className="col-12 col-sm-6 col-lg-4">
									{/* card */}
									<div className="card">
										<a href="item2.html" className="card__cover">
											<img src="/assets/img/art/art6.png" alt />
										</a>
										<h3 className="card__title">
											<a>
												<Link href={`/item`}>Ether in Air</Link>
											</a>
										</h3>
										<div className="card__author card__author--verified">
											<img src="/assets/img/avatars/avatar9.jpg" alt />
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
								<div className="col-12 col-sm-6 col-lg-4">
									{/* video card */}
									<div className="card">
										<a href="item2.html" className="card__cover card__cover--video">
											<img src="/assets/img/art/art7.png" alt />
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
											<img src="/assets/img/avatars/avatar10.jpg" alt />
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
								<div className="col-12 col-sm-6 col-lg-4">
									{/* card */}
									<div className="card">
										<a href="item2.html" className="card__cover">
											<img src="/assets/img/art/art8.png" alt />
											<span className="card__time">15 minutes left</span>
										</a>
										<h3 className="card__title">
											<a>
												<Link href={`/item`}>Ether in Air</Link>
											</a>
										</h3>
										<div className="card__author">
											<img src="/assets/img/avatars/avatar11.jpg" alt />
											<a href="author.html">@aaarthur</a>
										</div>
										<div className="card__info">
											<div className="card__price">
												<span>Current price</span>
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
								<div className="col-12 col-sm-6 col-lg-4">
									{/* card */}
									<div className="card">
										<a href="item2.html" className="card__cover">
											<img src="/assets/img/art/art2.png" alt />
										</a>
										<h3 className="card__title">
											<a>
												<Link href={`/item`}>Ether in Air</Link>
											</a>
										</h3>
										<div className="card__author">
											<img src="/assets/img/avatars/avatar.jpg" alt />
											<a href="author.html">@nickname</a>
										</div>
										<div className="card__info">
											<div className="card__price">
												<span>Reserve price</span>
												<span>3.33 ETH</span>
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
							</div>
							{/* paginator */}
							<div className="row row--grid">
								<div className="col-12">
									<div className="paginator">
										<span className="paginator__pages">9 from 169</span>
										<ul className="paginator__list">
											<li>
												<a href="#">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
													</svg>
												</a>
											</li>
											<li className="active">
												<a href="#">1</a>
											</li>
											<li>
												<a href="#">2</a>
											</li>
											<li>
												<a href="#">3</a>
											</li>
											<li>
												<a href="#">4</a>
											</li>
											<li>
												<a href="#">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
													</svg>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							{/* end paginator */}
						</div>
						{/* end content */}
					</div>
				</div>
			</main>
		</div>
	);
};

export default ExploreComp;
