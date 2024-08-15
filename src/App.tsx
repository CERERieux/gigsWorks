import "./App.css";
import CSSIcon from "./assets/CSSIcon";
import Express from "./assets/Express";
import HtmlIcon from "./assets/HtmlIcon";
import JavaScript from "./assets/JavaScript";
import NodeIcon from "./assets/NodeIcon";
import PostgreSQL from "./assets/PostgreSQL";
import ReactIcon from "./assets/ReactIcon";
import ReactRouter from "./assets/ReactRouter";
import TypeScript from "./assets/TypeScript";

function App() {
  return (
    <div className="flex h-[1080px] w-[1920px] items-center justify-center">
      <div className="relative flex h-[720px] w-[1280px] items-center justify-center overflow-hidden bg-gradient-to-t from-zinc-950 from-10% to-zinc-500">
        <div className="z-10 flex h-[250px] w-[250px] rotate-45 items-center justify-center overflow-hidden rounded-md border-[10px] border-sky-400 bg-white shadow-xl shadow-yellow-400/10">
          <div className="h-full w-full bg-[url('/codebg.png')] bg-cover bg-no-repeat opacity-70"></div>
          <img
            src="/pfp1.png"
            alt="My image"
            className="absolute -top-[35px] left-[5px] -rotate-45 rounded-2xl bg-cover"
          />
        </div>
        <div className="absolute left-10 top-4 z-10 flex h-[50px] w-1/3 skew-x-[24deg] items-center justify-center rounded-md bg-gradient-to-b from-lime-50 from-10% via-lime-300 via-85% to-lime-600 shadow-lg shadow-lime-900/70 drop-shadow-2xl">
          <h1 className="-skew-x-[24deg] text-4xl text-lime-700">
            <strong>Web Developer</strong>
          </h1>
        </div>
        <div className="absolute left-28 top-20 z-10 flex h-[50px] w-1/2 skew-x-[-24deg] items-center justify-center rounded-md bg-gradient-to-b from-sky-50 from-10% via-sky-300 via-85% to-sky-600 shadow-lg shadow-sky-900/70 drop-shadow-2xl">
          <h2 className="skew-x-[24deg] text-4xl text-sky-700">
            <strong>Front End and Full Stack Projects</strong>
          </h2>
        </div>
        <div className="absolute left-8 top-1/4 z-10 h-[350px] w-[410px]">
          <div className="relative h-full w-full">
            <div className="absolute left-12 top-5">
              <CSSIcon height="90" width="84" />
            </div>
            <div className="absolute right-12 top-5">
              <JavaScript size="80" />
            </div>
            <div className="absolute left-[41%] top-[37%]">
              <HtmlIcon height="85" width="77" />
            </div>
            <div className="absolute bottom-8 left-12">
              <ReactIcon height="84" width="90" />
            </div>
            <div className="absolute bottom-8 right-12">
              <NodeIcon height="90" width="84" />
            </div>
          </div>
        </div>
        <div className="absolute right-8 top-1/4 z-10 h-[350px] w-[410px]">
          <div className="relative h-full w-full">
            <div className="absolute left-8 top-4">
              <PostgreSQL height="90" width="84" />
            </div>
            <div className="absolute right-16 top-2">
              <Express size="90" isblackBG />
            </div>
            <div className="absolute left-[37%] top-[39%]">
              <TypeScript size="80" />
            </div>
            <div className="absolute bottom-4 left-10">
              <ReactRouter height="90" width="80" isBlackBG />
            </div>
            <div className="absolute bottom-8 right-16 size-[80px]">
              <img
                src="/mongoose.png"
                className="max-h-full max-w-full rounded-xl bg-white/80"
                alt="Logo of MongooseJS"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-16 left-16 z-10 flex h-[50px] w-[25%] skew-x-[-24deg] items-center justify-center rounded-md bg-gradient-to-b from-amber-50 from-10% via-amber-300 via-85% to-amber-600 shadow-lg shadow-amber-900/70 drop-shadow-2xl">
          <h3 className="skew-x-[24deg] text-3xl text-amber-950">
            <strong>Custom Websites</strong>
          </h3>
        </div>
        <div className="absolute bottom-16 left-[32.5%] z-10 flex h-[50px] w-[37%] skew-x-[-24deg] items-center justify-center rounded-md bg-gradient-to-b from-amber-50 from-10% via-amber-300 via-85% to-amber-600 shadow-lg shadow-amber-900/70 drop-shadow-2xl">
          <h3 className="skew-x-[24deg] text-3xl text-amber-950">
            <strong>Add or Modify Functionalities</strong>
          </h3>
        </div>
        <div className="absolute bottom-16 right-16 z-10 flex h-[50px] w-[23%] skew-x-[-24deg] items-center justify-center rounded-md bg-gradient-to-b from-amber-50 from-10% via-amber-300 via-85% to-amber-600 shadow-lg shadow-amber-900/70 drop-shadow-2xl">
          <h3 className="skew-x-[24deg] text-3xl text-amber-950">
            <strong>Responsive Pages</strong>
          </h3>
        </div>
        <div className="absolute right-16 top-12 z-10 flex h-[50px] w-[30%] skew-x-[24deg] items-center justify-center rounded-md bg-gradient-to-b from-rose-50 from-10% via-rose-300 via-85% to-rose-600 shadow-lg shadow-rose-900/70 drop-shadow-2xl">
          <h3 className="-skew-x-[24deg] text-3xl text-rose-950">
            <strong>Let's work together!</strong>
          </h3>
        </div>
        <div className="absolute -bottom-10 -right-52 h-20 w-[1000px] -rotate-[25deg] bg-white/20"></div>
        <div className="absolute -bottom-[10.5rem] -right-52 h-20 w-[1000px] -rotate-[25deg] border-x-0 border-y-8 border-white/20"></div>
        <div className="absolute -left-[20rem] bottom-4 h-20 w-[1000px] rotate-[25deg] bg-white/20"></div>
        <div className="absolute -bottom-[10.5rem] -left-52 h-20 w-[1000px] rotate-[25deg] border-x-0 border-y-8 border-white/20"></div>
        <div className="absolute -bottom-[60%] left-[50%] size-[500px] rotate-[45deg] border-8 border-white/20"></div>
        <div className="absolute -bottom-[60%] left-[10%] size-[500px] rotate-[45deg] border-8 border-white/20"></div>
        <div className="absolute -bottom-[60%] left-[30%] size-[500px] rotate-[65deg] border-8 border-white/20"></div>
        <div className="absolute -bottom-[60%] left-[30%] size-[500px] rotate-[25deg] border-8 border-white/20"></div>
        <div className="absolute -bottom-[60%] left-[30.5%] size-[500px] rotate-[45deg] border-8 border-white/20"></div>

        <div className="absolute -right-52 -top-10 h-20 w-[1000px] rotate-[25deg] bg-white/10"></div>
        <div className="absolute -right-52 -top-[10.5rem] h-20 w-[1000px] rotate-[25deg] border-x-0 border-y-8 border-white/20"></div>
        <div className="absolute -left-[20rem] top-4 h-20 w-[1000px] -rotate-[25deg] bg-white/10"></div>
        <div className="absolute -left-52 -top-[10.5rem] h-20 w-[1000px] -rotate-[25deg] border-x-0 border-y-8 border-white/20"></div>
        <div className="absolute -top-[60%] left-[50%] size-[500px] rotate-[45deg] border-8 border-white/10"></div>
        <div className="absolute -top-[60%] left-[10%] size-[500px] rotate-[45deg] border-8 border-white/10"></div>
        <div className="absolute -top-[60%] left-[30%] size-[500px] rotate-[65deg] border-8 border-white/10"></div>
        <div className="absolute -top-[60%] left-[30%] size-[500px] rotate-[25deg] border-8 border-white/10"></div>
        <div className="absolute -top-[60%] left-[30.5%] size-[500px] rotate-[45deg] border-8 border-white/10"></div>
      </div>
    </div>
  );
}

export default App;
