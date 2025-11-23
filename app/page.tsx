import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import SectionTitle from '@/components/SectionTitle';
import PlantCard from '@/components/PlantCard';
import TestimonialCard from '@/components/TestimonialCard';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1A201A]">
      {/* Background Image Wrapper for Navbar, Hero, and Trendy Plants */}
      <div className="relative">
        {/* Background Image - covers Navbar, Hero, and Trendy Plants */}
        <div className="absolute inset-0 z-0">
        <Image
            src="/bg.jpg"
            alt="Background"
            fill
            className="object-cover"
          priority
            quality={90}
            sizes="100vw"
          />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10">
          <Navbar />
          
          {/* Hero Section */}
          <HeroBanner />

          {/* Trendy Plants Section */}
          <section id="plants" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <SectionTitle 
            bracketColor1="#FBD300"
            bracketColor2="#FFFFFF"
            bracketColor3="#FBD300"
          >
            Our Trendy plants
          </SectionTitle>
          
          <div className="grid grid-cols-1 gap-16 sm:gap-24 md:gap-32 max-w-6xl mx-auto">
            {/* Desk Decoration Card 1 - Image Left, Text Right */}
            <div className="relative overflow-visible">
              <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-white/20 h-full" style={{ borderRadius: '56px' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
                  {/* Left - Image with overflow */}
                  <div className="relative w-full h-64 sm:h-80 md:h-full overflow-visible">
                    <div className="absolute inset-0" style={{ top: '-80px', left: '-30px', right: '10px', bottom: '-20px' }}>
                      <Image
                        src="/plantian lilies.png"
                        alt="Desk Decoration Plant"
                        fill
                        className="object-contain"
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectPosition: 'center' }}
                      />
                    </div>
                  </div>
                  
                  {/* Right - Text Content */}
                  <div className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>For Your Desks Decorations</h3>
                    <p className="text-white text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                      I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
                    </p>
                    <p className="text-white font-semibold text-lg sm:text-xl" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Rs. 599/-</p>
                    <div className="flex gap-3 sm:gap-4">
                      <Button variant="outline" className="px-4 sm:px-6 md:px-8 py-2 text-xs sm:text-sm" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Explore</Button>
                      <button
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[rgba(26,32,26,0.8)] border border-white flex items-center justify-center shadow-md"
                        style={{ borderWidth: '1.5px' }}
                        aria-label="Add to cart"
                      >
                        <Image
                          src="/bag.png"
                          alt="Shopping bag"
                          width={20}
                          height={20}
                          className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desk Decoration Card 2 - Text Left, Image Right */}
            <div className="relative overflow-visible">
              <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-white/20 h-full" style={{ borderRadius: '56px' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
                  {/* Left - Text Content */}
                  <div className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4 flex flex-col justify-center order-2 md:order-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>For Your Desks Decorations</h3>
                    <p className="text-white text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                      The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming
                    </p>
                    <p className="text-white font-semibold text-lg sm:text-xl" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Rs. 399/-</p>
                    <div className="flex gap-3 sm:gap-4">
                      <Button variant="outline" className="px-4 sm:px-6 md:px-8 py-2 text-xs sm:text-sm" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Explore</Button>
                      <button
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[rgba(26,32,26,0.8)] border border-white flex items-center justify-center shadow-md"
                        style={{ borderWidth: '1.5px' }}
                        aria-label="Add to cart"
                      >
                        <Image
                          src="/bag.png"
                          alt="Shopping bag"
                          width={20}
                          height={20}
                          className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                        />
                      </button>
                    </div>
                  </div>
                  
                  {/* Right - Image with overflow */}
                  <div className="relative w-full h-64 sm:h-80 md:h-full overflow-visible order-1 md:order-2">
                    <div className="absolute inset-0" style={{ top: '-80px', left: '10px', right: '-30px', bottom: '-20px' }}>
                      <Image
                        src="/Alovera.png"
                        alt="Desk Decoration Plant"
                        fill
                        className="object-contain"
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectPosition: 'center' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
      </div>

      {/* Top Selling Plants Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-8 bg-[#1A201A] overflow-visible">
        <div className="container mx-auto overflow-visible">
          <SectionTitle 
            bracketColor1="#FBD300"
            bracketColor2="#FFFFFF"
            bracketColor3="#FBD300"
          >
            Our Top Selling Plants
          </SectionTitle>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-16 sm:gap-y-24 md:gap-y-32 max-w-7xl mx-auto mt-12 sm:mt-16 md:mt-24 lg:mt-32">
            <PlantCard
              image="/Aglaonema.png"
              name="Aglaonema plant"
              description="The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care"
              price="Rs. 300/-"
            />
            <PlantCard
              image="/plantian lilies.png"
              name="Plantain Lilies"
              description="Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,"
              price="Rs. 380/-"
            />
            <PlantCard
              image="/cactus.png"
              name="Cactus"
              description="It is known for their ability to thrive in arid environments"
              price="Rs. 259/-"
            />
            <PlantCard
              image="/swis_cheese plant.png"
              name="Swiss Cheese Plant"
              description="It is a popular tropical houseplant known for its distinctive, perforated leaves"
              price="Rs. 400/-"
            />
            <PlantCard
              image="/Sanseviera.png"
              name="Sansevieria plant"
              description="It is a popular indoor plant admired for its striking appearance and low-maintenance nature."
              price="Rs. 450/-"
            />
            <PlantCard
              image="/Agave.png"
              name="Agave plant"
              description="The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms."
              price="Rs. 359/-"
            />
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-8 bg-[#1A201A]">
        <div className="container mx-auto">
          <SectionTitle 
            bracketColor1="#FBD300"
            bracketColor2="#FFFFFF"
            bracketColor3="#FBD300"
          >
            Customer Review
          </SectionTitle>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <TestimonialCard
              name="Shelly Russel"
              avatar="/testimonial_1.png"
              rating={4.5}
              review="Just got my hands on some absolutely awesome plants, and I couldn't be happier!"
            />
            <TestimonialCard
              name="Lula Rolfson"
              avatar="/testimonial_2.jpg"
              rating={4.5}
              review="Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home."
            />
            <TestimonialCard
              name="Carol Huels"
              avatar="/testimonial_3.png"
              rating={4.5}
              review="It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!"
            />
          </div>
        </div>
      </section>

      {/* O2 Plants Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-8 bg-[#1A201A] overflow-visible">
        <div className="container mx-auto overflow-visible">
          <SectionTitle>Our Best o2</SectionTitle>
          
          <div className="overflow-visible relative">
            {/* Main Card */}
            <div className='rounded-[24px] sm:rounded-[40px] md:rounded-[60px] relative' style={{ 
              height: 'auto',
              minHeight: '400px',
              border: '2px solid gray',
              background: '#262B26'
            }}>
              <div className='bg-white/5 backdrop-blur-md rounded-[22px] sm:rounded-[38px] md:rounded-[57px] h-full w-full'>
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-0">
                {/* Left - Image */}
                <div className="relative w-full h-64 sm:h-80 md:h-full m-0 p-0" style={{ marginTop: 0, paddingTop: 0, overflow: 'visible' }}>
                  <div className="absolute inset-0" style={{ top: '-60px', left: '-30px', right: '10px', bottom: '0px' }}>
                    <Image
                      src="/Aglaonema.png"
                      alt="Aglaonema O2 Plant"
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      style={{ objectPosition: 'top left', margin: 0, padding: 0 }}
                    />
                  </div>
                </div>

                {/* Right - Content */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-12 space-y-3 sm:space-y-4 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-white" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif'}}>
                    We Have Small And Best O2 Plants Collection&apos;s
                  </h3>
                  <p className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif'}}>
                    Oxygen-producing plants, often referred to as &quot;O2 plants,&quot; are those that release oxygen into the atmosphere through the process of photosynthesis.
                  </p>
                  <p className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif'}}>Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
                  
                  {/* Explore Button and Navigation on same line */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-2 gap-4 sm:gap-0">
                    <Button variant="outline" className="px-4 sm:px-6 md:px-8 py-2 text-sm sm:text-base" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif'}}>Explore</Button>
                    
                    {/* Navigation */}
                    <div className="flex items-center gap-4 sm:gap-6">
                      <button
                        className="text-white"
                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 600 }}
                        aria-label="Previous"
                      >
                        <Image
                          src="/arrow.png"
                          alt="Previous"
                          width={20}
                          height={20}
                          className="w-5 h-5 sm:w-6 sm:h-6 transform -scale-x-100"
                        />
                      </button>
                      <span className="text-white text-base sm:text-lg" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif'}}>01/<span className="text-white text-xs sm:text-sm" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 600 }}>04</span></span>
                      <button
                        className="text-white"
                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 600 }}
                        aria-label="Next"
                      >
                        <Image
                          src="/arrow.png"
                          alt="Next"
                          width={20}
                          height={20}
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pagination Dots - Below Navigation */}
        <div className="mt-8 sm:mt-12 md:mt-16 flex items-center justify-center gap-2">
                    <div className="w-5 h-2 rounded-full bg-white"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  </div>
        </div>
      </section>

      <Footer />
      </main>
  );
}
