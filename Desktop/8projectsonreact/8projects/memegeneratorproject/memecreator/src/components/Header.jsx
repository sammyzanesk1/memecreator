import headerlogo from "/assets/headerlogo.png";

export default function Header() {
  return (
    <>
      <header className="headerbox">
        <img src={headerlogo} className="headerlogo" />
        <h3 className="headername">Meme Generator</h3>
        <p>React Course - Project 3</p>
      </header>
    </>
  );
}
