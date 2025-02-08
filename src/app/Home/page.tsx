
import Image from 'next/image';
import Header from '@/app/components/header'
import Products_1 from '@/app/components/homeProducts-1'
import Products_2 from '@/app/components/homeProducts-2'
import Newarrivals from '@/app/components/newArrivals'

const Home = () => {

  return (
    <div>
     {/* Header */}
      <div className="bg-[#FBEBB5] ">
        <Header />
      </div>
      <div className="w-full md:h-auto h-screen bg-[#FBEBB5] flex flex-col md:flex-row-reverse   items-center justify-center relative overflow-hidden">
        {/* Right Content: Image */}
        <div className="mt-[-120px] sm:mt-[-90px]  md:mt-0  mb-2  md:mr-[-130px] md:mb-[90px] lg:mb-[90px]  xl:mb-[100px]">
          <Image
            src='/sofa.png'
            alt="Sofa Single Seater"
            width={200}
            height={200}
            className="md:w-[500px] md:h-[500px] w-[500px] h-[400px] lg:h-[550px] lg:w-[550px] xl:h-[600px] xl:w-[600px] scale-x-[-1]"
            priority
          />
        </div>

        {/* Left Content: Text */}
        <div className="text-center lg:text-left lg:ml-[-40px] ">
          <h1 className="text-[#000000] font-medium text-[30px] sm:text-[48px] lg:text-[50px] xl:text-[54px] leading-[40px] sm:leading-[60px]  lg:leading-[90px] lg:mt-[0px] mt-[-50px]">
            Rocket single <br />seater
          </h1>
          <br />
          <button className="font-medium hover:text-[23px] hover:sm:text-[23px] text-[18px] sm:text-[22px] lg:text-[24px] xl:text-[22px] text-black  lg:mt-[-12px] mt-[-0px]">
            Shop Now
            <hr className="mt-1 border  border-black  lg:w-[121px] w-[90px] mx-auto mb-5" />
          </button>
        </div>
      </div>


{/* Section 2 */}
      <section className="bg-[#FAF4F4] ">
        <Products_2/>
      </section>

      <section className="h-auto bg-[#FFFFFF]">
        <Products_1/>
      
      </section>


{/* New Arrivals Section */}
      
<section className="bg-yellow-100 ">
  <Newarrivals/>
      </section>

{/* Blog Section */}
      <section>
  <div className="text-center py-12">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">Our Blogs</h2>
    <p className="text-gray-600 mb-8 text-lg sm:text-lg md:text-2xl">Find a bright idea to suit your taste with our great selection</p>
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 md:px-4">
      {/* Blog Card 1 */}
      <div className="bg-white h-[400px] sm:h-[450px] lg:h-[600px] w-[300px] sm:w-[350px] lg:w-full shadow-lg rounded-lg overflow-hidden mx-auto">
        <Image
          src='/Rectangle 13.png'
        width={200}
            height={200}

          alt="Blog 1"

          className="w-full h-[200px] sm:h-[250px] lg:h-[393px] object-cover"
        />
        <div className="p-6 sm:p-7 lg:p-8">
          <h3 className="text-[18px] sm:text-[18px] lg:text-[18px] font-medium mb-5">
            Going all-in with millennial design
          </h3>
          <a href="#" className="text-black font-medium text-base sm:text-lg lg:text-lg hover:text-[18px]">
            Read More
            <hr className="mt-1 lg:mt-3 border border-black w-[100px] sm:w-[120px] mx-auto" />
          </a>
          <div className="flex justify-center gap-4 mt-3 lg:mt-7">
            <span className="flex items-center gap-1 text-[#9F9F9F] text-sm">
              <Image src='/bi_clock-fill.png' alt='' width={20}
            height={20}
 className="text-black text-lg" />
              <p className="text-[14px]">5 mins</p>
            </span>
            <span className="flex items-center gap-1 text-[#9F9F9F] text-sm">
              <Image src='/Calendar .png' alt=''width={20}
            height={20}
 className="text-black text-lg" />
              <p className="text-[14px]">{new Date().toLocaleDateString()}</p>
            </span>
          </div>
        </div>
      </div>

      {/* Blog Card 2 */}
      <div className="bg-white h-[400px] sm:h-[450px] lg:h-[600px] w-[300px] sm:w-[350px] lg:w-full shadow-lg rounded-lg overflow-hidden mx-auto">
        <Image
          src='/Rectangle 14.png'
          alt="Blog 2"
          width={200}
            height={200}

          className="w-full h-[200px] sm:h-[250px] lg:h-[393px] object-cover"
        />
        <div className="p-6 sm:p-7 lg:p-8">
          <h3 className="text-[18px] sm:text-[18px] lg:text-[18px] font-medium mb-5">
            Going all-in with millennial design
          </h3>
          <a href="../Blog" rel="noopener noreferrer" aria-label="Profile" className="text-black font-medium text-base sm:text-lg lg:text-lg hover:text-[18px]">
            Read More
            <hr className="mt-1 lg:mt-3 border border-black w-[100px] sm:w-[120px] mx-auto" />
          </a>
          <div className="flex justify-center gap-4 mt-3 lg:mt-7">
            <span className="flex items-center gap-1 text-[#9F9F9F] text-sm">
              <Image src='/bi_clock-fill.png' alt=''width={20}
            height={20}
 className="text-black text-lg" />
              <p className="text-[14px]">5 mins</p>
            </span>
            <span className="flex items-center gap-1 text-[#9F9F9F] text-sm">
              <Image src='/Calendar .png' alt=''width={20}
            height={20}
 className="text-black text-lg" />
              <p className="text-[14px]">{new Date().toLocaleDateString()}</p>
            </span>
          </div>
        </div>
      </div>

      {/* Blog Card 3 */}
      <div className="bg-white h-[400px] sm:h-[450px] lg:h-[600px] w-[300px] sm:w-[350px] lg:w-full shadow-lg rounded-lg overflow-hidden mx-auto">
        <Image
          src='/Rectangle 15.png'
          alt="Blog 3"
          width={200}
            height={200}

          className="w-full h-[200px] sm:h-[250px] lg:h-[393px] object-cover"
        />
        <div className="p-6 sm:p-7 lg:p-8">
          <h3 className="text-[18px] sm:text-[18px] lg:text-[18px] font-medium mb-5">
            Going all-in with millennial design
          </h3>
          <a href="#" className="text-black font-medium text-base sm:text-lg lg:text-lg hover:text-[18px]">
            Read More
            <hr className="mt-1 lg:mt-3 border border-black w-[100px] sm:w-[120px] mx-auto" />
          </a>
          <div className="flex justify-center gap-4 mt-3 lg:mt-7">
            <span className="flex items-center gap-1 text-[#9F9F9F] text-sm">
              <Image src='/bi_clock-fill.png' alt=''
            width={20}
            height={20}
            className="text-black text-lg" />
              <p className="text-[14px]">5 mins</p>
            </span>
            <span className="flex items-center gap-1 text-[#9F9F9F] text-sm">
              <Image src='/Calendar .png' alt='' 
            width={20}
            height={20}
            className="text-black text-lg" />
              <p className="text-[14px]">{new Date().toLocaleDateString()}</p>
            </span>
          </div>
        </div>
      </div>

      <a href="../Blog" rel="noopener noreferrer" aria-label="Profile">
        <button className="lg:mr-[-900px] h-[50px] text-[24px] sm:text-[26px] lg:text-[28px] text-black font-medium leading-[36px] hover:text-[24px] hover:sm:text-[30px] hover:lg:text-[32px] mt-5 mb-5">
          View More
          <hr className="mt-2 lg:mt-3 border border-black w-[120px] mx-auto" />
        </button>
      </a>
    </div>
  </div>
</section>

<section className="relative w-full h-[350px] sm:h-[500px] md:h-[500px] text-center">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src='/bg-2.png'
      alt="Background"
      width={200}
            height={200}

      className="object-cover w-full h-full"
    />
  </div>

  {/* Text Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full">
    <h2 className="text-3xl  sm:text-4xl md:text-5xl font-extrabold text-black mb-4">Our Instagram</h2>
    <p className="text-lg sm:text-lg md:text-xl font-medium mb-8">Follow our store on Instagram</p>
    <button className="w-[200px] sm:w-[280px] md:w-[300px] hover:w-[220px] hover:sm:w-[300px] hover:md:w-[320px] h-[64px] bg-[#FAF4F4] text-black font-medium text-lg sm:text-lg md:text-xl rounded-full shadow-lg hover:text-[20px] hover:sm:text-[22px] hover:md:text-[28px]">
      Follow Us
    </button>
  </div>
</section>

    </div>
  );
};

export default Home;