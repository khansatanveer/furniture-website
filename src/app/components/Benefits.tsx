import React from 'react'

const Benefits = () => {
  return (
    <div>
      {/* Benefits Section */}
      <section className="bg-[#FAF4F4] py-16  w-screen">
        <div className="container mx-auto px-4 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-[25px]  lg:text-[30px] md:text-[25px] font-medium ">Free Delivery</h3>
            <p className="text-[16px]  lg:text-[20px] md:text-[16px] font-normal mt-2 text-[#9F9F9F]">For all oders over $50, consectetur adipim scing elit.</p>
          </div>
          <div>
            <h3 className="text-[25px] md:text-[25px] font-medium">90 Days Return</h3>
            <p className="text-[16px] lg:text-[20px] md:text-[16px] font-normal mt-2 text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p>
          </div>
          <div>
            <h3 className="text-[25px] md:text-[25px] font-medium">Secure Payment</h3>
            <p className="text-[16px] lg:text-[20px] md:text-[16px] font-normal mt-2 text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Benefits
