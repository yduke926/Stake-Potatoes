import {h, app} from 'hyperapp'

export default function Reviews({state, actions}) {
  return (
    <section id="Reviews">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="side-img">
                        <img src ="http://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669807fgp5t.png"></img>
                    </div>
                </div>
                <div className="col-md-4">
                    <h5 className="comp-title">Reviews</h5>
                    <h2>Food & <br/> Wine</h2>
                    <h4>"Best Restaurant in the ATL area!"</h4>
                    <p>Keytar bushwick health goth, tilde readymade prism tacos live-edge vexillologist scenester hashtag PBR&B kale chips. Air plant +1 plaid tousled fam, tilde iceland tbh meditation hammock glossier locavore. </p>
                    <div className="author"><strong>An Nguyen</strong><em>- Winner of Iron Chef</em></div>
                    <div className="arrows">
                        <i class="fas fa-arrow-left"></i>
                        <i class="fas fa-arrow-right ready"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}