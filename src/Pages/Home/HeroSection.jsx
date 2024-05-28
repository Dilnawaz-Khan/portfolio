export default function HeroSection() {
  const downloadResume = () => {
    const resumePath = "/resume/Resume.pdf";
    fetch(resumePath)
      .then((response) => response.blob())
      .then((blob) => {
        console.log(blob, "--->downloadResume");
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Dilnawaz-Khan.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Dilnawaz Khan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">React Native</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Creating impactful mobile experiences with React Native.
            <br /> Passionate about delivering high-performance, user-centric
            applications.
          </p>
        </div>
        <button className="btn btn-primary" onClick={downloadResume}>
          Resume
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
