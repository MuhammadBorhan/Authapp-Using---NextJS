import css from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-blue-400 ">
      <div className="m-auto bg-slate-50 w-4/6 h-5/6 mx-auto grid lg:grid-cols-2">
        <div className={`${css.imgStyles} hidden lg:block`}>
          <div className={css.cartoon}></div>
        </div>
        <div className="flex flex-col justify-evenly">
          <div className="text-center py-10">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
