//import icons from "../../assets/icons/icons.png";

const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-slate-100  via-white to-slate-50 w-full pt-24 border-t border-gray-200">
      <footer className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-800">
        <aside className="space-y-4 text-center lg:text-left">
          {/* <img className="w-28 mx-auto lg:mx-0" src={icons} alt="VolunSphere" /> */}
          <h2 className="text-2xl font-semibold text-blue-600">
            Smart Campus Ltd.
          </h2>
          <p className="text-sm text-gray-600">
            Providing reliable tech since 1992
          </p>
        </aside>

        <nav className="space-y-2">
          <h6 className="text-lg font-semibold text-gray-700">Company</h6>
          {["About us", "Contact", "Jobs", "Press kit"].map((item) => (
            <a
              key={item}
              className="block text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <nav className="space-y-2">
          <h6 className="text-lg font-semibold text-gray-700">Legal</h6>
          {["Terms of use", "Privacy policy", "Cookie policy"].map((item) => (
            <a
              key={item}
              className="block text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <form className="space-y-4">
          <h6 className="text-lg font-semibold text-gray-700">Newsletter</h6>
          <label className="block text-sm text-gray-600">
            Enter your email address
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="username@site.com"
              className="input input-bordered border-gray-300 shadow-sm w-full sm:flex-1 rounded-md px-3 py-2"
            />
            <button className="btn bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition-all">
              Subscribe
            </button>
          </div>
        </form>
      </footer>

      <div className="border-t border-gray-300 mt-10"></div>

      <aside className="text-center text-sm text-gray-500 py-6 px-4">
        <p>
          © {new Date().getFullYear()} Smart Campus Ltd. All rights reserved.
        </p>
      </aside>
    </div>
  );
};

export default Footer;
