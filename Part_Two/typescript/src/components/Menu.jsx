import React, {useState} from "react";


const Menu = () => {
   const [profile, setProfile] = useState({
    login: false,
    signup: false,
    passkey: true,
    name: "",
    username: "",
    password: "",
    email: "",
  });

  return (
    <div>
      <form
        id="login-form"
        ref={formRef}
        onSubmit={submitLogin}
        className={profile.login ? "field" : "hide-field"}
      >
        <div className="input-field">
          
          <span className="icon-left">
            <FiMail />
          </span>
          <input
            required={true}
            type="text"
            value={profile.username}
            onChange={(evt) => {
              setProfile({ ...profile, username: evt.target.value });
            }}
            placeholder="username"
          />
          <span className="icon-right">
            <AiOutlineCheck />
          </span>
        </div>
        <div className="input-field">
          <span
            className="icon-left"
            onClick={() =>
              setProfile({ ...profile, passkey: !profile.passkey })
            }
          >
            {/* toggle password visibiliy icon */}
            {profile.passkey ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
          <input
            required={true}
            value={profile.password}
            type={profile.passkey ? "password" : "text"}
            minLength={8}
            onChange={(evt) => {
              setProfile({ ...profile, password: evt.target.value });
            }}
            placeholder="password"
          />
          <span className="icon-right">
            <AiOutlineCheck />
          </span>
        </div>
      </form>
    </div>
  );
};

export default Menu;
