import {h, app} from 'hyperapp'

export default function SpecialMenu({state, actions}) {
  return (
    <section id="SpecialMenu" className="texturebg">
        <div className="container">
            <h5 className="comp-title">Special Menu</h5>
            <h2>Delicious Flavor of Autumn</h2>
            <div className="row boxes">
                <div className= "col-md-4">
                    <div className= "box">
                        <div className="box-img"><div className="price-circle">$25</div></div>
                        <span className="title">Grill, No Smoke</span>
                        <p className="details">Synth butcher drinking vinegar viral distillery chartreuse porkless belly chicharrones.</p>
                    </div>
                </div>
                <div className= "col-md-4">
                    <div className= "box">
                        <div className="box-img2"><div className="price-circle">$25</div></div>
                        <span className="title">Feels, No Ooze</span>
                        <p className="details">Synth butcher drinking vinegar viral distillery chartreuse porkless belly chicharrones.</p>
                    </div>
                </div>
                <div className= "col-md-4">
                    <div className= "box">
                        <div className="box-img3"><div className="price-circle">$25</div></div>
                        <span className="title">Fills, No stuffed</span>
                        <p className="details">Synth butcher drinking vinegar viral distillery chartreuse porkless belly chicharrones.</p>
                    </div>
                </div>
            </div>
            <a className="link" href="#">View Full Menu</a>
        </div>
    </section>
  )
}