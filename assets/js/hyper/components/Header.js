import {h, app} from 'hyperapp'

export default function Header({state, actions}) {
  return (
    <header>
        <div className= "container">
            <div className="logo">
                <img src ="https://svgsilh.com/svg/1588125.svg"></img>
            </div>
            <nav>
                <a href="#">Our Story</a>
                <a href="#">Reviews</a>
                <a href="#">Special Menu</a>
                <a href="#">Reservations</a>
                <i class="fas fa-angle-right"></i>
                <a href="#">Contact Us</a>
            </nav>
        </div>
    </header>
  )
}
