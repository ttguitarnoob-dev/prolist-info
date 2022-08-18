import { Link } from "react-router-dom"

const Home = () => {


    return (
        <div>
            <h2>ProList Homepage</h2>
            <section className="container">
                <Link to={'/who-we-are'}>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://picsum.photos/200" />
                        </div>
                        <div className="card-title">
                            <h2>Who We Are</h2>
                        </div>
                    </div>
                </Link>
                <Link to={'/what-we-do'}>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://picsum.photos/200" />
                        </div>
                        <div className="card-title">
                            <h2>What We Do</h2>
                        </div>
                    </div>
                </Link>
                <Link to={'/where-we-work'}>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://picsum.photos/200" />
                        </div>
                        <div className="card-title">
                            <h2>Where We Work</h2>
                        </div>
                    </div>
                </Link>
                <Link to={'/selling-tips'}>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://picsum.photos/200" />
                        </div>
                        <div className="card-title">
                            <h2>Selling Tips</h2>
                        </div>
                    </div>
                </Link>
                <Link to={'/get-started'}>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://picsum.photos/200" />
                        </div>
                        <div className="card-title">
                            <h2>Get Started</h2>
                        </div>
                    </div>
                </Link>
            </section>
        </div>
    )
}

export default Home