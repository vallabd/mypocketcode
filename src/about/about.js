import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';

export function About() {
  return (
    <div id="About">
      <div class='fs-1 fw-bold mh container' >About </div>
          <div>
                        <ul className='timeline'>
                          <li>
                              <div class="timeline-image"><img class="rounded-circle img-fluid" src="./img/about/1.jpg"  /></div>
                              <div class="timeline-panel">
                                  <div class="timeline-heading">
                                      <h4>2009-2011</h4>
                                      <h4 class="subheading">Our Humble Beginnings</h4>
                                  </div>
                                  <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                              </div>
                          </li>
                          <li class="timeline-inverted">
                            <div class="timeline-image"><img class="rounded-circle img-fluid" src="./img/about/2.jpg" alt="..." /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>March 2011</h4>
                                    <h4 class="subheading">An Agency is Born</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                          </li>
                          <li >
                            <div class="timeline-image"><img class="rounded-circle img-fluid" src="./img/about/3.jpg" alt="..." /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>March 2011</h4>
                                    <h4 class="subheading">An Agency is Born</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                          </li>
                          <li class="timeline-inverted">
                            <div class="timeline-image"><img class="rounded-circle img-fluid" src="./img/about/4.jpg" alt="..." /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>March 2011</h4>
                                    <h4 class="subheading">An Agency is Born</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                          </li>
                          
                      </ul>
          </div>
          
    </div>
  )
}
