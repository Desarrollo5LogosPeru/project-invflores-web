"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";
import { useProductosStore } from "@/store/productos/productos.store";

const FAQSkeleton = () => (
  <section className="w-full bg-transparent py-20">
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
      <div className="flex flex-col items-center mb-12 gap-3">
        <div className="h-8 w-64 bg-gray-200 rounded" />
      </div>
      <div className="flex flex-col gap-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm px-6 py-5 flex justify-between items-center"
          >
            <div className="h-4 bg-gray-200 rounded" style={{ width: `${60 + i * 5}%` }} />
            <div className="w-5 h-5 bg-gray-200 rounded-full ml-4 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ProductFAQ = () => {
  const { seccion04, seccion04Faqs, loading } = useProductosStore();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading && !seccion04) return <FAQSkeleton />;

  return (
    <section className="w-full bg-transparent py-20">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-accent">{seccion04?.title ?? "Preguntas Frecuentes"}</h2>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {seccion04Faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <h6 className="text-accent">{faq.title}</h6>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 ml-4 text-accent"
                  >
                    <IconChevronDown size={20} stroke={2} />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6">
                        <div className="w-full h-px bg-border mb-4" />
                        <p className="text-black">{faq.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
