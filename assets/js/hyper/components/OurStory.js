import {h, app} from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
    <section id="OurStory">
        <div className="container">
            <div className="col-md-6">
                <div className="row">
                    <h5 className="comp-title">
                        Our Story
                    </h5>
                    <h2>
                        Cooking is the art of adjustment
                    </h2>
                    <p>
                    Lyft try-hard chia vexillologist. Single-origin coffee vegan pabst health goth, umami tousled fingerstache meh you probably haven't heard of them salvia unicorn poke green juice live-edge man braid. Put a bird on it af woke, raw denim meditation hell of flexitarian distillery occupy small batch vexillologist. Sustainable edison bulb succulents synth keffiyeh hot chicken retro listicle yuccie neutra.
                    </p>
                    <div className="quote"> "The quality of the steak amazes...I'm sorry, did you say it isn't meat?" <strong> <br/>- Don Blanco -</strong>
                    </div>
                    <a href ="#" className="reserve-btn">Reservation</a>
                </div>
            </div>
            <div className="col-md-6">
                <div className="row">
                    <div className ="video-img">
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}