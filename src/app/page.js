import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="w-full mt-[3rem]">
        <div className="flex w-[90%] items-center justify-center relative ">
          <img
            className="relative w-[100%] h-[300px] object-cover rounded-[1rem]"
            src={
              "https://unsplash.com/photos/2EJCSULRwC8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fHRlY2hub2xvZ3l8ZW58MHx8fHwxNzA4ODYwNjY5fDA&force=true&w=1920"
            }
          />

          <div className="absolute gap-1 bottom-8 flex capitalize tracking-wide flex-col items-start left-8">
            <span className="bg-slate-500 p-[.3rem] text-[.8rem] rounded-md">
              technology
            </span>
            <h3 className="text-slate-200 text-3xl">
              post title vai ase naki vai
            </h3>
            <div className="flex text-sm items-center gap-5">
              <span>writer</span>
              <span>date</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
