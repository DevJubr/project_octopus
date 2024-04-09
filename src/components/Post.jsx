const Post = ({ item, index }) => {
  return (
    <>
      <div
        key={item}
        className="singelPost w-[320px] h-[auto] rounded-md bg-[#1c1b1c]"
      >
        <img
          className="w-full h-[160px] rounded-tl-md rounded-tr-md object-cover "
          src="https://unsplash.com/photos/JjGXjESMxOY/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzJ8fHJvYm90fGVufDB8fHx8MTcwOTA2NTQ2MXww&force=true&w=1920"
        />
        <div className="postInfo pl-4 pt-5 pr-[1rem] pb-5">
          <div className=" gap-4 bottom-8 flex capitalize tracking-wide flex-col items-start left-8">
            <span className="bg-slate-500 pr-[1rem] pl-[1rem]  p-[.3rem] text-[.8rem] rounded-md">
              technology
            </span>
            <h3 className="text-slate-200 text-[1.22rem] font-bold">
              The Impact of Technology on the Workplace: How Technology is
              Changing
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
      </div>{" "}
    </>
  );
};

export default Post;
