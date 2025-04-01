import Bullet from "../components/bullet";

import MyImage from "../assets/images/personal.png";

import "../styles/home.css"

export function meta({}) {
  return [
    { title: "Cyshul" },
    { name: "Cyshul", content: "Welcome to Anshul's Personal Website!" },
  ];
}

export default function HomeView() {

  return (
    <div style={{width: "100%", height: "100%"}} className="column">
      <div className="row main-section" style={{overflow: "auto"}}>
        <div className="row" style={{gap: "15px", height: "fit-content"}}>
          <div className="left-panel column-center">
            <div className="left-panel-card-main column-center">
              <div className="column-center" style={{gap: "5px"}}>
                <div className="avatar-con column-center">
                  <img className="avatar-main" src={MyImage}/>
                </div>
                <div className="row-center" style={{gap: "5px", justifyContent: "space-evenly", width: "100%"}}>
                  <a className="row-center icon-link" href="https://instagram.com/very.anshul" style={{padding: "0px", background: "transparent"}}>
                    <img className="icon-img" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"/>
                  </a>
                  <a className="row-center icon-link" href="https://discord.gg/SHJSg8QnrD" style={{padding: "0px", background: "transparent"}}>
                    <img className="icon-img" src="https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg" style={{borderRadius: "7px"}}/>
                  </a>
                  <a className="row-center icon-link" href="https://github.com/aceexpert">
                    <img className="icon-img" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                  </a>
                  <a className="row-center icon-link" href="https://github.com/sputh-the-pigeon">
                    <img className="icon-img" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                  </a>
                </div>
              </div>
              <div className="personal-info-grid">
                <div className="contact-info column card-class-1">
                  <p style={{fontSize: "17px", fontWeight: "700", letterSpacing: "5px", alignSelf: "center"}}>CONTACTS</p>
                  <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "-5px"}}></div>
                  <div className="column" style={{gap: "20px"}}>
                    <div className="row-center" style={{padding: "0px 10px", gap: "5px"}}>
                      <Bullet icon={'email'} size="18px"/>
                      <a href="mailto:very.anshul@gmail.com" className="email-style" style={{fontSize: "14px", fontWeight: "600", color: "mediumvioletred"}}>very.anshul@gmail.com</a>
                    </div>
                    <div className="row-center" style={{padding: "0px 10px", gap: "5px"}}>
                      <Bullet icon={'phone'} size="18px"/>
                      <a href="tel:+918318851834" className="email-style" style={{fontSize: "14px", fontWeight: "600", color: "mediumpurple"}}>+91 8318851834</a>
                    </div>
                    <div className="row-center" style={{padding: "0px 10px", gap: "5px"}}>
                      <Bullet icon={'location_on'} size="18px"/>
                      <a href="" className="email-style" style={{fontSize: "14px", fontWeight: "600"}}>Kharagpur, WB, India</a>
                    </div>
                    <div className="row-center" style={{padding: "0px 10px", gap: "5px"}}>
                      <Bullet icon={'home'} size="18px"/>
                      <a href="" className="email-style" style={{fontSize: "14px", fontWeight: "600"}}>Chennai, India</a>
                    </div>
                    <div className="row-center" style={{padding: "0px 10px", gap: "5px"}}>
                      <Bullet icon={'code'} size="18px"/>
                      <a href="https://github.com/aceexpert" className="email-style" style={{fontSize: "14px", fontWeight: "600", color: "purple"}}>AceExpert [GitHub]</a>
                    </div>
                    <div className="row-center" style={{padding: "0px 10px", gap: "5px"}}>
                      <Bullet icon={'link'} size="18px"/>
                      <a href="https://cyshul.com" className="email-style" style={{fontSize: "14px", fontWeight: "600", color: "purple"}}>cyshul.com</a>
                    </div>
                  </div>
                </div>

                <div className="edu-info column card-class-1">
                  <p style={{fontSize: "15px", fontWeight: "700", letterSpacing: "5px", alignSelf: "center"}}>EDUCATION</p>
                  <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "-5px"}}></div>
                  <div className="column" style={{gap: "10px"}}>
                    <div className="row-center" style={{padding: "0px 10px", gap: "5px"}}>
                      <Bullet size="18px"/>
                      <a href="http://iitkgp.ac.in" className="email-style" style={{fontSize: "16px"}}><b style={{color: "purple"}}>IIT Kharagpur</b></a>
                    </div>
                    <div className="column" style={{padding: "0px 10px 0px 50px", gap: "5px"}}>
                      <a href="" className="email-style" style={{fontSize: "14px"}}><b>1st year</b></a>
                      <a href="http://ise.iitkgp.ac.in/" className="email-style" style={{fontSize: "14px"}}><b>B.Tech</b> in <b style={{color: "mediumorchid"}}>Industrial & Systems Engineering</b></a>
                    </div>
                  </div>
                </div>

                <div className="skill-info column card-class-1">
                  <p style={{fontSize: "15px", fontWeight: "700", letterSpacing: "5px", alignSelf: "center"}}>SKILLS</p>
                  <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "-5px"}}></div>
                  <div className="column" style={{gap: "10px"}}>
                    <div className="row-center" style={{padding: "0px 10px", gap: "5px"}}>
                      <Bullet/>
                      <a href="" className="email-style" style={{fontSize: "14px", fontWeight: "700"}}>Python</a>
                    </div>
                    <div className="row-center" style={{padding: "0px 10px", gap: "5px"}}>
                      <Bullet/>
                      <a href="" className="email-style" style={{fontSize: "14px", fontWeight: "700"}}>C/C++</a>
                    </div>
                    <div className="column" style={{padding: "0px 10px 0px 50px", gap: "5px"}}>
                      <a href="" className="email-style" style={{fontSize: "14px"}}>Embedded</a>
                      <a href="" className="email-style" style={{fontSize: "14px"}}><b>ESP-IDF</b> for <b>Espressif</b> chips</a>
                      <a href="" className="email-style" style={{fontSize: "14px"}}>Arduino</a>
                    </div>
                    <div className="row-center" style={{padding: "0px 10px", gap: "5px"}}>
                      <Bullet/>
                      <a href="" className="email-style" style={{fontSize: "14px", fontWeight: "700"}}>JavaScript</a>
                    </div>
                    <div className="column" style={{padding: "0px 10px 0px 50px", gap: "5px"}}>
                      <a href="" className="email-style" style={{fontSize: "14px"}}>React</a>
                      <a href="" className="email-style" style={{fontSize: "14px"}}>React Native</a>
                    </div>
                    <div className="row-center" style={{padding: "0px 10px", gap: "5px"}}>
                      <Bullet/>
                      <a href="" className="email-style" style={{fontSize: "14px", fontWeight: "700"}}>Java</a>
                    </div>
                    <div className="column" style={{padding: "0px 10px 0px 50px", gap: "5px"}}>
                      <a href="" className="email-style" style={{fontSize: "14px"}}>Android Development</a>
                    </div>
                    <div className="row-center" style={{padding: "0px 10px", gap: "5px"}}>
                      <Bullet/>
                      <a href="" className="email-style" style={{fontSize: "14px", fontWeight: "700"}}>Rust</a>
                    </div>
                    <div className="row-center" style={{padding: "0px 10px", gap: "5px"}}>
                      <Bullet/>
                      <a href="" className="email-style" style={{fontSize: "14px", fontWeight: "700"}}>Web</a>
                    </div>
                    <div className="column" style={{padding: "0px 10px 0px 50px", gap: "5px"}}>
                      <a href="" className="email-style" style={{fontSize: "14px"}}>HTML</a>
                      <a href="" className="email-style" style={{fontSize: "14px"}}>CSS</a>
                      <a href="" className="email-style" style={{fontSize: "14px"}}>Frontend & Backend</a>
                    </div>
                    <div className="row-center" style={{padding: "0px 10px", gap: "5px"}}>
                      <Bullet/>
                      <a href="" className="email-style" style={{fontSize: "14px", fontWeight: "700"}}>Graphics design</a>
                    </div>
                    <div className="column" style={{padding: "0px 10px 0px 50px", gap: "5px"}}>
                      <a href="" className="email-style" style={{fontSize: "14px"}}>Basic</a>
                    </div>
                  </div>
                </div>

                <div className="skill-info column card-class-1">
                  <p style={{fontSize: "15px", fontWeight: "700", letterSpacing: "5px", alignSelf: "center"}}>LANGUAGES</p>
                  <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "-5px"}}></div>
                  <div className="column" style={{gap: "10px"}}>
                    <div className="row-center" style={{padding: "0px 10px", gap: "5px"}}>
                      <Bullet/>
                      <a href="" className="email-style" style={{fontSize: "14px", fontWeight: "700"}}>English</a>
                    </div>
                    <div className="row-center" style={{padding: "0px 10px", gap: "5px"}}>
                      <Bullet/>
                      <a href="" className="email-style" style={{fontSize: "14px", fontWeight: "700"}}>Hindi</a>
                    </div>
                  </div>
                </div>

                <div className="skill-info column card-class-1">
                  <p style={{fontSize: "15px", fontWeight: "700", letterSpacing: "5px", alignSelf: "center"}}>HOBBIES</p>
                  <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "-5px"}}></div>
                  <div className="column" style={{gap: "10px"}}>
                    <div className="row-center" style={{padding: "0px 10px", gap: "5px"}}>
                      <Bullet/>
                      <a href="" className="email-style" style={{fontSize: "14px", fontWeight: "700"}}>Listening music</a>
                    </div>
                    <div className="row-center" style={{padding: "0px 10px", gap: "5px"}}>
                      <Bullet/>
                      <a href="" className="email-style" style={{fontSize: "14px", fontWeight: "700"}}>PC Games</a>
                    </div>
                    <div className="row-center" style={{padding: "0px 10px", gap: "5px"}}>
                      <Bullet/>
                      <a href="" className="email-style" style={{fontSize: "14px", fontWeight: "700"}}>Fashion</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-panel column">
            <div className="column right-panel-card" style={{gap: "10px"}}>
              <p style={{paddingLeft: "20px", fontWeight: "800", fontSize: "30px", letterSpacing: "3px"}}>ANSHUL SINGH</p>
              <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>
              <div className="row-center" style={{padding: "0px 20px", flexWrap: "wrap", gap: "30px 10px", justifyContent: "space-between"}}>
                <div className="row-center" style={{padding: "0px 0px", gap: "5px"}}>
                  <Bullet icon="cake"/>
                  <a href="" className="email-style" style={{fontSize: "14px", fontWeight: "700"}}>15 December, 2006</a>
                </div>
                <div className="row-center" style={{padding: "0px 0px", gap: "5px"}}>
                  <Bullet icon="male"/>
                  <a href="" className="email-style" style={{fontSize: "14px", fontWeight: "700"}}>Male</a>
                </div>
              </div>
              <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>
              <div className="column" style={{gap: "5px", padding: "0px 20px"}}>
                <p style={{fontWeight: "500"}}>I develop apps, libraries, electronic devices, just anything related to technology that caters to make the life of people of this world easy whether you are just a general person or a developer like me, I build apps, electronic devices or libraries that make your life easier.</p>
              </div>
            </div>
            <div className="column right-panel-card expr-card" style={{gap: "10px"}}>
              <p style={{paddingLeft: "20px", fontWeight: "800", fontSize: "25px", letterSpacing: "3px"}}>Experience</p>
              <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>
              <div className="column" style={{gap: "5px", padding: "0px 20px"}}>
                <p style={{fontWeight: "500", fontSize: "16px"}}>I have been programming since 2019, about <b style={{color: "purple"}}>6 years ago</b>.</p>
                <p style={{fontWeight: "500", fontSize: "16px"}}>None of my code was ever AI generated neither will be in future nor do I use it except for occasional deep research.</p>
              </div>
              <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>
              <div className="column" style={{padding: "0px 0px", gap: "5px"}}>
                <div className="column" style={{gap: "5px", padding: "5px 20px"}}>
                  <div className="row-center" style={{gap: "5px"}}>
                    <Bullet/>
                    <p style={{fontWeight: "600"}}>Python • <b style={{color: "purple"}}>5 years</b></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>Flask, WebSockets, Tkinter • <b style={{color: "purple"}}>5 years</b></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>Discord Bots using <b style={{color: "black"}}>discord.py</b> • <b style={{color: "purple"}}>3 years</b></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>NLTK, DSA • <b style={{color: "purple"}}>1.5 years</b></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>Network packet capture, manipulation & injection • <b style={{color: "purple"}}>About a year</b></p>
                  </div>
                </div>
                <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>

                <div className="column" style={{gap: "5px", padding: "5px 20px"}}>

                  <div className="row-center" style={{gap: "5px"}}>
                    <Bullet/>
                    <p style={{fontWeight: "600"}}>JavaScript • <b style={{color: "purple"}}>4 years</b></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>React, React-router, React Native, Expo • <b style={{color: "purple"}}>4 years</b></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}><b>UI, UX design</b> using <b>pure HTML & CSS</b> • <b style={{color: "purple"}}>4 years</b></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>WebSockets • <b style={{color: "purple"}}>4 years</b></p>
                  </div>
                </div>
                <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>
                <div className="column" style={{gap: "5px", padding: "5px 20px"}}>

                  <div className="row-center" style={{gap: "5px"}}>
                    <Bullet/>
                    <p style={{fontWeight: "600"}}>C & C++ • <b style={{color: "purple"}}>2 years</b></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>Embedded C</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>Socket programming using <b>select</b></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>ESP-32, ESP8266 using <b>ESP-IDF</b></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>DSA</p>
                  </div>
                </div>
                <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>
                <div className="column" style={{gap: "5px", padding: "5px 20px"}}>

                  <div className="row-center" style={{gap: "5px"}}>
                    <Bullet/>
                    <p style={{fontWeight: "600"}}>Java • <b style={{color: "purple"}}>2 years</b></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>Android Development, Bluetooth, VoIP</p>
                  </div>
                </div>
                <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>
                <div className="column" style={{gap: "5px", padding: "0px 20px"}}>

                  <div className="row-center" style={{gap: "5px"}}>
                    <Bullet/>
                    <p style={{fontWeight: "600"}}>Rust • <b style={{color: "purple"}}>1 year</b></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column right-panel-card expr-card" style={{gap: "10px"}}>
              <p style={{paddingLeft: "20px", fontWeight: "800", fontSize: "25px", letterSpacing: "3px"}}>Projects</p>
              <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>
              <div className="column" style={{padding: "0px 0px", gap: "5px"}}>
                <div className="column" style={{gap: "5px", padding: "5px 20px"}}>
                  <div className="row-center" style={{gap: "5px"}}>
                    <Bullet/>
                    <a href="https://cytroid.in" style={{fontWeight: "700", color: "purple"}}>Cytroid • Smart cycle controller</a>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>ESP32 based smart cycle controller</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}><b>Interactionless locking and unlocking</b> using BLE signal, security module with <b>connectivity with or without wifi</b>, <b>GPS Tracker</b></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}><b>Force</b> Based Gesture control</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>Cytroid Entertainment system</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}><b>Screenless Navigation</b> using haptic feedback</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}><b>Cycle Social Network</b> with VoIP connectivity and real time location of friends</p>
                  </div>
                </div>
                <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>

                <div className="column" style={{gap: "5px", padding: "5px 20px"}}>

                  <div className="row-center" style={{gap: "5px"}}>
                    <Bullet/>
                    <a href="https://www.instagram.com/reel/DCSKoL2KbNn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" style={{fontWeight: "600", color: "purple"}}>Bluetooth Smart Lock (3 min clip)</a>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>Interactionless locking and unlocking of your home</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "14px"}}>
                    <p style={{fontWeight: "400"}}><b>Dual Proximity sense</b>, when you are near to the door, or when you tap your phone over the device for an <b>NFC equivalent unlock</b> experience using <b>BLE</b></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "14px"}}>
                    <p style={{fontWeight: "400"}}>Direct connection to your <b>Bluetooth smart watch</b> and proximity sense directly using it</p>
                  </div>
                </div>
                <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>
                <div className="column" style={{gap: "5px", padding: "5px 20px"}}>

                  <div className="row-center" style={{gap: "5px"}}>
                    <Bullet/>
                    <p style={{fontWeight: "600"}}>SharedVibes • Campus Social Networking Application</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>A specially tailored social network for your campus</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "14px"}}>
                    <p style={{fontWeight: "400"}}>Find anyone including your seniors, alumni, professors on campus</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}><b>In-house advertisements</b> of on going campus events</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}><b>In-house developed search algorithm</b> and <b>chat engine</b></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}><b>In-house developed markdown parser</b> for full-<b><i>fledged</i></b> <strike>markdown</strike> <u>experience</u></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}><b>Chat Themes</b> and extensive customizations</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "13px", justifyContent: "flex-end"}}>
                    <p style={{fontWeight: "400"}}>Yet to be deployed on campus</p>
                  </div>
                </div>
                <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>

                <div className="column" style={{gap: "5px", padding: "5px 20px"}}>

                  <div className="row-center" style={{gap: "5px"}}>
                    <Bullet/>
                    <p style={{fontWeight: "600"}}>Sputh Mail • End-to-End encrypted email service</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>Email service with chat feature and <b>simplistic and a better UI</b></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>Mails sent within the domain are end-to-end encrypted</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}><b>In-house</b> developed <b>Mailing server</b> for sending, receiving and downloading your <b>emails in real-time completely encrypted</b> (Does not rely on IMAP, POP3)</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "13px", justifyContent: "flex-end"}}>
                    <p style={{fontWeight: "400"}}>Deployed only for myself as of now</p>
                  </div>
                </div>
                <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>
                <div className="column" style={{gap: "5px", padding: "5px 20px"}}>

                  <div className="row-center" style={{gap: "5px"}}>
                    <Bullet/>
                    <p style={{fontWeight: "600"}}>Sputh Bot • Global Chat Discord Bot</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>Global Chat bot which connects channels of servers together to sync messages across the connected to servers allowing users to do inter server chat using Discord WebHooks.</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "14px"}}>
                    <p style={{fontWeight: "400"}}>Messages along with any <b>edits, deletes, bulk deletes, delete by mods, reactions, replies along with reply links, attachments, embeds, nicknames, avatar, guild specific avatars</b> are <b>synced</b> in 100% realistic fashion across all servers.</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "14px"}}>
                    <p style={{fontWeight: "400"}}>Webhook based censorship for restricted words to give a realistic experience of censored messages coming directly from users.</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "14px"}}>
                    <p style={{fontWeight: "400"}}>Support for sending custom emojis, and emojis from any servers in messages without Discord Nitro</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "14px"}}>
                    <p style={{fontWeight: "400"}}>Support for sending Embeds using a command line like syntax using an In-house developed parser, makes use of webhooks.</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "14px"}}>
                    <p style={{fontWeight: "400"}}>Support to create Moderator application forms using Discord Modals and Selects directly in discord without having to rely on Google Forms</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "14px"}}>
                    <p style={{fontWeight: "400"}}>Moderation, spam rate-limit, raid detection and several other trivial functions.</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "40px", fontSize: "13px", justifyContent: "flex-end"}}>
                    <p style={{fontWeight: "400"}}>Deployed with 18 servers connected in the main cluster, connecting more than 10k people. <a href="https://sputh.me" style={{color: "purple"}}>Website</a> yet to be deployed</p>
                  </div>
                </div>
                <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>
                <div className="column" style={{gap: "15px", padding: "5px 20px"}}>

                  <div className="row-center" style={{gap: "5px"}}>
                    <Bullet/>
                    <a href="https://github.com/AceExpert/ws" style={{fontWeight: "600"}}>ws • Python's Equivalent of Node.js' ws library</a>
                  </div>
                  <div className="row-center" style={{padding: "0px 20px", flexWrap: "wrap", gap: "30px 10px", justifyContent: "space-between"}}>
                    <div className="row-center" style={{padding: "0px 0px", gap: "5px"}}>
                      <Bullet icon="link"/>
                      <a href="https://github.com/AceExpert/ws" className="email-style" style={{fontSize: "14px", fontWeight: "700", color: "purple"}}>GitHub</a>
                    </div>
                    <div className="row-center" style={{padding: "0px 0px", gap: "5px"}}>
                      <Bullet icon="link"/>
                      <a href="https://pypi.org/project/c-websockets/" className="email-style" style={{fontSize: "14px", fontWeight: "700", color: "purple"}}>PyPi</a>
                    </div>
                  </div>
                </div>
                <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>
                <div className="column" style={{gap: "5px", padding: "5px 20px"}}>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}><b>Asynchronous event driven, callback based</b> websocket server and client</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>Support to asynchronously wait for messages until a certain timeout</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "14px"}}>
                    <p style={{fontWeight: "400"}}>Bonus support for JavaScript like Objects giving you access to dictionary keys using <b>.attribute access</b></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "13px", justifyContent: "flex-end"}}>
                    <p style={{fontWeight: "400"}}>Wrapper over websockets library</p>
                  </div>
                </div>

                <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>
                <div className="column" style={{gap: "15px", padding: "5px 20px"}}>

                  <div className="row-center" style={{gap: "5px"}}>
                    <Bullet/>
                    <a href="https://github.com/AceExpert/ewelink-api-python" style={{fontWeight: "600"}}>ewelink-api-python • API Wrapper over Ewelink's API</a>
                  </div>
                  <div className="row-center" style={{padding: "0px 20px", flexWrap: "wrap", gap: "30px 10px", justifyContent: "space-between"}}>
                    <div className="row-center" style={{padding: "0px 0px", gap: "5px"}}>
                      <Bullet icon="link"/>
                      <a href="https://github.com/AceExpert/ewelink-api-python" className="email-style" style={{fontSize: "14px", fontWeight: "700", color: "purple"}}>GitHub</a>
                    </div>
                  </div>
                </div>
                <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>
                <div className="column" style={{gap: "5px", padding: "5px 20px"}}>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}><b>Asynchronous event driven, callback based</b> api wrapper over the ewelink api</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>Ewelink is one of the leading software provider for smart home devices like app controlled wifi switches etc.</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "13px", justifyContent: "flex-end"}}>
                    <p style={{fontWeight: "400"}}>Development halted due to lack of proper support from ewelink</p>
                  </div>
                </div>

                <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>
                <div className="column" style={{gap: "15px", padding: "5px 20px"}}>

                  <div className="row-center" style={{gap: "5px"}}>
                    <Bullet/>
                    <a href="https://github.com/sputh-the-pigeon/asyncio.cpp" style={{fontWeight: "600"}}>asyncio.cpp • Python like asynchronous I/O interface for C++ using C++ 20 coroutines</a>
                  </div>
                  <div className="row-center" style={{padding: "0px 20px", flexWrap: "wrap", gap: "30px 10px", justifyContent: "space-between"}}>
                    <div className="row-center" style={{padding: "0px 0px", gap: "5px"}}>
                      <Bullet icon="link"/>
                      <a href="https://github.com/sputh-the-pigeon/asyncio.cpp" className="email-style" style={{fontSize: "14px", fontWeight: "700", color: "purple"}}>GitHub</a>
                    </div>
                  </div>
                </div>
                <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>
                <div className="column" style={{gap: "5px", padding: "5px 20px"}}>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>Support for basic event loop with async sleep, awaitng on multiple asynchronous tasks at the same time, with proper suspension and resuming of coroutines</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "14px"}}>
                    <p style={{fontWeight: "400"}}>Very early stage and quite inefficient as of now</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "13px", justifyContent: "flex-end"}}>
                    <p style={{fontWeight: "400"}}>Development halted for now</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column right-panel-card expr-card" style={{gap: "10px"}}>
              <p style={{paddingLeft: "20px", fontWeight: "800", fontSize: "25px", letterSpacing: "3px"}}>Achievements</p>
              <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>
              <div className="column" style={{padding: "0px 0px", gap: "5px"}}>
                <div className="column" style={{gap: "5px", padding: "5px 20px"}}>
                  <div className="row-center" style={{gap: "5px"}}>
                    <Bullet/>
                    <p style={{fontWeight: "600"}}>1st Prize @ <a href="https://optima.org.in/competitions">Innovate-X</a> • <b style={{color: "purple"}}>2025</b></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}>For presentation of <b style={{color: "purple"}}>Cytroid Smart Cycle</b> controller</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "13px", justifyContent: "flex-end"}}>
                    <p style={{fontWeight: "400"}}>Organized by department of Industrial & System Engineering, IIT Kharagpur</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column right-panel-card expr-card" style={{gap: "10px"}}>
              <p style={{paddingLeft: "20px", fontWeight: "800", fontSize: "25px", letterSpacing: "3px"}}>References</p>
              <div style={{height: "1px", width: "100%", background: "rgba(120, 0, 175, 0.14)", marginTop: "0px"}}></div>
              <div className="column" style={{padding: "0px 0px", gap: "5px"}}>
                <div className="column" style={{gap: "5px", padding: "5px 20px"}}>
                  <div className="row-center" style={{gap: "5px"}}>
                    <Bullet/>
                    <p style={{fontWeight: "600"}}>Subhajit Sidhanta, Assistant Professor</p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "15px"}}>
                    <p style={{fontWeight: "400"}}> @ <a href="https://www.iitkgp.ac.in/department/IM/faculty/im-subhajit">Industrial & System Engineering</a> • <b style={{color: "purple"}}>IIT Kharagpur</b></p>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "14px"}}>
                    <Bullet icon="email"/>
                    <a href="mailto:subhajit@iem.iitkgp.ac.in" style={{fontWeight: "400", color: "purple", textDecoration: "none"}}>subhajit@iem.iitkgp.ac.in</a>
                  </div>
                  <div className="row-center" style={{gap: "5px", paddingLeft: "25px", fontSize: "14px"}}>
                    <Bullet icon="globe"/>
                    <a href="https://sites.google.com/iitbhilai.ac.in/subhajit/home" style={{fontWeight: "400", color: "purple", textDecoration: "none"}}>Website</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
