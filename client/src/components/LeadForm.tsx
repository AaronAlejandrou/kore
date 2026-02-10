import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { useCreateLead } from "@/hooks/use-leads";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";

export function LeadForm() {
  const { mutate, isPending } = useCreateLead();

  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      businessName: "",
      email: "",
      whatsapp: "",
      industry: "",
      branches: 1,
      comment: "",
    },
  });

  const onSubmit = (data: InsertLead) => {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-xl shadow-black/5 border border-border/50"
    >
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold font-display">Solicita Acceso Anticipado</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Únete al programa piloto y transforma tu operación hoy mismo.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Aaron Alejandro" {...field} className="h-12 rounded-lg bg-secondary/30 border-transparent focus:bg-background focus:border-primary/20 transition-all" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="contacto@gmail.com" {...field} className="h-12 rounded-lg bg-secondary/30 border-transparent focus:bg-background focus:border-primary/20 transition-all" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp</FormLabel>
                <FormControl>
                  <Input placeholder="+51 123 456 789" {...field} value={field.value || ''} className="h-12 rounded-lg bg-secondary/30 border-transparent focus:bg-background focus:border-primary/20 transition-all" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isPending}
            className="w-full h-14 text-lg font-bold rounded-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            {isPending ? (
              <>
                <Loader2 className="animate-spin mr-2" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="mr-2" />
                Solicitar Acceso Gratis
              </>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Sin tarjeta de crédito. Te contactaremos en 24 horas como màximo.
          </p>
        </form>
      </Form>
    </motion.div>
  );
}
