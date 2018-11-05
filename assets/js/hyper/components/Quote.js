import {h, app} from 'hyperapp'

export default function Quote({state, actions}) {
  return (
    <section id="Quote" style={{backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0)0,#000 150%), url("https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=70078feab235ec03658693bdd77f6d71&auto=format&fit=crop&w=2100&q=80")'}}>
        <div className="container">
           <div className="col-sm-4 quote">"Eating is a necessity, but cooking is an art" <br/><strong> - Spicy Goulash - </strong></div>
        </div>
    </section>
  )
}