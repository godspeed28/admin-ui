// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//     <div className="bg-white min-h-screen text-center flex flex-col justify-center items-center">
//       <div className="flex items-center justify center space-x-8 mb-12">
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo w-24 h-24" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react w-24 h-24 animate-spin" alt="React logo"
//           style={{animationDuration: "10s"}}/>
//         </a>
//       </div>
//       <h1 className="text-5xl font-bold mb-16">Vite + React</h1>
//       {/* <h3>Abe Kolin</h3> */}
//       <div className="text-sm space-y-6 mb-8">
//         <button className="bg-gray-100 text-black py-2 px-6 rounded-lg text-lg font-medium" onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p className="text-neutral">
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs text-neutral-500">
//         Click on the Vite and React logos to learn more
//       </p>
//       </div>
//     </>
//   );
// }

// export default App;

// import "./App.css";

// function App() {
//   return (
//     <>
//       <div className="bg-gray-100 min-h-screen p-6">
//         {/* card begin */}
//         {/* <div className="flex flex-col justify-between bg-white p-6 min-h-60 rounded-lg shadow">
//           <div className=" flex items-center justify-between">
//             <h2 className="text-lg font-semibold">Product</h2>
//             <span className="text-green-500">Active</span>
//           </div>

//           <p className=" text-gray-800">Product description goes here.</p>

//           <div className=" flex justify-end gap-2">
//             <button className="rounded bg-gray-200 px-4 py-2">Cancel</button>
//             <button className="rounded bg-blue-500 px-4 py-2 text-white">
//               Buy
//             </button>
//           </div>
//         </div> */}
//         {/* card end */}
//         <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {/* card begin */}
//           <div className="bg-white p-6 min-h-40 rounded-lg shadow text-5xl flex justify-center items-center hover:shadow-lg transition-shadow hover:border hover:bg-gray-200 hover:scale-105 duration-300 ">
//             card 1
//           </div>
//           <div className="bg-white p-6 min-h-40 rounded-lg shadow text-5xl flex justify-center items-center hover:shadow-lg transition-shadow hover:border hover:bg-gray-200 hover:scale-105 duration-300 ">
//             card 2
//           </div>
//           <div className="bg-white p-6 min-h-40 rounded-lg shadow text-5xl flex justify-center items-center hover:shadow-lg transition-shadow hover:border hover:bg-gray-200 hover:scale-105 duration-300 ">
//             card 3
//           </div>
//           <div className="bg-white p-6 min-h-40 rounded-lg shadow text-5xl flex justify-center items-center hover:shadow-lg transition-shadow hover:border hover:bg-gray-200 hover:scale-105 duration-300 ">
//             card 4
//           </div>
//           <div className="bg-white p-6 min-h-40 rounded-lg shadow text-5xl flex justify-center items-center hover:shadow-lg transition-shadow hover:border hover:bg-gray-200 hover:scale-105 duration-300 ">
//             card 5
//           </div>
//           {/* card end */}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

// import "./App.css";

// function App() {
//   return (
//     <div className="bg-special-mainBg">
//       <h1 className="text-3xl font-bold bg-primary"><span className="text-special-green">Ini</span> font <span className="text-secondary">default</span></h1>
//       <h1 className="text-3xl font-bold font-poppins text-primary">Ini <span className="text-special-red">font</span> poppins</h1>
//       <p className="m-4 border border-primary">
//         Ini font default juga. Lorem ipsum dolor sit, amet consectetur
//         adipisicing elit. Illum perferendis dolores provident debitis,
//         necessitatibus ullam, quibusdam dolore cumque velit, molestias
//         recusandae exercitationem pariatur. Quas ullam aliquid ea. Repellat,
//         exercitationem similique!
//       </p>
//     </div>
//   );
// }

// export default App;

import "./App.css";

function App() {
  return (
    <main className="min-h-screen bg-special-mainBg flex justify-center items-center">
      {/* container start */}
      <div className="w-full max-w-sm ">
        {/* logo start */}
        <div className="flex justify-center font-poppins tracking-wide text-primary text-4xl">
          <span className="font-bold">FINE</span>
          bank
          <span className="font-bold">.IO</span>
        </div> 
        {/* logo end */}
              {/* form start */}
        <div className="mt-16">
          <form action="">
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm mb-2">
                Email address
              </label>
              <input
                type="email"
                className="py-3 pl-4 text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0"
                placeholder="hello@example.com"
                name="email"
                id="email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                className="py-3 pl-4 text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0"
                placeholder="************"
                name="password"
                id="password"
              />
            </div>
            <div className="mb-3">
              <input
                type="checkbox"
                className="text-sm accent-primary"
                name="status"
                id="status"
              />
              <label htmlFor="status" className="text-sm text-gray-01 ml-3">
                Keep me signed in
              </label>
            </div>
            <button
              className="h-12 rounded-md text-sm bg-primary w-full text-white"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
        {/* form end */}
      				{/* teks start */}
        <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-03">
          <div className="border border-gray-05 w-full"></div>
          <div className="px-2 bg-special-mainBg absolute"> or sign in with</div>
        </div>
        {/* teks end */}
        {/* sign in with google start */}
        <div className="mb-8">
          <button
            className="h-12 flex items-center justify-center rounded-md text-sm w-full bg-gray-05 text-gray-01"
            type="button"
          >
            <svg
              class="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="800px"
              height="800px"
              viewBox="-0.5 0 48 48"
              version="1.1"
            >
              <title>Google-color</title> <desc>Created with Sketch.</desc>
              <defs> </defs>
              <g
                id="Icons"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                  <g id="Google" transform="translate(401.000000, 860.000000)">
                    <path
                      d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                      id="Fill-1"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                      id="Fill-2"
                      fill="#EB4335"
                    ></path>
                    <path
                      d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                      id="Fill-3"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                      id="Fill-4"
                      fill="#4285F4"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>
        {/* sign in with google end */}
        {/* link start */}
        <div className="flex justify-center">
          <a className="text-primary text-sm font-bold">Create an account</a>
        </div>
        {/* link end */}
        {/* sign in with google start */}
        <div></div>
        {/* sign in with google end */}
        {/* link start */}
        <div></div>
        {/* link end */}
      </div>
      {/* container end */}
    </main>
  );
}

export default App;
