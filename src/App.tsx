import { Login } from "./modules/login/components/Login";

export function App() {
  return (

    <div className="bg-slate-800 flex justify-center items-center h-[70vw] w-[100vw] md:w-auto">
      <div className="text-slate-400">
        <Login />
      </div>
    </div>
  );
}
