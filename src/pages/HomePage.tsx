// import { useEffect, useState } from "react";
import FadeInSection from "../layouts/FadeInSection";

function HomePage() {
  // const [time, setTime] = useState(60);
  // const [open, setOpen] = useState(false);
  // const [isVisaible, setIsVisible] = useState(false);
  // const [isScale, setIsScale] = useState(false);
  // const [isContent, setIsContent] = useState(false);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime((prev) => prev - 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  // const handleClick = (e: any) => {
  //   console.dir(e.target);
  //   (e.target as HTMLElement).style.transform = "translateY(250px)";
  //   setOpen(true);
  //   setIsVisible(true);
  //   setTimeout(() => {
  //     setIsScale(true);
  //   }, 3000);
  //   setTimeout(() => {
  //     setIsContent(true);
  //   }, 5000);
  // };

  return (
    <>
      <section className="h-[80vh] relative">
        <div className="relative mx-auto max-w-[375px] bg-[url('/invitation7/bg2.png')] h-full bg-cover bg-center">
          <FadeInSection direction="right" duration="3000">
            <img className="sticky top-0 w-40 h-40" src="/invitation7/fl1.png" alt="" />
          </FadeInSection>
          <img
            className="
          absolute top-20 right-[-30px] w-20 h-20"
            src="/invitation7/flower_w_i_7.png"
            alt=""
          />
          <img
            className="
          absolute top-52 right-[-25px] w-16 h-16"
            src="/invitation7/fl2.png"
            alt=""
          />
          <div className="flex flex-col gap-2 items-center justify-center">
            <FadeInSection direction="down">
              {" "}
              <p className="text-[#F7F3E8] text-xl">WEDING DAY</p>
            </FadeInSection>
            <FadeInSection direction="up">
              {" "}
              <p className="text-[#F7F3E8] text-2xl">16.11.2025</p>
            </FadeInSection>
          </div>
          <div className="mt-40">
            <FadeInSection direction="right" duration="2000">
              {" "}
              <h2 className="depth-glow text-6xl text-[#F7F3E8]  font-greatVibes   ml-10 ">Сергій</h2>
            </FadeInSection>
            <FadeInSection direction="left" duration="2000">
              <h2 className="depth-glow text-6xl text-[#F7F3E8]  font-greatVibes ml-auto text-right mr-8  bottom-[60px] left-32">
                Вікторія
              </h2>
            </FadeInSection>
          </div>
        </div>
        <FadeInSection duration="3000">
          {" "}
          <img className="absolute left-[-100px] bottom-[-100px]" src="/invitation7/bg.png" alt="" />
          <img className="absolute right-[-100px] bottom-[-100px]" src="/invitation7/bg.png" alt="" />
        </FadeInSection>
      </section>

      {/* <section className="  min-h-screen flex items-center bg-[#f5f0dc]">
        <div className="flex justify-center h-52 w-full items-center relative">
          <div className="absolute mx-auto w-72 h-52 bg-[#f8f6ee] rounded-md  shadow-[0_10px_30px_rgba(110,20,37,0.25)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(110,20,37,0.3)] z-0  ">
            <div className="absolute inset-0 bg-gradient-to-b from-[#fff9f3] via-[#f8f6ee] to-[#f1ede3] z-[5]"></div>

            <div className="absolute inset-0 shadow-[inset_0_4px_8px_rgba(0,0,0,0.08)] z-10"></div>

            <div className="absolute z-10 overflow-hidden inset-0 before:content-[''] after:content-[''] before:absolute after:absolute before:w-[2px] after:w-[2px] before:h-[200%] after:h-[200%] before:bg-[#6E1425] after:bg-[#6E1425] before:rotate-[54deg] after:-rotate-[54deg] before:top-[-42%] before:left-[121px] after:top-[-42%] after:right-[121px] opacity-50"></div>

            <div
              className="absolute  top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#8a1a30] to-[#6E1425] transition-transform duration-700 origin-top z-30"
              style={{
                clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                transform: open ? "rotateX(-180deg)" : "rotateX(0deg)",
              }}></div>

            <div className="absolute z-10 top-[48%] left-0 w-full h-[4px] bg-[rgba(110,20,37,0.25)] blur-sm"></div>

            <div className="absolute z-10 top-0 left-0 w-full h-[30%] bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-transparent pointer-events-none"></div>

            <div className="absolute z-10 inset-0 rounded-md border border-[#6E1425]/40 pointer-events-none"></div>

            <div
              className=" absolute top-1/2 left-1/2 w-10 h-16 z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-700"
              onClick={handleClick}>
              <img className="w-10 h-16 pointer-events-none" src="/invitation7/pechatka.png" alt="" />
            </div>
          </div>
          <div
            className={`absolute inset-0 flex items-center justify-center z-50 ${
              isVisaible ? "opacity-100" : "opacity-0"
            }  `}
            style={{
              clipPath: isScale
                ? "polygon(0% -530%, 150% 50%, 0% 700%, 0px -2%, 0px 2px)"
                : "polygon(0px -400%, 95% -7%, 50% 49%, 14% -2%, 0px 2%)",
            }}>
            <div
              className={` w-[375px]  relative translate-y-0 bg-[#f8f6ee]  pt-10 pb-3  z-50 transition-all duration-[3500ms]
        `}
              style={{
                height: `${isScale ? "100vh" : ""}`,
                transform: `
            translateY(${open ? (isScale ? "0px" : "-100px") : "0px"})
            scale(${isScale ? 1 : 0.4})
          `,
              }}>
              <div className="  mx-auto max-w-[375px]">
                <div className="relative text-3xl w-[70%] ml-auto mr-16 text-center font-marckScript">
                  <h1 className="mr-24   ">
                    <span className=" text-red-800 text-4xl">А</span>ндрій
                  </h1>
                  <span className=" absolute top-6 ">та</span>{" "}
                  <h1 className="ml-40 mt-3 ">
                    {" "}
                    <span className=" text-red-800 text-4xl">В</span>алерія
                  </h1>
                </div>
                <div className=" relative">
                  <p className=" font-greatVibes absolute  text-7xl top-[-52px] left-10 text-[#E3DCD7]">yes</p>
                </div>
                <p className="w-[180px] font-greatVibes  rotate-[-10deg] ml-16 mt-4">
                  Одружуємось, бо щастя — це бути разом!
                </p>

                <div className="grid grid-cols-7 gap-2 h-[200px] mt-5 overflow-hidden">
                  <div className="col-span-4">
                    <img className="w-full h-[200px]" src="/invitation1/photo1.jpg" alt="" />
                  </div>
                  <div className="col-span-3  ">
                    <img className="w-full  " src="/invitation1/photo2.jpg" alt="" />
                  </div>
                </div>
                <p className="w-[70%] mx-auto mt-10 text-[#5A554F]">
                  Ми щасливі поділитися з Вами нашою радістю! Запрошуємо Вас приєднатися до святкування нашого кохання.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* 
      {isContent && (
        <>
          {" "}
          <FadeInSection>
            <section className=" py-10 ">
              <div className="  mx-auto max-w-[375px]">
                <h3 className=" font-greatVibes text-red-800 text-3xl text-center">Наш серпень</h3>
                <ul className="flex justify-center items-center gap-5 mt-7">
                  <li className=" h-12 w-12 flex justify-center items-center rounded-[6px] border">5</li>
                  <li className="h-12 w-12 flex justify-center items-center  rounded-[6px] border">6</li>
                  <li className="flex justify-center items-center relative ">
                    <svg className=" fill-[#6E1425] w-16 h-16 heart ">
                      <use href="#icon-heart">
                        <symbol id="icon-heart" viewBox="0 0 32 32">
                          <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
                        </symbol>
                      </use>
                    </svg>
                    <div className="absolute text-white font-bold text-xl">7</div>
                  </li>
                  <li className="h-12 w-12 flex justify-center items-center  rounded-[6px] border">8</li>
                  <li className="h-12 w-12 flex justify-center items-center  rounded-[6px] border">9</li>
                </ul>
                <svg className="absolute max-w-[375px]" viewBox="0 0 100 250" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6E1425" />
                      <stop offset="100%" stopColor="#6E1425" />
                    </linearGradient>
                  </defs>

                  <path
                    d="
      M50,0
      C90,30 80,50 40,65
      C40,65 20,70 10,90
      C5,100 30,130 60,145
      C70,150 120,170 90,145
      C60,120 50,140 0,175
      C30,180 20,220 48,226
    "
                    stroke="url(#grad)"
                    strokeWidth="0.7"
                    fill="transparent"
                  />
                </svg>
                <FadeInSection direction="right">
                  <div className="w-[60%] mt-20 ml-8">
                    <p className="text-3xl font-greatVibes text-[#6E1425] ">14:30</p>
                    <p className="text-2xl font-greatVibes text-[#2F2922] ">Приїзд гостей</p>
                    <p className=" text-[#5A554F]">
                      Очікуємо Вас з радістю! На вході зустрінуть напої та легкі закуски.{" "}
                    </p>
                  </div>
                </FadeInSection>
                <FadeInSection direction="left">
                  {" "}
                  <div className="w-[60%] mt-20 ml-auto">
                    <p className="text-3xl font-greatVibes text-[#6E1425] ">15:00</p>
                    <p className="text-2xl font-greatVibes text-[#2F2922] ">Царемонія</p>
                    <p className=" text-[#5A554F]">Запрошуємо Вас стати свідками нашої клятви вірності й кохання</p>
                  </div>
                </FadeInSection>
                <FadeInSection direction="left">
                  {" "}
                  <div className="w-[60%] mt-40 ml-auto mr-5">
                    <p className="text-3xl font-greatVibes text-[#6E1425] text-right mr-16">17:00</p>
                    <p className="text-2xl font-greatVibes text-[#2F2922] ">Початок банкету</p>
                    <p className=" text-[#5A554F]">
                      Сьогодні ми святкуємо нашу любов разом з Вами – сміх, танці і приємні спогади гарантовано!
                    </p>
                  </div>
                </FadeInSection>
              </div>
            </section>
          </FadeInSection>
          <FadeInSection>
            <section className=" py-10 ">
              <div className=" mx-auto max-w-[375px]">
                <div className="bg-[#6E1425] relative mx-auto w-[90%] text-white pb-12">
                  <h4 className="text-center text-3xl pt-3">Чекаємо Вас</h4>
                  <p className="mt-2 mx-auto text-center text-[14px] w-[70%]">
                    Ресторан “Кришталевий Палац”, вул. Кришталева, 18{" "}
                  </p>
                  <div className="py-1 bottom-[-17px] left-[85px] text-center  w-[150px] absolute mx-auto  text-[#6E1425] bg-white border-2 border-[#6E1425]">
                    Перейти на карту
                  </div>
                </div>
              </div>
            </section>
          </FadeInSection>
          <FadeInSection>
            <section className="py-10">
              <div className=" mx-auto max-w-[375px] bg-[#6E1425] pb-15">
                <div className="">
                  <img className="w-full h-[200px]" src="/invitation1/photo1.jpg" alt="" />
                </div>
                <div>
                  {" "}
                  <p className="w-[75%] mx-auto text-center text-white mt-5">
                    Ми хочемо розділити з Вами найщасливіший день нашого життя
                  </p>
                  <FadeInSection direction="right">
                    <p className="text-white text-center mt-10 font-greatVibes text-2xl">
                      Чекаємо з <br />
                      нетерпінням
                    </p>{" "}
                  </FadeInSection>
                  <svg className="absolute max-w-[375px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path
                      d="
      M0,0
      C30,15 60,0 100,2
    "
                      stroke="#fff"
                      strokeWidth="0.7"
                      fill="transparent"
                    />
                  </svg>
                  <FadeInSection direction="left">
                    {" "}
                    <p className="text-white text-xl text-center mt-15">
                      З любов'ю <br />
                      Андрій та Валерія
                    </p>
                  </FadeInSection>
                </div>
              </div>
            </section>
          </FadeInSection>
          <FadeInSection>
            <section className="pb-10">
              <div className=" mx-auto max-w-[375px]">
                <svg className="w-full h-auto" viewBox="0 0 375 250" preserveAspectRatio="xMidYMid slice">
                  <clipPath id="waveClip">
                    <path d="M0 80 Q95 30, 187 80 T375 80 L375 250 L0 250 Z" />
                  </clipPath>

                  <image
                    x="5%"
                    href="/invitation1/photo3.jpg"
                    width="90%"
                    height="100%"
                    clipPath="url(#waveClip)"
                    preserveAspectRatio="xMidYMid slice"
                  />

                  <path
                    id="wave"
                    d="M0 80 Q95 30, 187 80 T375 80"
                    fill="transparent"
                    stroke="#6E1425"
                    strokeWidth="2"
                  />

                  <text fontSize="16" fill="#6E1425">
                    <textPath className="tracking-widest" href="#wave" startOffset="13%">
                      <tspan dy="-20">Два серця. Одна любов. Назавжди.</tspan>
                    </textPath>
                  </text>
                </svg>
                <FadeInSection direction="right">
                  {" "}
                  <div className="relative mt-3">
                    <p className="font-greatVibes text-4xl text-center  text-[#6E1425]">Ми скажемо </p>
                    <p className="font-marckScript absolute top-3 left-16  text-7xl  text-[#E3DCD7] z-[-1]">ТАК</p>
                    <p className="font-greatVibes text-3xl ml-48 mt-2 text-[#6E1425]"> через...</p>
                  </div>
                </FadeInSection>
                <div>
                  <ul className="flex gap-2 mt-5 font-[500] text-4xl justify-center font-greatVibes ">
                    <li>23</li>
                    <li>:</li>
                    <li>14</li>
                    <li>:</li>
                    <li>20</li>
                    <li>:</li>
                    <li>{time.toString().padStart(2, "0")}</li>
                  </ul>
                </div>
              </div>
            </section>
          </FadeInSection>
          <FadeInSection>
            <section className="pb-10">
              <svg className="mx-auto max-w-[375px]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,3 C30,15 60,0 100,2 L100,20 L0,20 Z" fill="#6E1425" />
              </svg>
              <div className=" mx-auto max-w-[375px] bg-[#6E1425] mt-[-2px] text-white pb-10 ">
                <h3 className="text-center text-4xl  font-greatVibes">Побажання</h3>
                <p className="w-[80%] text-center mx-auto mt-3">
                  Ми дуже цінуємо Вашу турботу і будемо раді будь-якому подарунку! І не важливо в який конверт Ви його
                  запакуєте :)
                </p>
                <div className=" mt-10 text-white relative">
                  <h3 className="text-center text-4xl  font-greatVibes">Група</h3>
                  <p className="w-[80%] text-center mx-auto mt-3">
                    Ми створили групу в телеграм щоб всі мали змогу поділитися своїми фото
                  </p>
                  <div className="py-1 bottom-[-57px] left-[110px]  w-[150px] text-center absolute mx-auto  text-[#6E1425] bg-white border-2 border-[#6E1425]">
                    Перейти{" "}
                  </div>{" "}
                </div>
              </div>
            </section>
          </FadeInSection>{" "}
        </>
      )} */}
    </>
  );
}

export default HomePage;
