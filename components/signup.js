function signup(){
    return `
    <div class="signup-page">
        <div class="signup-card">
           <img src="//assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg" alt="">
          <div class="signInContainer">
            <span> <b> Login </b> or <b>Signup</b> </span>

            <input autocomplete="new-password" type="tel" placeholder="+91 |  Mobile Number" maxlength="10" value="">
            
            <span>By continuing, I agree to the <a href="">Terms of Use</a> & <a href="">Privacy Policy</a></span>

            <button id="cont-btn-signup">CONTINUE</button>
            <span>Have trouble logging in ? <a href="">Get help</a></span>
          </div>
        </div>
     </div>
    `;
}
export default signup;