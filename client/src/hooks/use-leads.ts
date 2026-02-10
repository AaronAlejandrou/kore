import { useMutation } from "@tanstack/react-query";
import { api, type InsertLead } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateLead() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertLead) => {
      // Validate with Zod before sending (though backend validates too)
      const validated = api.leads.create.input.parse(data);
      
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.leads.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error('Failed to submit form');
      }

      return api.leads.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "¡Recibido!",
        description: "Gracias por tu interés en Kore. Te contactaremos pronto.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Hubo un problema al enviar el formulario.",
        variant: "destructive",
      });
    },
  });
}
