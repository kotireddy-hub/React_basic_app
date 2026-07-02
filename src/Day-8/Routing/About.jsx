function About() {
    return (
        <div className="about-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="leftside">
                <h1>About US</h1>
                <p>I am an AI assistant created by Google, designed to help you process information, write, code, analyze data, and navigate the web quickly.If you are trying to craft an About Us page for your own website or business, I can help you structure it to build trust and connect with your audience. An effective page typically includes:Your Mission & Vision: What your brand stands for and why you exist.Brand Story: How your business got started.Customer Value: How your product or service solves your customers' specific problems.The Team: Photos and bios of the people behind the scenes to add a human touch</p>
                <button>Learn More</button>
            </div>
            <div className="rightside">
                <img src="https://d1hdtc0tbqeghx.cloudfront.net/wp-content/uploads/2024/03/01115727/Best-About-Us-Page-Examples.jpg" alt="About Us"  width="800" />
            </div>
        </div>
    );
}

export default About;

/*

<div className="about-container">
<div className="leftside">
</div>
<div className="rightside">
</div>
</div>
*/