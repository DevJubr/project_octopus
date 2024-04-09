const Hero = () => {
  return (
    <section className="w-full flex justify-center mt-[3rem]">
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
            <div className="flex items-center gap-3">
              <img
                className="w-[.8rem] h-[.8rem] rounded-full"
                src="https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE3MDkwODcxMDh8MA&force=true&w=640 "
              />
              <span className="text-slate-200 capitalize text-sm">
                alen shobuj
              </span>
            </div>
            <span>3 july 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
