import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { LeadForm } from "@/components/LeadForm";
import { DashboardMockup } from "@/components/DashboardMockup";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Package,
  Store,
  BarChart3,
  Users,
  Bell,
  Link as LinkIcon,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Smartphone,
  ScanLine,
  Building2,
  ShoppingBag,
  TrendingUp,
  Globe,
  ChevronDown,
  Menu,
  Play,
  ArrowRight,
  Minus,
  X,
  Download
} from "lucide-react";

function FeatureCard({ icon: Icon, title, description, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group p-8 rounded-xl bg-white border border-border/40 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
}

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("join-form")?.scrollIntoView({ behavior: "smooth" });
    if (typeof gtag !== 'undefined') {
      gtag('event', 'cta_click', {
        'event_category': 'engagement',
        'event_label': 'early_access_cta'
      });
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>KORE ERP - Sistema de Gestión para Retail y Moda | App Móvil Nativa con Escáner</title>
        <meta name="title" content="KORE ERP - Sistema de Gestión para Retail y Moda | App Móvil Nativa" />
        <meta name="description" content="ERP completo para retail con app móvil nativa Flutter, escáner de códigos de barras, multi-sucursal y Business Intelligence. Únete al Early Access." />
        <meta name="keywords" content="ERP retail, sistema POS, app móvil retail, gestión inventario, multi-sucursal, escáner códigos barras, POS móvil, retail moda, ERP moda" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kore-erp.com/" />
        <meta property="og:title" content="KORE ERP - Sistema de Gestión para Retail y Moda" />
        <meta property="og:description" content="ERP completo con app móvil nativa, escáner integrado y multi-sucursal para negocios de retail en crecimiento." />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kore-erp.com/" />
        <meta property="twitter:title" content="KORE ERP - Sistema de Gestión para Retail" />
        <meta property="twitter:description" content="ERP completo con app móvil nativa para retail y moda" />
        <meta property="twitter:image" content="/og-image.png" />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "KORE ERP",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Early Access Gratuito - Programa Piloto"
            },
            "description": "Sistema ERP completo para retail y moda con app móvil nativa, escáner de códigos y gestión multi-sucursal"
          })}
        </script>
      </Helmet>

      <div ref={containerRef} className="min-h-screen bg-[#F9FAFB] text-[#111827] selection:bg-primary/10 selection:text-primary">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/70 backdrop-blur-xl border-b border-border/50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 cursor-pointer group">
              <img src="/kore-logo.svg" alt="KORE Logo" className="w-10 h-10 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-2xl tracking-tight text-foreground">KORE</span>
            </a>

            <div className="hidden lg:flex items-center gap-10 text-sm font-semibold text-muted-foreground">
              <a href="#solucion" className="hover:text-primary transition-colors">Solución</a>
              <a href="#modulos" className="hover:text-primary transition-colors">Módulos</a>
              <a href="#mobile" className="hover:text-primary transition-colors">App Móvil</a>
              <a href="#casos" className="hover:text-primary transition-colors">Casos de Uso</a>
            </div>

            <div className="flex items-center gap-4">
              <Button asChild className="rounded-full px-6 font-bold shadow-md hover:shadow-lg transition-all bg-primary hover:bg-primary/90 hidden sm:flex">
                <a href="https://frontend-kore.vercel.app/login">Acceso Gratis</a>
              </Button>

              {/* Mobile Menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-6 mt-8">
                    <a href="#solucion" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold hover:text-primary transition-colors">Solución</a>
                    <a href="#modulos" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold hover:text-primary transition-colors">Módulos</a>
                    <a href="#mobile" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold hover:text-primary transition-colors">App Móvil</a>
                    <a href="#casos" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold hover:text-primary transition-colors">Casos de Uso</a>
                    <Button asChild className="mt-6 w-full"><a href="https://frontend-kore.vercel.app/login">Acceso Gratis</a></Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>

        {/* Sticky CTA Mobile */}
        <AnimatePresence>
          {scrollY > 800 && (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              className="fixed bottom-6 left-6 right-6 lg:hidden z-50"
            >
              <Button
                asChild
                className="w-full h-14 rounded-full shadow-2xl text-base font-bold"
              >
                <a href="https://frontend-kore.vercel.app/login">Obtener Acceso Gratis →</a>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-[0.2] -z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent -z-10" />

          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
            className="max-w-7xl mx-auto px-6 text-center z-10 flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-6 py-2 rounded-full bg-white shadow-xl shadow-primary/5 border border-primary/10 text-primary text-sm font-bold uppercase tracking-[0.2em] mb-12 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              ERP Completo para Retail & Moda
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-10 leading-[0.95] text-balance"
            >
              El Sistema que <span className="text-primary italic">Tu Retail Necesita</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mb-16 leading-relaxed"
            >
              Web + Mobile + Escáner integrado. Diseñado específicamente para negocios de ropa en crecimiento. Control total, visibilidad en tiempo real y escalabilidad nativa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              <Button size="lg" asChild className="h-16 px-12 text-xl rounded-full font-bold shadow-2xl shadow-primary/30 hover:scale-105 transition-transform">
                <a href="https://frontend-kore.vercel.app/login">Únete al Early Access →</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="h-16 px-12 text-xl rounded-full font-bold bg-white/50 backdrop-blur-sm hover:bg-white transition-all">
                <a href="https://frontend-kore.vercel.app/login"><Play className="w-5 h-5 mr-2" /> Ver Demo</a>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6 items-center justify-center mt-16 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="font-semibold">Sin tarjeta requerida</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="font-semibold">Configuración guiada</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="font-semibold">Soporte en español</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ opacity: heroOpacity }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60 hidden md:flex"
            >
              <span className="text-xs font-bold uppercase tracking-widest">Desliza para explorar</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Floating elements decoration */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute top-1/4 left-10 w-24 h-24 bg-primary/10 rounded-3xl blur-2xl -z-10"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"
          />
        </section>

        {/* Dashboard Visualization */}
        <section className="relative py-20 px-6 bg-white overflow-visible">
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-[#F9FAFB] -z-10" />
          <DashboardMockup scrollProgress={scrollYProgress} />
        </section>

        {/* Value Proposition */}
        <section id="solucion" className="py-32 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                  Toma el control total de tu operación.
                </h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                  KORE no es solo un software de ventas; es una arquitectura robusta diseñada para eliminar el caos administrativo y dar visibilidad en tiempo real a cada movimiento de tu negocio.
                </p>

                <div className="grid gap-8">
                  {[
                    { title: "Dashboards Inteligentes", desc: "KPIs críticos (ventas, stock, clientes) visibles al instante.", icon: BarChart3 },
                    { title: "Gestión Multi-Sucursal", desc: "Inventarios independientes y estadísticas consolidadas.", icon: Globe },
                    { title: "Seguridad de Grado Bancario", desc: "Arquitectura moderna con protección de datos total.", icon: ShieldCheck }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-[40px] flex items-center justify-center p-12">
                  <div className="grid grid-cols-2 gap-6 w-full">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-border/50">
                        <div className="h-2 w-12 bg-primary/20 rounded-full mb-4" />
                        <div className="h-4 w-full bg-secondary/50 rounded-lg" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Experience */}
        <section id="mobile" className="py-32 bg-[#2596be] text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold mb-8">
                APP MÓVIL NATIVA (FLUTTER)
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
                Tu negocio en tu bolsillo, literalmente.
              </h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                No es una web adaptada. Es una experiencia nativa fluida (60 FPS) con herramientas exclusivas para agilizar la operación en el piso de venta.
              </p>

              <div className="grid sm:grid-cols-2 gap-10 mb-12">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                    <ScanLine className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold">Escáner Nativo</h4>
                  <p className="text-white/70">Usa la cámara de tu teléfono como un escáner profesional para inventario y POS.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold">POS Móvil</h4>
                  <p className="text-white/70">Vende desde cualquier lugar de tu tienda, procesa pagos y genera recibos al instante.</p>
                </div>
              </div>

              {/* APK Download Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="h-14 px-8 rounded-xl font-bold bg-white text-[#2596be] hover:bg-white/90 shadow-xl">
                  <a href="/kore-app.apk" download>
                    <Download className="w-5 h-5 mr-2" />
                    Descargar APK Android
                  </a>
                </Button>
                <Button size="lg" asChild variant="outline" className="h-14 px-8 rounded-xl font-bold bg-white/10 text-white border-white/30 hover:bg-white/20">
                  <a href="https://frontend-kore.vercel.app/login">
                    Probar Versión Web →
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-[300px] h-[600px] bg-[#0B0F1A] rounded-[56px] border-[12px] border-[#1F2937] shadow-[0_64px_128px_-16px_rgba(0,0,0,0.3)] relative overflow-hidden group">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#1F2937] rounded-b-[24px] z-20" />

                {/* Content */}
                <div className="p-8 pt-20 h-full flex flex-col gap-6 relative bg-gradient-to-b from-[#0B0F1A] to-[#1F2937]">
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <img src="/kore-logo.svg" alt="KORE" className="w-8 h-8" />
                      <span className="text-white font-bold text-lg">KORE</span>
                    </div>
                    <div className="relative">
                      <Bell className="text-white/60 w-6 h-6" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/20">
                      <BarChart3 className="text-primary w-6 h-6 mb-2" />
                      <p className="text-white/60 text-xs">Ventas Hoy</p>
                      <p className="text-white font-bold text-lg">$5,430</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/20">
                      <Package className="text-green-500 w-6 h-6 mb-2" />
                      <p className="text-white/60 text-xs">En Stock</p>
                      <p className="text-white font-bold text-lg">1,247</p>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-3">
                    <div className="bg-white/5 backdrop-blur p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Users className="text-primary w-5 h-5" />
                        <span className="text-white text-sm font-semibold">Ver Clientes</span>
                      </div>
                      <ArrowRight className="text-white/40 w-4 h-4" />
                    </div>
                    <div className="bg-white/5 backdrop-blur p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Store className="text-primary w-5 h-5" />
                        <span className="text-white text-sm font-semibold">Nueva Venta</span>
                      </div>
                      <ArrowRight className="text-white/40 w-4 h-4" />
                    </div>
                  </div>

                  {/* Scan Button */}
                  <button className="mt-auto bg-primary text-white py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
                    <ScanLine className="w-5 h-5" />
                    Escanear Producto
                  </button>
                </div>
              </div>
              <div className="absolute -z-10 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]" />
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section id="modulos" className="py-32 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Módulos diseñados para retail profesional.</h2>
              <p className="text-xl text-muted-foreground">Una solución integral end-to-end que cubre todas las necesidades de tu comercio.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={Package}
                title="Gestión de Inventario"
                description="Control de stock por sucursal, alertas inteligentes y SKU único para trazabilidad total."
                delay={0}
              />
              <FeatureCard
                icon={Store}
                title="Punto de Venta (POS)"
                description="Interfaz intuitiva y rápida. Transacciones atómicas que descuentan stock al instante."
                delay={0.1}
              />
              <FeatureCard
                icon={Globe}
                title="Multi-Sucursal Real"
                description="Gestión centralizada de múltiples ubicaciones con inventario independiente."
                delay={0.2}
              />
              <FeatureCard
                icon={Users}
                title="CRM & Clientes"
                description="Historial de compras y análisis de comportamiento para fidelizar a tus clientes."
                delay={0.3}
              />
              <FeatureCard
                icon={LinkIcon}
                title="Proveedores"
                description="Control de cadena de suministro y órdenes de resurtido optimizadas."
                delay={0.4}
              />
              <FeatureCard
                icon={BarChart3}
                title="Business Intelligence"
                description="Gráficos profesionales y reportes accionables para decisiones basadas en datos."
                delay={0.5}
              />
              <FeatureCard
                icon={Zap}
                title="Configuración Onboarding"
                description="Guía paso a paso para configurar tu negocio desde cero en minutos."
                delay={0.6}
              />
              <FeatureCard
                icon={Bell}
                title="Alertas & Notificaciones"
                description="Mantente informado sobre stock bajo y eventos críticos en tiempo real."
                delay={0.7}
              />
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                ¿Por qué elegir KORE?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Compara y descubre las ventajas de una solución diseñada específicamente para retail.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Excel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-white border border-border/40 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-6">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="font-bold text-xl mb-4">Excel / Hojas</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                    <span>Sin control de stock en tiempo real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                    <span>Errores humanos frecuentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                    <span>No multi-sucursal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                    <span>Sin app móvil</span>
                  </li>
                </ul>
              </motion.div>

              {/* ERPs Genéricos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-xl bg-white border border-border/40 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-yellow-50 flex items-center justify-center mb-6">
                  <Minus className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-bold text-xl mb-4">ERPs Genéricos</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 shrink-0" />
                    <span>Implementación lenta (3-6 meses)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 shrink-0" />
                    <span>Precio elevado ($500+/mes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 shrink-0" />
                    <span>Curva de aprendizaje alta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 shrink-0" />
                    <span>No específico para retail</span>
                  </li>
                </ul>
              </motion.div>

              {/* KORE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-xl bg-primary/5 border-2 border-primary shadow-sm hover:shadow-xl transition-all relative group"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold">
                  MEJOR OPCIÓN
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 mt-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-primary">KORE ERP</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="font-semibold text-foreground">Setup rápido y guiado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="font-semibold text-foreground">Early Access gratuito</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="font-semibold text-foreground">App móvil nativa incluida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="font-semibold text-foreground">Diseñado para retail</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Studies / Profiles */}
        <section id="casos" className="py-32 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4">¿Por qué KORE es para ti?</h2>
              <p className="text-xl text-muted-foreground">Tecnología enterprise adaptada a tus necesidades reales.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Negocios en Crecimiento",
                  desc: "Onboarding guiado e interfaz intuitiva. Todo incluido para escalar sin complicaciones.",
                  icon: Building2
                },
                {
                  title: "Empresas Multi-sucursal",
                  desc: "Control centralizado. Ve todo desde un solo lugar. Autonomía total por ubicación.",
                  icon: Globe
                },
                {
                  title: "Retail & Moda",
                  desc: "Diseñado específicamente para ropa. POS rápido, tallas, colores y escáner integrado.",
                  icon: ShoppingBag
                }
              ].map((item, i) => (
                <div key={i} className="text-center group p-10 rounded-3xl bg-secondary/20 hover:bg-primary/5 transition-all">
                  <div className="w-20 h-20 rounded-full bg-white shadow-xl mx-auto flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-white border-y border-border/50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Preguntas Frecuentes</h2>
            <p className="text-xl text-center text-muted-foreground mb-16">Todo lo que necesitas saber sobre KORE</p>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-xl border border-border/50 px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  ¿Qué incluye el Early Access gratuito?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Acceso completo a todas las funcionalidades (web + móvil), soporte prioritario, onboarding personalizado, y la oportunidad de influir en el desarrollo del producto con tu feedback.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl border border-border/50 px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  ¿Funciona offline la app móvil?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Actualmente requiere conexión a internet para sincronización en tiempo real. Modo offline está en nuestro roadmap y se lanzará próximamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl border border-border/50 px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  ¿Cuánto tarda la implementación?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  El setup inicial con onboarding guiado toma menos de 1 hora. La configuración completa depende de tu negocio, pero la mayoría de empresas están operativas el mismo día.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl border border-border/50 px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  ¿Qué pasa después del Early Access?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Los miembros Early Access tendrán condiciones preferenciales garantizadas cuando lancemos oficialmente. Tu feedback nos ayudará a construir el mejor ERP para retail.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl border border-border/50 px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  ¿Qué dispositivos son compatibles?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Web: Cualquier navegador moderno (Chrome, Firefox, Safari, Edge). Móvil: iOS 12+ y Android 8+. También soportado en tablets.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl border border-border/50 px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  ¿Puedo migrar mis datos desde Excel u otro sistema?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sí, ofrecemos asistencia completa para migración de datos desde Excel, hojas de cálculo o sistemas legacy. Nuestro equipo te guía paso a paso.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA Form */}
        <section id="join-form" className="py-32 bg-secondary/30 relative">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
                Sé parte del futuro del retail.
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Estamos en fase Early Access co-creando KORE con usuarios reales. Únete hoy al programa y obtén acceso gratuito, soporte prioritario y la oportunidad de dar forma al producto perfecto para tu negocio.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-lg">Acceso completo gratuito durante Early Access</span>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-lg">Influye en el roadmap con tu feedback</span>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-lg">Soporte prioritario personalizado</span>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-lg">Condiciones preferenciales garantizadas</span>
                </div>
              </div>
            </div>

            <LeadForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-20 border-t border-border/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
              <div className="flex items-center gap-3">
                <img src="/kore-logo.svg" alt="KORE" className="w-8 h-8" />
                <span className="font-bold text-xl tracking-tight">KORE ERP</span>
              </div>
              <div className="flex gap-10 text-sm font-semibold text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
                <a href="#" className="hover:text-primary transition-colors">Términos</a>
                <a href="#" className="hover:text-primary transition-colors">Contacto</a>
              </div>
            </div>
            <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} KORE Systems. Tecnología Enterprise para todos.</p>
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2 text-sm font-medium text-green-600">
                  <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" /> Sistema Operativo 24/7
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
