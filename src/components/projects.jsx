import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/Vusar.gif)'}}>
									<div className="desc">
										<div className="con">
											<h3>Vusar</h3>
											<span>At Vusar I was part of the iOS Team that helped develop the application from the ground up. It is an augmented reality application that lets you visualize CAD files in realtime. I was fortunate enough to be a part of this wonderful team.</span>
											<p className="icon">
												<span><a href="https://www.vusar.co" target="_blank"rel="noreferrer" ><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/Chodi.gif)'}}>
									<div className="desc">
										<div className="con">
											<h3>CHODI</h3>
											<span>An iOS & Android application that connects non-profits, individuals, and corporations with each other to donate resources. Made using Flutter.</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/augmaar.gif)'}}>
									<div className="desc">
										<div className="con">
											<h3>Augmaar iOS</h3>
											<span>Augma AR an artwork marketplace where users can preview a picture or painting on their own wall using AR. Sellers may upload their original artwork to sell as poster or canvas prints.</span>
											<p className="icon">
												<span><a href="https://github.com/augmaar/ios-app" target="_blank"rel="noreferrer"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/pythonSE.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>Python Search Engine</h3>
											<span>This project scraps the web using beatiful soup library to build an index in which we later build a search engine. We tokenized all the words giving weight to headings, and when you search a topic the most relevant webpage is the result.</span>
											<p className="icon">
												<span><a href="https://github.com/rodgo1314/Project3_Search_Engine"target="_blank"rel="noreferrer"><i className="icon-share3" /></a></span>
												
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/monopoloy.gif)'}}>
									<div className="desc">
										<div className="con">
											<h3>Monopoly Electronic Bank</h3>
											<span>This was the first app I built using Google's Flutter and Dart programming language. Its a cross platform application with a firebase backend, the purpose was to replace the cash in Monolopy board game.</span>
											<p className="icon">
												<span><a href="https://github.com/rodgo1314/monopoly-electronic-bankapp"target="_blank"rel="noreferrer"><i className="icon-share3" /></a></span>
												
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/moviesApp.gif)'}}>
									<div className="desc">
										<div className="con">
											<h3>Movies App</h3>
											<span>This was my first application using Apple's new SwiftUI. It uses the movies api to request the latest movies I also implemented infinite scroll using pagination.</span>
											<p className="icon">
												<span><a href="https://github.com/rodgo1314/MoviesApp"target="_blank"rel="noreferrer"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</section>
      </div>
    )
  }
}
