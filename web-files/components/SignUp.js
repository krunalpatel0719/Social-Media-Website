import react from "react";

function SignUp() {
  return (
    <div className="container max-w-full mx-auto py-10 px-6">
      <div className="font-sans">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="mt-6">
                <div className="text-center text-xl font-semibold text-black">
                  Create an Account
                </div>
                <form id="signup-form" className="mt-8">
                  <div className="mx-auto max-w-lg">
                    <div className="py-2 form-group">
                      <span className="px-1 text-sm text-gray-600">
                        First Name
                      </span>
                      <input
                        type="text"
                        className="form-control text-md block px-3 py-2 rounded-lg w-full 
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                      focus:placeholder-gray-500
                      focus:bg-white 
                      focus:border-blue-600  
                      focus:outline-none"
                        placeholder="First name"
                      />
                    </div>

                    <div className="py-2 form-group">
                      <span className="px-1 text-sm text-gray-600">
                        Last Name
                      </span>
                      <input
                        type="text"
                        className="form-control text-md block px-3 py-2 rounded-lg w-full 
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                      focus:placeholder-gray-500
                      focus:bg-white 
                      focus:border-blue-600  
                      focus:outline-none"
                        placeholder="Last name"
                      />
                    </div>
                    <div className="py-2 form-group">
                      <span className="px-1 text-sm text-gray-600">
                        Username
                      </span>
                      <input
                        type="text"
                        className="form-control text-md block px-3 py-2 rounded-lg w-full 
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                      focus:placeholder-gray-500
                      focus:bg-white 
                      focus:border-blue-600  
                      focus:outline-none"
                        placeholder="User name"
                      />
                    </div>
                    <div className="py-2 form-group">
                      <span className="px-1 text-sm text-gray-600">
                        Email address
                      </span>

                      <input
                        type="email"
                        className="form-control text-md block px-3 py-2 rounded-lg w-full 
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                      focus:placeholder-gray-500
                      focus:bg-white 
                      focus:border-blue-600  
                      focus:outline-none"
                        placeholder="Enter email"
                        id="signup-email"
                      />
                    </div>
                    <div className="py-2 form-group">
                      <span className="px-1 text-sm text-gray-600">
                        Password
                      </span>
                      <input
                        type="password"
                        className="form-control text-md block px-3 py-2 rounded-lg w-full 
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                      focus:placeholder-gray-500
                      focus:bg-white 
                      focus:border-blue-600  
                      focus:outline-none"
                        placeholder="Enter password"
                        id="signup-password"
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-3 text-lg font-semibold text-centered
                            bg-blue-600 w-full text-white rounded-lg
                            px-6 py-3 block shadow-xl hover:text-white hover:bg-blue-500"
                    >
                      {/*className="btn btn-primary btn-block"> */}
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
