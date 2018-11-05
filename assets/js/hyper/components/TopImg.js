import {h, app} from 'hyperapp'

export default function TopImg({state, actions}) {
  return (
    <section id="TopImg">
        <div className="container">
            <div className ="title">
            <h5>
                Welcome
            </h5>
            <h1>
                Stake & Potatoes
            </h1>
            </div>
            <div className="contact-info">
                <div className="container">
                    <div className="booking">Book a table directly</div>
                    <h2>(470) 122 7234</h2>
                    <div className="hours">
                    Opening Hours <strong> Mon - Fri: </strong> 9am - 9pm
                    <strong> Weekend: </strong> 9am - 11pm
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}