'use client';

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Authpage = () => {
  return (
    <ClerkProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">Secure Payment Gateway</h2>

          {/* Show Sign In button if the user is signed out */}
          <SignedOut>
            <p className="mb-4 text-gray-700">You need to sign in to proceed with the payment.</p>
            <SignInButton />
          </SignedOut>

          {/* Show User Button & Payment Option when signed in */}
          <SignedIn>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <UserButton />
              <p className="text-gray-700">Welcome! You can proceed with your payment.</p>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
              Proceed to Payment
            </button>
          </SignedIn>
        </div>
      </div>
    </ClerkProvider>
  );
};

export default Authpage;
