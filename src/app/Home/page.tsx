import Image from 'next/image';
import Header from '@/app/components/header'

const Home = () => {
  return (
    <div>
      <div className="bg-[#FBEBB5] h-[140px]">
        <Header />
      </div>
      <div className="w-full h-screen bg-[#FBEBB5] flex flex-col xl:flex-row-reverse items-center justify-center relative overflow-hidden">
        {/* Right Content: Image */}
        <div className="mt-[-150px] sm:mt-[-90px] xl:mt-0 mb-2 xl:mr-[-130px] xl:mb-[100px]">
          <Image
            src='/sofa.png'
            alt="Sofa Single Seater"
            width={200}
            height={200}
            className="md:w-[600px] md:h-[500px] w-[500px] h-[400px] xl:h-[600px] xl:w-[600px] scale-x-[-1]"
            priority
          />
        </div>

        {/* Left Content: Text */}
        <div className="text-center xl:text-left xl:ml-[-40px]">
          <h1 className="text-[#000000] font-medium text-[30px] sm:text-[48px] xl:text-[54px] leading-[40px] sm:leading-[60px] xl:leading-[96px] xl:mt-[0px] mt-[-80px]">
            Rocket single <br />seater
          </h1>
          <br />
          <button className="font-medium hover:text-[23px] hover:sm:text-[23px] text-[18px] sm:text-[22px] xl:text-[22px] text-black xl:mt-[-12px] mt-[-70px]">
            Shop Now
            <hr className="mt-1 border  border-black xl:w-[121px] w-[90px] mx-auto mb-5" />
          </button>
        </div>
      </div>
      <section className="bg-[#FAF4F4] py-12 xl:h-[672px] h-[900px] sm:h-[850px]">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-32">
          <div className="text-center flex flex-col items-center mr-10 gap-4 mt-[-50px] xl:mt-[0px]">
            <Image
              src='/Granite square side table 1.png'
              alt="Side Table"
              width={200}
            height={200}

              className="mx-auto mb-[-100px] sm:mb-[-150px] xl:mb-[-90px] h-[auto] w-[800px] sm:w-[400px] xl:w-[790px]"
            />
            <h3 className="text-[30px] sm:text-[40px] xl:text-[48px] font-medium leading-[54px] mt-[30px] xl:mt-[-40px] ">
              Side table
            </h3>
            <a href="../Shop" rel="noopener noreferrer" aria-label="Profile">
              <button className="mt-[-24px] xl:mt-[-8px] text-[20px] sm:text-[26px] xl:text-[28px] font-medium leading-[36px] hover:text-[24px] hover:sm:text-[30px] hover:xl:text-[32px]">
                View More
                <hr className="mt-1  border border-black xl:w-[121px] w-[90px] mx-auto" />
              </button>
            </a>
          </div>

          <div className="text-center flex flex-col items-center mr-10 gap-4 mt-[-50px] xl:mt-[0px]">
            <Image
              src='/Mask group.png'
              alt="Side Table"
              width={200}
              height={200}

              className="mx-auto sm:mb-[-110px] mb-[-90px] xl:mb-[-90px] h-[auto] w-[800px] sm:w-[400px] xl:w-[790px]"
            />
            <h3 className="text-[30px] sm:text-[40px] xl:text-[48px] font-medium leading-[54px] mt-[0px] xl:mt-[-40px]">
              Side table
            </h3>
            <a href="../Shop" rel="noopener noreferrer" aria-label="Profile">
              <button className="mt-[-24px] xl:mt-[-8px] text-[20px] sm:text-[26px] xl:text-[28px] font-medium leading-[36px] hover:text-[24px] hover:sm:text-[30px] hover:xl:text-[32px]">
                View More
                <hr className="mt-1  border border-black xl:w-[121px] w-[90px] mx-auto" />
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="h-auto bg-[#FFFFFF]">
        <div className="container mx-auto text-center">
          <h2 className="text-[36px] sm:text-[40px] xl:text-[48px] font-medium mb-4 mt-5">Top Picks For You</h2>
          <p className="text-[#9F9F9F] text-[16px] sm:text-[18px] xl:text-[20px] mb-10 px-4">
            Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="text-center">
              <Image
                src='/Trenton modular .png'
                alt="Item 1"
                height={600}
                width={600}
                className="mx-auto mb-2 max-w-full"
              />
              <p className="font-[400] text-[16px] sm:text-[18px] xl:text-[20px]">Trenton modular sofa</p>
              <p className="font-[500] text-[24px] sm:text-[26px] xl:text-[28px]">Rs. 25,000.00</p>
            </div>

            <div className="text-center">
              <Image
                src='/table.png'
                alt="Item 2"
                height={1000}
                width={1000}
                className="mx-auto mb-2 max-w-full"
              />
              <p className="font-[400] text-[16px] sm:text-[18px] xl:text-[20px]">Granite dining table</p>
              <p className="font-[500] text-[24px] sm:text-[26px] xl:text-[28px]">Rs. 25,000.00</p>
            </div>

            <div className="text-center">
              <Image
                src='/Mask1.png'
                alt="Item 3"
                height={500}
                width={500}
                className="mx-auto mb-2 max-w-full"
              />
              <p className="font-[400] text-[16px] sm:text-[18px] xl:text-[20px]">Outdoor bar table and stool</p>
              <p className="font-[500] text-[24px] sm:text-[26px] xl:text-[28px]">Rs. 25,000.00</p>
            </div>

            <div className="text-center">
              <Image
                src='/Mask2.png'
                alt="Item 4"
                height={500}
                width={500}
                className="mx-auto mb-2 max-w-full"
              />
              <p className="font-[400] text-[16px] sm:text-[18px] xl:text-[20px]">Plain console with teak mirror</p>
              <p className="font-[500] text-[24px] sm:text-[26px] xl:text-[28px]">Rs. 25,000.00</p>
            </div>
          </div>
          <a href="../Shop" rel="noopener noreferrer" aria-label="Profile">
            <button className="h-[50px] text-[24px] sm:text-[26px] xl:text-[28px] text-black font-medium leading-[36px] hover:text-[24px] hover:sm:text-[30px] hover:xl:text-[32px] mt-10 mb-10">
              View More
              <hr className="mt-2 xl:mt-3 border  border-black w-[120px] mx-auto" />
            </button>
          </a>
        </div>
      </section>

      <section className="bg-yellow-100 xl:py-2 py-9">
        <div className="container mx-auto flex flex-col xl:flex-row items-center xl:gap-8 gap-2 px-4">
          <div className=" xl:w-[100%] h-auto">
            <Image src='/Asgaard sofa 1.png' 
            alt="Asgaard Sofa" 
            width={700}
            height={700}
            className="mx-auto max-w-full" />
          </div>
          <div className="xl:w-[50%] text-center xl:text-left">
            <h2 className="text-black font-[500] text-[17px] sm:text-[30px] xl:text-[36px] xl:px-10">New Arrivals</h2>
            <h3 className="text-black font-extrabold text-[35px] sm:text-[56px] xl:text-[55px]">Asgaard sofa</h3>
            <div className="px-9 mt-2 ">
              <button className="h-[50px] xl:h-[70px] xl:w-[300px] w-[150px] border-2 border-black text-black text-[20px] hover:text-[23px] sm:text-[23px] hover:sm:text-[28px] font-medium leading-[36px] hover:xl:text-[32px] mt-10 xl:mt-4 mb-10">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
  <div className="text-center py-12">
    <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold mb-4">Our Blogs</h2>
    <p className="text-gray-600 mb-8 text-lg sm:text-xl xl:text-2xl">Find a bright idea to suit your taste with our great selection</p>
    <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-8 md:px-4">
      {/* Blog Card 1 */}
      <div className="bg-white h-[400px] sm:h-[450px] xl:h-[600px] w-[300px] sm:w-[350px] xl:w-full shadow-lg rounded-lg overflow-hidden mx-auto">
        <Image
          src='/Rectangle 13.png'
        width={200}
            height={200}

          alt="Blog 1"

          className="w-full h-[200px] sm:h-[250px] xl:h-[393px] object-cover"
        />
        <div className="p-6 sm:p-7 xl:p-8">
          <h3 className="text-[18px] sm:text-[18px] xl:text-[18px] font-medium mb-5">
            Going all-in with millennial design
          </h3>
          <a href="#" className="text-black font-medium text-base sm:text-lg xl:text-xl hover:text-[18px]">
            Read More
            <hr className="mt-1 xl:mt-3 border border-black w-[100px] sm:w-[120px] mx-auto" />
          </a>
          <div className="flex justify-center gap-4 mt-3 xl:mt-7">
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
      <div className="bg-white h-[400px] sm:h-[450px] xl:h-[600px] w-[300px] sm:w-[350px] xl:w-full shadow-lg rounded-lg overflow-hidden mx-auto">
        <Image
          src='/Rectangle 14.png'
          alt="Blog 2"
          width={200}
            height={200}

          className="w-full h-[200px] sm:h-[250px] xl:h-[393px] object-cover"
        />
        <div className="p-6 sm:p-7 xl:p-8">
          <h3 className="text-[18px] sm:text-[18px] xl:text-[18px] font-medium mb-5">
            Going all-in with millennial design
          </h3>
          <a href="../Blog" rel="noopener noreferrer" aria-label="Profile" className="text-black font-medium text-base sm:text-lg xl:text-xl hover:text-[18px]">
            Read More
            <hr className="mt-1 xl:mt-3 border border-black w-[100px] sm:w-[120px] mx-auto" />
          </a>
          <div className="flex justify-center gap-4 mt-3 xl:mt-7">
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
      <div className="bg-white h-[400px] sm:h-[450px] xl:h-[600px] w-[300px] sm:w-[350px] xl:w-full shadow-lg rounded-lg overflow-hidden mx-auto">
        <Image
          src='/Rectangle 15.png'
          alt="Blog 3"
          width={200}
            height={200}

          className="w-full h-[200px] sm:h-[250px] xl:h-[393px] object-cover"
        />
        <div className="p-6 sm:p-7 xl:p-8">
          <h3 className="text-[18px] sm:text-[18px] xl:text-[18px] font-medium mb-5">
            Going all-in with millennial design
          </h3>
          <a href="#" className="text-black font-medium text-base sm:text-lg xl:text-xl hover:text-[18px]">
            Read More
            <hr className="mt-1 xl:mt-3 border border-black w-[100px] sm:w-[120px] mx-auto" />
          </a>
          <div className="flex justify-center gap-4 mt-3 xl:mt-7">
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
        <button className="xl:mr-[-900px] h-[50px] text-[24px] sm:text-[26px] xl:text-[28px] text-black font-medium leading-[36px] hover:text-[24px] hover:sm:text-[30px] hover:xl:text-[32px] mt-5 mb-5">
          View More
          <hr className="mt-2 xl:mt-3 border border-black w-[120px] mx-auto" />
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
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black mb-4">Our Instagram</h2>
    <p className="text-lg sm:text-xl md:text-2xl font-medium mb-8">Follow our store on Instagram</p>
    <button className="w-[200px] sm:w-[280px] md:w-[300px] hover:w-[220px] hover:sm:w-[300px] hover:md:w-[320px] h-[64px] bg-[#FAF4F4] text-black font-medium text-lg sm:text-xl md:text-2xl rounded-full shadow-lg hover:text-[20px] hover:sm:text-[22px] hover:md:text-[26px]">
      Follow Us
    </button>
  </div>
</section>

    </div>
  );
};

export default Home;
