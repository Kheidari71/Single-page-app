import portfolio from "./portfolio.jpeg";
export default function Home() {
    return (
        <div className="HomeContainer">
            <h1>WELCOME TO MY ART WORLD</h1>
            <div className="HomeImgDiv">
                <img className="PortfolioImg" src={portfolio} alt="Portfolio" />
                <a href=""><button className="btn">See all</button></a>
            </div>
        </div>
    );
}