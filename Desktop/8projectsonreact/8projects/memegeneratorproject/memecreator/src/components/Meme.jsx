export default function Meme() {
  return (
    <div className="memebox">
      <form className="form">
        <div className="inputbox">
          <input type="text" className="forminputleft" />
          <input type="text" className="forminputright" />
        </div>
        <button className="formbtn"> get a new meme image 🃏 </button>
      </form>
    </div>
  );
}
