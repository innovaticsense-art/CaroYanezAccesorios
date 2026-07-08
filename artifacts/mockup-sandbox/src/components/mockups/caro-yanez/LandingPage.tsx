import React, { useState, useEffect } from "react";
import { 
  ShoppingBag, MessageCircle, Heart, Gem, Gift, 
  Instagram, Menu, X, ChevronDown, Star, ArrowRight, 
  Phone, Mail, MapPin, Clock, ChevronLeft, ChevronRight,
  CheckCircle2
} from "lucide-react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [contactForm, setContactForm] = useState({
    nombre: "", email: "", consulta: "Consulta de producto", producto: "", mensaje: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    { text: "Los accesorios son hermosos y llegaron con un empaque precioso.", author: "María González, Santiago" },
    { text: "Me encantó la atención, me ayudaron a elegir el regalo perfecto.", author: "Valentina Ruiz, Viña del Mar" },
    { text: "Las piezas se ven delicadas, femeninas y muy bien elaboradas.", author: "Constanza López, Concepción" },
    { text: "Compré aretes para mi cumpleaños y todos me los elogiaron.", author: "Isidora Morales, Santiago" },
    { text: "El empaque era tan bonito que casi da pena abrirlo.", author: "Fernanda Castro, La Serena" }
  ];

  const handleTestimonialPrev = () => {
    setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  };
  const handleTestimonialNext = () => {
    setCurrentTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
  };

  const submitContactForm = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => {
      setFormStatus("idle");
      setContactForm({ nombre: "", email: "", consulta: "Consulta de producto", producto: "", mensaje: "" });
    }, 3000);
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const primaryText = "text-[#1F1F1F]";
  const bgMain = "bg-[#FFFDF8]";
  const bgRose = "bg-[#D9A7A7]";
  const textRose = "text-[#D9A7A7]";
  const bgGold = "bg-[#C8A45D]";
  const textGold = "text-[#C8A45D]";
  const bgTerra = "bg-[#B86B5E]";
  const borderGold = "border-[#C8A45D]";

  const headingFont = { fontFamily: "'Playfair Display', serif" };
  const bodyFont = { fontFamily: "'Lato', sans-serif" };

  return (
    <div className={`min-h-[100dvh] w-full ${bgMain} ${primaryText} overflow-x-hidden`} style={{ scrollBehavior: "smooth" }}>
      
      {/* 1. Fixed Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#FFFDF8]/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="text-center flex-1 md:flex-none">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wide" style={headingFont}>
              CARO YAÑEZ
            </h1>
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-gray-500" style={bodyFont}>Accesorios</p>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8 text-sm uppercase tracking-wider" style={bodyFont}>
            <li><a href="#inicio" className="hover:text-[#C8A45D] transition-colors">Inicio</a></li>
            <li><a href="#colecciones" className="hover:text-[#C8A45D] transition-colors">Colecciones</a></li>
            <li><a href="#productos" className="hover:text-[#C8A45D] transition-colors">Productos</a></li>
            <li><a href="#nosotras" className="hover:text-[#C8A45D] transition-colors">Sobre Nosotras</a></li>
            <li><a href="#contacto" className="hover:text-[#C8A45D] transition-colors">Contacto</a></li>
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <a href="#contacto" className="hidden md:flex text-[#25D366] hover:scale-110 transition-transform">
              <MessageCircle size={22} />
            </a>
            <button className="relative hover:scale-110 transition-transform">
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-[#D9A7A7] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-down Menu */}
      <div className={`fixed inset-0 z-40 bg-[#FFFDF8] pt-24 px-6 transition-transform duration-500 ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <ul className="flex flex-col space-y-6 text-xl text-center" style={headingFont}>
          <li><a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Inicio</a></li>
          <li><a href="#colecciones" onClick={() => setMobileMenuOpen(false)}>Colecciones</a></li>
          <li><a href="#productos" onClick={() => setMobileMenuOpen(false)}>Productos</a></li>
          <li><a href="#nosotras" onClick={() => setMobileMenuOpen(false)}>Sobre Nosotras</a></li>
          <li><a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</a></li>
        </ul>
        <div className="mt-12 flex justify-center space-x-6">
          <Instagram size={24} className={textGold} />
          <MessageCircle size={24} className={textGold} />
        </div>
      </div>

      {/* 2. Hero Section */}
      <section id="inicio" className="relative h-[100dvh] w-full flex items-center pt-16">
        <div className="absolute inset-0 z-0 flex md:justify-end">
          <div className="w-full md:w-[60%] h-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF8] via-[#FFFDF8]/80 to-transparent z-10 md:w-32"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF8] via-transparent to-[#FFFDF8]/30 z-10 md:hidden"></div>
            <img 
              src="/__mockup/images/hero-jewelry.jpg" 
              alt="Joyas delicadas sobre lino" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col justify-center h-full">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl lg:text-8xl leading-tight mb-4" style={headingFont}>
              CARO YAÑEZ <br/>
              <span className="text-3xl md:text-5xl">ACCESORIOS</span>
            </h2>
            <p className="text-xl md:text-2xl italic text-[#C8A45D] mb-6" style={headingFont}>
              "Accesorios que elevan tu estilo y cuentan tu historia"
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-md" style={bodyFont}>
              Piezas femeninas, delicadas y únicas para acompañarte en cada ocasión.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4" style={bodyFont}>
              <a href="#colecciones" className="bg-[#D9A7A7] text-white px-8 py-4 rounded-sm text-center uppercase tracking-widest text-sm hover:bg-[#c99595] transition-colors shadow-lg shadow-[#D9A7A7]/30">
                Ver colección
              </a>
              <a href="#contacto" className="border border-[#C8A45D] text-[#C8A45D] px-8 py-4 rounded-sm text-center uppercase tracking-widest text-sm hover:bg-[#C8A45D] hover:text-white transition-all">
                Comprar por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown size={32} className={textGold} />
        </div>
      </section>

      {/* Decorative Line */}
      <div className="w-full flex justify-center py-12">
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#C8A45D]/40"></div>
          <div className="w-2 h-2 rounded-full bg-[#C8A45D]/60"></div>
          <div className="w-2 h-2 rounded-full bg-[#C8A45D]"></div>
          <div className="w-2 h-2 rounded-full bg-[#C8A45D]/60"></div>
          <div className="w-2 h-2 rounded-full bg-[#C8A45D]/40"></div>
        </div>
      </div>

      {/* 3. Collections Grid */}
      <section id="colecciones" className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl mb-4" style={headingFont}>Nuestras Colecciones</h3>
          <div className="w-16 h-px bg-[#C8A45D] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Aretes", desc: "Detalles que enmarcan tu mirada", bg: "bg-gradient-to-br from-[#f9f2eb] to-[#eedcd0]" },
            { name: "Collares", desc: "Para llevar cerca lo que amas", bg: "bg-gradient-to-br from-[#f4ecec] to-[#e4d1d1]" },
            { name: "Pulseras", desc: "Un toque delicado en tu muñeca", bg: "bg-gradient-to-br from-[#fcfbf9] to-[#ebdcc2]" },
            { name: "Prendedores", desc: "Pequeños detalles, gran impacto", bg: "bg-gradient-to-br from-[#f7eeed] to-[#dfc4c0]" },
            { name: "Sets de Regalo", desc: "Todo lo que necesitas en un solo estuche", bg: "bg-gradient-to-br from-[#f8f5f0] to-[#e2d5c4]" },
            { name: "Ediciones Especiales", desc: "Piezas únicas de temporada", bg: "bg-gradient-to-br from-[#fdfbfb] to-[#ebdede]" }
          ].map((col, idx) => (
            <div key={idx} className={`relative h-64 ${col.bg} p-8 flex flex-col justify-center items-center text-center group cursor-pointer overflow-hidden rounded-sm`}>
              <div className="z-10 transition-transform duration-500 group-hover:-translate-y-4">
                <h4 className="text-2xl mb-2" style={headingFont}>{col.name}</h4>
                <p className="text-sm text-gray-600" style={bodyFont}>{col.desc}</p>
              </div>
              <div className="absolute bottom-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                <span className="uppercase text-xs tracking-widest border-b border-[#1F1F1F] pb-1" style={bodyFont}>Explorar</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Featured Products */}
      <section id="productos" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl mb-4" style={headingFont}>Productos Destacados</h3>
            <div className="w-16 h-px bg-[#C8A45D] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "Aretes perla nacarada", price: "$8.900", badge: "Nuevo", img: "/__mockup/images/aretes-perla.jpg" },
              { name: "Collar luna dorada", price: "$15.900", badge: "Más vendido", img: null },
              { name: "Pulsera doble eslabón", price: "$12.500", badge: "Hecho a mano", img: null },
              { name: "Set aretes y collar", price: "$24.900", badge: "Ideal para regalo", img: null },
              { name: "Prendedor flor tejida", price: "$9.500", badge: "Edición limitada", img: null },
              { name: "Aretes colgantes boho", price: "$7.900", badge: "Hecho a mano", img: null },
              { name: "Collar choker elegante", price: "$13.900", badge: "Más vendido", img: null },
              { name: "Pulsera cristales rosas", price: "$11.500", badge: "Nuevo", img: null }
            ].map((prod, idx) => (
              <div key={idx} className="group flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-gradient-to-br from-[#f8f5f0] to-[#e8ddd0] flex items-center justify-center">
                  {prod.badge && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[10px] uppercase tracking-wider px-2 py-1 z-10" style={bodyFont}>
                      {prod.badge}
                    </div>
                  )}
                  {prod.img ? (
                    <img src={prod.img} alt={prod.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
                      <Gem size={32} className="text-[#C8A45D]/40 mb-2" />
                      <span className="text-[#C8A45D]/60 text-sm font-light italic" style={headingFont}>{prod.name}</span>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Quick action buttons */}
                  <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
                    <button 
                      onClick={handleAddToCart}
                      className="flex-1 bg-white/95 backdrop-blur py-3 text-xs uppercase tracking-wider hover:bg-[#D9A7A7] hover:text-white transition-colors flex justify-center items-center gap-2 shadow-sm" style={bodyFont}>
                      Agregar
                    </button>
                    <a href="#contacto" className="bg-[#25D366] text-white w-12 flex justify-center items-center hover:bg-[#20b858] transition-colors shadow-sm">
                      <MessageCircle size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="text-center flex-1 flex flex-col justify-between">
                  <h5 className="text-sm md:text-base mb-1 text-gray-800" style={bodyFont}>{prod.name}</h5>
                  <p className="text-[#C8A45D] font-medium" style={bodyFont}>{prod.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Value Proposition */}
      <section className="py-20 bg-[#fbf9f6] px-6 md:px-12 border-y border-[#eadecc]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl mb-4" style={headingFont}>¿Por qué elegir CARO YAÑEZ?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: <Gem size={32} />, title: "Materiales de calidad", desc: "Seleccionamos cada elemento con detalle." },
              { icon: <Heart size={32} />, title: "Diseños versátiles", desc: "Pensados para resaltar tu feminidad." },
              { icon: <MessageCircle size={32} />, title: "Atención personal", desc: "Te asesoramos en cada paso." },
              { icon: <Gift size={32} />, title: "Empaque especial", desc: "Listo para regalar y sorprender." },
              { icon: <ShoppingBag size={32} />, title: "Compra fácil", desc: "Por WhatsApp o tienda online." }
            ].map((val, idx) => (
              <div key={idx} className="text-center flex flex-col items-center p-6 bg-white shadow-sm border border-[#f0ede5] hover:-translate-y-2 transition-transform duration-300">
                <div className={`w-16 h-16 rounded-full bg-[#fdfaf5] flex items-center justify-center mb-6 text-[#D9A7A7]`}>
                  {val.icon}
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-3" style={bodyFont}>{val.title}</h4>
                <p className="text-sm text-gray-600" style={bodyFont}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. About the Brand */}
      <section id="nosotras" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[#C8A45D]/10 translate-x-4 translate-y-4"></div>
            <img 
              src="/__mockup/images/about-artisan.jpg" 
              alt="Carolina Yañez en su taller" 
              className="w-full h-auto relative z-10 shadow-xl"
            />
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col">
            <h3 className="text-3xl md:text-5xl mb-8" style={headingFont}>Nuestra Historia</h3>
            
            <div className="space-y-6 text-gray-700 leading-relaxed" style={bodyFont}>
              <p>
                <strong>CARO YAÑEZ ACCESORIOS</strong> nació del amor por los detalles. Cada pieza que diseñamos está pensada para ser más que un accesorio: es una extensión de tu personalidad, una forma de expresar quién eres sin decir una sola palabra.
              </p>
              <p>
                Nuestra fundadora, Carolina Yañez, comenzó este proyecto desde su taller en casa, inspirada por la feminidad natural de las mujeres latinoamericanas. Cada diseño lleva consigo una historia, un sentimiento, una intención.
              </p>
              <p>
                Trabajamos con materiales cuidadosamente seleccionados: acero inoxidable, plata 925, cristales checos y perlas cultivadas. Porque creemos que la calidad no debería ser un lujo, sino un estándar.
              </p>
              <p>
                Hoy, CARO YAÑEZ ACCESORIOS es más que una tienda. Es una comunidad de mujeres que entienden que los pequeños detalles hacen una gran diferencia.
              </p>
            </div>
            
            <div className="mt-10 border-l-2 border-[#D9A7A7] pl-6 py-2">
              <p className="text-xl md:text-2xl text-[#C8A45D] italic" style={headingFont}>
                "Cada accesorio está pensado para resaltar tu esencia, tu feminidad y tu estilo personal."
              </p>
            </div>
            
            <button className="mt-12 self-start border-b border-[#1F1F1F] pb-1 uppercase text-xs tracking-[0.2em] hover:text-[#C8A45D] hover:border-[#C8A45D] transition-colors" style={bodyFont}>
              Conoce más sobre nosotras
            </button>
          </div>
        </div>
      </section>

      {/* 7. Lookbook Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl mb-4" style={headingFont}>Inspírate con nuestros looks</h3>
            <div className="w-16 h-px bg-[#C8A45D] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
            {/* Cell 1: Image span 2 cols, 2 rows */}
            <div className="col-span-2 row-span-2 relative overflow-hidden group cursor-pointer bg-gray-100">
              <img src="/__mockup/images/lookbook-model.jpg" alt="Lookbook principal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xl uppercase tracking-widest border border-white/50 px-6 py-3" style={headingFont}>Elegancia Natural</span>
              </div>
            </div>
            
            {/* Cell 2 */}
            <div className="relative overflow-hidden group cursor-pointer bg-gradient-to-br from-[#f2e8de] to-[#e4d4c5] flex items-center justify-center p-6 text-center">
              <div className="absolute inset-0 bg-[#D9A7A7]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10 text-lg uppercase tracking-wider text-gray-800" style={headingFont}>Look de día</span>
            </div>
            
            {/* Cell 3 */}
            <div className="relative overflow-hidden group cursor-pointer bg-gradient-to-tr from-[#fbf5f2] to-[#eedcdb] flex items-center justify-center p-6 text-center">
               <div className="absolute inset-0 bg-[#C8A45D]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10 text-lg uppercase tracking-wider text-gray-800" style={headingFont}>Detalle protagonista</span>
            </div>
            
            {/* Cell 4 */}
            <div className="col-span-2 md:col-span-1 relative overflow-hidden group cursor-pointer bg-gradient-to-bl from-[#f0ebf0] to-[#e1d5e3] flex items-center justify-center p-6 text-center">
               <div className="absolute inset-0 bg-[#B86B5E]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10 text-lg uppercase tracking-wider text-gray-800" style={headingFont}>Perfecto para regalar</span>
            </div>
            
            {/* Cell 5 */}
            <div className="relative overflow-hidden group cursor-pointer bg-gradient-to-r from-[#eef2f5] to-[#d6e0e5] flex items-center justify-center p-6 text-center">
               <div className="absolute inset-0 bg-[#D9A7A7]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10 text-lg uppercase tracking-wider text-gray-800" style={headingFont}>Estilo casual</span>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="border border-[#1F1F1F] px-8 py-3 uppercase tracking-widest text-xs hover:bg-[#1F1F1F] hover:text-white transition-colors" style={bodyFont}>
              Ver Lookbook completo
            </button>
          </div>
        </div>
      </section>

      {/* 8. Gifts Section */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-[#f4ecec] to-[#FFFDF8]">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6 text-[#D9A7A7] shadow-sm">
              <Gift size={14} />
              <span>Empaque especial incluido</span>
            </div>
            <h3 className="text-4xl md:text-5xl mb-6" style={headingFont}>Regalos que enamoran</h3>
            <p className="text-lg text-gray-600 mb-10" style={bodyFont}>
              Encuentra el detalle perfecto para sorprender a alguien especial. Cada compra incluye nuestro empaque boutique perfumado.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10" style={bodyFont}>
              {['🎂 Cumpleaños', '💝 Amigas', '👩 Mamá', '💕 Románticos', '✨ Sets personalizados'].map((tag, i) => (
                <span key={i} className="bg-white border border-[#e2d5c4] px-4 py-2 rounded-full text-sm hover:border-[#D9A7A7] cursor-pointer transition-colors shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            <button className="bg-[#D9A7A7] text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-[#c99595] transition-colors shadow-lg" style={bodyFont}>
              Ver opciones de regalo
            </button>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square md:aspect-[4/3] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/__mockup/images/gift-box.jpg" 
                alt="Empaque de regalo elegante" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-[#FFFDF8]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl mb-16" style={headingFont}>Lo que dicen nuestras clientas</h3>
          
          <div className="relative bg-white p-8 md:p-16 shadow-sm border border-[#f0ede5] rounded-br-[40px] rounded-tl-[40px]">
            <div className="text-[#C8A45D] flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" className="mx-1" />)}
            </div>
            
            <div className="overflow-hidden min-h-[120px] flex items-center justify-center">
              <p className="text-xl md:text-2xl text-gray-800 italic leading-relaxed transition-opacity duration-500" style={headingFont}>
                "{testimonials[currentTestimonial].text}"
              </p>
            </div>
            
            <p className="mt-8 text-sm font-bold uppercase tracking-widest text-[#D9A7A7]" style={bodyFont}>
              — {testimonials[currentTestimonial].author}
            </p>
            
            <div className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2">
              <button onClick={handleTestimonialPrev} className="bg-white p-3 rounded-full shadow-md text-gray-500 hover:text-[#C8A45D] transition-colors">
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2">
              <button onClick={handleTestimonialNext} className="bg-white p-3 rounded-full shadow-md text-gray-500 hover:text-[#C8A45D] transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentTestimonial(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentTestimonial ? "bg-[#C8A45D]" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 10. How to Buy */}
      <section className="py-20 px-6 md:px-12 bg-white border-t border-[#f0ede5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl mb-4" style={headingFont}>¿Cómo comprar?</h3>
            <p className="text-gray-500" style={bodyFont}>Un proceso simple, seguro y personalizado</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-10 -translate-y-1/2"></div>
            
            {[
              { num: "1", title: "Elige", desc: "Tus piezas favoritas en el catálogo" },
              { num: "2", title: "Contáctanos", desc: "Vía WhatsApp para consultar stock" },
              { num: "3", title: "Pago", desc: "Transferencia o link de pago" },
              { num: "4", title: "Envío", desc: "Coordinamos la entrega" },
              { num: "5", title: "Disfruta", desc: "Recibe tu pedido en casa" }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center mb-8 md:mb-0 relative group">
                <div className="w-16 h-16 rounded-full bg-[#FFFDF8] border-2 border-[#D9A7A7] flex items-center justify-center text-xl font-bold text-[#D9A7A7] mb-4 bg-white group-hover:bg-[#D9A7A7] group-hover:text-white transition-colors" style={headingFont}>
                  {step.num}
                </div>
                <h4 className="font-bold uppercase tracking-wide text-sm mb-2" style={bodyFont}>{step.title}</h4>
                <p className="text-xs text-gray-500 text-center max-w-[120px]" style={bodyFont}>{step.desc}</p>
                {/* Mobile connecting line */}
                {i < 4 && <div className="md:hidden w-px h-8 bg-gray-200 my-4"></div>}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <a href="#contacto" className="inline-flex items-center justify-center space-x-2 bg-[#1F1F1F] text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-[#333] transition-colors" style={bodyFont}>
              <span>Empieza tu compra</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 11. Style Blog / Advice */}
      <section className="py-24 px-6 md:px-12 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-3xl md:text-4xl mb-2" style={headingFont}>Consejos de Estilo</h3>
              <p className="text-gray-500" style={bodyFont}>Aprende a lucir tus accesorios al máximo</p>
            </div>
            <button className="hidden md:block uppercase text-xs tracking-widest font-bold text-[#D9A7A7] hover:text-[#C8A45D] transition-colors" style={bodyFont}>
              Ver más consejos →
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Cómo elegir aretes según la forma de tu rostro", time: "3 min", bg: "from-[#f4ecec] to-[#e2d5c4]" },
              { title: "Cómo combinar collar y aretes sin equivocarte", time: "4 min", bg: "from-[#f9f2eb] to-[#eadac5]" },
              { title: "Accesorios ideales para looks de oficina", time: "5 min", bg: "from-[#f0ede5] to-[#d6cfb8]" }
            ].map((blog, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className={`w-full aspect-[4/3] bg-gradient-to-br ${blog.bg} rounded-sm mb-6 flex items-center justify-center overflow-hidden relative`}>
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                  <Gem size={48} className="text-[#C8A45D]/30 transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#D9A7A7] font-bold" style={bodyFont}>Guía</span>
                  <span className="text-[10px] text-gray-400 flex items-center" style={bodyFont}><Clock size={10} className="mr-1"/> {blog.time} de lectura</span>
                </div>
                <h4 className="text-xl leading-snug group-hover:text-[#C8A45D] transition-colors" style={headingFont}>
                  {blog.title}
                </h4>
              </div>
            ))}
          </div>
          
          <button className="md:hidden mt-10 w-full text-center uppercase text-xs tracking-widest font-bold text-[#D9A7A7]" style={bodyFont}>
            Ver más consejos →
          </button>
        </div>
      </section>

      {/* 12. Instagram Feed */}
      <section className="py-20 bg-white">
        <div className="text-center mb-10 px-6">
          <h3 className="text-2xl md:text-3xl mb-2" style={headingFont}>Síguenos para descubrir nuevas piezas</h3>
          <a href="#" className="text-[#C8A45D] flex items-center justify-center space-x-2 text-lg hover:text-[#b08b47] transition-colors" style={bodyFont}>
            <Instagram size={20} />
            <span>@caroyanez.accesorios</span>
          </a>
        </div>
        
        <div className="flex flex-wrap md:grid md:grid-cols-6 w-full">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="w-1/2 md:w-full aspect-square relative group overflow-hidden bg-gradient-to-br from-[#f8f5f0] to-[#eaddcc] flex items-center justify-center border border-white">
              <Gem size={32} className="text-[#C8A45D]/20" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram size={32} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 13. Contact + WhatsApp Section */}
      <section id="contacto" className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#FFFDF8] to-[#f7eeed]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl md:text-5xl mb-6 leading-tight" style={headingFont}>¿Quieres asesoría para elegir tus accesorios?</h3>
            <p className="text-lg text-gray-600 mb-10" style={bodyFont}>
              Estamos listas para ayudarte a encontrar la pieza perfecta para ti o para regalar. Escríbenos y te responderemos a la brevedad.
            </p>
            
            <div className="space-y-6 mb-10">
              <a href="#" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1" style={bodyFont}>Escribir por WhatsApp</p>
                  <p className="font-bold text-lg" style={bodyFont}>+56 9 1234 5678</p>
                </div>
              </a>
              
              <a href="#" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-[#D9A7A7] rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1" style={bodyFont}>Enviar Correo</p>
                  <p className="font-bold text-lg" style={bodyFont}>hola@caroyanez.cl</p>
                </div>
              </a>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#f4ecec] rounded-full flex items-center justify-center text-[#D9A7A7]">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1" style={bodyFont}>Envíos a todo Chile</p>
                  <p className="font-bold text-lg" style={bodyFont}>Desde Santiago</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-10 shadow-xl rounded-sm border-t-4 border-[#D9A7A7]">
            <h4 className="text-2xl mb-8 text-center" style={headingFont}>Envíanos un mensaje</h4>
            
            {formStatus === "success" ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in">
                <CheckCircle2 size={64} className="text-[#25D366]" />
                <h5 className="text-2xl" style={headingFont}>¡Mensaje Enviado!</h5>
                <p className="text-gray-600" style={bodyFont}>Te responderemos en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={submitContactForm} className="space-y-5" style={bodyFont}>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Nombre completo</label>
                  <input 
                    type="text" 
                    required
                    value={contactForm.nombre}
                    onChange={e => setContactForm({...contactForm, nombre: e.target.value})}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#C8A45D] transition-colors bg-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    value={contactForm.email}
                    onChange={e => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#C8A45D] transition-colors bg-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Tipo de consulta</label>
                  <select 
                    value={contactForm.consulta}
                    onChange={e => setContactForm({...contactForm, consulta: e.target.value})}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#C8A45D] transition-colors bg-transparent text-gray-700"
                  >
                    <option>Consulta de producto</option>
                    <option>Pedido personalizado</option>
                    <option>Envíos</option>
                    <option>Regalo</option>
                    <option>Otro</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Mensaje</label>
                  <textarea 
                    rows={4}
                    required
                    value={contactForm.mensaje}
                    onChange={e => setContactForm({...contactForm, mensaje: e.target.value})}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#C8A45D] transition-colors bg-transparent resize-none"
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full bg-[#1F1F1F] text-white py-4 uppercase tracking-widest text-sm hover:bg-[#333] transition-colors mt-4">
                  Enviar consulta
                </button>
                <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest mt-4">Respondemos en menos de 24 horas</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 14. Footer */}
      <footer className="bg-[#1a1a1a] text-white pt-20 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h2 className="text-2xl mb-4" style={headingFont}>CARO YAÑEZ</h2>
            <p className="text-[#C8A45D] text-sm uppercase tracking-widest mb-6" style={bodyFont}>Accesorios</p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8" style={bodyFont}>
              Accesorios femeninos, delicados y únicos diseñados para resaltar tu esencia y acompañarte en cada momento especial.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><MessageCircle size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 font-bold text-gray-200" style={bodyFont}>Enlaces Rápidos</h4>
            <ul className="space-y-4 text-sm text-gray-400" style={bodyFont}>
              <li><a href="#inicio" className="hover:text-[#C8A45D] transition-colors">Inicio</a></li>
              <li><a href="#colecciones" className="hover:text-[#C8A45D] transition-colors">Colecciones</a></li>
              <li><a href="#productos" className="hover:text-[#C8A45D] transition-colors">Productos Destacados</a></li>
              <li><a href="#nosotras" className="hover:text-[#C8A45D] transition-colors">Sobre la marca</a></li>
              <li><a href="#contacto" className="hover:text-[#C8A45D] transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-[#C8A45D] transition-colors">Políticas de envío</a></li>
              <li><a href="#" className="hover:text-[#C8A45D] transition-colors">Cambios y devoluciones</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 font-bold text-gray-200" style={bodyFont}>Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400" style={bodyFont}>
              <li className="flex items-start space-x-3">
                <Phone size={16} className="mt-1 text-[#C8A45D]" />
                <span>+56 9 1234 5678<br/><span className="text-xs text-gray-500">Lun a Vie: 10:00 - 19:00</span></span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-[#C8A45D]" />
                <span>hola@caroyanez.cl</span>
              </li>
              <li className="flex items-start space-x-3 mt-6">
                <MapPin size={16} className="mt-1 text-[#C8A45D]" />
                <span>Taller privado en Santiago<br/><span className="text-xs text-gray-500">Solo envíos a domicilio</span></span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500" style={bodyFont}>
          <p>© 2025 CARO YAÑEZ ACCESORIOS. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-gray-300">Términos y Condiciones</a>
            <a href="#" className="hover:text-gray-300">Política de Privacidad</a>
          </div>
        </div>
      </footer>

      {/* 15. Floating WhatsApp Button */}
      <a 
        href="https://wa.me/56912345678" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group flex items-center"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-sm font-medium" style={bodyFont}>
          <span className="pr-3">¿En qué te ayudo?</span>
        </span>
        <MessageCircle size={28} />
        
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></span>
      </a>

    </div>
  );
}
