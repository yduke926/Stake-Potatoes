import {h, app} from 'hyperapp'

export default function ContactUs({state, actions}) {
  return (
    <section id="ContactUs" className="texturebg">
        <div className="container">
            <h5 className="comp-title">Contact Us</h5>
            <h2>We are kind to every kind</h2>

            <div className="box">
              <div className="row">
                <div className="col-md-6">
                  <div className="title">
                    Atlanta, Georgia
                  </div>
                  <h6 className="Address">
                  357 Main St <br/>
                  Atlanta, GA 30318
                  </h6>
                  <p>
                    <strong>email:</strong> <a href="mailto:info@stakeandpotatoes.com">info@stakeandpotatoes.com</a>
                  </p>
                </div>
                <div className="col-md-6">
                  <h6 className>
                  Call directly:
                  </h6>
                  <div className="title">
                  470 234 1256
                  </div>
                  <h6 className>
                  Lunch Service:
                  </h6>
                  <p>
                    Friday, Saturday, & Sunday <br/> from 11pm - 2pm
                  </p>
                  <h6 className>
                  Dinner Service:
                  </h6>
                  <p>
                    Daily <br/> from 5pm - 10pm
                  </p>
                </div>
              </div>
            </div>
        </div>
        <div className="map-img"></div>
    </section>
  )
}