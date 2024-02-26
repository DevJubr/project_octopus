import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="w-full mt-[3rem]">
        <div className="flex w-full items-center justify-center">
          <img
            className="w-[90%] h-[300px] object-cover rounded-[1rem]"
            src={
              "https://unsplash.com/photos/2EJCSULRwC8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fHRlY2hub2xvZ3l8ZW58MHx8fHwxNzA4ODYwNjY5fDA&force=true&w=1920"
            }
          />
        </div>
      </section>
    </main>
  );
}
