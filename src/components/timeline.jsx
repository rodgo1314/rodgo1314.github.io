import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at <a href="https://www.vusar.co" target="_blank" rel="noreferrer">Vusar</a> <span>2019-present</span></h2>
                        <p>Vusar is a design visualization platform that empowers design teams to easily present, share and collaborate on their product design with others. Here I worked on the augmented reality application side of the platform specifically on the iOS Team. I worked and coordinated with web and backend teams to ensure proper data retrieval from our RESTful API services.  I helped develop the application’s library menu using a combination of MVC and MVVM architectures, to fetch and display users’ 3D CAD models and files from Vusar’s database. Practiced Bi-Weekly Project Deadlines and Team Workflow management, in an Agile environment. I helped write the first lines of code for iOS App and improved performance by 33% alongside a team of students. We used Grand Dispatch Central framework / Multi-threaded, Network Calls, URLSession, User Persistence As well as used CI/CD for automated testing and Fastlane for deployment, as well as user data for data driven decisions on the product. Worked on business side of product as an associate product manager.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>STEM Instructor at Dream for Schools <span>2019-2020</span></h2>
                        <p>Dreams for Schools is a 501(c)(3) that oversees programs and initiatives that contribute to educating youth about Science, Technology, Engineering & Math fields. The main outreach program of the organization is the AppJam+ initiative. While here I helped develop and teach curriculum in various concepts specifically is Computer Science and Mobile Development. I taught classes in large groups of  K-12 students,and  engaged students using innovative and creative techniques to capture interests while facilitating classroom discussions.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Univeristy of California, Irvine <span>2016-2020</span><h5>B.S. in Business Information Management</h5></h2>
                        
                        <p>The Business Information Management degree administered by the Donald Bren School of Information and Computer Sciences is a collaborative, interdisciplinary degree program between the Bren School and The Paul Merage School of Business. The program taught me to understand and then apply the theories and concepts of a broad, integrated curriculum covering computing, informatics, business fundamentals, and analytical decision-making. The curriculum is presented across three general academic areas: Computing (computer science, informatics, and software); Business Foundations (accounting, finance, marketing, strategy, and operations); and Analytical Methods (mathematics, statistics, economics, management science, and decision analysis). The fundamentals of information and computer science, including the rudiments of software design and construction with an emphasis on data management, provide the foundation for understanding, describing, and evaluating the technology through which most business information is gathered and presented. The business fundamentals, covering all the functional areas in the Merage School, provide a background and context in which information and its analysis will be applied.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
