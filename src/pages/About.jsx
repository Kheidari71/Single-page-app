import me from "./me.jpg";
export default function About() {
    return (
        <div className="AboutContainer">
            <div className="ImgDiv">
                <img className="AboutImg" src={me} alt="img" />
            </div>
            <h2 className="h2Introduce">About me</h2>
            <p>I am a passionate and self-motivated interactive designer with a diverse range of skills in both creative and technical parts of web technologies, graphic design and UX UI design, and motion graphics also familiar with gaming and visual effects applications and 3d environment.
                I love creation and art and don't spend a day without it. I have a good knowledge of designing applications by Adobe XD and building websites using Html, CSS, JavaScript, and React.
                When I am free, I like being among people, communicating with them and spending time with my friends. It helps me open my mind to new ideas to start another creative project.

            </p>
        </div>
    );
}