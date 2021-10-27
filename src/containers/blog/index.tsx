const BlogComp = () => {
	return (
		<main className="main">
			<div className="container">
				<div className="row row--grid">
					{/* breadcrumb */}
					<div className="col-12">
						<ul className="breadcrumb">
							<li className="breadcrumb__item">
								<a href="index2.html">Home</a>
							</li>
							<li className="breadcrumb__item breadcrumb__item--active">Blog</li>
						</ul>
					</div>
					{/* end breadcrumb */}
					{/* title */}
					<div className="col-12">
						<div className="main__title main__title--page">
							<h1>Our Blog</h1>
						</div>
					</div>
					{/* end title */}
					{/* filter */}
					<div className="col-12">
						<div className="main__filter">
							<form action="#" className="main__filter-search">
								<input type="text" placeholder="Search..." />
								<button type="button">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
									</svg>
								</button>
							</form>
							<div className="main__filter-wrap">
								<select className="main__select" name="status">
									<option value={0}>Relevance</option>
									<option value={1}>Newest</option>
									<option value={2}>Oldest</option>
								</select>
								<select className="main__select" name="category">
									<option value="All genres">All categories</option>
									<option value={1}>Art</option>
									<option value={2}>Photography</option>
									<option value={3}>Games</option>
									<option value={4}>Metaverses</option>
									<option value={5}>Music</option>
									<option value={6}>Domains</option>
									<option value={7}>Memes</option>
								</select>
							</div>
						</div>
					</div>
					{/* end filter */}
				</div>
				<div className="row row--grid">
					{/* post */}
					<div className="col-12 col-sm-6 col-lg-4">
						<div className="post">
							<a href="article.html" className="post__img">
								<img src="/assets/img/posts/2.jpg" alt="img_el" />
							</a>
							<div className="post__content">
								<a href="#" className="post__category">
									Digital Art
								</a>
								<h3 className="post__title">
									<a href="article.html">A Month of Rare Digital Art from MakersPlace</a>
								</h3>
								<div className="post__meta">
									<span className="post__date">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
										</svg>{' '}
										April 24, 2021
									</span>
									<span className="post__comments">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
										</svg>{' '}
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
								<img src="/assets/img/posts/3.jpg" alt="img_el" />
							</a>
							<div className="post__content">
								<a href="#" className="post__category">
									Digital Art
								</a>
								<h3 className="post__title">
									<a href="article.html">
										The beginners guide to creating &amp; selling digital art NFTs
									</a>
								</h3>
								<div className="post__meta">
									<span className="post__date">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
										</svg>{' '}
										April 22, 2021
									</span>
									<span className="post__comments">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
										</svg>{' '}
										54
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
								<img src="/assets/img/posts/1.jpg" alt="img_el" />
							</a>
							<div className="post__content">
								<a href="#" className="post__category">
									Charity
								</a>
								<h3 className="post__title">
									<a href="article.html">Save Thousands Of Lives Through This NFT</a>
								</h3>
								<div className="post__meta">
									<span className="post__date">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
										</svg>{' '}
										April 25, 2021
									</span>
									<span className="post__comments">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
										</svg>{' '}
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
								<img src="/assets/img/posts/4.jpg" alt="img_el" />
							</a>
							<div className="post__content">
								<a href="#" className="post__category">
									Digital Art
								</a>
								<h3 className="post__title">
									<a href="article.html">A Month of Rare Digital Art from MakersPlace</a>
								</h3>
								<div className="post__meta">
									<span className="post__date">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
										</svg>{' '}
										April 27, 2021
									</span>
									<span className="post__comments">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
										</svg>{' '}
										0
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
								<img src="/assets/img/posts/5.jpg" alt="img_el" />
							</a>
							<div className="post__content">
								<a href="#" className="post__category">
									Collectibles
								</a>
								<h3 className="post__title">
									<a href="article.html">Rare NFT Series</a>
								</h3>
								<div className="post__meta">
									<span className="post__date">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
										</svg>{' '}
										April 28, 2021
									</span>
									<span className="post__comments">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
										</svg>{' '}
										102
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
								<img src="/assets/img/posts/6.jpg" alt="img_el" />
							</a>
							<div className="post__content">
								<a href="#" className="post__category">
									Domains
								</a>
								<h3 className="post__title">
									<a href="article.html">Control Your Own Top Level Domain on the DNS &amp; ENS</a>
								</h3>
								<div className="post__meta">
									<span className="post__date">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
										</svg>{' '}
										April 28, 2021
									</span>
									<span className="post__comments">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
										</svg>{' '}
										325
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
								<img src="/assets/img/posts/2.jpg" alt="img_el" />
							</a>
							<div className="post__content">
								<a href="#" className="post__category">
									Digital Art
								</a>
								<h3 className="post__title">
									<a href="article.html">A Month of Rare Digital Art from MakersPlace</a>
								</h3>
								<div className="post__meta">
									<span className="post__date">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
										</svg>{' '}
										April 24, 2021
									</span>
									<span className="post__comments">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
										</svg>{' '}
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
								<img src="/assets/img/posts/3.jpg" alt="img_el" />
							</a>
							<div className="post__content">
								<a href="#" className="post__category">
									Digital Art
								</a>
								<h3 className="post__title">
									<a href="article.html">
										The beginners guide to creating &amp; selling digital art NFTs
									</a>
								</h3>
								<div className="post__meta">
									<span className="post__date">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
										</svg>{' '}
										April 22, 2021
									</span>
									<span className="post__comments">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
										</svg>{' '}
										54
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
								<img src="/assets/img/posts/1.jpg" alt="img_el" />
							</a>
							<div className="post__content">
								<a href="#" className="post__category">
									Charity
								</a>
								<h3 className="post__title">
									<a href="article.html">Save Thousands Of Lives Through This NFT</a>
								</h3>
								<div className="post__meta">
									<span className="post__date">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
										</svg>{' '}
										April 25, 2021
									</span>
									<span className="post__comments">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
										</svg>{' '}
										119
									</span>
								</div>
							</div>
						</div>
					</div>
					{/* end post */}
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
		</main>
	);
};

export default BlogComp;
