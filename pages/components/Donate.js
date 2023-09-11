import React from "react";

export default function Donate() {
  return (
    <div>
        <div className="card w-96 glass">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Support us</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
    <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="64C9BU26ZEWWW" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_BG/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>
  </div>
</div>
      
    </div>
  );
}
