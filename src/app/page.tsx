export default function Home(): JSX.Element {
	return (
		<main id="main">
			<section className="hero">
				<figure className="img-div" id="img-div">
					{/* eslint-disable-next-line */}
					<img
						src="https://i.postimg.cc/FRwxFwmH/bonjobi-wallpaper.jpg"
						alt="bon jovi"
						className="image"
						id="image"
					/>
					<figcaption id="img-caption">.</figcaption>
				</figure>
				<div className="title-container">
					<p className="under-title">Jon</p>
					<h1 id="title">Bon Jovi</h1>
					<hr />
				</div>
				<article className="summary">
					<h2 className="subtitle">American singer, songwriter, guitarist, and actor</h2>
					<p className="summary-info">
						He is best known as the founder and frontman of the rock band Bon Jovi,
						which was formed in 1983. He has released 15 studio albums with his band as
						well as two solo albums. As a songwriter, Bon Jovi was inducted into the
						Songwriters Hall of Fame in 2009. In 2012, he ranked number 50 on the list
						of Billboard magazine&apos;s &quot;Power 100&quot;, a ranking of &quot;The
						Most Powerful and Influential People in the Music Business.
					</p>
					<p className="link-text">
						<a id="tribute-link" href="https://shop.bonjovi.com/" target="_blank">
							Go to Bon Jovi&apos;s store
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 -960 960 960"
								width="24"
							>
								<path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z" />
							</svg>
						</a>
					</p>
				</article>
			</section>
			<section id="tribute-info">
				<article className="grid1">
					<h3 className="grid1-title">Things</h3>
					<h3 className="grid1-title sub">About Jon</h3>
					<h4 className="grid1-subtitle">
						The Golden Years: Slippery When Wet and New Jersey
					</h4>
					<p className="grid1-text">
						After not achieving the desired impact with their previous release, they
						started working with the composer Desmond Child, with whom they composed
						three of the tracks for their third LP, Slippery When Wet: &quot;Livin&apos;
						on a Prayer,&quot; &quot;You Give Love a Bad Name,&quot; and &quot;Without
						Love.&quot; Bruce Fairbairn and Bob Rock were in charge of production and
						mixing, respectively.
					</p>
					<p className="link-text">
						<a
							id="tribute-link"
							href="https://en.wikipedia.org/wiki/Jon_Bon_Jovi"
							target="_blank"
						>
							To Bon Jovi&apos;s Wiki
						</a>
					</p>
				</article>
				<article className="grid2">
					<section className="bio">
						<h3 className="grid2-subtitle">Solo career</h3>
						<p className="bio-text">
							In 1990, Jon Bon Jovi recorded a soundtrack to the movie Young Guns II
							more commonly known as Blaze of Glory. Having been originally approached
							by his friend Emilio Estevez to lend &quot;Wanted Dead or Alive&quot; as
							the theme song for his upcoming Billy the Kid sequel, Bon Jovi ended up
							composing an all-new theme song for the film&apos;s soundtrack and
							delivering his first solo album. The album featured guests such as Elton
							John, Little Richard and Jeff Beck. The title track, &quot;Blaze of
							Glory&quot;, peaked at number one on the Billboard Hot 100. In 1991,
							&quot;Blaze of Glory&quot; won an award for Favorite Pop/Rock Single at
							the American Music Awards and awarded a Golden Globe, as well. The song
							also earned him an Academy Award nomination and a Grammy Award
							nomination.
						</p>
					</section>
					<section className="bio-info">
						<div className="info">
							<span>
								<p className="data">120+</p>
								<p className="data">million</p>
							</span>
							<span>
								<p>Records</p>
								<p>Sold</p>
							</span>
						</div>
						<div className="info">
							<span>
								<p className="data">2700+</p>
							</span>
							<span>
								<p>Performed</p>
								<p>concerts</p>
							</span>
						</div>
					</section>
				</article>
			</section>
		</main>
	)
}
