import { motion, useTransform } from "framer-motion";
import { BarChart3, TrendingUp, Users, Package, ShoppingCart, Smartphone, ArrowUpRight } from "lucide-react";

export function DashboardMockup({ scrollProgress }: { scrollProgress?: any }) {
  const desktopY = useTransform(scrollProgress || { current: 0 }, [0, 0.3], [100, 0]);
  const desktopRotate = useTransform(scrollProgress || { current: 0 }, [0, 0.3], [15, 0]);
  const desktopScale = useTransform(scrollProgress || { current: 0 }, [0, 0.3], [0.9, 1]);
  
  const mobileY = useTransform(scrollProgress || { current: 0 }, [0.1, 0.4], [200, 0]);
  const mobileRotate = useTransform(scrollProgress || { current: 0 }, [0.1, 0.4], [-10, 0]);

  return (
    <div className="relative w-full max-w-6xl mx-auto perspective-1000">
      {/* Background Decorative Glow */}
      <div className="absolute -inset-20 bg-gradient-to-r from-primary/30 via-sky-400/20 to-primary/30 rounded-full blur-[120px] opacity-40 -z-10" />
      
      <div className="grid lg:grid-cols-12 gap-8 items-end">
        {/* Main Desktop Dashboard */}
        <motion.div 
          style={{ y: desktopY, rotateX: desktopRotate, scale: desktopScale }}
          className="lg:col-span-8 relative bg-white rounded-2xl shadow-[0_64px_128px_-16px_rgba(0,0,0,0.15)] border border-border/80 overflow-hidden hidden md:block"
        >
          {/* Dashboard Header */}
          <div className="h-16 border-b border-border/50 flex items-center px-6 gap-6 bg-[#F9FAFB]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="w-3 h-3 rounded-full bg-green-400/60" />
            </div>
            <div className="h-8 w-px bg-border/50 mx-2" />
            <div className="flex gap-4">
               <div className="h-4 w-20 bg-primary/10 rounded-full" />
               <div className="h-4 w-20 bg-secondary/60 rounded-full" />
            </div>
          </div>

          <div className="p-10">
            <div className="grid grid-cols-3 gap-8 mb-10">
              {[
                { label: "Ventas Hoy", val: "$12,450", color: "text-green-600" },
                { label: "Stock Crítico", val: "12 Items", color: "text-red-500" },
                { label: "Nuevos Clientes", val: "+24", color: "text-primary" },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#F9FAFB] border border-border/40 shadow-sm">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">{stat.label}</p>
                  <p className={`text-3xl font-black ${stat.color}`}>{stat.val}</p>
                </div>
              ))}
            </div>

            <div className="h-80 flex items-end gap-3 px-2 mb-6">
              {[40, 60, 35, 85, 45, 70, 55, 95, 65, 80, 50, 75, 60, 90, 45].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                  className="flex-1 bg-gradient-to-t from-primary/80 to-primary rounded-t-xl hover:scale-105 transition-transform origin-bottom"
                />
              ))}
            </div>
            <div className="flex justify-between text-[10px] font-black tracking-widest text-muted-foreground/60 border-t border-border/40 pt-6">
               <span>ENE</span><span>FEB</span><span>MAR</span><span>ABR</span><span>MAY</span><span>JUN</span><span>JUL</span><span>AGO</span>
            </div>
          </div>
        </motion.div>

        {/* Mobile App Representation */}
        <motion.div 
          style={{ y: mobileY, rotateZ: mobileRotate }}
          className="lg:col-span-4 relative flex justify-center lg:justify-end"
        >
          <div className="w-[300px] h-[600px] bg-[#0B0F1A] rounded-[56px] border-[12px] border-[#1F2937] shadow-[0_64px_128px_-16px_rgba(0,0,0,0.3)] relative overflow-hidden group">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#1F2937] rounded-b-[24px] z-20" />
            
            <div className="p-8 pt-20 h-full flex flex-col gap-8 relative">
              <div className="flex justify-between items-center mb-2">
                 <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20">
                    <Smartphone className="w-7 h-7" />
                 </div>
                 <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center">
                    <ArrowUpRight className="text-white/40 w-5 h-5" />
                 </div>
              </div>
              
              <div className="space-y-6">
                <div className="h-10 w-3/4 bg-white/10 rounded-xl" />
                <div className="grid grid-cols-2 gap-4">
                   <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 p-5 group-hover:bg-white/10 transition-colors">
                      <Package className="text-primary w-8 h-8 mb-3" />
                      <div className="h-3 w-16 bg-white/10 rounded" />
                   </div>
                   <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 p-5 group-hover:bg-white/10 transition-colors">
                      <TrendingUp className="text-green-500 w-8 h-8 mb-3" />
                      <div className="h-3 w-16 bg-white/10 rounded" />
                   </div>
                </div>
              </div>

              {/* Floating Sale UI */}
              <div className="mt-auto bg-white/5 backdrop-blur-xl rounded-[32px] p-6 border border-white/10 shadow-2xl">
                 <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black tracking-widest text-white/40 uppercase">ORDEN ACTIVA</span>
                    <span className="text-primary font-black text-xl">$149.00</span>
                 </div>
                 <div className="h-14 w-full bg-primary rounded-2xl flex items-center justify-center text-base font-black text-white shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
                    PROCESAR PAGO
                 </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Badge Floating */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-10 -right-6 lg:-right-12 bg-white p-5 rounded-[24px] shadow-2xl border border-border/50 flex items-center gap-4 z-30"
          >
             <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Smartphone className="w-6 h-6" />
             </div>
             <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">Tecnología Flutter</p>
                <p className="font-bold text-base text-foreground">60 FPS Native Performance</p>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
